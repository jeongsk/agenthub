---
title: "codebase-memory-mcp"
description: "코드베이스를 고속으로 인덱싱해 지속형 지식 그래프로 바꿔 주는 MCP 서버입니다. 대규모 저장소에서 구조 질의, 관계 탐색, 토큰 절감을 하고 싶을 때 유용합니다."
category: "mcp-server"
tags: ["mcp", "code-intelligence", "knowledge-graph", "code-search", "tree-sitter", "semantic-search", "context-engine", "agents"]
githubUrl: "https://github.com/DeusData/codebase-memory-mcp"
websiteUrl: "https://deusdata.github.io/codebase-memory-mcp/"
githubStars: 6950
author: "DeusData"
installCommand: "curl -fsSL https://raw.githubusercontent.com/DeusData/codebase-memory-mcp/main/install.sh | bash"
compatibleAgents: ["Claude Code", "Codex", "Cursor", "Gemini", "OpenCode"]
featured: true
icon: "Network"
---

# codebase-memory-mcp

`codebase-memory-mcp`는 코드베이스를 인덱싱해서 구조적 지식 그래프로 바꿔 주는 MCP 서버입니다. 저장소가 커질수록 파일 검색만으로는 놓치기 쉬운 함수·클래스·호출 관계를 빠르게 탐색하고 싶을 때 유용합니다.

## 언제 쓰나

- 대규모 저장소의 구조를 빠르게 파악하고 싶을 때
- 함수, 클래스, 호출 관계, 라우트 같은 구조 질의를 반복할 때
- 에이전트가 긴 코드베이스를 읽기 전에 먼저 요약된 지식을 참고하게 하고 싶을 때
- 토큰을 줄이면서 코드 이해 품질을 유지하고 싶을 때

## 핵심 특징

- 구조적 인덱싱과 지식 그래프 중심 설계를 사용합니다.
- MCP 서버로 여러 에이전트에 붙일 수 있습니다.
- macOS, Linux, Windows를 지원하는 단일 바이너리 배포를 지향합니다.
- 설치 스크립트가 에이전트별 MCP 연결까지 자동화합니다.
