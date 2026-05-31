---
title: "CloakBrowser"
description: "브라우저 지문을 조정한 스텔스 Chromium으로, Playwright/Puppeteer 기반 웹 자동화를 더 안정적으로 돌리게 돕습니다."
category: "agent-component"
tags: ["browser-automation", "chromium", "playwright", "puppeteer", "stealth"]
githubUrl: "https://github.com/CloakHQ/CloakBrowser"
githubStars: 22748
author: "CloakHQ"
installCommand: "pip install cloakbrowser"
compatibleAgents: ["Claude Code", "Cursor", "Codex", "OpenCode", "Hermes Agent"]
featured: true
icon: "Globe"
---

# CloakBrowser

CloakBrowser는 일반적인 브라우저 자동화보다 더 강한 탐지 회피 특성을 갖춘 Chromium 기반 런타임입니다. Playwright나 Puppeteer와 비슷한 방식으로 호출할 수 있으면서도, 브라우저 지문과 자동화 신호를 더 적극적으로 조정하는 쪽에 초점이 있습니다.

## 핵심 포인트

- **Playwright/Puppeteer 호환성**: 기존 자동화 코드를 크게 바꾸지 않고 연결하기 쉽습니다.
- **스텔스 Chromium**: 브라우저 지문을 표면 설정이 아니라 소스 레벨에서 조정합니다.
- **바로 쓰는 설치 흐름**: Python, JavaScript, Docker 경로를 모두 제공합니다.
- **프로필/세션 운영**: 반복 로그인이나 장기 작업에 맞는 브라우저 프로필 운용도 지원합니다.

## 이런 경우에 유용합니다

- 자동화된 브라우저 작업이 자주 차단될 때
- 일반 Playwright 설정으로는 안정성이 부족할 때
- 세션 유지, 프로필 분리, 브라우저 지문 통제가 중요할 때
- 에이전트가 웹 UI를 다뤄야 하지만 탐지 저항성이 필요할 때

## 참고

- 이 저장소는 단순한 브라우저 스크립트 라이브러리라기보다, *에이전트가 웹 자동화에 쓰는 스텔스 브라우저 런타임*에 가깝습니다.
- 그래서 이 레지스트리에서는 `agent-component`로 분류합니다.
