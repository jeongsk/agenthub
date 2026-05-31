---
title: "Kami"
description: "AI 에이전트가 전문 문서(PDF, 슬라이드, 랜딩 페이지)를 일관된 디자인으로 제작하게 해 주는 디자인 시스템입니다. 양피지 배경·잉크 블루 악센트·serif 타이포그래피로 정리된 10가지 템플릿을 제공합니다."
category: "agent-skill"
tags: ["design-system", "document-generation", "pdf", "slides", "claude-code", "codex", "templates", "typography"]
githubUrl: "https://github.com/tw93/Kami"
websiteUrl: "https://kami.tw93.fun"
githubStars: 6615
author: "tw93"
installCommand: "npx skills add tw93/kami -a claude-code -g -y"
compatibleAgents: ["Claude Code", "Codex", "OpenCode"]
icon: "FileText"
---

# Kami

Kami(紙, かみ)는 AI 에이전트가 전문 문서를 일관된 디자인으로 제작하게 해 주는 에이전트 스킬입니다. 내용은 AI가 쓰고, Kami가 종이에 담는 역할을 합니다.

Kaku(코드) · Waza(습관) · Kami(문서) 3부작 중 하나입니다.

## 언제 쓰나

- AI에게 보고서/제안서 작성과 함께 전문적인 레이아웃까지 맡기고 싶을 때
- 세션마다 달라지는 기본 문서 레이아웃을 통일하고 싶을 때
- PDF, 슬라이드, 랜딩 페이지 등 다양한 출력 형태를 같은 디자인 시스템으로 맞추고 싶을 때
- AI가 만든 문서를 바로 '배포할 수 있는 형태'로 받고 싶을 때

## 특징

- **10가지 템플릿**: One-Pager, Long Doc, Letter, Portfolio, Resume, Slides, Equity Report, Changelog, Landing Page (EN/CN)
- **일관된 디자인 시스템**: 양피지 캔버스(`#f5f4ed`), 단일 악센트 ink blue(`#1B365D`), serif 위주의 타이포그래피
- **다국어 폰트 지원**: 영어(Charter), 중국어(TsangerJinKai02), 일본어(YuMincho)
- **Claude Code / Codex / OpenCode** 등 다양한 에이전트에서 바로 사용 가능
- **브랜드 프로필**(`~/.config/kami/brand.md`)로 회사/개인 스타일 고정 가능
- **Kaku**(코드) 및 **Waza**(습관)와 함께 3부작 시리즈로 연계 운영 가능
