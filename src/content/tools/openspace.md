---
title: "OpenSpace"
description: "AI 에이전트를 위한 자기 진화 엔진입니다. Claude Code, Codex, nanobot, OpenClaw 등에 MCP 스킬 형태로 플러그인되어 스킬 자동 수정·개선·학습을 수행하며, 토큰 비용을 46% 절감하고 4.2배 더 나은 경제적 성능을 제공합니다."
category: "agent-harness"
tags: ["self-evolving", "skill-evolution", "mcp-server", "token-efficiency", "agent-orchestration", "collective-intelligence"]
githubUrl: "https://github.com/HKUDS/OpenSpace"
websiteUrl: "https://open-space.cloud"
githubStars: 6655
author: "HKUDS"
installCommand: "git clone https://github.com/HKUDS/OpenSpace.git && cd OpenSpace && pip install -e ."
compatibleAgents: ["Claude Code", "Codex", "OpenClaw", "nanobot", "Cursor"]
featured: false
icon: "Bot"
---

# OpenSpace

OpenSpace는 AI 에이전트의 스킬을 지속적으로 진화시키는 오픈소스 엔진입니다. Claude Code, Codex, OpenClaw, nanobot, Cursor 등 다양한 에이전트에 MCP 스킬 형태로 플러그인되어, 스킬 자동 수정(AUTO-FIX), 성공 패턴 기반 개선(AUTO-IMPROVE), 실제 사용 워크플로 캡처(AUTO-LEARN)를 수행합니다. 커뮤니티 사이트 [open-space.cloud](https://open-space.cloud)에서 스킬을 공유하고 탐색할 수 있습니다.

## 언제 쓰나

- AI 에이전트가 반복 작업에서 매번 같은 비용을 소모하지 않도록 최적화하고 싶을 때
- 여러 에이전트(Claude Code, Codex, OpenClaw, nanobot) 간 스킬과 경험을 공유하는 집단 지능이 필요할 때
- 스킬이 API 변화나 환경 변경에 따라 자동으로 수정·진화하도록 하고 싶을 때
- 에이전트의 토큰 소비를 줄이면서 성능을 개선하고 싶을 때

## 특징

- **자기 진화(Self-Evolution)** — 스킬이 깨지면 자동 수정(AUTO-FIX), 성공 패턴 학습으로 개선(AUTO-IMPROVE), 실제 사용에서 워크플로 캡처(AUTO-LEARN)
- **집단 에이전트 지능(Collective Intelligence)** — 하나의 에이전트가 학습한 스킬이 모든 에이전트에 즉시 공유됨
- **토큰 효율성** — GDPVal 경제 벤치마크에서 46% 적은 토큰으로 4.2배 더 나은 성능 입증
- **MCP 서버 모드** — stdio, SSE, streamable HTTP 3가지 런치 모드 지원으로 원격 호스트 연결 가능
- **멀티 채널 게이트웨이** — WhatsApp(Baileys bridge)과 Feishu(HTTP webhook) 어댑터 내장
- **품질 모니터링** — 스킬 성능, 오류율, 실행 성공률을 추적하고 일일 평가
- **액세스 제어** — 공개, 비공개, 팀 전용 스킬 공유 지원
