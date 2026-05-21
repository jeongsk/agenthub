---
title: "Gemini Web Search Skill"
description: "Gemini 에이전트에 실시간 웹 검색, URL 파싱, 본문 추출 기능을 추가하는 에이전트 스킬입니다."
category: "agent-skill"
tags: ["google", "gemini", "search", "web-crawler", "api"]
githubUrl: "https://github.com/google-gemini/gemini-skills"
author: "google-gemini"
installCommand: "npm install @gemini/web-search-skill"
compatibleAgents: ["Gemini"]
featured: true
icon: "Search"
---

# Gemini Web Search Skill

Gemini Web Search Skill은 Gemini 런타임에 실시간 웹 탐색, 링크 크롤링, Markdown 본문 추출 기능을 추가합니다.

## 기능

- **Google Search API 연동**: 검색 인덱스에 직접 질의합니다.
- **본문 추출**: 링크를 따라가 핵심 본문을 Markdown으로 정리합니다.
- **자동 청킹**: 긴 문서를 에이전트 컨텍스트에 맞게 나눕니다.
- **인용 처리**: 답변에 필요한 링크와 출처 정보를 구성합니다.
