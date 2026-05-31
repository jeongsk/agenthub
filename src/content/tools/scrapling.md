---
title: "Scrapling"
description: "페이지 변경에 적응하는 웹 스크래핑 프레임워크입니다. 안티봇 대응과 크롤링 기능을 함께 제공해 에이전트가 안정적으로 데이터를 수집할 때 유용합니다."
category: "agent-skill"
tags: ["web-scraping", "crawler", "python", "playwright", "anti-bot"]
githubUrl: "https://github.com/D4Vinci/Scrapling"
githubStars: 56049
author: "D4Vinci"
installCommand: "pip install scrapling"
compatibleAgents: ["Claude", "Cursor", "Continue", "Cline"]
featured: true
icon: "Search"
---

# Scrapling

Scrapling은 현대적인 웹 스크래핑 프레임워크입니다. 단일 요청부터 대규모 크롤링까지 다루며, 페이지 구조가 바뀌어도 요소를 다시 찾는 적응형 파싱과 안티봇 대응을 함께 제공합니다.

## 언제 쓰나

- 사이트 구조가 자주 바뀌는 페이지를 안정적으로 수집해야 할 때
- Playwright 기반의 동적 페이지와 스텔스 수집이 필요할 때
- 프록시 회전, 스파이더, 재개 가능한 크롤링이 필요한 경우
- 에이전트에 스크래핑 기능을 MCP 형태로 붙이고 싶을 때

## 특징

- 적응형 셀렉터로 페이지 변경에 대응합니다.
- 스텔스/동적 fetcher와 스파이더가 함께 제공됩니다.
- 프로덕션 크롤링에 필요한 프록시 회전과 pause/resume 흐름을 지원합니다.
- README 기준으로 `agent-skill` 디렉터리와 MCP 관련 문서도 포함합니다.


