---
title: "OpenGame"
description: "한 줄 프롬프트에서 플레이 가능한 웹 게임을 생성하기 위한 오픈소스 agentic coding framework입니다. Game Skill, GameCoder-27B, OpenGame-Bench를 통해 게임 프로젝트 스캐폴딩·디버깅·평가 흐름을 연구하고 실행할 수 있습니다."
category: "agent-framework"
tags: ["game-development", "agentic-coding", "web-game", "typescript", "cli", "benchmark", "gamecoder", "phaser", "qwen-code", "llm", "automation"]
githubUrl: "https://github.com/leigest519/OpenGame"
websiteUrl: "https://www.opengame-project-page.com/"
githubStars: 2630
author: "leigest519"
installCommand: "git clone https://github.com/leigest519/OpenGame.git && cd OpenGame && npm install && npm run build && npm link"
compatibleAgents: ["OpenGame CLI", "Hermes Agent", "Claude Code", "Codex", "Gemini"]
featured: false
icon: "Gamepad2"
---

# OpenGame

OpenGame은 자연어 프롬프트 하나로 end-to-end 웹 게임을 만들기 위한 오픈소스 agentic coding framework입니다. 일반 코드 생성기가 단일 파일이나 작은 작업에는 강하지만, 게임 개발에서 필요한 scene wiring, real-time loop, 상태 동기화, cross-file consistency, 플레이 가능성 검증에서 쉽게 무너지는 문제를 겨냥합니다.

프로젝트는 게임 생성용 agent runtime, 재사용 가능한 **Game Skill**, 게임 특화 코드 LLM인 **GameCoder-27B**, 실행 기반 평가 파이프라인인 **OpenGame-Bench**를 함께 제안합니다.

## 언제 쓰나

- 프롬프트에서 바로 playable web game을 생성하는 agentic coding 흐름을 실험하고 싶을 때
- Phaser, canvas, three.js 같은 웹 게임 템플릿을 선택하고 안정적인 프로젝트 구조로 스캐폴딩하는 에이전트 패턴을 연구할 때
- 게임 실행 중 콘솔 오류, 통합 오류, 상호작용 문제를 반복적으로 디버깅하는 agent loop를 살펴보고 싶을 때
- LLM 기반 게임 생성 결과를 build health, visual usability, intent alignment 관점에서 평가하는 벤치마크를 참고하고 싶을 때

## 핵심 특징

- **Game Skill**: Template Skill이 엔진과 프로젝트 skeleton을 고르고, Debug Skill이 검증된 수정 프로토콜을 사용해 통합 오류를 고칩니다.
- **Headless CLI**: `opengame -p "..." --yolo` 형태로 프롬프트를 넘겨 새 게임 프로젝트를 생성합니다.
- **GameCoder-27B**: 게임 엔진 API, 프로젝트 스캐폴딩, bug-fix trajectory, 실행 기반 RL로 특화한 코드 LLM을 제안합니다.
- **OpenGame-Bench**: 생성된 게임을 headless browser에서 실행하고 rendering, controls, game-loop progression, win/loss state 등을 동적으로 평가하는 벤치마크입니다.
- **Provider 구성**: OpenAI-compatible API를 기본으로 쓰며, 이미지·비디오·오디오·reasoning provider는 환경변수로 각각 설정할 수 있습니다.

## 빠른 시작

현재 README 기준으로 npm 배포 전에는 소스 설치가 권장됩니다.

```bash
git clone https://github.com/leigest519/OpenGame.git
cd OpenGame
npm install
npm run build
npm link
```

그 다음 빈 게임 폴더에서 headless 모드로 실행합니다.

```bash
mkdir -p games/my-game && cd games/my-game
opengame -p "Build a Snake clone with WASD controls and a dark theme." --yolo
```

LLM 호출에는 OpenAI-compatible API 설정이 필요합니다.

```bash
export OPENAI_API_KEY="***"
export OPENAI_BASE_URL="https://api.openai.com/v1"
export OPENAI_MODEL="gpt-4o"
```

## 참고

OpenGame은 Apache-2.0 라이선스이며 Node.js 20 이상을 요구합니다. README에는 `~/.qwen/settings.json`과 `.qwen/settings.json` 경로가 아직 호환성 목적으로 쓰인다고 명시되어 있으므로, 설정 디렉터리 이름이 향후 `.opengame`으로 바뀔 수 있습니다. OpenGame-Bench 평가 파이프라인은 README 기준 공개 예정 상태입니다.
