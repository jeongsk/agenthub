---
title: "MoneyPrinterTurbo"
description: "주제나 키워드만 입력하면 스크립트·영상 소재·자막·배경음악을 AI로 자동 생성해 고화질 숏폼 영상을 한 번에 만들어 주는 오픈소스 도구입니다."
category: "desktop-utility"
tags: ["ai-video", "short-video", "tiktok", "automation", "text-to-video"]
githubUrl: "https://github.com/harry0703/MoneyPrinterTurbo"
githubStars: 73473
author: "harry0703"
installCommand: "docker-compose up"
compatibleAgents: ["OpenAI", "Gemini", "DeepSeek", "Ollama"]
featured: true
icon: "Clapperboard"
---

# MoneyPrinterTurbo

MoneyPrinterTurbo는 영상 주제나 키워드 하나만 주면 스크립트, 영상 소재, 자막, 배경음악을 AI로 자동 생성한 뒤 합성해 고화질 숏폼 영상을 만들어 주는 오픈소스 도구입니다. 대본 작성부터 소재 수집, 자막 생성, 영상 합성까지 전체 파이프라인을 자동화해 TikTok 등 숏폼 콘텐츠를 빠르게 제작할 수 있습니다.

## 언제 쓰나

- 숏폼 영상을 대량으로 빠르게 제작하고 싶을 때
- 대본·자막·배경음악까지 한 번에 자동 생성하고 싶을 때
- 세로(9:16)·가로(16:9) 등 다양한 비율로 일괄 생성하고 싶을 때
- 여러 LLM 제공자 중 원하는 모델을 골라 영상 스크립트를 만들고 싶을 때

## 특징

- **풀 파이프라인 자동화**: 스크립트 → 소재 → 자막 → BGM → 합성을 한 흐름으로 처리합니다.
- **배치 생성**: 사용자 지정 해상도와 비율로 여러 영상을 한 번에 만듭니다.
- **다국어 스크립트**: 한국어 외 중국어·영어 등 AI 스크립트 생성을 지원합니다.
- **풍부한 TTS·자막**: 실시간 미리보기가 가능한 다양한 음성과 폰트·위치·색상·테두리 자막 옵션을 제공합니다.
- **폭넓은 모델 연동**: OpenAI, Gemini, DeepSeek, Ollama, Qwen, Moonshot, Azure, MiniMax 등 다수 LLM을 지원합니다.
- **Streamlit Web UI + REST API**: 웹 인터페이스와 API를 모두 제공하며 Docker·원클릭 윈도우 패키지로 설치할 수 있습니다.

> Python/Streamlit 기반의 로컬 실행 앱입니다. 최소 4코어 CPU·4GB RAM(권장 8코어·8GB)이 필요합니다.
