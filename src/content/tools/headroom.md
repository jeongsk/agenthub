---
title: "Headroom"
description: "LLM 앞단에서 툴 출력, 로그, RAG 청크, 파일, 대화 기록을 압축해 토큰을 크게 줄이는 인프라 도구입니다. 라이브러리·프록시·MCP 서버·에이전트 래퍼 형태로 사용할 때 유용합니다."
category: "agent-infrastructure"
tags: ["context-compression", "token-optimization", "mcp", "rag", "proxy", "claude-code", "cursor", "codex", "local-first"]
githubUrl: "https://github.com/chopratejas/headroom"
websiteUrl: "https://headroom-docs.vercel.app/docs"
githubStars: 34255
author: "chopratejas"
installCommand: "pip install \"headroom-ai[all]\""
compatibleAgents: ["Claude Code", "Codex", "Cursor", "Gemini", "OpenCode"]
featured: false
icon: "Blocks"
---

# Headroom

Headroom은 에이전트가 읽는 컨텍스트를 먼저 압축해서 LLM에 전달하는 도구입니다. 툴 출력, 로그, RAG 청크, 파일, 대화 기록을 줄여서 같은 일을 더 적은 토큰으로 처리하고 싶을 때 유용합니다.

## 언제 쓰나

- 긴 툴 출력과 로그 때문에 토큰이 빨리 소모될 때
- RAG 청크나 대용량 문서를 LLM에 넣기 전에 먼저 압축하고 싶을 때
- Claude Code, Codex, Cursor 같은 도구형 에이전트의 입력 비용을 줄이고 싶을 때
- 프록시나 MCP로 기존 워크플로에 거의 손대지 않고 붙이고 싶을 때

## 핵심 특징

- **압축 라이브러리**: Python과 TypeScript에서 바로 쓸 수 있는 `compress(...)` 경로를 제공합니다.
- **프록시 모드**: 언어에 상관없이 중간 프록시로 넣어 입력을 줄일 수 있습니다.
- **MCP 서버**: `headroom_compress`, `headroom_retrieve`, `headroom_stats` 같은 도구를 노출합니다.
- **에이전트 래핑**: Claude, Codex, Cursor 계열 에이전트를 감싸는 실행 방식이 있습니다.
- **로컬 우선**: 압축과 보관을 로컬에서 처리하는 흐름을 강조합니다.
