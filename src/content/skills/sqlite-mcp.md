---
title: "SQLite MCP Server"
description: "A Model Context Protocol server that exposes SQLite databases securely, allowing AI Agents to inspect schemas, execute read-only queries, and analyze structures."
category: "mcp-server"
icon: "Database"
author: "modelcontextprotocol"
githubUrl: "https://github.com/modelcontextprotocol/servers"
installCommand: "npx -y @modelcontextprotocol/server-sqlite --db /path/to/my-database.sqlite"
compatibleAgents: ["Claude", "Gemini", "Cursor"]
tags: ["mcp", "sqlite", "database", "sql", "data-analysis"]
featured: true
---

# SQLite MCP Server

The **SQLite Model Context Protocol (MCP) Server** provides AI agents (such as Claude Desktop, Gemini Code Assist, or Cursor) with safe, local, and read-only database interaction capabilities. 

By utilizing this server, your AI assistants can answer database-related questions, auto-generate complex SQL queries, inspect table definitions, and preview raw data directly within your developer chat session.

## Core Capabilities

- **Schema Inspection**: Safely inspects list of tables, custom indexes, columns, and foreign key definitions.
- **SQL Analysis**: Executes raw `SELECT` queries to analyze and aggregate local tables without compromising data integrity.
- **Safe Run Environment**: Strictly intercepts queries to block modifications (`INSERT`, `UPDATE`, `DELETE`, `DROP`) safeguarding local storage.
- **Metadata Discovery**: Lists schema changes and updates automatically.

## How to Configure in Claude Desktop

Add this configuration snippet to your `claude_desktop_config.json` configuration file:

```json
{
  "mcpServers": {
    "sqlite": {
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-sqlite",
        "--db",
        "/Users/username/data/production.sqlite"
      ]
    }
  }
}
```

## How to Configure in Cursor

1. Open **Cursor Settings** &rarr; **Features** &rarr; **MCP**.
2. Click **+ Add New MCP Server**.
3. Choose **command** mode.
4. Name it `sqlite-mcp`.
5. Enter Command: `npx -y @modelcontextprotocol/server-sqlite --db /Users/username/data/production.sqlite`
6. Click **Save** and verify the green status light glows!

## Security

This MCP server executes locally on your machine. Data never leaves your computer, and strictly complies with the read-only sandbox mode initialized at server launch.
