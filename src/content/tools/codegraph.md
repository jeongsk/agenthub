---
title: "CodeGraph"
description: "코드베이스를 사전 인덱싱해 Claude Code, Cursor, Codex, OpenCode, Hermes Agent가 파일을 하나씩 뒤지지 않고도 구조와 관계를 빠르게 조회하도록 돕는 MCP 서버입니다."
category: "mcp-server"
tags: ["mcp", "code-intelligence", "codebase", "indexing", "knowledge-graph"]
githubUrl: "https://github.com/colbymchenry/codegraph"
websiteUrl: "https://colbymchenry.github.io/codegraph/"
githubStars: 34886
author: "colbymchenry"
installCommand: "npx @colbymchenry/codegraph"
compatibleAgents: ["Claude Code", "Cursor", "Codex", "OpenCode", "Hermes Agent"]
featured: true
icon: "GitBranch"
---

# CodeGraph

CodeGraph는 코드베이스를 사전 인덱싱해 두고, 에이전트가 파일을 무작정 읽지 않아도 심볼 관계, 호출 구조, 프로젝트 맥락을 빠르게 찾도록 돕는 MCP 서버입니다. 대형 저장소에서 특히 유용하고, 탐색용 토큰과 도구 호출을 줄이는 데 초점이 있습니다.

## 핵심 포인트

- **사전 인덱싱**: 파일을 매번 훑는 대신, 구조화된 코드 지식을 조회합니다.
- **도구 호출 절감**: grep/read 반복을 줄여 에이전트 탐색 비용을 낮춥니다.
- **로컬 우선**: 프로젝트 내부에서 동작하는 로컬 인덱싱 흐름에 맞습니다.
- **다중 에이전트 지원**: Claude Code, Cursor, Codex, OpenCode, Hermes Agent 등 여러 런타임과 함께 쓸 수 있습니다.

## 이런 경우에 유용합니다

- 큰 코드베이스에서 에이전트가 맥락을 빨리 잡아야 할 때
- 파일 검색보다 구조 기반 탐색이 더 중요한 프로젝트일 때
- 에이전트의 탐색 토큰과 도구 호출 수를 줄이고 싶을 때
- MCP 서버 형태로 코드 지능 계층을 붙이고 싶을 때

## 참고

- 이 저장소는 일반적인 개발 도구라기보다, *코드 탐색용 MCP 인프라*에 가깝습니다.
- 그래서 이 레지스트리에서는 `mcp-server`로 분류하는 편이 가장 자연스럽습니다.
