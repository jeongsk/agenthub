---
title: "Agent Reach"
description: "AI 에이전트에게 인터넷 접근 능력을 한 번에 부여하는 CLI 능력 레이어. Twitter, Reddit, YouTube, GitHub, Bilibili, Xiaohongshu 등 15개 이상 플랫폼을 하나의 CLI로 — API 비용 0원."
category: "agent-infrastructure"
tags: ["agent", "cli", "search", "social-media", "web", "scraping", "research", "ai-search", "youtube", "reddit", "twitter", "github", "mcp", "agent-infrastructure", "free-api", "bilibili", "xiaohongshu"]
githubUrl: "https://github.com/Panniantong/Agent-Reach"
githubStars: 54917
author: "Panniantong"
installCommand: "pipx install https://github.com/Panniantong/agent-reach/archive/main.zip && agent-reach install --env=auto"
compatibleAgents: ["Claude Code", "Codex", "Cursor", "OpenCode", "Hermes Agent", "OpenClaw", "Windsurf"]
icon: "Globe"
---

# Agent Reach

Agent Reach는 AI 에이전트가 공개 웹과 여러 소셜 플랫폼을 읽고 검색할 수 있게 해 주는 **능력 레이어(capability layer)**입니다. CLI 하나로 웹, YouTube, Twitter/X, Reddit, GitHub, Bilibili, Xiaohongshu, Facebook, Instagram, LinkedIn, RSS, V2EX, 雪球(중국 증시), 小宇宙(팟캐스트) 등 15개 이상 채널에 접근할 수 있습니다. **모든 API가 무료**이며, 복잡한 설정 없이 한 문장으로 설치할 수 있습니다.

## 개요

Agent Reach는 또 하나의 웹 스크래핑 도구가 아닙니다. **선정·설치·진단·라우팅**을 책임지며, 실제 읽기 작업은 Agent가 각 채널의 최적 업스트림 도구(Jina Reader, yt-dlp, gh CLI, twitter-cli, bili-cli, OpenCLI 등)를 직접 호출해 수행합니다. 채널마다 `선호 + 예비` 다중 백엔드 라우팅을 갖추고 있어, 특정 접근 방식이 막혀도 자동으로 다음 백엔드로 전환됩니다(예: yt-dlp가 Bilibili에서 차단되자 bili-cli로 무중단 전환).

## 주요 특징

- **15+ 채널 지원**: 웹(일반 렌더링 + Jina Reader), YouTube(자막+검색), Twitter/X(트윗 읽기+검색+타임라인), Reddit(검색+게시글+댓글), GitHub(공개/비공개 저장소), Bilibili(검색+영상 상세), Xiaohongshu(검색+읽기), Facebook(검색+피드+그룹), Instagram(검색+프로필+익스플로어), LinkedIn, RSS, V2EX, 雪球, 小宇宙
- **완전 무료**: 모든 도구와 API가 무료입니다. 서버에서 일부 플랫폼에 접근할 때 선택적으로 주거용 프록시(~$1/월)가 필요할 수 있으며, 로컬 사용 시에는 보통 필요 없습니다
- **다중 백엔드 라우팅**: 각 채널별로 우선순위 있는 백엔드 리스트. 하나가 막히면 다음 백엔드로 자동 전환
- **자가 진단**: `agent-reach doctor`로 각 채널 상태와 현재 사용 중인 백엔드를 한눈에 확인
- **보안 우선**: 쿠키/토큰은 로컬에만 저장(file mode 600), 안전 모드(--safe) 지원, 완전 오픈소스
- **플러그형 아키텍처**: 신뢰하지 않는 채널은 해당 파일만 교체

## 언제 쓰나

- Agent에게 인터넷 읽기·검색 능력을 붙이고 싶을 때
- Twitter, Reddit, YouTube 등 여러 소스에서 최신 자료를 수집해야 할 때
- API 비용 없이 소셜 미디어 접근이 필요할 때
- Agent 환경 설정을 한 번에 끝내고 싶을 때

## 설치

```
pipx install https://github.com/Panniantong/agent-reach/archive/main.zip
agent-reach install --env=auto
```

설치 전 변경 내용을 확인하려면 `agent-reach install --env=auto --dry-run`, 시스템 패키지를 자동 설치하지 않으려면 `--safe`를 사용할 수 있습니다. 설치 후에는 `agent-reach doctor`로 채널별 상태와 활성 백엔드를 점검합니다.

또는 Agent에게 다음 문장을 붙여넣으면 자동 설치됩니다:
```
帮我安装 Agent Reach：https://raw.githubusercontent.com/Panniantong/agent-reach/main/docs/install.md
```

## 중요 사항

- **Cookie 로그인이 필요한 플랫폼**(Twitter, Xiaohongshu, Reddit, Facebook, Instagram 등)은 전용 부계정 사용을 권장합니다. 플랫폼이 비정상 API 호출을 감지해 계정을 제한/차단할 수 있습니다.
- OpenClaw 사용자는 설치 전 `exec` 권한을 활성화해야 합니다(`openclaw config set tools.profile "coding"`).
- **주로 읽기·검색을 위한 레이어입니다.** 로그인 후 웹 조작, 폼 제출, 다중 계정·브라우저 세션 자동화가 필요한 작업은 별도의 브라우저 자동화 도구와 함께 사용하세요.
