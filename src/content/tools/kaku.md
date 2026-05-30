---
title: "Kaku"
description: "AI 코딩을 위해 만들어진 빠른 터미널 에뮬레이터입니다. WezTerm 기반에 AI 명령어 변환·오류 복구·Lazygit·Yazi 파일 관리자가 기본 내장되어 있고, Lua 설정 호환성과 제로 설정으로 바로 쓸 수 있습니다."
category: "desktop-utility"
tags: ["terminal", "macos", "ai-coding", "rust", "wezterm", "lazygit", "yazi", "shell"]
githubUrl: "https://github.com/tw93/Kaku"
websiteUrl: "https://kaku.fun"
githubStars: 5191
author: "tw93"
installCommand: "brew install tw93/tap/kakuku"
compatibleAgents: ["Claude Code", "Codex", "Gemini CLI", "Copilot CLI"]
icon: "Terminal"
---

# Kaku

Kaku(書く, かく)는 AI 코딩 워크플로에 최적화된 macOS 터미널 에뮬레이터입니다. WezTerm을 기반으로 하되, AI 어시스턴트·Lazygit·Yazi 파일 관리자가 기본 내장되어 있고, 설치하자마자 바로 쓸 수 있는 기본값으로 구성되어 있습니다.

Kaku(코드) · Waza(습관) · Kami(문서) 3부작 중 Kaku가 첫 번째입니다.

## 언제 쓰나

- AI 코딩 도구(Claude Code, Codex 등)와 함께 쓸 터미널이 필요할 때
- 터미널 설정(테마/폰트/단축키)에 시간을 쓰기 싫고 바로 쓰고 싶을 때
- WezTerm을 쓰고 있지만 더 가볍고 AI 기능이 내장된 대안을 찾을 때
- 터미널 안에서 AI 명령어 생성·오류 복구·Lazygit·Yazi를 한 번에 쓰고 싶을 때

## 특징

- **제로 설정**: JetBrains Mono 기본 폰트, macOS 폰트 렌더링 최적화, 설치 즉시 사용 가능
- **AI 내장**: `# <설명>` 으로 자연어→명령어 변환, 실패한 명령어 자동 오류 복구 (`Cmd+Shift+E`)
- **AI 도구 설정**: Claude Code, Codex, Gemini CLI, Copilot CLI, Kimi Code 등의 공급자 관리
- **macOS 테마 연동**: 다크/라이트 모드 자동 전환, 선명한 선택색과 폰트 웨이트 튜닝
- **경량 & 고속**: 바이너리 40% 경량화, 즉시 실행, GPU 가속 코어
- **WezTerm 호환**: 기존 WezTerm Lua 설정을 그대로 사용 가능, 마이그레이션 불필요
- **기본 내장**: Lazygit(`Cmd+Shift+G`), Yazi 파일 관리자(`Cmd+Shift+Y`), zsh 플러그인, 클릭 가능한 파일 경로, 배경 탭 완료 시각 알림
- **설치**: `brew install tw93/tap/kakuku` 또는 DMG 다운로드
