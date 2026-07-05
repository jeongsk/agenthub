---
title: "AI Token Monitor"
description: "macOS 및 Windows용 시스템 트레이 앱으로, Claude Code / Codex / OpenCode의 실시간 토큰 사용량·비용·활동을 추적하고 리더보드와 채팅 기능을 제공합니다."
category: "desktop-utility"
tags: ["claude-code", "codex", "opencode", "token-tracking", "cost-monitor", "tauri", "desktop-app"]
githubUrl: "https://github.com/soulduse/ai-token-monitor"
websiteUrl: "https://github.com/soulduse/ai-token-monitor"
githubStars: 262
author: "soulduse"
installCommand: "# Download .dmg (macOS) or .exe (Windows) from Releases\n# https://github.com/soulduse/ai-token-monitor/releases/latest"
compatibleAgents: ["Claude Code", "Codex", "OpenCode"]
featured: false
icon: "MonitorSmartphone"
---

**AI Token Monitor**는 macOS 메뉴 바 및 Windows 작업 표시줄에서 실행되는 데스크톱 유틸리티로, Claude Code, Codex, OpenCode 등 다양한 AI 에이전트의 토큰 사용량과 비용을 실시간으로 추적합니다.

## 주요 기능

- **실시간 토큰 추적** — Claude Code, Codex, OpenCode의 세션 JSONL 파일을 파싱하여 정확한 사용량 통계 제공
- **다중 제공자 지원** — Claude / Codex / OpenCode刚从 간 전환, 제공자별 비용 모델 적용
- **트레이 비용 표시** — macOS 메뉴 바 / Windows 툴팁에 오늘 비용 표시
- **시각화** — 7일/30일 토큰·비용 막대 차트, GitHub 스타일 기여도 히트맵, 모델별 분석, 캐시 효율성 도넛 차트
- **리더보드** — 다른 개발자와 일/주/월별 사용량 비교 (GitHub OAuth, 옵트인)
- **채팅** — 리더보드 멤버 간 실시간 채팅 (멘션, 답글, 이미지 첨부, 읽지 않은 메시지 카운터, AI 번역 지원)
- **AI Report (Wrapped)** — 월/연간 사용 요약 (최다 사용bog, 가장 바쁜 날, 연속 사용 기록)
- **Webhook 알림** — Discord, Slack, Telegram으로 사용량閾치 초과 시 알림
- **자동 업데이터** — 앱 내 업데이트 알림 및 다운로드 진행률 표시

## 다운로드 및 설치

[GitHub Releases](https://github.com/soulduse/ai-token-monitor/releases/latest)에서 최신 버전을 받을 수 있습니다.

| 플랫폼 | 파일 | 비고 |
|---|---|---|
| **macOS (Apple Silicon)** | `.dmg` | Intel Mac 지원 예정 |
| **Windows** | `.exe` | Windows 10+ (WebView2 필요, 자동 설치) |

## 데이터 소스

| 제공자 | 경로 |
|---|---|
| Claude Code | `~/.claude/projects/**/*.jsonl` |
| Codex | `~/.codex/sessions/**/*.jsonl` |
| OpenCode | `~/.local/share/opencode/**/*.jsonl` |
| GJC (Gajae Code) | `~/.gjc/agent/sessions/**/*.jsonl` |

> **네트워크 요청**은 리더보드/채팅 옵트인 시 또는 Webhook 발송 시에만 발생합니다. 해당 기능을 사용하지 않으면 완전히 오프라인으로 실행됩니다.

## 기술 스택

- **Frontend**: React 19 + Vite + TypeScript
- **Backend**: Tauri v2 / Rust
- **배포**: macOS (.dmg) 및 Windows (.exe) 네이티브 바이너리

## 주의사항

- Intel Mac은 현재 지원하지 않으며 지원 예정 상태입니다.
- AI 번역 기능은 사용자가 직접 Gemini / OpenAI / Anthropic API 키를 제공해야 하며, 키는 로컬에서 암호화되어 저장됩니다.
- 리더보드 데이터 공유는 완전히 옵트인이며, 코드나 대화 내용은 **절대 공유되지 않습니다**.
