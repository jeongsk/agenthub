---
title: "TrendRadar"
description: "뉴스·트렌드·여론을 RSS와 여러 채널에서 모아 키워드별로 추적하고, AI 요약/번역과 다채널 푸시를 붙여 쓰는 자가 호스팅 모니터링 컴포넌트입니다."
category: "mcp-server"
tags: ["news", "rss", "trend-monitoring", "alerts", "mcp", "ai-summarization", "notifications"]
githubUrl: "https://github.com/sansan0/TrendRadar"
websiteUrl: "https://sansan0.github.io/TrendRadar/"
githubStars: 58619
author: "sansan0"
installCommand: "git clone https://github.com/sansan0/TrendRadar.git && cd TrendRadar && docker compose up -d"
compatibleAgents: ["Claude", "Cursor", "Gemini", "OpenAI", "Windsurf"]
featured: true
icon: "Radar"
---

# TrendRadar

TrendRadar는 뉴스, 커뮤니티 핫이슈, RSS 피드, 키워드 알림을 한곳에 모아 보여주는 자가 호스팅 트렌드 모니터링 허브입니다. AI가 제목을 정리하고 번역·요약을 보강해 주며, 결과를 Telegram, Slack, Feishu, Bark, ntfy, 이메일 같은 채널로 바로 푸시할 수 있습니다.

## 언제 쓰나

- 내가 관심 있는 키워드만 골라서 뉴스와 트렌드를 받고 싶을 때
- 여러 플랫폼의 정보를 한 번에 모아 AI 요약으로 보고 싶을 때
- Telegram, Slack, Feishu, 이메일, Bark, ntfy 같은 채널로 자동 푸시하고 싶을 때
- MCP 기반 분석을 붙여 자연어로 트렌드 탐색이나 여론 분석을 하고 싶을 때
- 데이터는 로컬이나 자가 호스팅으로 두고, 알림과 분석만 유연하게 돌리고 싶을 때

## 핵심 특징

- 다중 소스 수집: RSS, 뉴스, 트렌드성 피드를 한곳에 모음
- AI 보강: 요약, 번역, 간단한 분석을 함께 제공
- 키워드 필터링: 관심 주제만 선별해 받기 쉬움
- 다채널 알림: Telegram, Slack, Feishu, 이메일, Bark, ntfy, WeCom, DingTalk 등 지원
- 배포 유연성: Docker, GitHub Actions, GitHub Pages 조합으로 운영 가능
- MCP 지원: AI 클라이언트에서 분석 서버로 연결해 자연어 질의에 활용 가능
