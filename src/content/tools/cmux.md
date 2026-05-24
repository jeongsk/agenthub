---
title: "cmux"
description: "AI 코딩 에이전트를 위한 Ghostty 기반 macOS 터미널입니다. 수직 탭, 알림, 내장 브라우저, 원격 SSH 작업공간으로 여러 세션을 동시에 다룰 때 유용합니다."
category: "desktop-utility"
tags: ["terminal", "macos", "ghostty", "notifications", "tmux", "orchestration"]
githubUrl: "https://github.com/manaflow-ai/cmux"
githubStars: 18468
author: "manaflow-ai"
installCommand: "brew install --cask cmux"
compatibleAgents: ["Claude Code", "Codex", "OpenCode", "Gemini", "Copilot"]
featured: true
icon: "Terminal"
---

# cmux

cmux는 AI 코딩 에이전트를 위한 macOS 터미널 오케스트레이터입니다. Ghostty 기반 터미널에 수직 탭, 알림, 내장 브라우저, SSH 작업공간을 얹어 여러 세션을 한 화면에서 관리할 수 있게 해 줍니다.

## 언제 쓰나

- Claude Code, Codex 같은 에이전트를 여러 개 동시에 돌릴 때
- 작업공간과 브랜치를 탭으로 나눠 보고 싶을 때
- 에이전트가 입력을 기다릴 때 알림과 시각적 표시가 필요할 때
- 원격 SSH 세션과 브라우저를 한 앱에서 함께 다루고 싶을 때

## 특징

- Ghostty 호환 터미널과 수직/수평 탭을 제공합니다.
- 알림 링과 알림 패널로 주의가 필요한 세션을 빠르게 찾을 수 있습니다.
- 내장 브라우저와 CLI/socket API로 작업을 자동화할 수 있습니다.
- Claude Code Teams, SSH workspace, 브라우저 import 같은 기능도 포함합니다.

## 참고

- 이 저장소는 단순 터미널이 아니라 **에이전트 세션 운영 환경**에 가깝습니다.
- 그래서 이 레지스트리에서는 `agent-harness`로 분류하는 편이 자연스럽습니다.
