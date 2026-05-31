---
title: "Webwright"
description: "터미널에서 Playwright 브라우저 세션을 띄워 긴 웹 작업을 코드로 풀어내는 브라우저 에이전트 프레임워크입니다. 페이지를 보면서 스크립트를 작성하고 반복 검증할 때 유용합니다."
category: "agent-framework"
tags: ["browser-agent", "playwright", "web-automation", "terminal", "python", "swe"]
githubUrl: "https://github.com/microsoft/Webwright"
websiteUrl: "https://microsoft.github.io/Webwright/"
githubStars: 4540
author: "microsoft"
installCommand: "pip install -e . && playwright install chromium"
compatibleAgents: ["Claude Code", "Codex", "Hermes Agent", "OpenCode"]
featured: true
icon: "Globe"
---

# Webwright

Webwright는 터미널에서 브라우저를 띄워 웹 작업을 코드로 수행하게 만드는 브라우저 에이전트 프레임워크입니다. 모델이 페이지를 직접 클릭하는 대신, 필요한 순간에 스크린샷과 상태를 확인하고 Playwright 스크립트를 작성해 긴 웹 작업을 끝까지 밀어붙이도록 설계되어 있습니다.

## 언제 쓰나

- 웹 폼 입력, 검색, 예약, 수집처럼 단계가 긴 작업을 에이전트에게 맡기고 싶을 때
- 브라우저 상호작용을 한 번씩 클릭하는 방식보다 코드 중심으로 재현 가능하게 만들고 싶을 때
- 긴 웹 작업을 디버깅 가능한 Python 스크립트로 남기고 싶을 때
- Claude Code, Codex 같은 코딩 에이전트에 브라우저 실행 능력을 붙이고 싶을 때
- Playwright 기반의 최소한의 브라우저 에이전트 하네스를 찾고 있을 때

## 핵심 특징

- 터미널에서 브라우저 세션을 띄워 웹 작업을 수행합니다.
- 상태/스크린샷은 필요할 때만 확인하는 구조입니다.
- 실행 결과와 스크린샷을 디스크에 남겨 재현과 디버깅이 쉽습니다.
- OpenAI, Anthropic, OpenRouter 백엔드를 지원합니다.
- Claude Code, Codex, Hermes, OpenClaw와의 통합을 지향합니다.
- 플러그인과 스킬 형태로도 사용할 수 있습니다.
