---
title: "RuView"
description: "일반 WiFi 신호를 실시간 공간 인텔리전스, 생체 신호 모니터링, 재실 감지로 변환하는 시스템입니다. 카메라 한 픽셀 없이 WiFi만으로 공간을 인식합니다."
category: "agent-skill"
tags: ["spatial-intelligence", "wifi-sensing", "iot", "home-automation", "physical-ai", "esp32", "agentic-ai"]
githubUrl: "https://github.com/ruvnet/RuView"
githubStars: 69225
author: "ruvnet"
compatibleAgents: ["Claude", "Gemini", "OpenAI"]
featured: true
icon: "Radio"
---

# RuView

RuView(π RuView)는 일반 WiFi 신호를 활용해 실시간 공간 인텔리전스와 생체 신호 모니터링을 가능하게 하는 시스템입니다. 카메라나 센서 하드웨어 없이, 이미 있는 WiFi 라우터와 ESP32만으로 사람의 위치, 동작, 심박수/호흡을 감지합니다.

![RuView WiFi 기반 실내 포즈 감지 화면](/tool-screenshots/ruview-wifi-densepose.webp)

## 언제 쓰나

- AI 에이전트에 물리 공간 인식 능력을 부여하고 싶을 때
- 카메라 없이 재실 감지나 위치 추적이 필요할 때
- 홈 오토메이션(Home Assistant)에 공간 지능을 추가하고 싶을 때
- 비접촉 방식으로 생체 신호(심박수, 호흡)를 모니터링하고 싶을 때

## 특징

- 일반 WiFi 신호로 실내 위치 추적 및 공간 인식
- 비접촉 생체 신호 모니터링 (심박수, 호흡)
- ESP32 펌웨어 + AI 에이전트 스킬 구성
- Home Assistant 연동 지원
- 프라이버시 보호 (카메라 불필요)
- Rust 기반 고성능 처리
