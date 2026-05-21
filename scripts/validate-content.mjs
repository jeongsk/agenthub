import { readdir, readFile } from 'node:fs/promises';
import { basename, join } from 'node:path';

const categories = new Set(['mcp-server', 'agent-skill', 'plugin', 'browser-extension']);
const requiredStrings = ['title', 'description', 'category', 'githubUrl', 'author', 'icon'];
const contentDir = new URL('../src/content/skills', import.meta.url);
const errors = [];
const slugs = new Set();

const files = (await readdir(contentDir))
  .filter((file) => file.endsWith('.md') && !file.startsWith('_'))
  .sort();

if (files.length === 0) errors.push('src/content/skills must contain at least one markdown file');

for (const file of files) {
  const slug = basename(file, '.md');
  const label = `src/content/skills/${file}`;
  const markdown = await readFile(join(contentDir.pathname, file), 'utf8');
  const frontmatter = parseFrontmatter(markdown, label);
  if (!frontmatter) continue;

  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) errors.push(`${label}: filename must be lowercase kebab-case`);
  if (slugs.has(slug)) errors.push(`${label}: duplicate slug`);
  slugs.add(slug);

  for (const field of requiredStrings) {
    if (typeof frontmatter[field] !== 'string' || frontmatter[field].trim() === '') {
      errors.push(`${label}: ${field} is required`);
    }
  }

  if (frontmatter.category && !categories.has(frontmatter.category)) {
    errors.push(`${label}: invalid category`);
  }
  if (!Array.isArray(frontmatter.tags) || frontmatter.tags.some((tag) => typeof tag !== 'string' || !tag.trim())) {
    errors.push(`${label}: tags must be a non-empty string array`);
  }
  if (
    !Array.isArray(frontmatter.compatibleAgents) ||
    frontmatter.compatibleAgents.length === 0 ||
    frontmatter.compatibleAgents.some((agent) => typeof agent !== 'string' || !agent.trim())
  ) {
    errors.push(`${label}: compatibleAgents must be a non-empty string array`);
  }
  if (frontmatter.installCommand !== undefined && typeof frontmatter.installCommand !== 'string') {
    errors.push(`${label}: installCommand must be a string when provided`);
  }
  if (frontmatter.featured !== undefined && typeof frontmatter.featured !== 'boolean') {
    errors.push(`${label}: featured must be a boolean`);
  }
  if (frontmatter.githubUrl) {
    try {
      new URL(frontmatter.githubUrl);
    } catch {
      errors.push(`${label}: githubUrl must be a valid URL`);
    }
  }
}

if (errors.length > 0) {
  console.error(errors.map((error) => `- ${error}`).join('\n'));
  process.exit(1);
}

console.log(`content OK (${files.length} skills)`);

function parseFrontmatter(markdown, label) {
  const match = /^---\n([\s\S]*?)\n---\n/.exec(markdown);
  if (!match) {
    errors.push(`${label}: frontmatter block is required`);
    return null;
  }

  const data = {};
  for (const line of match[1].split('\n')) {
    if (!line.trim()) continue;
    const separator = line.indexOf(':');
    if (separator === -1) {
      errors.push(`${label}: invalid frontmatter line "${line}"`);
      continue;
    }

    const key = line.slice(0, separator).trim();
    const rawValue = line.slice(separator + 1).trim();
    try {
      data[key] = parseValue(rawValue);
    } catch {
      errors.push(`${label}: invalid value for ${key}`);
    }
  }

  return data;
}

function parseValue(value) {
  if (value === 'true') return true;
  if (value === 'false') return false;
  return JSON.parse(value);
}
