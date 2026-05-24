---
title: "Analog Reading Note Image"
description: "책 제목, 저자, 완독일, 평점, 메모를 바탕으로 한국어 아날로그 독서 기록 이미지 생성 프롬프트를 만듭니다."
category: "agent-skill"
tags: ["korean", "book-journal", "image-generation", "prompt-engineering", "analog", "reading"]
githubUrl: "https://github.com/jeongsk/agenthub/tree/main/skills/analog-reading-note-image"
githubStars: 0
author: "jeongsk"
installCommand: "npx skills add jeongsk/agenthub --skill analog-reading-note-image"
compatibleAgents: ["Claude", "Gemini", "OpenAI", "Codex"]
featured: false
icon: "Image"
---

# Analog Reading Note Image

책 정보를 세로형 한국어 독서 기록 이미지 프롬프트로 바꿉니다. Codex, OpenClaw, Hermes Agent 또는 일반 이미지 생성 모델에서 바로 사용할 수 있는 결과를 목표로 합니다.

## 주요 기능

- **한국어 독서 기록 이미지 생성**: 책 메타데이터를 Pinterest/Instagram 스타일의 아날로그 독서 기록 프롬프트로 변환합니다.
- **자동 메타데이터 보강**: 카테고리, 날짜, 평점 같은 누락 필드를 자연스럽게 보완합니다.
- **아날로그 감성 스타일**: 흰 노트, 손글씨 느낌의 한국어 텍스트, 부드러운 포인트 컬러, 스크랩북 구성을 지시합니다.
- **키워드 마인드맵**: 키워드를 연결선과 짧은 설명이 있는 레이아웃으로 구조화합니다.

## 사용 방법

책 제목은 필수이며, 저자, 완독일, 평점, 메모는 선택 입력입니다.
