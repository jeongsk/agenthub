---
title: "Gemini Web Search Skill"
description: "Equip your Google Gemini agent with live web search capabilities, enabling real-time search queries, URL parsing, and semantic text extraction."
category: "agent-skill"
icon: "Search"
author: "google-gemini"
githubUrl: "https://github.com/google-gemini/gemini-skills"
installCommand: "npm install @gemini/web-search-skill"
compatibleAgents: ["Gemini"]
tags: ["google", "gemini", "search", "web-crawler", "api"]
featured: true
---

# Gemini Web Search Skill

The **Gemini Web Search Skill** is a custom tools library designed for the Gemini API (using Google Vertex AI or Gemini Developer API). It equips your LLM runtime context with real-time web exploration, link crawling, and markdown page text conversion.

By adding this skill, your Gemini agent can search for breaking news, crawl specific documentation pages, and formulate answers with precise inline web link citations.

## Features

- **Google Search API Integration**: Execute queries directly against Google Search index.
- **Deep Content Extraction**: Follow links and extract raw body content in clean, semantic Markdown.
- **Auto-Chunking & RAG**: Automatically chunks long HTML documents to fit cleanly inside Gemini's active context window.
- **Citation Engine**: Automatically formats outputs with correct author references and hyperlink citations.

## How to Configure

Import the package and define the tool array during your Gemini Client initialization:

```javascript
import { GoogleGenAI } from '@google/genai';
import { WebSearchSkill } from '@gemini/web-search-skill';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
const webSearch = new WebSearchSkill({
  apiKey: process.env.SEARCH_API_KEY,
  maxResults: 5
});

const response = await ai.models.generateContent({
  model: 'gemini-3.5-flash',
  contents: 'What is the current stock price of Google and what are the top news headlines today?',
  config: {
    // Add the webSearch skill directly as a system tool!
    tools: [webSearch.asToolDefinition()]
  }
});

console.log(response.text);
```

## Setup Options

Configurable parameters:
- `maxResults`: Number of search hits to fetch (1-10, default: 3).
- `allowedDomains`: Restrict crawler to specific sites (e.g. `['github.com', 'developer.chrome.com']`).
- `parseJavascript`: Enable dynamic rendering for React-heavy documentation sites.
