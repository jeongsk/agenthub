---
title: "Hermes Desktop"
description: "Hermes Agent의 설정, 세션, 프로필, 메모리, 스킬, 도구, 스케줄, 메시징 게이트웨이를 한곳에서 관리하는 네이티브 데스크톱 앱입니다. CLI를 직접 다루기보다 GUI로 설치·구성·운영하고 싶을 때 유용합니다."
category: "desktop-utility"
tags: ["hermes-agent", "desktop-app", "electron", "gui", "agent-management", "messaging"]
githubUrl: "https://github.com/fathah/hermes-desktop"
websiteUrl: "https://hermesagents.cc/"
githubStars: 8874
author: "fathah"
compatibleAgents: ["Hermes Agent"]
icon: "MonitorSmartphone"
---

# Hermes Desktop

`Hermes Desktop`는 Hermes Agent를 위한 네이티브 데스크톱 컴패니언 앱입니다. 로컬 또는 원격 Hermes 백엔드를 연결해 채팅, 세션 검색, 프로필 전환, 메모리 관리, 스킬·도구 설정, 스케줄 작업, 메시징 게이트웨이까지 GUI에서 다룰 수 있게 해 줍니다. CLI 중심의 Hermes 운영을 시각적인 워크스페이스로 옮기고 싶을 때 적합합니다.

## 언제 쓰나

- Hermes Agent를 GUI로 설치하고 초기 설정까지 안내받고 싶을 때
- 여러 프로필과 모델 제공자를 바꿔 가며 운영해야 할 때
- 세션 기록, 메모리, 스킬, 도구를 한 화면에서 관리하고 싶을 때
- Telegram·Discord 같은 메시징 게이트웨이를 포함한 Hermes 기능을 시각적으로 다루고 싶을 때
- 로컬 설치 대신 원격 Hermes API 서버에 연결해 쓰고 싶을 때

## 핵심 특징

- **첫 실행 설치 마법사**: Hermes Agent 설치와 의존성 확인을 GUI로 안내합니다.
- **로컬/원격 모드**: 로컬 `~/.hermes` 설치를 쓰거나 원격 Hermes API 서버에 연결할 수 있습니다.
- **다중 제공자 지원**: OpenAI, Anthropic, Gemini, OpenRouter 등 여러 모델 제공자를 설정합니다.
- **세션·프로필 관리**: 대화 기록 검색과 여러 Hermes 환경 전환을 지원합니다.
- **메모리·스킬·도구 관리**: 메모리, 스킬, 툴셋, 스케줄을 한곳에서 관리합니다.
- **메시징·게이트웨이 통합**: Telegram, Discord 등 외부 채널 연결 상태를 확인하고 운영할 수 있습니다.
