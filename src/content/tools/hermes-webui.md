---
title: "Hermes WebUI"
description: "세션 간 컨텍스트를 유지하는 자율 AI 에이전트 Hermes를 웹·모바일에서 사용할 수 있게 해 주는 셀프호스팅 웹 인터페이스입니다."
category: "agent-infrastructure"
tags: ["ai-agent", "web-ui", "self-hosted", "persistent-memory", "multi-provider"]
githubUrl: "https://github.com/nesquena/hermes-webui"
websiteUrl: "https://get-hermes.ai/"
githubStars: 9696
author: "nesquena"
installCommand: "docker compose up -d"
compatibleAgents: ["Claude Code", "Codex", "OpenAI", "Gemini"]
featured: false
icon: "LayoutDashboard"
---

# Hermes WebUI

Hermes WebUI는 세션이 지나도 컨텍스트를 유지하고 시간이 갈수록 개선되는 자율 AI 에이전트 Hermes를, 터미널이 아니라 브라우저와 휴대폰에서 쓸 수 있게 해 주는 가벼운 셀프호스팅 웹 인터페이스입니다. 매 세션마다 처음부터 설명할 필요 없이, 사용자의 환경과 이전 작업을 기억한 채로 이어서 작업할 수 있습니다.

## 언제 쓰나

- 터미널 전용 에이전트를 웹·모바일에서 편하게 쓰고 싶을 때
- 세션이 초기화되지 않고 컨텍스트가 지속되는 에이전트 경험이 필요할 때
- 여러 프로젝트의 세션을 검색·핀·아카이브로 정리해 관리하고 싶을 때
- 무거운 코딩 작업은 Claude Code·Codex 같은 에이전트에 위임하고 결과만 회수하고 싶을 때

## 특징

- **3분할 레이아웃**: 좌측 세션 내비게이션, 중앙 채팅, 우측 워크스페이스 브라우저로 구성됩니다.
- **멀티 프로바이더**: OpenAI, Anthropic, Google, DeepSeek, OpenRouter 등을 지원합니다.
- **지속 세션**: 검색·핀·아카이브·프로젝트 단위 정리가 가능합니다.
- **워크스페이스 브라우저**: 파일 인라인 미리보기와 편집을 지원합니다.
- **모바일 대응·음성 입력**: 반응형 디자인과 Web Speech API 음성 입력을 제공합니다.
- **보안 옵션**: 선택적 비밀번호·WebAuthn 인증, 슬래시 커맨드, 7종 이상의 테마를 갖췄습니다.

> Python 백엔드 + 바닐라 JS 프런트엔드로 빌드 단계가 없으며, Docker(`docker compose up -d`) 또는 `python3 bootstrap.py`로 설치할 수 있습니다.
