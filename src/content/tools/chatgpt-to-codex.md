---
title: "ChatGPT To Codex"
description: "ChatGPT 웹에 로컬 코딩 손발을 붙이는 macOS/Windows용 MCP + Actions 런타임. 선택한 프로젝트 폴더 안에서 파일 읽기, 코드 검색, 패치 적용, 테스트 실행, 브라우저·데스크톱 스크린샷 증거 수집을 수행한다."
category: "desktop-utility"
tags: ["chatgpt", "codex", "mcp", "actions", "local-first", "desktop-app", "macos", "windows", "coding-agent", "e2e-testing", "screenshots"]
githubUrl: "https://github.com/ezBuilder/chatgpt2codex"
githubStars: 11
author: "ezBuilder"
installCommand: "Download from https://github.com/ezBuilder/chatgpt2codex/releases/tag/v0.1.2"
compatibleAgents: ["ChatGPT", "Codex", "Claude Code", "Hermes Agent", "OpenCode"]
featured: false
icon: "MonitorSmartphone"
---

## ChatGPT To Codex란?

ChatGPT To Codex는 ChatGPT가 사용자의 로컬 프로젝트에서 실제 코딩 루프를 수행할 수 있게 해 주는 **로컬 MCP 및 Actions 런타임**입니다. 사용자가 선택한 프로젝트 폴더 안에서 파일을 읽고, 코드를 검색하고, 패치를 적용하고, 테스트를 실행하며, 브라우저나 데스크톱 앱 화면을 캡처해 결과 증거를 돌려줄 수 있습니다.

핵심 모델은 간단합니다.

```text
ChatGPT thinks. Your computer acts. You review the result.
```

## 주요 기능

- **로컬 프로젝트 선택**: 소스 트리를 업로드하지 않고 사용자가 지정한 프로젝트 폴더를 대상으로 작업
- **MCP + ChatGPT Actions 연결**: 로컬 앱이 실행하는 `/mcp` 커넥터 URL을 ChatGPT Apps / Connectors에 등록
- **코딩 에이전트 루프**: 파일 목록 조회, 규칙 파일 읽기, 코드 검색, 라인 단위 읽기, 파일 생성, 해시/라인 컨텍스트 기반 패치 적용
- **검증 실행**: 프로젝트 명령과 테스트를 실행하고 결과를 요약
- **시각적 E2E 증거**: 웹 앱 브라우저 화면이나 macOS/Windows 데스크톱 앱 화면을 캡처해 inline screenshot proof 반환
- **보안 제어**: 선택한 프로젝트 범위, owner token 승인, 민감값 redaction, 파괴적·네트워크·민감 작업 승인 게이트
- **다국어 데스크톱 UI**: 영어, 한국어, 일본어, 중국어, 스페인어, 프랑스어 등 여러 언어의 메뉴바/트레이 UI 문자열 제공

## 언제 쓰나

- ChatGPT 웹에서 로컬 저장소를 읽고 수정하게 하고 싶을 때
- “패치 만들어줘”에서 멈추지 않고 테스트 실행과 스크린샷 증거까지 받고 싶을 때
- 클라우드 업로드 없이 로컬 머신에 있는 프로젝트만 대상으로 코딩 에이전트 워크플로를 돌리고 싶을 때
- Tauri/데스크톱 앱처럼 화면 증거가 필요한 E2E 확인을 ChatGPT와 연결하고 싶을 때

## 설치 및 시작

현재 공개 릴리스는 `v0.1.2`입니다.

- **macOS**: 릴리스 페이지에서 `chatgpt2codex-0.1.2.pkg` 다운로드 후 설치
- **Windows**: 릴리스 페이지에서 `chatgpt2codex-0.1.2-windows-setup.exe` 다운로드 후 설치
- **Linux**: 공개 패키지는 없고 개발자 경로만 제공

설치 후 데스크톱 앱에서 프로젝트 폴더를 선택하고, ChatGPT web connector를 활성화한 뒤 `/mcp` 커넥터 URL을 ChatGPT Apps / Connectors에 등록합니다. 앱이 보여주는 Owner Token으로 연결을 승인해야 합니다.

## 개발자용 빌드

소스에서 직접 빌드하려면 다음 흐름을 사용합니다.

```bash
npm ci
npm run typecheck
npm test
npm run build
```

macOS 패키지는 다음 명령으로 생성합니다.

```bash
npm run macos:package
```

## 주의사항

- 현재 릴리스는 macOS와 Windows 공개 패키지를 제공하며, Linux는 개발자용 경로만 있습니다.
- macOS 패키지는 README 기준 unsigned PKG일 수 있어 Gatekeeper가 차단하면 Control-click → Open 또는 Privacy & Security 확인이 필요할 수 있습니다.
- Owner Token은 비밀번호처럼 취급해야 하며, 이슈·스크린샷·공유 로그에 노출하면 안 됩니다.
- 커넥터 URL을 공개적으로 노출하지 마세요. 터널과 토큰 모델을 이해한 경우에만 ChatGPT web connector를 외부 접근 가능하게 구성해야 합니다.
- 이 도구는 신뢰한 로컬 개발 프로젝트를 대상으로 설계되었으며, 임의의 공개 자동화나 무제한 원격 실행용 런타임이 아닙니다.
