import { glob } from 'astro/loaders';
import { z, defineCollection } from 'astro:content';

const skillsCollection = defineCollection({
  // Use new glob loader for Astro v5+ content layers
  loader: glob({ pattern: '**/[^_]*.md', base: "./src/content/tools" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(['agent-skill', 'agent-framework', 'agent-harness', 'agent-infrastructure', 'mcp-server', 'model-runtime', 'cli-utility', 'desktop-utility', 'plugin', 'browser-extension']),
    tags: z.array(z.string()),
    githubUrl: z.string().url().optional(),
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

const blogCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string(), // 'YYYY.MM.DD' — 표시 및 정렬(문자열 내림차순) 기준
    readTime: z.string(),
    category: z.string(),
    tags: z.array(z.string()),
    featured: z.boolean().default(false),
  }),
});

export const collections = {
  'skills': skillsCollection,
  'blog': blogCollection,
};
