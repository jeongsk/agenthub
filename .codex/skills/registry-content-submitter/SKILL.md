---
name: registry-content-submitter
description: Research a user-requested skill, plugin, MCP server, or browser extension and add a verified Markdown entry to AgentHub's content registry. Use when a user asks to register, submit, add, or list a new registry item.
metadata:
  short-description: Add verified AgentHub registry content
---

# Registry Content Submitter

Use this skill when a user asks to register or add one of these AgentHub item types:

- Agent skill
- Plugin
- MCP server
- Browser extension

The goal is to research the requested project, create a reliable Markdown content entry, and add it to `src/content/skills/` without disturbing existing registry data.

## Registry Target

Create or update one Markdown file in `src/content/skills/`.

Do not update `dist/` unless the user explicitly asks for generated build output. `dist/` is build output.

## Required Schema

Each `src/content/skills/{slug}.md` entry must have this frontmatter shape:

```yaml
---
title: "Human Name"
description: "Short Korean description."
category: "mcp-server | agent-skill | plugin | browser-extension"
tags: ["keyword"]
githubUrl: "https://github.com/owner/repo"
author: "owner"
installCommand: "optional install command"
compatibleAgents: ["Claude", "Gemini", "Codex"]
featured: false
icon: "Terminal"
---

# Human Name

Markdown details...
```

`installCommand` is optional. All other frontmatter fields above should be present unless the existing app schema changes. The filename is the slug and must be lowercase kebab-case.

## Research Rules

1. Treat registry content as factual. Verify details from primary sources whenever possible:
   - GitHub repository README, package metadata, official docs, marketplace listing, or release page.
   - For MCP servers, prefer official MCP server docs or the repository that contains the server implementation.
   - For browser extensions, prefer Chrome Web Store, Firefox Add-ons, official docs, or the source repository.
2. Browse the web when the requested item is not fully described by the user or local repo context.
3. Do not invent install commands, supported agents, authors, or feature claims. If a field is uncertain, use conservative wording or omit only optional fields.
4. Do not add entries for projects that appear malicious, abandoned with no usable source, unrelated to agent workflows, or impossible to verify. Explain the blocker instead.
5. Avoid copying long README text. Summarize in Korean and keep direct quotes out of the registry entry.

## Category Mapping

Use exactly one of these category values:

- `mcp-server`: exposes tools/resources/prompts through the Model Context Protocol.
- `agent-skill`: an instruction/workflow package used by AI coding or assistant agents.
- `plugin`: an editor, agent platform, or app plugin that extends an agent tool.
- `browser-extension`: a Chrome, Firefox, Edge, or browser-compatible extension.

If the item fits multiple categories, choose the most specific installation surface. For example, a Chrome extension that adds an MCP bridge is usually `browser-extension`; a Node package that runs an MCP endpoint is `mcp-server`.

## Content Guidelines

- filename slug: kebab-case, stable, unique in `src/content/skills/`.
- `title`: official project name when known.
- `description`: one concise Korean sentence explaining what the item enables.
- `tags`: 4-8 lowercase tags, no duplicates. Include technology and use case tags.
- `githubUrl`: canonical source URL. Prefer repository root unless a subdirectory is the actual project.
- `author`: GitHub owner, organization, or official publisher.
- `installCommand`: command users can run. Include only if verified.
- `compatibleAgents`: include only agents or hosts the source supports or strongly implies.
- `featured`: default `false` for new entries unless the user explicitly requests and justifies featuring.
- `icon`: choose a valid Lucide icon name that matches the item. Safe defaults:
  - MCP/database/server: `Server`, `Database`, `Network`, `Terminal`
  - Agent skills: `Sparkles`, `Brain`, `WandSparkles`, `Workflow`
  - Plugins: `Plug`, `Blocks`, `Cpu`, `Package`
  - Browser extensions: `Chrome`, `Globe`, `PanelTop`, `Puzzle`
- body content: Korean Markdown. Include a heading, a short overview, 3-5 feature bullets, and setup notes if verified.

## Editing Workflow

1. Inspect existing files in `src/content/skills/` to understand style before editing.
2. Search existing entries by filename slug, title, GitHub URL, and aliases to prevent duplicates.
3. Research the requested item using primary sources.
4. Build a new Markdown file that follows the existing frontmatter field order.
5. Add or update exactly one file unless the request requires multiple entries.
   - Preserve all unrelated existing entries.
   - Keep frontmatter valid for Astro Content Collections.
   - Prefer the site's runtime sort behavior over manual filename reshuffling.
6. Validate content:

```bash
npm run validate:content
```

7. Run `npm run build` when feasible because the Astro site validates and consumes the registry.

## Duplicate Handling

If the item already exists:

- Update stale or missing fields only when verified.
- Do not create a second entry.
- Tell the user which existing slug was updated or why no change was needed.

## Output

After editing, report:

- The added or updated slug.
- The primary sources used.
- Whether content validation and build succeeded.
- Any fields intentionally omitted or kept conservative because they could not be verified.
