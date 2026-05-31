---
title: "ViMax"
description: "에이전틱 비디오 생성 프레임워크입니다. 감독, 각본가, 프로듀서, 영상 생성기가 하나로 통합되어, AI 에이전트가 엔드투엔드로 비디오를 기획·제작할 수 있게 해줍니다."
category: "desktop-utility"
tags: ["video-generation", "agentic-aigc", "ai-video", "multi-agent", "generation"]
githubUrl: "https://github.com/HKUDS/ViMax"
githubStars: 8395
author: "HKUDS"
installCommand: "git clone https://github.com/HKUDS/ViMax.git && cd ViMax && pip install -r requirements.txt"
compatibleAgents: ["Claude", "Gemini", "OpenAI"]
featured: false
icon: "Video"
---

# ViMax

ViMax는 에이전틱 비디오 생성 프레임워크입니다. 하나의 시스템 안에 감독(Director), 각본가(Screenwriter), 프로듀서(Producer), 영상 생성기(Video Generator) 역할을 모두 갖춰, AI 에이전트가 엔드투엔드로 비디오를 기획하고 제작할 수 있게 해줍니다.

## 언제 쓰나

- AI 에이전트가 텍스트 설명만으로 비디오를 자동 제작하게 하고 싶을 때
- 복잡한 비디오 생성 워크플로(기획 → 각본 → 촬영 구성 → 생성)를 자동화하고 싶을 때
- 멀티 에이전트 구조로 비디오 제작 파이프라인을 운영하고 싶을 때

## 특징

- 감독, 각본가, 프로듀서, 영상 생성기가 통합된 에이전틱 아키텍처
- 텍스트 프롬프트 → 완성형 비디오 엔드투엔드 파이프라인
- Python 기반, 연구용으로 설계
- 에이전틱 AIGC(Agentic AI-Generated Content) 접근법
