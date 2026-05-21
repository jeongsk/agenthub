import { readFile } from 'node:fs/promises';
import { URL } from 'node:url';

const categories = new Set(['mcp-server', 'agent-skill', 'plugin', 'browser-extension']);
const requiredStrings = ['slug', 'title', 'description', 'category', 'githubUrl', 'author', 'icon'];
const file = new URL('../public/metadata.json', import.meta.url);
const registry = JSON.parse(await readFile(file, 'utf8'));
const errors = [];
const slugs = new Set();

if (registry.version !== 1) errors.push('version must be 1');
if (!Array.isArray(registry.items)) errors.push('items must be an array');

for (const [index, item] of (registry.items || []).entries()) {
  const label = item?.slug || `items[${index}]`;
  for (const field of requiredStrings) {
    if (typeof item?.[field] !== 'string' || item[field].trim() === '') {
      errors.push(`${label}: ${field} is required`);
    }
  }
  if (item?.slug && !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(item.slug)) {
    errors.push(`${label}: slug must be lowercase kebab-case`);
  }
  if (item?.slug && slugs.has(item.slug)) errors.push(`${label}: duplicate slug`);
  if (item?.slug) slugs.add(item.slug);
  if (item?.category && !categories.has(item.category)) errors.push(`${label}: invalid category`);
  if (!Array.isArray(item?.tags) || item.tags.some((tag) => typeof tag !== 'string' || !tag.trim())) {
    errors.push(`${label}: tags must be a non-empty string array`);
  }
  if (!Array.isArray(item?.compatibleAgents) || item.compatibleAgents.length === 0) {
    errors.push(`${label}: compatibleAgents must be a non-empty string array`);
  }
  for (const field of ['githubUrl', 'readmeUrl']) {
    if (item?.[field]) {
      try {
        new URL(item[field]);
      } catch {
        errors.push(`${label}: ${field} must be a valid URL`);
      }
    }
  }
  if (item?.featured !== undefined && typeof item.featured !== 'boolean') {
    errors.push(`${label}: featured must be a boolean`);
  }
}

if (errors.length > 0) {
  console.error(errors.map((error) => `- ${error}`).join('\n'));
  process.exit(1);
}

console.log(`metadata.json OK (${registry.items.length} items)`);
