---
title: "Odysseus"
description: "로컬 모델, 에이전트, 메모리, 스킬, 문서, 이메일, 캘린더를 한곳에 묶는 셀프호스팅 AI 워크스페이스입니다. ChatGPT·Claude 같은 경험을 자기 서버와 데이터로 운영하고 싶을 때 유용합니다."
category: "desktop-utility"
tags: ["self-hosted", "ai-workspace", "web-app", "agent", "memory", "skills", "notes", "calendar", "email", "local-first"]
githubUrl: "https://github.com/pewdiepie-archdaemon/odysseus"
githubStars: 24571
author: "pewdiepie-archdaemon"
installCommand: "git clone https://github.com/pewdiepie-archdaemon/odysseus.git && cd odysseus && cp .env.example .env && docker compose up -d --build"
compatibleAgents: []
featured: false
icon: "LayoutDashboard"
---

# Odysseus

![Odysseus 미리보기](/tool-screenshots/odysseus.jpg)

Odysseus는 셀프호스팅 AI 워크스페이스입니다. 채팅, 에이전트 실행, 메모리와 스킬, 문서 편집, 이메일, 노트, 캘린더를 한 화면에 묶어서 자기 서버와 데이터를 중심으로 AI 작업을 이어가게 해 줍니다.

## 언제 쓰나

- ChatGPT·Claude 같은 AI 워크스페이스를 로컬 호스팅으로 운영하고 싶을 때
- 채팅만이 아니라 메모리, 스킬, 문서, 이메일, 캘린더까지 함께 다루고 싶을 때
- 여러 작업을 한 웹 UI 안에서 검색·편집·요약까지 이어서 처리하고 싶을 때
- 로컬 우선, 프라이버시 우선 환경에서 AI 비서 경험을 만들고 싶을 때

## 핵심 특징

- **채팅 + 에이전트**: 로컬 모델이나 API와 연결해 대화하고, 에이전트에게 도구를 넘길 수 있습니다.
- **문서·노트·캘린더 통합**: 작업 메모, 문서, 일정 관리를 한 워크스페이스로 묶습니다.
- **메모리 / 스킬**: 사용자의 맥락과 재사용 가능한 스킬을 함께 유지합니다.
- **이메일 지원**: IMAP/SMTP 기반 인박스와 AI triage 흐름을 제공합니다.
- **셀프호스팅**: 자기 하드웨어와 자기 데이터를 중심으로 운영할 수 있습니다.
