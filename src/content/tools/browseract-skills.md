---
title: "BrowserAct Skills"
description: "AI 에이전트가 브라우저 자동화 CLI BrowserAct를 안정적으로 쓰도록 돕는 스킬 패키지입니다. anti-bot 대응, 원격 human handoff, 병렬 세션, Skill Forge 기반 재사용 스크래핑을 지원합니다."
category: "agent-skill"
tags: ["browser-automation", "agent-skills", "web-scraping", "anti-bot", "captcha", "remote-assist", "parallel-agents", "sessions", "skill-forge", "claude-code", "codex", "cursor", "opencode"]
githubUrl: "https://github.com/browser-act/skills"
websiteUrl: "https://www.browseract.com/"
githubStars: 3069
author: "browser-act"
installCommand: "uv tool install browser-act-cli --python 3.12"
compatibleAgents: ["Claude Code", "Cursor", "VS Code", "OpenCode", "OpenClaw", "Codex", "Gemini CLI", "Hermes Agent"]
featured: false
icon: "Globe"
---

# BrowserAct Skills

BrowserAct Skills는 AI 에이전트가 BrowserAct 브라우저 자동화 CLI를 사용할 수 있게 해주는 스킬 패키지입니다. 일반적인 fetch나 headless 브라우저가 막히는 상황에서 stealth 브라우징, CAPTCHA 보조, 원격 human handoff, 다중 브라우저·다중 세션 격리를 활용해 웹 작업을 더 안정적으로 수행하도록 설계되어 있습니다.

## 언제 쓰나

- 에이전트가 JavaScript 렌더링 페이지를 열고 클릭, 입력, 스크롤, 파일 업로드, 스크린샷, 네트워크 캡처를 해야 할 때
- 일반 curl/fetch 또는 기본 브라우저 도구가 anti-bot, CAPTCHA, 로그인 상태, 동적 로딩 때문에 실패할 때
- 여러 계정이나 여러 작업을 서로 오염시키지 않고 독립 브라우저·세션으로 병렬 실행하고 싶을 때
- 에이전트가 막힌 지점에서 사용자가 모바일·데스크톱으로 직접 이어받은 뒤 다시 에이전트에게 넘기는 remote assist 흐름이 필요할 때
- 반복적인 웹 데이터 추출을 한 번 탐색한 뒤 재사용 가능한 Skill package로 굳히고 싶을 때

## 핵심 특징

- **브라우저 자동화 CLI**: `browser-act` 명령으로 페이지 열기, 상태 조회, indexed click/input, 추출, 스크린샷, 세션 관리를 수행합니다.
- **에이전트 친화 출력**: `state`가 indexed text 형식으로 상호작용 대상을 보여주므로 에이전트가 DOM을 직접 파싱하지 않고 `click 3`, `input 2 "..."`처럼 조작할 수 있습니다.
- **Anti-blocking 계층**: stealth fingerprint, TLS rotation, proxy switching, `solve-captcha`, `stealth-extract`, remote assist 같은 단계적 대응을 제공합니다.
- **세션·계정 격리**: 독립 cookies, fingerprints, proxies를 가진 cross-browser 병렬 작업과 shared login state를 쓰는 same-browser multi-session을 구분합니다.
- **Runtime skill loading**: 설치된 entry skill은 가볍게 유지하고, 에이전트는 `browser-act get-skills core --skill-version ...`로 현재 환경, 브라우저 목록, 활성 세션, 명령 reference를 받아 사용합니다.
- **Skill Forge 포함**: 반복 추출 작업은 `browser-act-skill-forge`로 사이트를 탐색해 `SKILL.md + scripts` 형태의 재사용 가능한 자동화 스킬로 생성할 수 있습니다.
- **Solutions Catalog**: Amazon, Google Maps, YouTube, Reddit, LinkedIn, Instagram 등 흔한 웹 데이터 추출 시나리오용 pre-built skills를 제공합니다.

## 빠른 시작

AI 에이전트에게 BrowserAct entry skill을 설치하게 하는 방식이 권장됩니다.

```text
Install browser-act. Skill source: https://github.com/browser-act/skills/tree/main/browser-act . Verify it works after installation.
```

수동으로 CLI를 설치하려면 `uv`를 사용합니다.

```bash
uv tool install browser-act-cli --python 3.12
browser-act --version
```

에이전트 세션에서는 먼저 런타임 가이드를 로드합니다.

```bash
browser-act get-skills core --skill-version 2.0.2
```

기본 자동화 예시는 다음과 같습니다.

```bash
# 보호된 페이지 텍스트 추출
browser-act stealth-extract https://example.com

# 브라우저 세션 기반 상호작용
browser-act --session my-task browser open <id> https://example.com
browser-act --session my-task state
browser-act --session my-task click 3
browser-act --session my-task input 2 "hi"
```

## 가격과 제한

- Chrome / Chrome-direct 기반 브라우저 자동화는 인증 없이 사용할 수 있습니다.
- Stealth browser, `stealth-extract`, `solve-captcha`, remote assist, privacy mode, Skill Forge는 로그인/API key가 필요한 기능입니다.
- README 기준으로 managed proxies와 5개를 초과하는 stealth browsers는 유료 기능입니다.
- 요구사항은 Python 3.12+, `uv`, Chrome/Chromium입니다.

## 참고

- 라이선스는 MIT입니다.
- 민감한 작업에는 skill layer의 confirmation gate가 적용됩니다. browser 생성·삭제, profile import, proxy 변경, 보안/프라이버시 토글, 로그인·폼 제출·파일 업로드 같은 작업은 명시적 사용자 승인이 필요합니다.
- README 기준으로 쿠키, 로그인 세션, 페이지 콘텐츠, credentials, 브라우저 profile data는 로컬에 저장·처리되며, CAPTCHA 해결 시 challenge image만 외부로 전송될 수 있습니다.
