import { existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { spawnSync } from 'node:child_process'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const command = process.argv[2]
const version = process.argv[3]
const semverPattern = /^\d+\.\d+\.\d+(?:-[0-9A-Za-z.-]+)?$/

function usage() {
  console.log(`Usage:
  npm run release:prepare -- <version>
  npm run release:check -- <version>
  npm run package -- <version>`)
}

function readJson(path) {
  return JSON.parse(readFileSync(path, 'utf8'))
}

function writeJson(path, value) {
  writeFileSync(path, `${JSON.stringify(value, null, 2)}\n`)
}

function requireVersion() {
  if (!version || !semverPattern.test(version)) {
    console.error(`Invalid version: ${version || '(missing)'}`)
    console.error('Expected SemVer like 0.2.0 or 0.2.0-beta.1')
    process.exit(1)
  }
}

function packageVersion() {
  return readJson(join(root, 'package.json')).version
}

function prepare() {
  requireVersion()

  const packagePath = join(root, 'package.json')
  const lockPath = join(root, 'package-lock.json')
  const packageJson = readJson(packagePath)
  const lockJson = readJson(lockPath)

  packageJson.version = version
  if (lockJson.packages?.['']) {
    lockJson.packages[''].version = version
  }

  writeJson(packagePath, packageJson)
  writeJson(lockPath, lockJson)
  console.log(`Prepared release version ${version}`)
}

function check() {
  requireVersion()

  const current = packageVersion()
  if (current !== version) {
    console.error(`package.json version is ${current}, expected ${version}`)
    process.exit(1)
  }

  const lockJson = readJson(join(root, 'package-lock.json'))
  const lockVersion = lockJson.packages?.['']?.version
  if (lockVersion !== version) {
    console.error(`package-lock.json root version is ${lockVersion}, expected ${version}`)
    process.exit(1)
  }

  console.log(`Release metadata is ready for ${version}`)
}

function run(commandName, args) {
  const result = spawnSync(commandName, args, {
    cwd: root,
    stdio: 'inherit',
    shell: process.platform === 'win32'
  })

  if (result.status !== 0) {
    process.exit(result.status ?? 1)
  }
}

function packageRelease() {
  requireVersion()
  check()

  const outputDir = join(root, 'dist', 'release')
  const archive = join(outputDir, `slides-builder-${version}.tgz`)

  rmSync(outputDir, { recursive: true, force: true })
  mkdirSync(outputDir, { recursive: true })

  const prefix = `slides-builder-${version}/`
  run('git', [
    'archive',
    '--format=tar.gz',
    `--prefix=${prefix}`,
    '-o',
    archive,
    'HEAD'
  ])

  if (!existsSync(archive)) {
    console.error(`Package was not created: ${archive}`)
    process.exit(1)
  }

  console.log(`Created ${archive}`)
}

switch (command) {
  case 'prepare':
    prepare()
    break
  case 'check':
    check()
    break
  case 'package':
    packageRelease()
    break
  default:
    usage()
    process.exit(1)
}
