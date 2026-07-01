import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const skillsRoot = join(root, '.agents/skills')
const skillNames = existsSync(skillsRoot)
  ? readdirSync(skillsRoot)
      .filter((name) => statSync(join(skillsRoot, name)).isDirectory())
      .sort()
  : []

function fail(message) {
  console.error(`Agent asset validation failed: ${message}`)
  process.exitCode = 1
}

function readRequired(path) {
  if (!existsSync(path)) {
    fail(`missing ${path.replace(`${root}/`, '')}`)
    return ''
  }

  return readFileSync(path, 'utf8')
}

function frontmatterValue(content, key) {
  const frontmatter = content.match(/^---\n([\s\S]*?)\n---/)
  if (!frontmatter) return undefined

  const value = frontmatter[1]
    .split('\n')
    .find((line) => line.startsWith(`${key}:`))

  return value?.slice(key.length + 1).trim()
}

function yamlStringValue(content, key) {
  const value = content.match(new RegExp(`^\\s*${key}:\\s*"(.*)"\\s*$`, 'm'))
  return value?.[1]
}

if (existsSync(join(root, 'skills'))) {
  fail('root skills/ is not an agent discovery path; use .agents/skills/')
}

if (existsSync(join(root, 'agent.md'))) {
  fail('root agent.md is redundant; keep canonical instructions in AGENTS.md')
}

if (skillNames.length === 0) {
  fail('.agents/skills/ must contain at least one skill folder')
}

for (const skillName of skillNames) {
  const relativePath = `.agents/skills/${skillName}/SKILL.md`
  const content = readRequired(join(root, relativePath))

  if (frontmatterValue(content, 'name') !== skillName) {
    fail(`${relativePath} must declare name: ${skillName}`)
  }

  if (!frontmatterValue(content, 'description')) {
    fail(`${relativePath} must declare a description`)
  }

  const metadataPath = `.agents/skills/${skillName}/agents/openai.yaml`
  const metadata = readRequired(join(root, metadataPath))
  const displayName = yamlStringValue(metadata, 'display_name')
  const shortDescription = yamlStringValue(metadata, 'short_description')
  const defaultPrompt = yamlStringValue(metadata, 'default_prompt')

  if (!metadata.includes('interface:\n')) {
    fail(`${metadataPath} must declare an interface block`)
  }

  if (!displayName) {
    fail(`${metadataPath} must declare interface.display_name`)
  }

  if (!shortDescription) {
    fail(`${metadataPath} must declare interface.short_description`)
  }

  if (!defaultPrompt) {
    fail(`${metadataPath} must declare interface.default_prompt`)
  } else if (!defaultPrompt.includes(`$${skillName}`)) {
    fail(`${metadataPath} default_prompt must mention $${skillName}`)
  }
}

const agentPath = '.github/agents/slides-builder.agent.md'
const agent = readRequired(join(root, agentPath))

if (frontmatterValue(agent, 'name') !== 'slides-builder') {
  fail(`${agentPath} must declare name: slides-builder`)
}

if (!frontmatterValue(agent, 'description')) {
  fail(`${agentPath} must declare a description`)
}

const copilotInstructionsPath = '.github/copilot-instructions.md'
const copilotInstructions = readRequired(join(root, copilotInstructionsPath))

const entrypoint = readRequired(join(root, 'AGENTS.md'))
if (!entrypoint.includes('.agents/skills/')) {
  fail('AGENTS.md must point to .agents/skills/')
}

if (!entrypoint.includes('slides-builder')) {
  fail('AGENTS.md must define the slides-builder role')
}

const legacyAgentReference = /(?:^|[^.\w/-])agent\.md(?:$|[^\w/-])/m
for (const [path, content] of [
  [agentPath, agent],
  [copilotInstructionsPath, copilotInstructions]
]) {
  if (legacyAgentReference.test(content)) {
    fail(`${path} must point to AGENTS.md, not the removed root agent.md`)
  }
}

if (!process.exitCode) {
  console.log(`Validated slides-builder and ${skillNames.length} project skills`)
}
