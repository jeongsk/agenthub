---
title: "Exort"
description: "마이크로컨트롤러용 코딩 워크스페이스를 제공하는 오픈소스 데스크톱 앱입니다. Arduino, ESP32, RP2040 같은 임베디드 프로젝트를 AI와 함께 편집·컴파일·업로드·시리얼 모니터링까지 한 흐름으로 다루고 싶을 때 유용합니다."
category: "desktop-utility"
tags: ["embedded", "microcontrollers", "arduino", "esp32", "firmware", "serial-monitor", "desktop-app", "electron", "svelte", "opencode"]
githubUrl: "https://github.com/Razz19/Exort"
websiteUrl: "https://exort.dev"
githubStars: 118
author: "Razz19"
installCommand: "git clone https://github.com/Razz19/Exort.git && cd Exort && npm install"
compatibleAgents: ["OpenCode"]
featured: false
icon: "Cpu"
---

# Exort

Exort는 마이크로컨트롤러 개발을 위한 오픈소스 AI 코딩 워크스페이스입니다. 임베디드 프로젝트를 로컬에서 열어 두고 AI 도움을 받으면서 편집, 컴파일, 업로드, 시리얼 모니터링까지 이어서 하고 싶을 때 맞습니다.

## 언제 쓰나

- Arduino, ESP32, ESP8266, RP2040, STM32, Teensy 같은 보드로 작업할 때
- 펌웨어를 빠르게 수정하고 바로 컴파일·업로드하면서 반복 테스트하고 싶을 때
- 시리얼 로그, 부팅 출력, 센서 스트림을 보면서 디버깅하고 싶을 때
- 임베디드 개발용 AI 작업 공간을 한 앱 안에 모아 쓰고 싶을 때
- OpenCode 기반 에이전트와 로컬 워크스페이스를 같이 운영하고 싶을 때

## 주요 기능

- **AI 코딩 에이전트** — 워크스페이스를 검사하고 코드 편집을 돕는 OpenCode 기반 에이전트
- **프로젝트 관리자** — 로컬 임베디드 워크스페이스를 열고 전환
- **보드 관리자** — Arduino CLI 보드 플랫폼과 코어 설치/관리
- **컴파일·업로드** — 보드 대상 빌드와 업로드 흐름 지원
- **시리얼 모니터** — 디바이스 로그와 디버그 출력을 실시간 확인
- **시리얼 플로터** — 수치형 시리얼 스트림을 그래프로 표시
- **로컬 히스토리** — 워크스페이스별 세션과 채팅 기록 보존
