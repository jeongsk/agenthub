---
title: "DeepSeek Reasonix"
description: "DeepSeek 계열 모델에 맞춰 설계된 터미널 기반 코딩 에이전트 런타임입니다. 긴 세션에서 prefix cache를 안정적으로 유지하면서 코드 작업, 채팅, 검색, MCP, 스킬, 메모리를 함께 운용하고 싶을 때 유용합니다."
category: "agent-framework"
tags: ["deepseek", "coding-agent", "terminal", "cli", "mcp", "skills", "memory", "typescript"]
githubUrl: "https://github.com/esengine/DeepSeek-Reasonix"
websiteUrl: "https://esengine.github.io/DeepSeek-Reasonix/"
githubStars: 14942
author: "esengine"
installCommand: "npm install -g reasonix"
compatibleAgents: ["Claude Code", "Codex", "Cursor", "OpenCode", "Hermes Agent"]
featured: true
icon: "Terminal"
---

# DeepSeek Reasonix

DeepSeek Reasonix는 터미널에서 동작하는 DeepSeek-native 코딩 에이전트입니다. 장시간 세션에서 prefix cache 안정성을 유지하도록 설계되어, 코드 작업을 한 번 시작한 뒤 오래 켜 두고 이어가는 워크플로에 잘 맞습니다.

![Reasonix code 모드 — 어시스턴트가 diff 편집 블록을 제안하고 /apply 전까지 디스크에 반영하지 않는 화면](/tool-screenshots/deepseek-reasonix-terminal.svg)

## 언제 쓰나

- DeepSeek 계열 모델로 코딩 에이전트를 오래 돌리고 싶을 때
- 터미널 기반 코드 작업을 `chat`과 `code` 모드로 나눠 운영하고 싶을 때
- 스킬, 메모리, MCP, 검색을 한 런타임에 묶어 쓰고 싶을 때
- 긴 세션에서도 캐시 안정성과 비용 예측 가능성을 중시할 때
- 데스크톱 클라이언트와 CLI를 같은 루프에서 함께 쓰고 싶을 때

## 핵심 특징

- DeepSeek 전용으로 cache-stability를 전제로 설계
- `code`, `chat`, `run`, `doctor`, `update` 같은 CLI 흐름 제공
- 스킬, 메모리, 훅, 권한, MCP, 검색, semantic index 지원
- 데스크톱 클라이언트도 제공하지만 CLI가 기준 인터페이스
- 긴 작업을 재실행 가능한 코드와 로그로 남기기 쉬움

## 참고

- 현재 활성 개발은 **Go 재작성(main-v2 브랜치)**에서 이루어지고 있습니다. `main` 브랜치(TypeScript v0.x)는 유지보수 모드입니다.
- `npm install -g reasonix` 설치 명령은 그대로 사용하면 됩니다.
