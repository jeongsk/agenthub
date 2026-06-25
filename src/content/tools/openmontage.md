---
title: "OpenMontage"
description: "AI 코딩 어시스턴트를 리서치, 스크립팅, 에셋 생성, 편집, 렌더링까지 수행하는 오픈소스 에이전틱 비디오 제작 스튜디오로 바꿔주는 시스템입니다."
category: "agent-skill"
tags: ["video-production", "agentic-ai", "python", "ffmpeg", "image-generation", "text-to-video", "remotion", "text-to-speech", "video-generation", "agent"]
githubUrl: "https://github.com/calesthio/OpenMontage"
websiteUrl: "https://github.com/calesthio/OpenMontage"
githubStars: 19174
author: "calesthio"
installCommand: "git clone https://github.com/calesthio/OpenMontage.git && cd OpenMontage && make setup"
compatibleAgents: ["Claude Code", "Codex", "Cursor", "GitHub Copilot", "Windsurf"]
featured: false
icon: "Clapperboard"
---

# OpenMontage

OpenMontage는 오픈소스 에이전틱 비디오 제작 시스템입니다. 자연어로 원하는 영상을 설명하면 AI 코딩 어시스턴트가 주제 리서치, 기획안, 스크립트, 장면 계획, 에셋 생성·검색, 편집, 컴포지션, 최종 렌더링까지 파이프라인 기반으로 실행하도록 돕습니다.

## 언제 쓰나

- Claude Code, Codex, Cursor, Copilot, Windsurf 같은 코딩 에이전트로 비디오 제작 워크플로를 실행하고 싶을 때
- 교육용 explainer, 제품 티저, 시네마틱 트레일러, 다큐멘터리 몽타주, 팟캐스트 클립, 로컬라이제이션·더빙 같은 제작 파이프라인이 필요할 때
- 스톡 푸티지와 오픈 아카이브에서 실제 모션 클립을 검색해 편집하고 싶을 때
- 이미지 기반 영상, 실제 푸티지 기반 영상, AI 비디오 생성 API, 로컬/무료 도구를 상황에 맞게 조합하고 싶을 때
- 결과물을 내기 전에 ffprobe, 프레임 샘플링, 오디오 레벨, 자막, delivery promise 같은 품질 게이트를 거치게 하고 싶을 때

## 핵심 특징

- **12개 제작 파이프라인**: animated explainer, animation, avatar spokesperson, cinematic, clip factory, documentary montage, localization/dub 등 목적별 흐름을 제공합니다.
- **도구와 provider 선택**: FFmpeg, Piper TTS, Remotion, HyperFrames, Archive.org/NASA/Wikimedia, Pexels/Unsplash/Pixabay, FAL, ElevenLabs, OpenAI, Runway 등 로컬·무료·클라우드 provider를 조합합니다.
- **실제 푸티지 경로**: 단순히 이미지를 움직이는 방식뿐 아니라 무료/open motion footage를 CLIP 검색 가능한 corpus로 만들고 타임라인에 편집하는 documentary montage 경로를 제공합니다.
- **참조 영상 기반 기획**: YouTube, Shorts, Reel, TikTok, 로컬 클립을 분석해 pacing, transcript, scene, style을 바탕으로 차별화된 제작안을 만들 수 있습니다.
- **에이전트용 운영 문서**: `AGENT_GUIDE.md`, `PROJECT_CONTEXT.md`, pipeline director skill, tool registry를 통해 에이전트가 임의로 작업하지 않고 정해진 제작 계약을 따르도록 합니다.
- **품질 검증**: pre-compose validation, ffprobe 검증, 프레임 추출, 오디오 분석, 자막 확인, provider decision log 등 결과물 검증 단계를 포함합니다.

## 빠른 시작

```bash
git clone https://github.com/calesthio/OpenMontage.git
cd OpenMontage
make setup
```

`make`를 사용할 수 없다면 README의 수동 설치 경로를 따릅니다.

```bash
pip install -r requirements.txt
cd remotion-composer && npm install && cd ..
pip install piper-tts
cp .env.example .env
```

설치 후 AI 코딩 어시스턴트에서 예를 들어 다음처럼 요청합니다.

```text
"Make a 60-second animated explainer about how neural networks learn"
```

실제 푸티지만 쓰는 경로는 다음처럼 명시합니다.

```text
"Make a 75-second documentary montage about city life in the rain. Use real footage only, no narration, elegiac tone, with music."
```

## 참고

- Python 3.10+, FFmpeg, Node.js 18+, AI 코딩 어시스턴트가 필요합니다.
- API 키 없이도 Piper TTS, Archive.org, NASA, Wikimedia Commons, FFmpeg, Remotion/HyperFrames 기반의 무료 경로를 사용할 수 있습니다.
- FAL, ElevenLabs, OpenAI, Google, Runway, HeyGen 등 API 키를 추가하면 이미지·비디오·음성 생성 선택지가 늘어납니다.
- 라이선스는 AGPL-3.0입니다.
