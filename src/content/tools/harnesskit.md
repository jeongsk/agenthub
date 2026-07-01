---
title: "HarnessKit"
description: "Claude Code, Codex, Gemini CLI, Cursor, Hermes 등 여러 AI 코딩 에이전트의 스킬·MCP 서버·플러그인·훅·설정·메모리·룰을 한곳에서 관리하는 크로스 플랫폼 앱과 hk CLI입니다."
category: "agent-infrastructure"
tags: ["agent-management", "skills", "mcp", "plugins", "hooks", "security", "audit", "cli", "desktop-app", "cross-platform", "claude-code", "codex", "gemini", "cursor", "hermes"]
githubUrl: "https://github.com/RealZST/HarnessKit"
githubStars: 341
author: "RealZST"
installCommand: "curl -fsSL https://raw.githubusercontent.com/RealZST/HarnessKit/main/install.sh | sh"
compatibleAgents: ["Claude Code", "Codex", "Gemini", "Cursor", "Antigravity", "GitHub Copilot", "Windsurf", "OpenCode", "Hermes Agent"]
featured: false
icon: "Boxes"
---

# HarnessKit

HarnessKit은 여러 AI 코딩 에이전트의 확장과 설정을 한곳에서 관리하는 오픈소스 앱입니다. 데스크톱 앱, `hk` CLI, 웹 모드를 제공하며 Claude Code, Codex, Gemini CLI, Cursor, Antigravity, Copilot, Windsurf, OpenCode, Hermes의 스킬·MCP 서버·플러그인·훅·에이전트용 CLI, 설정, 메모리, 룰 파일을 발견하고 관리합니다.

## 언제 쓰나

- 여러 에이전트에 흩어진 스킬, MCP 서버, 플러그인, 훅을 한 화면에서 보고 싶을 때
- 에이전트별 config, memory, rules, subagents, ignore 파일 위치와 내용을 추적하고 싶을 때
- 확장 설치 상태, 권한, 신뢰 점수, 보안 감사 결과를 비교해야 할 때
- 같은 스킬이나 MCP 서버를 여러 에이전트 또는 프로젝트에 배포하고 싶을 때
- 데스크톱이 없는 서버에서 웹 UI로 에이전트 환경을 관리하고 싶을 때

## 핵심 특징

- **통합 확장 관리**: Skills, MCP Servers, Plugins, Hooks, Agent-first CLIs를 타입·에이전트·출처별로 필터링하고 검색합니다.
- **에이전트 파일 대시보드**: 전역·프로젝트별 설정 파일을 자동 발견하고, 파일 크기와 경로, 내용 미리보기를 보여줍니다.
- **보안 감사**: 18개 정적 분석 규칙으로 확장을 스캔하고 trust score와 파일/라인 단위 finding을 제공합니다.
- **권한 투명성**: 파일 시스템 경로, 네트워크 도메인, shell 명령, DB 엔진, 환경변수 접근을 표시합니다.
- **마켓플레이스 연동**: skills.sh, Smithery, agent-first CLI 목록을 탐색하고 설치할 수 있습니다.
- **Kits**: 스킬, MCP 서버, 룰, 메모리 파일을 휴대 가능한 `.hk-kit.zip` 번들로 묶어 여러 프로젝트에 재사용합니다.
- **CLI와 웹 모드**: `hk status`, `hk list`, `hk audit`, `hk serve` 등으로 터미널이나 브라우저에서 같은 기능을 씁니다.

## 빠른 시작

macOS와 Linux에서는 설치 스크립트로 `hk` CLI를 설치할 수 있습니다.

```bash
curl -fsSL https://raw.githubusercontent.com/RealZST/HarnessKit/main/install.sh | sh
hk serve
```

Windows PowerShell에서는 다음 명령을 사용합니다.

```powershell
irm https://raw.githubusercontent.com/RealZST/HarnessKit/main/install.ps1 | iex
```

macOS 데스크톱 앱은 GitHub Releases의 최신 DMG를 내려받아 Applications 폴더에 넣으면 됩니다. Apple Silicon과 Intel 빌드를 따로 제공합니다.

## 참고

HarnessKit은 에이전트의 네이티브 디렉터리를 직접 읽고 쓰는 방식입니다. 별도 관리 폴더로 복사하지 않기 때문에 lock-in은 줄어들지만, enable/disable이나 배포 작업은 실제 에이전트 설정 파일에 영향을 줍니다. 적용 전 대상 에이전트와 프로젝트 scope를 확인하는 것이 좋습니다.
