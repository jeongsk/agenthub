---
title: "Herm"
description: "Hermes Agent를 탭형 TUI로 다루는 대시보드입니다. 세션과 운영 요소를 한 화면에서 관리하고 싶을 때 유용합니다."
category: "agent-harness"
tags: ["hermes-agent", "tui", "dashboard", "terminal", "workflow"]
githubUrl: "https://github.com/liftaris/herm"
githubStars: 226
author: "liftaris"
installCommand: "bun add -g herm-tui"
compatibleAgents: ["Hermes Agent", "OpenCode", "Claude Code", "Cursor", "Codex"]
featured: true
icon: "LayoutDashboard"
---

# Herm

Herm은 Hermes Agent를 위한 탭형 TUI 대시보드입니다. 세션과 운영 요소를 한 화면에서 관리할 수 있습니다.

![Herm TUI 대시보드 화면](/tool-screenshots/herm-tui-dashboard.webp)

## 언제 쓰나

- 터미널 안에서 Hermes 작업 흐름을 빠르게 보고 싶을 때
- 세션, 컨텍스트, 메모리, 크론, 설정을 한곳에서 관리하고 싶을 때
- OpenCode처럼 탭 기반 UI로 에이전트 상태를 다루고 싶을 때

## 특징

- OpenTUI와 Bun 기반으로 만든 TUI입니다.
- 세션, 컨텍스트, 에이전트, 분석, 스킬, 크론, 툴셋, 메모리, 캔반 등을 탭으로 나눠 보여 줍니다.
- `~/.hermes` 기반의 Hermes 환경과 연결됩니다.

## 참고

- 이 저장소는 에이전트의 작업 방식 자체를 다루는 **대시보드형 하네스**에 가깝습니다.
- 그래서 이 레지스트리에서는 `agent-harness`로 분류하는 편이 맞습니다.
