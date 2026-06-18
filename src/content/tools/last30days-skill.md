---
title: "last30days"
description: "Reddit, X, YouTube, HN, Polymarket, 웹을 한 번에 훑어 최근 30일 흐름을 점수화하는 에이전트 스킬입니다. 인물 조사나 이슈 브리핑처럼 최신 신호가 중요할 때 유용합니다."
category: "agent-skill"
tags: ["research", "trend-analysis", "social-media", "search", "agent-skill", "web", "briefing"]
githubUrl: "https://github.com/mvanhorn/last30days-skill"
githubStars: 44386
author: "mvanhorn"
installCommand: "npx skills add mvanhorn/last30days-skill -g"
compatibleAgents: ["Claude Code", "Codex", "Gemini", "Hermes Agent"]
icon: "Search"
---

# last30days

`last30days`는 최근 30일 동안의 공개 신호를 모아 AI가 바로 읽을 수 있는 브리핑으로 정리하는 스킬입니다. 플랫폼별 반응을 따로 보는 대신, Reddit·X·YouTube·Hacker News·Polymarket 같은 소스를 한 번에 비교하고 요약할 때 적합합니다.

## 언제 쓰나

- 인물, 회사, 제품의 최근 흐름을 빠르게 파악하고 싶을 때
- 출처가 흩어진 최신 이슈를 에이전트가 한 번에 조사해야 할 때
- 소셜 반응, 커뮤니티 합의, 시장 신호를 함께 보고 싶을 때
- 회의 전 브리핑이나 세일즈 리서치 초안을 만들고 싶을 때

## 핵심 특징

- 여러 공개 소스를 병렬로 훑어 최신 신호를 모읍니다.
- 단순 검색이 아니라 가중치가 반영된 요약으로 정리합니다.
- 에이전트 호스트에서 바로 설치해 사용할 수 있습니다.
- 사람 읽기용 요약과 에이전트용 조사 흐름을 함께 염두에 둔 스킬입니다.
