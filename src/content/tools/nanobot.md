---
title: "nanobot"
description: "초경량 오픈소스 개인 AI 에이전트입니다. CLI, WebUI, 채팅 채널, 도구, 메모리, MCP, 모델 라우팅, 자동화, 배포를 하나의 패키지로 제공합니다."
category: "agent-framework"
tags: ["ai-agent", "open-source", "python", "llm", "mcp", "telegram", "discord", "automation", "claude", "codex"]
githubUrl: "https://github.com/HKUDS/nanobot"
websiteUrl: "https://nanobot.wiki"
githubStars: 45010
author: "HKUDS"
installCommand: "pip install nanobot-ai"
compatibleAgents: ["Claude Code", "Codex", "Gemini", "OpenClaw"]
featured: false
icon: "Bot"
---

# nanobot

nanobot은 경량화된 개인 AI 에이전트로, 코어는 단순하고 읽기 쉽게 유지하면서도 실전 장기 작업에 필요한 실용적인 구성 요소를 모두 제공합니다. WebUI, CLI, Telegram, Discord, Slack, WeChat, Email 등 다양한 채널에서 사용할 수 있으며, MCP 서버 연결, 모델 라우팅, 메모리, 자동화, 도구 실행 등을 지원합니다.

## 언제 쓰나

- 하나의 에이전트를 CLI, WebUI, Telegram, Discord 등 여러 채널에서 동시에 사용하고 싶을 때
- 나만의 설정으로 모델을 라우팅하고, 자동화 파이프라인을 구성하고 싶을 때
- MCP 서버를 연결해 에이전트의 기능을 확장하고 싶을 때
- 로컬에서 가볍게 실행하면서도 생산성 있는 에이전트 환경을 원할 때

## 특징

- **멀티 채널** — CLI, WebUI, Telegram, Discord, Slack, WeChat, Email, Signal, Feishu, Matrix, WhatsApp, DingTalk 등 다양한 채널 지원
- **WebUI 내장** — 브라우저 기반 대시보드로 세션 관리, 모델 전환, 파일 편집, 자동화 제어 가능 (모바일 대응)
- **MCP 지원** — MCP 서버를 연결해 외부 도구와 데이터 소스를 에이전트에 통합
- **모델 라우팅** — 여러 제공업체(OpenAI, Anthropic, Gemini, Kimi, MiniMax, DeepSeek 등) 간 fallback 및 라우팅 설정
- **자동화** — cron 기반 스케줄링, `/goal` 지속 목표, Dream 메모리 시스템
- **메모리 및 컨텍스트** — 지속적 메모리, 세그먼트 트랜스크립트, 자동 컨텍스트 압축
- **도구 시스템** — 파일 읽기/쓰기, 코드 실행, 웹 검색, 이미지 생성, STT/TTS 등 내장 도구
- **Python SDK** — nanobot을 라이브러리로 임포트해 프로그램 내에서 에이전트 실행 가능

## 빠른 시작

```bash
pip install nanobot-ai
nanobot setup        # 대화형 설정 마법사
nanobot              # CLI 모드 실행
nanobot webui        # WebUI 실행
```

## 참고

- Python 3.11 이상 필요
- MIT 라이선스
- 공식 문서: [nanobot.wiki](https://nanobot.wiki)
- v0.2.2 (The Durability Release) — 지속성과 안정성에 중점을 둔 최신 릴리스
