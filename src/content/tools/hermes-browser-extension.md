---
title: "Hermes Browser Extension"
description: "Chrome/Edge/Chromium MV3 사이드패널로 Hermes Agent 런타임에 웹 페이지 컨텍스트를 연결하는 커뮤니티 확장 프로그램. 활성 탭 제목·URL·본문·선택文本을 Hermes 세션에 전달하고, 로컬/리모트 Hermes API 서버 또는 대시보드 WebSocket 모드를 지원한다."
category: "browser-extension"
tags: ["ai-agent", "browser-extension", "chrome-extension", "edge-extension", "hermes-agent", "local-first", "nous-research", "sidepanel"]
githubUrl: "https://github.com/abundantbeing/hermes-browser-extension"
githubStars: 579
author: "abundantbeing"
installCommand: "git clone https://github.com/abundantbeing/hermes-browser-extension.git && cd hermes-browser-extension && npm install && npm run build"
compatibleAgents: ["Hermes Agent", "Claude Code", "Codex", "Gemini", "OpenCode"]
featured: false
icon: "Globe"
---

Hermes Browser Extension은 브라우저 채팅 봇이 **아닌**, Hermes Agent 런타임의 크롬/엣지/크romium 사이드패널 통합 도구입니다. 로컬 또는 리모트 Hermes Gateway/API 서버에 연결되어 설정된 모델, 도구, 스킬, 세션, 메모리, MCP 서버를 그대로 활용합니다.

## 주요 기능

- **활성 탭 컨텍스트 수집**: 제목, URL, 본문, 선택文本, 메타데이터, 헤딩, 폼, 링크, 버튼 등을 Hermes 세션에 전달
- **로컬/리모트 Hermes Gateway 연결**: 기본값 `http://127.0.0.1:8642`, 리모트 HTTPS 프록시/Tailscale/VPN도 지원
- **대시보드 WebSocket 모드**: API 키 없이 Hermes 대시보드 탭에서 소켓 연결 가능
- **모델·스킬·세션 자동 동기화**: 연결 후 `/v1/models`, `/v1/skills`, `/api/sessions` 등 실시간 로드
- **음성 딕테이션**: Hermes STT 또는 Browser Speech 폴백 지원
- **읽기 전용 보안 모델**: `debugger`, `nativeMessaging`, 클릭/입력/폼제출, 쿠키, 히스토리 권한 없음
- **테마 지원**: Light/Dark/System + Nous, Midnight, Ember, Mono, Cyberpunk, Slate 테마
- **단축키**: `Alt+H` (기본값, `chrome://extensions/shortcuts`에서 변경 가능)
- **GitHub PR/Issue 자동 리뷰**: `npm run review:watch`로 로컬 폴링 및 Hermes AI 리뷰 실행

## 설치 요구사항

- Hermes Agent 설치 및 Gateway/API 서버 활성화
- Node.js 20+
- Chrome 114+ / Edge / Brave / Comet 등 Chromium 기반 브라우저 (Side Panel API 필요)
- Firefox / Safari는 프리뷰 단계

## 설치 및 로드

1. `git clone` → `npm install` → `npm run build`로 `dist/` 생성
2. `chrome://extensions` 또는 `edge://extensions`에서 Developer 모드 활성화
3. **Load unpacked** → `dist/` 폴더 선택 (루트가 아닌 `dist/`여야 함)
4. Hermes 확장 아이콘 클릭 또는 `Alt+H`로 사이드패널 열기
5. **Connect to Hermes** 또는 **Manual setup**으로 로컬/리모트 게이트웨이 연결

## Caveats

- Public alpha 상태로 Chrome Web Store 미출시 — 언팩로드 방식으로만 설치
- 리모트 API 서버 노출 시 Hermes 런타임과 도구에 직접 접근 가능하므로 HTTPS 역프록시/Tailscale/VPN 사용 권장
- 브라우저 컨트롤(클릭/입력/스크린샷)은 지원하지 않으며, 이는 `computer_use`/`cua-driver` 기반 네이티브 데스크톱 제어로 별도 처리
- 마이크 권한은 Chromium 사이드패널 제약으로 인해 별도 음성 탭 폴백 패턴 사용