---
title: "Unpeel"
description: "Claude Code, Codex, Gemini, OpenCode 같은 CLI 에이전트를 한 곳에서 실행·감시·오케스트레이션하는 네이티브 macOS 터미널 앱입니다. 오래 살아남는 세션, 프로젝트별 사이드바, git worktree, Unpeel Sessions MCP로 여러 에이전트를 병렬 운용할 때 유용합니다."
category: "agent-harness"
tags: ["macos", "terminal", "agent-harness", "orchestration", "mcp", "worktree", "claude-code", "codex", "gemini", "opencode", "native-app"]
websiteUrl: "https://unpeel.com/"
githubStars: 0
author: "Tommy Vedvik"
installCommand: "Download from https://unpeel.com/"
compatibleAgents: ["Claude Code", "Codex", "Gemini", "OpenCode", "Cursor", "Grok"]
featured: false
icon: "Terminal"
---

# Unpeel

Unpeel은 AI 코딩 에이전트를 위한 네이티브 macOS 터미널 앱입니다. Claude Code, Codex, Gemini, OpenCode 같은 여러 CLI harness를 프로젝트 단위로 묶고, 각 세션의 상태를 사이드바와 메뉴 막대에서 확인하면서 병렬로 운용할 수 있게 해줍니다.

## 언제 쓰나

- 여러 CLI 에이전트를 한 저장소나 여러 프로젝트에서 동시에 돌리고 싶을 때
- 에이전트 세션이 앱 종료나 재실행과 무관하게 계속 살아 있어야 할 때
- 각 작업을 별도 git worktree와 브랜치로 분리해 충돌을 줄이고 싶을 때
- 한 에이전트가 다른 에이전트 세션의 출력 확인, 프롬프트 전송, 메뉴 응답까지 맡는 오케스트레이션 흐름을 만들고 싶을 때
- 터미널 대화에 집중하는 로컬 macOS 앱을 원하고, 별도의 diff viewer나 코드 pane은 필요 없을 때

## 핵심 특징

- **네이티브 macOS 터미널**: Swift 기반 macOS 앱이며 libghostty를 사용합니다.
- **오래 살아남는 세션**: 세션은 앱 창 밖의 별도 프로세스로 실행되어, 앱을 닫거나 재실행해도 계속 작업할 수 있습니다.
- **에이전트 대시보드**: busy, done, needs you 상태를 사이드바에서 확인하고, 메뉴 막대에서도 진행 중인 세션을 추적할 수 있습니다.
- **Unpeel Sessions MCP**: 로컬 MCP 서버가 세션 목록 조회, 출력 읽기, 텍스트 입력, 메뉴 응답, 세션 시작/종료 같은 제어를 제공합니다.
- **프로젝트 스코프 기본값**: MCP 제어는 기본적으로 같은 workspace 안의 세션으로 제한되며, 필요하면 끌 수 있습니다.
- **git worktree 지원**: 같은 저장소에서 여러 에이전트가 각각 독립된 checkout과 브랜치로 작업하도록 구성할 수 있습니다.
- **빠른 preset**: Claude, Codex, Gemini, amp, pi, OpenCode 같은 harness를 정해 둔 플래그와 프로젝트로 빠르게 시작합니다.

## 가격과 제한

- macOS Apple silicon용 상용 앱입니다.
- 웹사이트 기준 7일 무료 체험 후 라이선스가 필요합니다.
- 현재 표시 버전은 `0.1.0-beta.3`이며, 첫해 업데이트가 포함되고 이후 업데이트 갱신은 할인 가격으로 제공됩니다.
- 로컬 전용을 지향하며 웹사이트 설명 기준 telemetry, cloud, account 없이 사용할 수 있습니다.
