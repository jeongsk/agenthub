---
title: "fff"
description: "에이전트와 에디터를 위한 초고속 파일 검색 툴킷입니다. 긴 세션에서 경로·내용 검색을 반복하거나 MCP 기반 파일 탐색을 붙이고 싶을 때 유용합니다."
category: "mcp-server"
tags: ["file-search", "mcp", "search", "cli", "agent-tools", "fuzzy-search"]
githubUrl: "https://github.com/dmtrKovalenko/fff"
websiteUrl: "https://fff.dmtrkovalenko.dev/"
githubStars: 7674
author: "dmtrKovalenko"
installCommand: "curl -L https://dmtrkovalenko.dev/install-fff-mcp.sh | bash"
compatibleAgents: ["Claude Code", "Codex", "Cursor", "OpenCode", "Hermes Agent"]
icon: "Search"
---

# fff

`fff`는 에이전트와 개발자를 위한 초고속 파일 검색 툴킷입니다. 일반적인 `rg`/`fzf` 흐름보다 더 정확한 경로 탐색, 내용 검색, frecency 기반 파일 접근을 제공해 긴 코딩 세션에서 특히 유용합니다.

## 언제 쓰나

- 에이전트가 작업 중인 저장소 안에서 파일 검색을 빠르게 반복해야 할 때
- 경로 오타에 강한 탐색 도구가 필요할 때
- MCP 서버로 파일 검색 도구를 붙여 에이전트의 기본 도구를 강화하고 싶을 때
- 오래 작업한 파일을 다시 찾을 때 자동 랭킹이 있으면 좋을 때

## 핵심 특징

- 경로 검색, 내용 검색, multi-grep을 하나의 툴킷으로 묶습니다.
- in-process 동작을 강조해 검색 오버헤드를 줄입니다.
- 설치 스크립트로 MCP 연결 안내까지 제공합니다.
- 에이전트 프롬프트에 "use fff" 패턴을 넣기 좋습니다.
