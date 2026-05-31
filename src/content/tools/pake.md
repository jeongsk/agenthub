---
title: "Pake"
description: "웹페이지를 데스크톱 앱으로 단일 명령어로 변환해 주는 CLI 도구입니다. Rust Tauri 기반으로 Electron 대비 20배 가벼우며(약 5MB), Mac·Windows·Linux를 모두 지원합니다."
category: "cli-utility"
tags: ["tauri", "rust", "desktop-app", "web-to-app", "cross-platform", "macos", "windows", "linux", "packaging"]
githubUrl: "https://github.com/tw93/Pake"
githubStars: 49556
author: "tw93"
installCommand: "npm install -g @tw93/pake-cli"
compatibleAgents: []
icon: "Package"
---

# Pake

Pake는 어떤 웹페이지든 데스크톱 앱으로 단일 명령어로 변환해 주는 CLI 도구입니다. Electron 대신 Rust Tauri를 사용하기 때문에 결과물이 5MB 안팎으로 가볍고, 실행 속도도 훨씬 빠릅니다.

## 언제 쓰나

- 자주 쓰는 웹 서비스(ChatGPT, Grok, DeepSeek, Twitter 등)를 네이티브 앱처럼 쓰고 싶을 때
- Electron 기반 앱이 무겁다고 느껴 더 가벼운 대안을 찾을 때
- 웹 앱에 키보드 단축키, 광고 제거, 스타일 커스터마이징을 추가하고 싶을 때
- CLI 한 줄로 원하는 사이트를 바로 데스크톱 앱으로 패키징하고 싶을 때

## 특징

- **경량**: Electron 대비 약 20배 작음 (보통 5MB)
- **고속**: Rust Tauri 기반, JS 프레임워크보다 훨씬 빠르고 메모리 사용도 낮음
- **간편 사용**: CLI 1줄 또는 온라인 빌드로 복잡한 설정 없이 패키징
- **풍부한 기능**: 키보드 단축키, 몰입형 창, 드래그 앤 드롭, 스타일 커스터마이징, 광고 제거
- **크로스 플랫폼**: macOS, Windows, Linux 모두 지원
- **인기 패키지 제공**: WeRead, Twitter, ChatGPT, Grok, DeepSeek, YouTube, Gemini 등을 미리 빌드된 DMG/MSI/deb로 제공
