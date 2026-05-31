---
title: "CodexBar"
description: "macOS 메뉴바에서 AI 코딩 도구의 사용량과 리셋 시점을 보여 주는 모니터링 앱입니다. 여러 제공자의 상태를 빠르게 확인할 때 유용합니다."
category: "desktop-utility"
tags: ["macos", "menu-bar", "usage-monitoring", "claude-code", "codex", "privacy"]
githubUrl: "https://github.com/steipete/CodexBar"
githubStars: 13948
author: "steipete"
installCommand: "brew install --cask steipete/tap/codexbar"
compatibleAgents: ["Claude Code", "Cursor", "Codex", "Gemini", "GitHub Copilot"]
featured: true
icon: "BarChart3"
---

# CodexBar

CodexBar는 macOS 메뉴바에서 AI 코딩 도구의 사용량과 리셋 시점을 보여 주는 모니터링 앱입니다. 여러 제공자의 상태를 빠르게 확인할 수 있습니다.

![CodexBar 메뉴 팝오버 — 제공자 타일, 사용량 바, 리셋 카운트다운](/tool-screenshots/codexbar-menu-popover.webp)

## 언제 쓰나

- 장시간 작업 전에 남은 사용량과 리셋 시점을 확인하고 싶을 때
- 여러 AI 코딩 도구의 상태를 메뉴바에서 빠르게 보고 싶을 때
- 로그인 재입력 없이 로컬 세션이나 설정만으로 상태를 모니터링하고 싶을 때

## 특징

- 메뉴바 전용 UI로 Dock 없이 동작합니다.
- Codex, Claude Code, Cursor, Gemini, Copilot 등 여러 제공자를 다룹니다.
- 브라우저 쿠키, 로컬 설정, API 키 등 기존 세션을 재사용하는 방식이라 비밀번호를 저장하지 않습니다.

## 참고

- 이 저장소는 에이전트 스킬이 아니라, 사용량과 리셋 시점을 보여 주는 **macOS 메뉴바 모니터링 유틸리티**입니다.
- 그래서 이 레지스트리에서는 `desktop-utility`로 분류합니다.
