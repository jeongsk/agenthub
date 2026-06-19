---
title: "Codebase Memory MCP"
description: "C 언어 기반 고성능 코드 인텔리전스 MCP 서버입니다. 코드베이스를 지식 그래프로 인덱싱해 영구 저장하고, 밀리초 단위 쿼리로 에이전트 컨텍스트를 최대 99% 절약합니다. 단일 정적 바이너리, 의존성 제로."
category: "mcp-server"
tags: ["mcp", "mcp-server", "knowledge-graph", "code-intelligence", "tree-sitter", "ast", "cypher", "sqlite", "code-analysis"]
githubUrl: "https://github.com/DeusData/codebase-memory-mcp"
githubStars: 8154
author: "DeusData"
websiteUrl: "https://deusdata.github.io/codebase-memory-mcp/"
compatibleAgents: ["Claude Code", "Cursor", "Codex", "Gemini CLI", "OpenCode", "Windsurf", "Aider"]
featured: false
icon: "Network"
---

# Codebase Memory MCP

Codebase Memory MCP는 에이전트가 코드베이스를 이해할 때 필요한 컨텍스트를 극적으로 줄여주는 MCP 서버입니다. 코드를 AST 기반 지식 그래프로 인덱싱하고 SQLite에 영구 저장해, 이후 쿼리는 밀리초 단위로 처리합니다. 단일 정적 바이너리(C 언어)로 배포되어 의존성 문제가 없습니다.

## 언제 쓰나

- 큰 코드베이스를 에이전트가 이해해야 할 때, 매번 전체 파일을 읽지 않고 빠르게 탐색하고 싶을 때
- 함수 간 호출 관계, 심볼 정의 위치, import 체인을 그래프로 조회하고 싶을 때
- 에이전트의 토큰 사용량을 획기적으로 줄이고 싶을 때 (최대 99% 절감)
- 의존성 설치 없이 단일 바이너리로 MCP 서버를 바로 쓰고 싶을 때

## 핵심 특징

- 158개 언어를 지원하는 tree-sitter 기반 AST 파싱.
- Cypher 쿼리 가능한 지식 그래프로 코드 구조 저장.
- 하위 밀리초 쿼리 응답 시간.
- 평균 레포지토리를 밀리초 단위로 인덱싱.
- 단일 정적 바이너리, 런타임 의존성 제로.
- SQLite 기반 영구 저장소로 세션 간에도 메모리 유지.
