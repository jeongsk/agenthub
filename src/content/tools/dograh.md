---
title: "Dograh AI"
description: "음성 에이전트를 직접 구축하고 자가 호스팅할 수 있는 오픈소스 플랫폼입니다. STT, TTS, LLM, 텔레포니를 한 곳에서 묶어 음성 봇을 빠르게 띄울 때 유용합니다."
category: "agent-infrastructure"
tags: ["voice-ai", "telephony", "stt", "tts", "workflow-builder", "agents"]
githubUrl: "https://github.com/dograh-hq/dograh"
websiteUrl: "https://app.dograh.com"
githubStars: 3980
author: "dograh-hq"
installCommand: "curl -o docker-compose.yaml https://raw.githubusercontent.com/dograh-hq/dograh/main/docker-compose.yaml && REGISTRY=ghcr.io/dograh-hq ENABLE_TELEMETRY=true docker compose up --pull always"
compatibleAgents: ["Claude Code", "Codex", "Cursor", "OpenCode"]
icon: "Mic"
---

# Dograh AI

Dograh AI는 음성 에이전트를 만들고 운영하는 오픈소스 플랫폼입니다. 자체 호스팅 환경에서 STT, TTS, LLM, 텔레포니를 연결해 전화 기반 봇이나 음성 워크플로를 빠르게 구성할 수 있습니다.

## 언제 쓰나

- Vapi나 Retell 같은 음성 에이전트 플랫폼의 대안을 찾을 때
- 텔레포니와 음성 모델을 한 서비스로 묶고 싶을 때
- 로컬 또는 서버 환경에서 음성 봇을 빠르게 띄우고 싶을 때
- 드래그 앤 드롭 방식으로 음성 워크플로를 만들고 싶을 때

## 핵심 특징

- **자가 호스팅 가능**: 클라우드형 플랫폼 대신 직접 운영할 수 있습니다.
- **음성 스택 통합**: LLM, STT, TTS, 텔레포니를 함께 다룹니다.
- **워크플로 빌더 포함**: 시각적으로 봇 흐름을 구성하기 쉽습니다.
- **프로덕션 지향**: 실제 통화/인바운드·아웃바운드 봇 시나리오에 맞춰져 있습니다.
