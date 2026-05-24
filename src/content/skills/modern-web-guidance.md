---
title: "Modern Web Guidance"
description: "최신 웹 플랫폼 API와 구현 패턴을 에이전트에 주입하는 공개 Agent Skills 저장소입니다. 오래된 JavaScript 우회 대신 성능, 접근성, 네이티브 API 중심 구현이 필요할 때 유용합니다."
category: "agent-skill"
tags: ["web-platform", "web-api", "javascript", "css", "accessibility", "performance"]
githubUrl: "https://github.com/GoogleChrome/modern-web-guidance"
author: "GoogleChrome"
installCommand: "npx modern-web-guidance@latest install"
compatibleAgents: ["Claude Code", "Cursor", "Gemini", "Codex", "GitHub Copilot"]
featured: true
icon: "Sparkles"
---

# Modern Web Guidance

Google Chrome 팀이 공개한 웹 플랫폼 가이드 저장소입니다. 최신 브라우저 API와 모범 사례를 스킬 형태로 주입해, 에이전트가 레거시 우회 대신 네이티브 기능과 현대적인 패턴을 우선하도록 돕습니다.

## 언제 쓰나

- 다이얼로그, 팝오버, 뷰 트랜지션, 컨테이너 쿼리처럼 최신 웹 기능을 적용할 때
- 접근성과 성능을 같이 챙겨야 할 때
- 에이전트가 오래된 JavaScript 패턴으로 돌아가는 것을 막고 싶을 때
- 웹 UI를 더 가볍고, 표준 API 중심으로 작성하게 만들고 싶을 때

## 특징

- `npx modern-web-guidance@latest install`로 설치할 수 있습니다.
- `search` / `retrieve` CLI로 필요한 가이드를 바로 찾을 수 있습니다.
- Claude, Cursor, Gemini, Codex, GitHub Copilot 계열 워크플로에 맞게 쓸 수 있습니다.
