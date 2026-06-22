---
title: "agbrowse"
description: "AI 에이전트를 위한 독립형 Chrome/CDP 브라우저 자동화 CLI입니다. MCP 서버 없이 짧은 터미널 명령으로 페이지 관찰, ref 기반 조작, 콘솔·네트워크 진단, 웹 AI 세션 실행을 수행합니다."
category: "cli-utility"
tags: ["browser-automation", "cdp", "chrome", "web-ai", "cli", "ai-agent"]
githubUrl: "https://github.com/lidge-jun/agbrowse"
websiteUrl: "https://lidge-jun.github.io/agbrowse/"
githubStars: 155
author: "lidge-jun"
installCommand: "npm install -g agbrowse"
compatibleAgents: ["Claude Code", "Codex", "Hermes Agent", "OpenCode"]
featured: false
icon: "Globe"
---

# agbrowse

agbrowse는 AI 에이전트가 브라우저 작업을 작은 터미널 명령으로 나눠 수행할 수 있게 해 주는 독립형 Chrome/CDP 자동화 CLI입니다. 장기 실행 MCP 서버 없이 같은 Chrome DevTools Protocol 엔드포인트에 재연결하면서 페이지를 관찰하고, 안정적인 ref로 조작하고, 스크린샷·콘솔·네트워크 증거를 수집합니다.

## 언제 쓰나

- 에이전트에게 실제 Chrome 탭을 열고 탐색·클릭·입력·스크린샷 수집을 맡기고 싶을 때
- MCP 서버를 계속 띄우지 않고 CLI 명령만으로 브라우저 자동화를 붙이고 싶을 때
- ChatGPT, Gemini, Grok 같은 웹 UI 세션을 보내고 폴링하는 워크플로가 필요할 때
- 웹 리서치나 디버깅 결과를 콘솔·네트워크·DOM 증거와 함께 남기고 싶을 때
- CDP 기반 브라우저 상태를 `BROWSER_AGENT_HOME` 아래에 유지하며 재현 가능한 작업 로그를 만들고 싶을 때

## 핵심 특징

- **DOM/ref 기반 제어**: `snapshot --interactive`로 안정적인 참조를 확인한 뒤 클릭·입력을 수행합니다.
- **증거 중심 진단**: 스크린샷, 콘솔 로그, 네트워크, DOM 상태를 CLI에서 수집합니다.
- **웹 AI 실행**: ChatGPT, Gemini, Grok 웹 UI에 프롬프트를 제출하고 장기 실행 세션을 나중에 poll할 수 있습니다.
- **적응형 URL fetch**: 단일 후보 URL을 공개 엔드포인트, 직접 fetch, 브라우저 렌더링 등 단계적으로 읽습니다.
- **스킬 배포**: `browser`, `web-ai`, `vision-click` 계열 스킬을 cli-jaw나 Codex 스킬 루트에 설치하는 용도를 지원합니다.

## 빠른 시작

```bash
npm install -g agbrowse
agbrowse --help
agbrowse start
agbrowse navigate "https://example.com"
agbrowse snapshot --interactive --max-nodes 120
```

웹 AI 세션 예시:

```bash
agbrowse web-ai query \
  --vendor chatgpt \
  --url https://chatgpt.com/ \
  --inline-only \
  --prompt "Reply exactly AGBROWSE_OK"
```

## 참고

- Node.js 18+와 Chrome/Chromium/Brave가 필요합니다.
- 기본 CDP 포트는 `9222`이며, `--port` 또는 `CDP_PORT`로 바꿀 수 있습니다.
- CAPTCHA 우회, stealth, 계정 권한 보장은 범위 밖입니다.
- 패키지 메타데이터 기준 라이선스는 MIT입니다.
