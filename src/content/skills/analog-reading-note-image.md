---
title: "Analog Reading Note Image"
description: "Generate a Korean prompt for creating a Pinterest/Instagram-style analog reading journal image from a book title, author, finish date, rating, and optional notes."
category: "agent-skill"
icon: "Image"
author: "jeongsk"
githubUrl: "https://github.com/jeongsk/agenthub"
compatibleAgents: ["Claude", "Gemini", "OpenAI", "Codex"]
tags: ["korean", "book-journal", "image-generation", "prompt-engineering", "analog", "reading"]
featured: false
---

# Analog Reading Note Image

Turn book metadata into a polished image-generation prompt for a vertical Korean reading journal page. The output is ready for image generation tools such as Codex, OpenClaw, Hermes Agent, or any text-to-image model.

## Features

- **한국어 독서 기록 이미지 생성**: Transform book metadata into a Pinterest/Instagram-style analog reading journal prompt.
- **자동 메타데이터 보강**: Infers missing fields (category, date, rating) with natural Korean defaults.
- **감성적인 아날로그 스타일**: Generates prompts for clean white notebook paper with handwritten Korean text, soft accent colors, and scrapbook aesthetics.
- **키워드 마인드맵**: Structures keywords with connecting arrows and short descriptions in the image layout.

## How to Use

Provide the following book information:
- **책 제목** (required)
- **저자** (optional)
- **완독일** (optional, defaults to today)
- **평점** (optional, inferred from sentiment)
- **메모/감상** (optional)

The skill outputs a ready-to-use Korean image generation prompt.
