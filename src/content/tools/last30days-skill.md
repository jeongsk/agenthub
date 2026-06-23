---
title: "last30days"
description: "Reddit, X, YouTube, TikTok, HN, Polymarket, GitHub, 웹의 최근 30일 신호를 병렬 검색하고 참여도 기반으로 요약하는 AI 에이전트 리서치 스킬입니다."
category: "agent-skill"
tags: ["research", "deep-research", "trend-analysis", "social-media", "reddit", "twitter", "youtube", "tiktok", "polymarket", "web-search"]
githubUrl: "https://github.com/mvanhorn/last30days-skill"
githubStars: 45837
author: "mvanhorn"
installCommand: "npx skills add mvanhorn/last30days-skill -g"
compatibleAgents: ["Claude Code", "Codex", "Cursor", "Gemini", "Copilot", "OpenClaw"]
featured: false
icon: "Search"
---

# last30days

`last30days`는 최근 30일 동안 사람들이 실제로 말하고 반응한 공개 신호를 모아 AI 에이전트가 바로 읽을 수 있는 브리핑으로 정리하는 리서치 스킬입니다. Reddit upvotes, X likes, YouTube/TikTok/Instagram transcripts, Hacker News 반응, Polymarket odds, GitHub 활동, 웹 검색 결과를 함께 보고 “검색엔진의 편집 신호”보다 “사람들의 참여 신호”를 중심으로 요약합니다.

## 언제 쓰나

- 인물, 회사, 제품, 이슈의 최근 흐름을 회의 전에 빠르게 파악하고 싶을 때
- Reddit·X·YouTube·HN·Polymarket처럼 출처가 흩어진 최신 반응을 한 번에 비교하고 싶을 때
- 커뮤니티 반응, 시장 예측, 소셜 바이럴 신호를 함께 반영한 브리핑이 필요할 때
- 제품/도구 비교, 채용 시그널 분석, 여행·이벤트·뉴스 상황 파악처럼 “최근 30일” 맥락이 중요한 질문을 던질 때
- Markdown뿐 아니라 공유 가능한 HTML brief를 만들어 Slack, Notion, 이메일에 붙이고 싶을 때

## 핵심 특징

- **멀티소스 병렬 조사**: Reddit, X/Twitter, YouTube, TikTok, Instagram Reels, Hacker News, Polymarket, GitHub, Digg, Threads, Bluesky, Perplexity, Web 등을 조합합니다.
- **참여도 기반 랭킹**: upvotes, likes, views, comments, market volume 같은 실제 반응을 검색 신호로 활용합니다.
- **지능형 사전 검색**: 제품명·인물명에서 관련 핸들, subreddit, 채널, 경쟁자, 커뮤니티를 먼저 추론해 검색 범위를 잡습니다.
- **비교와 클러스터링**: 여러 소스에서 반복되는 같은 이야기를 하나의 클러스터로 묶고, `A vs B` 비교를 단일 패스로 처리합니다.
- **공유 가능한 brief**: `--emit=html` 또는 자연어 요청으로 self-contained HTML 브리핑을 저장할 수 있습니다.

## 설치

Claude Code에서는 marketplace 플러그인 방식이 권장됩니다.

```text
/plugin marketplace add mvanhorn/last30days-skill
/plugin install last30days
```

Codex, Cursor, Copilot, Gemini CLI 등 Agent Skills 호스트에서는 다음처럼 설치합니다.

```bash
npx skills add mvanhorn/last30days-skill -g
```

## 사용 예시

```text
/last30days Peter Steinberger
/last30days OpenClaw vs Hermes vs Paperclip
/last30days AI video tools
/last30days Listen Labs --hiring-signals
/last30days Cursor IDE, give me a shareable HTML brief
```

## 참고

- Reddit, Hacker News, Polymarket, GitHub은 기본적으로 바로 동작하며, X·YouTube·TikTok 등은 setup wizard나 API key/브라우저 세션으로 확장됩니다.
- 런타임 스킬 사양은 저장소의 `skills/last30days/SKILL.md`가 최신 동작의 source of truth입니다.
- 라이선스는 MIT입니다.
