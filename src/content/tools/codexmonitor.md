---
title: "CodexMonitor"
description: "여러 Codex 에이전트를 워크스페이스별로 관리하고 상태를 모니터링하는 Tauri 데스크톱 앱입니다. 프로젝트, 스레드, 작업 상태를 한 화면에서 다루고 싶을 때 유용합니다."
category: "desktop-utility"
tags: ["codex", "desktop-app", "tauri", "multi-agent", "workspaces", "monitoring", "macos", "linux", "windows"]
githubUrl: "https://github.com/Dimillian/CodexMonitor"
websiteUrl: "https://www.codexmonitor.app"
githubStars: 3974
author: "Dimillian"
installCommand: "git clone https://github.com/Dimillian/CodexMonitor.git && cd CodexMonitor && npm install"
compatibleAgents: ["Codex"]
featured: false
icon: "Monitor"
---

# CodexMonitor

CodexMonitor는 여러 Codex 에이전트를 워크스페이스별로 묶어 관리하는 데스크톱 앱입니다. 프로젝트 단위의 스레드, 최근 작업, 실행 상태를 시각적으로 다루기 쉬워서, Codex를 여러 작업공간에 나눠 운영할 때 유용합니다.

![CodexMonitor 메인 대시보드 — 워크스페이스, 스레드, 에이전트 실행 상태 화면](/tool-screenshots/codexmonitor-dashboard.webp)

## 언제 쓰나

- 여러 Codex 워크스페이스를 한 앱에서 관리하고 싶을 때
- 실행 중인 에이전트와 스레드 상태를 한눈에 보고 싶을 때
- 작업공간별로 분리된 멀티 에이전트 운영 화면이 필요할 때
- Codex CLI보다 더 시각적인 운영 UI가 필요할 때

## 특징

- Tauri 기반 네이티브 데스크톱 앱
- 워크스페이스, 스레드, 최근 활동 관리
- 앱 서버 프로토콜을 활용한 Codex 세션 연동
- Git, GitHub, 파일 탐색, 프롬프트 라이브러리 UI 포함
- macOS/Linux/Windows 지원
