import { glob } from 'astro/loaders';
import { z, defineCollection } from 'astro:content';

const skillsCollection = defineCollection({
  // Use new glob loader for Astro v5+ content layers
  loader: glob({ pattern: '**/[^_]*.md', base: "./src/content/skills" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(['mcp-server', 'agent-skill', 'agent-harness', 'desktop-utility', 'plugin', 'browser-extension']),
    tags: z.array(z.string()),
    githubUrl: z.string().url(),
    websiteUrl: z.string().url().optional(),
    githubStars: z.number().int().nonnegative().default(0),
    chromeWebStoreUrl: z.string().url().optional(),
    author: z.string(), // GitHub Username
    installCommand: z.string().optional(),
    compatibleAgents: z.array(z.string()), // e.g. ['Gemini', 'Claude', 'Cursor']
    featured: z.boolean().default(false),
    icon: z.string().default('Terminal'), // Lucide icon name
  }),
});

export const collections = {
  'skills': skillsCollection,
};
