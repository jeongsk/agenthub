---
title: "Chrome DevTools MCP"
description: "실행 중인 Chrome을 MCP 서버로 제어하고 검사하는 도구입니다. 디버깅, 성능 분석, 네트워크 확인, 스크린샷 점검처럼 브라우저 맥락이 중요한 작업에 유용합니다."
category: "mcp-server"
tags: ["mcp", "chrome", "devtools", "browser-debugging", "performance"]
githubUrl: "https://github.com/ChromeDevTools/chrome-devtools-mcp"
author: "ChromeDevTools"
installCommand: "npx -y chrome-devtools-mcp@latest"
compatibleAgents: ["Claude Code", "Cursor", "Copilot"]
featured: true
icon: "MonitorSmartphone"
---

# Chrome DevTools MCP

Chrome DevTools MCP는 실행 중인 Chrome 브라우저를 MCP 서버로 연결해, 에이전트가 브라우저 상태를 직접 검사하고 조작할 수 있게 해 주는 도구입니다. 자동화 테스트보다 한 단계 더 깊게 들어가서 디버깅, 성능 분석, 네트워크 확인, 콘솔 로그 확인 같은 작업에 특히 잘 맞습니다.

## 핵심 포인트

- **실행 중인 Chrome 제어**: 현재 열려 있는 브라우저 맥락을 그대로 다룹니다.
- **디버깅에 강함**: 콘솔, 네트워크, 스크린샷, 성능 trace를 확인하기 좋습니다.
- **MCP 표준**: 여러 에이전트 클라이언트에서 공통 방식으로 연결할 수 있습니다.
- **기본/슬림 모드**: 가벼운 브라우저 작업만 필요한 경우 슬림 모드도 제공합니다.

## 이런 경우에 유용합니다

- 실제 브라우저 세션을 보면서 디버깅해야 할 때
- 페이지 렌더링, 네트워크, 콘솔 문제를 함께 확인하고 싶을 때
- 성능 trace와 사용자 경험 지표를 에이전트가 읽어야 할 때
- 단순 스크립트보다 Chrome DevTools 수준의 접근이 필요할 때

## 참고

- 이 저장소는 브라우저 자동화 프레임워크라기보다 *브라우저 관찰·조작용 MCP 서버*에 가깝습니다.
- 그래서 이 레지스트리에서는 `mcp-server`로 분류하는 편이 가장 자연스럽습니다.
