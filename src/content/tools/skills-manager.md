---
title: "Skills Manager"
description: "Claude Code, Cursor, Codex, Gemini CLI, Kilo Code, Roo Code, Windsurf 등 45개 이상의 코딩 AI 에이전트 스킬을 통합 관리하는 네이티브 macOS 앱. 스킬 검색·설치·동기화·백업·태깅을 하나의 GUI에서 처리하며 Git 기반 멀티 디바이스 동기화와 내장 LLM 샌드박스 테스팅을 지원합니다."
category: "desktop-utility"
tags: ["skills-management", "multi-agent", "macos", "swiftui", "swift", "tauri", "sync", "backup"]
githubUrl: "https://github.com/yibie/skills-manager"
websiteUrl: "http://www.gtdstudy.com/skills-manager/"
githubStars: 264
author: "yibie"
installCommand: "Download from Releases page or build via open SkillsManager.xcodeproj"
compatibleAgents: ["Claude Code", "Amp", "Cline", "Codex", "Cursor", "Deep Agents", "Firebender", "Gemini CLI", "GitHub Copilot", "Kimi Code CLI", "Replit", "Warp", "Antigravity", "Augment", "IBM Bob", "CodeBuddy", "Command Code", "Continue", "Cortex Code", "Crush", "Droid", "Goose", "iFlow CLI", "Junie", "Kilo Code", "Kiro CLI", "Kode", "MCPJam", "Mistral Vibe", "Mux", "Neovate", "OpenCode", "OpenHands", "Pi", "Pochi", "Qoder", "Qwen Code", "Roo Code", "Trae", "Trae CN", "Windsurf", "Zencoder", "AdaL", "OpenClaw"]
featured: false
icon: "MonitorSmartphone"
---

## 개요

**Skills Manager**는 macOS 14+에서 동작하는 네이티브 앱으로, 코딩 에이전트별 스킬이散的로 관리되는 문제를 해결합니다. 45개 이상의 에이전트를 지원하며, skills.sh 마켓플레이스·GitHub·로컬 폴더 등 다양한 소스에서 스킬을 검색하고 하나 또는 복수의 에이전트에 동시에 설치할 수 있습니다.

## 주요 기능

- **스킬 디스커버리** — skills.sh 전체 검색 API + 로컬 캐시 기반 오프라인 탐색. Chinese description 번들 카탈로그内置 + Ollama/LM Studio 온디맨드 번역 폴백
- **멀티 에이전트 설치/제거** — 하나의 스킬을 여러 에이전트에 즉시 배포. 에이전트 아이콘 뱃지로 설치 상태 시각화
- **LLM 샌드박스 테스팅** — 앱 내부에서 스킬을 실제로 테스트 before 커밋
- **글로벌 + 프로젝트 워크스페이스** — 에이전트별 글로벌 스킬 폴더와 프로젝트별 로컬 스킬 디렉토리(.claude/skills/ 등)를 모두 관리
- **Git 백업 및 멀티 디바이스 동기화** — GitHub 로그인으로 프라이빗 저장소에 자동 백업, 스킬 단위 병합 충돌 처리
- **프리셋(Preset)** — 스킬 그룹화 → 원클릭 활성화/비활성화
- **태깅 및 필터링** — 태그별/소스별/에이전트별 필터
- **활동 로그 내보내기** — 설치/제거/업데이트 로그를 ZIP으로 export
- **터미널 UI (TUI)** — Blessed TUI로 키보드 기반 CLI 탐색 가능 (`tui/` 디렉토리, `npm exec skills-manager` 또는 `npm link` 후 전역 명령어)

## 빠른 시작

```bash
# Releases에서 다운로드 후 Applications로 드래그
# 또는 소스 빌드
git clone https://github.com/yibie/skills-manager.git
cd skills-manager
open SkillsManager.xcodeproj

# 터미널 UI
cd tui && npm exec skills-manager
```

## 지원 에이전트

45개 이상 지원 (상세 목록은 [README](https://github.com/yibie/skills-manager) 참고). 주요 에이전트:

| 설치 대상 | 에이전트 |
|-----------|----------|
| Yes | Claude Code, Codex, Cursor, Gemini CLI, GitHub Copilot, Augment, Command Code, Continue, iFlow CLI, Kilo Code, Kiro CLI, MCPJam, Mux, Neovate, OpenHands, Pi, Qwen Code, Roo Code |
| Scan | Amp, Cline, Deep Agents, Firebender, Kimi Code CLI, Replit, Warp, Antigravity, IBM Bob, CodeBuddy, Cortex Code, Crush, Droid, Goose, Junie, Kode, Mistral Vibe, Pochi, Qoder, Trae, Trae CN, Windsurf, Zencoder, AdaL, OpenClaw |

## 주의사항

- **macOS 14 (Sonoma)+ 필수**
- **macOS 게이트키퍼**: 열리지 않으면 `xattr -d com.apple.quarantine /Applications/Skills\ Manager.app` 실행 필요
- 순수 로컬 아키텍처 — 네트워크 없이도 오프라인 기능 (라이브러리 관리, 스캔, 설치/제거, 로그) 동작
- 100MB 이상 스킬은 백업에서 제외
- 비공개 API 키, 토큰, 프록시 설정 등 머신별 정보는 백업되지 않음

## 기술 스택

| 계층 | 기술 |
|------|------|
| UI | SwiftUI + Swift 6, SwiftData |
| 플랫폼 | macOS 14+ |
| 터미널 UI | Blessed (Node.js) |