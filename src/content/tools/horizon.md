---
title: "Horizon"
description: "AI로 뉴스와 소스를 모아 일일 브리핑으로 정리하는 오픈소스 뉴스 레이더입니다. Hacker News, RSS, Reddit, Telegram, GitHub 등을 한 파이프라인에서 수집·중복제거·요약해서 개인화된 데일리 브리핑을 만들고 싶을 때 유용합니다."
category: "agent-infrastructure"
tags: ["news", "briefing", "rss", "hacker-news", "reddit", "telegram", "github", "email", "webhook", "llm"]
githubUrl: "https://github.com/Thysrael/Horizon"
websiteUrl: "https://thysrael.github.io/Horizon/"
githubStars: 5252
author: "Thysrael"
installCommand: "git clone https://github.com/Thysrael/Horizon.git && cd Horizon && uv sync"
compatibleAgents: ["Claude", "GPT", "Gemini", "DeepSeek", "Ollama"]
featured: false
icon: "Radar"
---

# Horizon

Horizon은 AI 기반 뉴스 레이더입니다. 관심 있는 소스를 모아두면 매일 새 글을 수집하고, 중복을 제거하고, 점수를 매기고, 배경 설명과 커뮤니티 반응까지 붙여서 데일리 브리핑으로 정리해 줍니다.

## 언제 쓰나

- Hacker News, RSS, Reddit, Telegram, GitHub 같은 소스를 한 번에 모니터링하고 싶을 때
- 하루치 뉴스 중에서 먼저 볼 만한 것만 AI로 추려 보고 싶을 때
- 영어/중국어 브리핑을 같은 소스셋으로 함께 만들고 싶을 때
- GitHub Pages, 이메일, 웹훅, 메신저로 자동 배포하는 뉴스 파이프라인이 필요할 때
- 개인 취향에 맞는 뉴스 레이더를 직접 운영하고 싶을 때

## 주요 기능

- **소스 수집** — Hacker News, RSS, Reddit, Telegram, X, GitHub, OpenBB 금융 뉴스까지 지원
- **AI 스코어링** — Claude, GPT, Gemini, DeepSeek, Doubao, MiniMax, Ollama 등으로 점수화
- **중복 제거** — 같은 이슈를 여러 소스에서 잡아도 하나로 묶어 정리
- **배경 설명** — 낯선 개념, 회사, 프로젝트, 기술 용어에 대해 추가 맥락 제공
- **댓글 요약** — Hacker News, Reddit 등 커뮤니티 반응을 함께 요약
- **다국어 발행** — 영어와 중국어 데일리 브리핑 생성
- **배포 채널** — GitHub Pages, 이메일, Feishu/Lark, DingTalk, Slack, Discord, webhook 전송
- **설정 마법사** — 소스와 임계값, 모델, 언어, 배포 채널을 한 JSON 설정으로 조정
- **MCP 출력** — 생성 결과를 MCP로도 연동 가능
