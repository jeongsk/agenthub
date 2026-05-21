---
title: "Cursor VSCode Helper"
description: "A productivity plugin designed for Cursor and VSCode editor environments that syncs active files, manages project folders, and structures refactoring checklists."
category: "plugin"
icon: "Cpu"
author: "cursor-owner"
githubUrl: "https://github.com/cursor-owner/vscode-helper-plugin"
installCommand: "code --install-extension cursor-copilot-plugin"
compatibleAgents: ["Cursor", "VSCode"]
tags: ["cursor", "vscode", "editor", "plugin", "productivity"]
featured: false
---

# Cursor VSCode Helper

The **Cursor VSCode Helper** extension is an editor-agent interface designed to accelerate code review and streamline refactoring loops. It syncs the editor's active tab context, cursor selection ranges, and file hierarchies directly to your sidebar agent, skipping manual copy-pasting.

## Features

- **Context Autopilot**: Syncs current cursor line numbers and open editor buffers to active chatbot contexts instantly.
- **Git Diff Scanner**: Scans unstaged files and drafts precise commit logs based on semantic analysis.
- **Auto-refactoring Checklists**: Automatically parses selected functions and drafts step-by-step implementation tasks.
- **Quick Commands**: Trigger key agent routines directly from VSCode's Command Palette (`Cmd+Shift+P`).

## Installation

Install directly via the VSCode command line:

```bash
code --install-extension cursor-copilot-plugin
```

Or search for **Cursor Helper** inside the Extension Marketplace (`Cmd+Shift+X`).

## Configuration

Add your custom API endpoint and sync intervals in your global `settings.json`:

```json
{
  "cursorHelper.syncIntervalMs": 500,
  "cursorHelper.enableGitHooks": true,
  "cursorHelper.themeMode": "match-editor"
}
```

## Community

Contributions are welcome! If you encounter any bugs or have feature requests, please submit an issue on our GitHub repository.
