---
title: "Otty"
description: "코딩 에이전트 워크플로우에 맞춘 네이티브 macOS 터미널 앱입니다. Claude Code, Codex, OpenCode 같은 CLI 에이전트를 first-class pane으로 실행하고, 세로 탭의 live badge, 알림, Composer, prompt queue, 세션 기록과 fork로 장시간 에이전트 작업을 관리할 수 있습니다."
category: "agent-harness"
tags: ["terminal", "macos", "agent-harness", "coding-agents", "claude-code", "codex", "opencode", "parallel-tasks", "session-history", "prompt-queue", "gpu-accelerated", "native-app"]
websiteUrl: "https://otty.sh/"
githubStars: 0
author: "Otty"
installCommand: "Download from https://otty.sh/"
compatibleAgents: ["Claude Code", "Codex", "OpenCode"]
featured: false
icon: "Terminal"
---

# Otty

Otty는 macOS용 네이티브 터미널 앱입니다. 일반 터미널 성능과 UX를 유지하면서, Claude Code, Codex, OpenCode 같은 코딩 에이전트를 장시간 실행·관찰·재개하기 쉽게 만드는 기능에 초점을 둡니다. 웹사이트와 문서 기준으로 macOS 공개 빌드를 제공하며 Windows, Linux, iOS는 개발 중입니다.

## 언제 쓰나

- Claude Code, Codex, OpenCode를 별도 앱이 아니라 터미널 세션으로 계속 쓰고 싶을 때
- 여러 에이전트 작업이 진행 중인지, 완료됐는지, 입력을 기다리는지 탭 전환 없이 보고 싶을 때
- 긴 프롬프트를 한 줄 입력창이 아니라 Composer에서 편하게 작성하고 싶을 때
- 에이전트가 바쁜 동안 다음 명령이나 프롬프트를 queue에 쌓아 두고 싶을 때
- 과거 터미널/에이전트 세션을 검색하고 며칠 뒤에도 다시 이어가고 싶을 때
- native macOS 터미널, 빠른 rendering, 세로 탭, split/pane 중심의 환경을 선호할 때

## 핵심 특징

- **Code-agent first terminal**: Claude Code, Codex, OpenCode를 first-class pane으로 실행합니다.
- **Live status badges**: 세로 탭에 작업 중, 완료, 입력 대기 상태를 표시해 백그라운드 에이전트를 한눈에 추적합니다.
- **Notifications & keep-awake**: 작업 완료나 사용자 승인/입력 필요 시 시스템 알림을 보내고, 긴 작업 중 Mac이 잠들어 중단되는 상황을 줄입니다.
- **Composer**: multi-line editing, undo/redo, image paste, float-on-top panel로 긴 프롬프트를 편하게 작성할 수 있습니다.
- **Prompt Queue**: 에이전트가 바쁠 때 다음 명령을 queue에 넣고 idle prompt가 돌아오면 순차 실행합니다.
- **Send to Chat**: 터미널 선택 영역, 마지막 명령 출력, 파일 pane snippet을 대화에 바로 넣어 copy-paste를 줄입니다.
- **History & resume**: 모든 대화를 캡처해 나중에 검색하거나 이어갈 수 있습니다.
- **Fork / Branch Session**: 기존 대화를 잃지 않고 split 또는 새 tab에서 다른 접근을 병렬로 시도합니다.
- **Built-in file viewer/editor**: 에이전트가 수정한 파일을 같은 앱 안에서 열어 확인할 수 있습니다.

## 빠른 시작

macOS 14 Sonoma 이상이 필요합니다. Apple Silicon 빌드는 공식 다운로드 버튼으로 받을 수 있고, Intel(x86_64) 빌드는 다운로드 dropdown에서 제공합니다.

```bash
# 공식 사이트에서 macOS 앱 다운로드
open https://otty.sh/
```

다운로드 후 압축을 풀고 `Otty.app`을 Applications 폴더로 옮깁니다. 기존 CLI 에이전트 설정을 대체하지 않으며, Otty terminal에서 `claude`, `codex`, `opencode`를 평소처럼 실행하면 됩니다. Otty가 Claude Code/Codex hook 또는 OpenCode plugin 설치를 제안하면 한 번 승인해 tab badge, notifications, history, fork 기능을 자동으로 활성화할 수 있습니다.

## 참고와 주의사항

- 현재 공개 지원 플랫폼은 macOS이며, Windows/Linux/iOS는 개발 중입니다.
- 문서 기준 macOS 14(Sonoma) 이상이 필요합니다.
- 코딩 에이전트 CLI 자체를 대체하는 도구가 아니라, 이미 사용하는 agent CLI를 더 잘 실행하고 관찰하는 터미널입니다.
- 공식 문서는 `https://docs.otty.sh/`, LLM용 요약은 `https://otty.sh/llms.txt`에서 제공합니다.
