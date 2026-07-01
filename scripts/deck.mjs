import { cpSync, mkdirSync, readdirSync, existsSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import { createServer } from 'node:http'
import { basename, dirname, extname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { spawnSync } from 'node:child_process'
import { chromium } from 'playwright-chromium'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const decksDir = join(root, 'decks')
const repoName = basename(root)
const repositoryUrl = 'https://github.com/ovasorg/slides-builder'
const sharedFavicon = join(root, 'shared', 'public', 'favicon.svg')
const previewViewport = { width: 1440, height: 900 }

const command = process.argv[2] || 'list'
const deck = process.argv[3]

function decks() {
  return readdirSync(decksDir, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .filter((name) => !name.startsWith('_'))
    .sort()
}

function deckSlides(slug) {
  return join(decksDir, slug, 'slides.md')
}

function usage() {
  console.log(`Usage:
  npm run list
  npm run dev -- <deck>
  npm run build -- <deck>
  npm run build:all
  npm run export:pdf -- <deck>
  npm run export:pptx -- <deck>`)
}

function editDistance(a, b) {
  const previous = Array.from({ length: b.length + 1 }, (_, index) => index)
  const current = Array.from({ length: b.length + 1 }, () => 0)

  for (let i = 1; i <= a.length; i += 1) {
    current[0] = i

    for (let j = 1; j <= b.length; j += 1) {
      const substitutionCost = a[i - 1] === b[j - 1] ? 0 : 1
      current[j] = Math.min(
        current[j - 1] + 1,
        previous[j] + 1,
        previous[j - 1] + substitutionCost
      )
    }

    previous.splice(0, previous.length, ...current)
  }

  return previous[b.length]
}

function closestDeck(slug, availableDecks) {
  const candidates = availableDecks
    .map((name) => ({ name, distance: editDistance(slug, name) }))
    .sort((a, b) => a.distance - b.distance || a.name.localeCompare(b.name))

  const [best, second] = candidates
  const threshold = Math.max(2, Math.floor(slug.length * 0.18))

  if (!best || best.distance > threshold) {
    return undefined
  }

  if (second && second.distance === best.distance) {
    return undefined
  }

  return best.name
}

function resolveDeckSlug(slug) {
  if (!slug) {
    usage()
    process.exit(1)
  }

  const availableDecks = decks()

  if (availableDecks.includes(slug) && existsSync(deckSlides(slug))) {
    return slug
  }

  const match = closestDeck(slug, availableDecks)

  if (match && existsSync(deckSlides(match))) {
    console.log(`Deck not found: ${slug}. Using closest match: ${match}`)
    return match
  }

  console.error(`Deck not found: ${slug}`)
  console.error(`Available decks: ${availableDecks.join(', ') || '(none)'}`)
  process.exit(1)
}

function run(args) {
  const result = spawnSync('npx', ['slidev', ...args], {
    cwd: root,
    stdio: 'inherit',
    shell: process.platform === 'win32'
  })

  if (result.status !== 0) {
    process.exit(result.status ?? 1)
  }
}

function portPids(port) {
  if (process.platform === 'win32') {
    return []
  }

  const result = spawnSync('lsof', ['-ti', `tcp:${port}`, '-sTCP:LISTEN'], {
    cwd: root,
    encoding: 'utf8'
  })

  if (result.status !== 0 && !result.stdout) {
    return []
  }

  return result.stdout
    .split('\n')
    .map((pid) => pid.trim())
    .filter(Boolean)
    .filter((pid) => pid !== String(process.pid))
}

function waitForPort(port) {
  for (let attempt = 0; attempt < 20; attempt += 1) {
    if (portPids(port).length === 0) {
      return true
    }

    spawnSync('sleep', ['0.1'])
  }

  return false
}

function freePort(port) {
  const pids = portPids(port)

  if (pids.length === 0) {
    return
  }

  console.log(`Port ${port} is already in use. Stopping process(es): ${pids.join(', ')}`)

  for (const pid of pids) {
    try {
      process.kill(Number(pid), 'SIGTERM')
    } catch {
      // Process may have already exited.
    }
  }

  if (waitForPort(port)) {
    return
  }

  for (const pid of portPids(port)) {
    try {
      process.kill(Number(pid), 'SIGKILL')
    } catch {
      // Process may have already exited.
    }
  }

  if (!waitForPort(port)) {
    console.error(`Could not free port ${port}`)
    process.exit(1)
  }
}

function basePath(slug) {
  return process.env.BASE_PATH ?? `/${repoName}/${slug}/`
}

function installFavicon(outputDir, href) {
  const indexPath = join(outputDir, 'index.html')
  const faviconLink = `<link rel="icon" type="image/svg+xml" href="${href}">`
  const html = readFileSync(indexPath, 'utf8')
  const existingFavicon = /<link\s+rel=["']icon["'][^>]*>/i

  const updatedHtml = existingFavicon.test(html)
    ? html.replace(existingFavicon, faviconLink)
    : html.replace('</head>', `    ${faviconLink}\n  </head>`)

  writeFileSync(indexPath, updatedHtml)
  cpSync(sharedFavicon, join(outputDir, 'favicon.svg'))
}

function build(requestedSlug) {
  const slug = resolveDeckSlug(requestedSlug)
  const tempOut = join(decksDir, slug, '.slidev-dist')
  const finalOut = join(root, 'dist', slug)

  rmSync(tempOut, { recursive: true, force: true })
  rmSync(finalOut, { recursive: true, force: true })

  run([
    'build',
    deckSlides(slug),
    '--out',
    tempOut,
    '--base',
    basePath(slug)
  ])

  installFavicon(tempOut, `${basePath(slug)}favicon.svg`)

  mkdirSync(join(root, 'dist'), { recursive: true })
  cpSync(tempOut, finalOut, { recursive: true })
  rmSync(tempOut, { recursive: true, force: true })

  return slug
}

function escapeHtml(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

function plainText(value) {
  return String(value ?? '')
    .replace(/\s+/g, ' ')
    .trim()
}

function frontmatterValue(frontmatter, key) {
  const lines = frontmatter.split('\n')

  for (let index = 0; index < lines.length; index += 1) {
    const line = lines[index]
    const inlineMatch = line.match(new RegExp(`^${key}:\\s*(.*)$`))

    if (!inlineMatch) continue

    const inlineValue = inlineMatch[1].trim()

    if (inlineValue === '|') {
      const block = []

      for (let offset = index + 1; offset < lines.length; offset += 1) {
        const blockLine = lines[offset]
        if (!/^\s+/.test(blockLine)) break
        block.push(blockLine.trim())
      }

      return block.join(' ')
    }

    return inlineValue.replace(/^["']|["']$/g, '')
  }

  return ''
}

function deckMeta(slug) {
  const markdown = readFileSync(deckSlides(slug), 'utf8')
  const match = markdown.match(/^---\n([\s\S]*?)\n---/)
  const frontmatter = match?.[1] ?? ''
  const title = frontmatterValue(frontmatter, 'title') || slug
  const description = frontmatterValue(frontmatter, 'info') || 'Presentacion Slidev disponible en este workspace.'

  return {
    slug,
    title: plainText(title),
    description: plainText(description)
  }
}

function contentType(filePath) {
  const types = {
    '.css': 'text/css',
    '.gif': 'image/gif',
    '.html': 'text/html',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.js': 'text/javascript',
    '.json': 'application/json',
    '.png': 'image/png',
    '.svg': 'image/svg+xml',
    '.webp': 'image/webp',
    '.woff': 'font/woff',
    '.woff2': 'font/woff2'
  }

  return types[extname(filePath)] ?? 'application/octet-stream'
}

function distFilePath(pathname) {
  const distRoot = resolve(root, 'dist')
  const decodedPath = decodeURIComponent(pathname)
  const repoPrefix = `/${repoName}/`
  const localPath = decodedPath.startsWith(repoPrefix)
    ? decodedPath.slice(repoPrefix.length)
    : decodedPath.replace(/^\/+/, '')
  const requestedPath = localPath.endsWith('/') ? `${localPath}index.html` : localPath
  const resolvedPath = resolve(distRoot, requestedPath || 'index.html')

  if (!resolvedPath.startsWith(distRoot)) {
    return undefined
  }

  if (existsSync(resolvedPath)) {
    return resolvedPath
  }

  const indexPath = join(resolvedPath, 'index.html')
  return existsSync(indexPath) ? indexPath : undefined
}

async function withDistServer(callback) {
  const server = createServer((request, response) => {
    const url = new URL(request.url ?? '/', 'http://127.0.0.1')
    const filePath = distFilePath(url.pathname)

    if (!filePath) {
      response.writeHead(404)
      response.end('Not found')
      return
    }

    response.writeHead(200, { 'Content-Type': contentType(filePath) })
    response.end(readFileSync(filePath))
  })

  await new Promise((resolveServer) => {
    server.listen(0, '127.0.0.1', resolveServer)
  })

  const { port } = server.address()

  try {
    return await callback(`http://127.0.0.1:${port}`)
  } finally {
    await new Promise((resolveServer) => server.close(resolveServer))
  }
}

async function generatePreviews(slugs) {
  const previewDir = join(root, 'dist', 'previews')
  rmSync(previewDir, { recursive: true, force: true })
  mkdirSync(previewDir, { recursive: true })

  await withDistServer(async (baseUrl) => {
    const browser = await chromium.launch()

    try {
      for (const slug of slugs) {
        const page = await browser.newPage({ viewport: previewViewport, deviceScaleFactor: 1 })
        await page.goto(`${baseUrl}/${repoName}/${slug}/#/1`, { waitUntil: 'networkidle' })
        await page.waitForTimeout(2600)
        await page.screenshot({
          path: join(previewDir, `${slug}.png`),
          fullPage: false
        })
        await page.close()
      }
    } finally {
      await browser.close()
    }
  })
}

function writeIndex(slugs) {
  const cards = slugs
    .map(deckMeta)
    .map((meta) => `<article class="deck-card">
        <div class="deck-preview" aria-label="Preview de ${escapeHtml(meta.title)}">
          <img src="./previews/${escapeHtml(meta.slug)}.png" alt="" loading="eager" decoding="async" fetchpriority="high">
        </div>
        <div class="deck-copy">
          <span>${escapeHtml(meta.slug)}</span>
          <h2>${escapeHtml(meta.title)}</h2>
          <p>${escapeHtml(meta.description)}</p>
          <a class="deck-link" href="./${escapeHtml(meta.slug)}/" target="_blank" rel="noopener noreferrer">Abrir deck</a>
        </div>
      </article>`)
    .join('\n')

  mkdirSync(join(root, 'dist'), { recursive: true })
  cpSync(sharedFavicon, join(root, 'dist', 'favicon.svg'))
  writeFileSync(
    join(root, 'dist', 'index.html'),
    `<!doctype html>
<html lang="es">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="theme-color" content="#080b10">
    <link rel="icon" type="image/svg+xml" href="./favicon.svg">
    <title>Slides</title>
    <style>
      :root {
        color-scheme: dark;
      }

      * {
        box-sizing: border-box;
      }

      body {
        background:
          radial-gradient(circle at 16% 10%, rgba(88, 166, 255, 0.24), transparent 30%),
          radial-gradient(circle at 82% 4%, rgba(255, 122, 200, 0.18), transparent 26%),
          radial-gradient(circle at 74% 84%, rgba(46, 160, 67, 0.18), transparent 30%),
          #080b10;
        color: #f8fbff;
        font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        margin: 0;
        min-height: 100vh;
      }

      main {
        margin: 0 auto;
        max-width: 1180px;
        padding: 56px 28px 64px;
      }

      header {
        align-items: end;
        display: grid;
        gap: 1rem;
        grid-template-columns: minmax(0, 1fr) auto;
        margin-bottom: 28px;
      }

      .kicker {
        color: #3ddc84;
        display: block;
        font-size: 0.78rem;
        font-weight: 800;
        letter-spacing: 0.16em;
        margin-bottom: 0.8rem;
        text-transform: uppercase;
      }

      h1 {
        font-size: clamp(3rem, 7vw, 5.8rem);
        line-height: 0.94;
        letter-spacing: 0;
        margin: 0;
        max-width: 760px;
      }

      .accent {
        background: linear-gradient(90deg, #e6f0ff, #58a6ff 38%, #2ee6a6 72%, #ff7ac8);
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
      }

      p {
        color: rgba(226, 232, 240, 0.76);
      }

      .intro {
        font-size: 1.08rem;
        line-height: 1.45;
        margin: 1.2rem 0 0;
        max-width: 680px;
      }

      .count {
        border: 1px solid rgba(88, 166, 255, 0.28);
        border-radius: 8px;
        color: #dbeafe;
        font-size: 0.86rem;
        font-weight: 800;
        padding: 0.72rem 0.9rem;
        text-transform: uppercase;
      }

      .header-actions {
        align-items: center;
        display: flex;
        flex-wrap: wrap;
        gap: 0.65rem;
        justify-content: flex-end;
      }

      .repo-link {
        align-items: center;
        background: #f8fbff;
        border: 1px solid #f8fbff;
        border-radius: 50%;
        color: #080b10;
        display: inline-flex;
        height: 42px;
        justify-content: center;
        text-decoration: none;
        width: 42px;
      }

      .repo-link svg {
        display: block;
        height: 24px;
        width: 24px;
      }

      .repo-link:hover {
        background: #dbeafe;
        border-color: #dbeafe;
      }

      .deck-grid {
        display: grid;
        gap: 1rem;
        grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
      }

      .deck-card {
        background:
          linear-gradient(145deg, rgba(15, 23, 42, 0.88), rgba(8, 11, 16, 0.94)) padding-box,
          linear-gradient(135deg, rgba(88, 166, 255, 0.62), rgba(255, 122, 200, 0.36), rgba(46, 160, 67, 0.42)) border-box;
        border: 1px solid transparent;
        border-radius: 8px;
        box-shadow: 0 28px 72px rgba(0, 0, 0, 0.32);
        display: grid;
        overflow: hidden;
      }

      .deck-preview {
        aspect-ratio: 16 / 9;
        background: #0f172a;
        border-bottom: 1px solid rgba(148, 163, 184, 0.18);
        overflow: hidden;
      }

      .deck-preview img {
        display: block;
        height: 100%;
        object-fit: cover;
        width: 100%;
      }

      .deck-copy {
        padding: 1.1rem;
      }

      .deck-copy span {
        color: #3ddc84;
        display: block;
        font-size: 0.72rem;
        font-weight: 800;
        letter-spacing: 0.12em;
        margin-bottom: 0.55rem;
        text-transform: uppercase;
      }

      .deck-copy h2 {
        font-size: 1.42rem;
        line-height: 1.08;
        margin: 0;
      }

      .deck-copy p {
        font-size: 0.96rem;
        line-height: 1.38;
        margin: 0.7rem 0 1rem;
      }

      .deck-link {
        align-items: center;
        border: 1px solid rgba(88, 166, 255, 0.34);
        border-radius: 8px;
        color: #f8fbff;
        display: inline-flex;
        font-size: 0.92rem;
        font-weight: 800;
        min-height: 42px;
        padding: 0 0.86rem;
        text-decoration: none;
      }

      .deck-link:hover {
        background: rgba(88, 166, 255, 0.16);
      }

      .repo-link:focus-visible,
      .deck-link:focus-visible {
        outline: 3px solid #ff7ac8;
        outline-offset: 3px;
      }

      @media (max-width: 760px) {
        main {
          padding: 36px 18px 48px;
        }

        header {
          align-items: start;
          grid-template-columns: 1fr;
        }

        .header-actions {
          justify-content: flex-start;
        }

        .deck-grid {
          grid-template-columns: 1fr;
        }
      }
    </style>
  </head>
  <body>
    <main>
      <header>
        <div>
          <span class="kicker">0vas decks</span>
          <h1>Presentations <span class="accent">as code</span></h1>
          <p class="intro">Slidev decks ready to present, publish, and evolve with reusable components.</p>
        </div>
        <div class="header-actions">
          <a class="repo-link" href="${repositoryUrl}" target="_blank" rel="noopener noreferrer" aria-label="View the slides repository on GitHub in a new tab" title="View repository on GitHub">
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path fill="currentColor" d="M10.226 17.284c-2.965-.36-5.054-2.493-5.054-5.256 0-1.123.404-2.336 1.078-3.144-.292-.741-.247-2.314.09-2.965.898-.112 2.111.36 2.83 1.01.853-.269 1.752-.404 2.853-.404 1.1 0 1.999.135 2.807.382.696-.629 1.932-1.1 2.83-.988.315.606.36 2.179.067 2.942.72.854 1.101 2 1.101 3.167 0 2.763-2.089 4.852-5.098 5.234.763.494 1.28 1.572 1.28 2.807v2.336c0 .674.561 1.056 1.235.786 4.066-1.55 7.255-5.615 7.255-10.646C23.5 6.188 18.334 1 11.978 1 5.62 1 .5 6.188.5 12.545c0 4.986 3.167 9.12 7.435 10.669.606.225 1.19-.18 1.19-.786V20.63a2.9 2.9 0 0 1-1.078.224c-1.483 0-2.359-.808-2.987-2.313-.247-.607-.517-.966-1.034-1.033-.27-.023-.359-.135-.359-.27 0-.27.45-.471.898-.471.652 0 1.213.404 1.797 1.235.45.651.921.943 1.483.943.561 0 .92-.202 1.437-.719.382-.381.674-.718.944-.943" />
            </svg>
          </a>
          <span class="count">${slugs.length} deck${slugs.length === 1 ? '' : 's'}</span>
        </div>
      </header>
      <section class="deck-grid" aria-label="Decks disponibles">
        ${cards}
      </section>
    </main>
  </body>
</html>
`
  )
}

async function main() {
  switch (command) {
    case 'list': {
      console.log(decks().join('\n'))
      break
    }
    case 'dev': {
      const port = process.env.PORT ?? '4100'
      const slug = resolveDeckSlug(deck)
      freePort(port)
      run([deckSlides(slug), '--port', port])
      break
    }
    case 'build': {
      const slug = build(deck)
      await generatePreviews([slug])
      writeIndex([slug])
      break
    }
    case 'build-all': {
      const slugs = decks()
      for (const slug of slugs) {
        build(slug)
      }
      await generatePreviews(slugs)
      writeIndex(slugs)
      break
    }
    case 'export-pdf': {
      const slug = resolveDeckSlug(deck)
      run(['export', deckSlides(slug), '--format', 'pdf', '--output', `${slug}.pdf`])
      break
    }
    case 'export-pptx': {
      const slug = resolveDeckSlug(deck)
      console.warn('Note: PPTX export creates static slide snapshots. Native PowerPoint click animations are not preserved.')
      run(['export', deckSlides(slug), '--format', 'pptx', '--output', `${slug}.pptx`])
      break
    }
    default: {
      usage()
      process.exit(1)
    }
  }
}

await main()
