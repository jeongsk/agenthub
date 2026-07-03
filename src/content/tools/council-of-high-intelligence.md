---
title: "Council of High Intelligence"
description: "18명의 AI 페르소나가 다중 LLM 제공자로 어려운 결정을 숙의하는 Claude Code·Codex 스킬. /council 명령 하나로 full, quick, duo 모드를 지원한다."
category: "agent-skill"
tags: ["ai-agents", "claude-code", "decision-making", "deliberation", "multi-llm", "ollama", "openai", "codex"]
githubUrl: "https://github.com/0xNyk/council-of-high-intelligence"
githubStars: 2604
author: "0xNyk"
installCommand: "git clone https://github.com/0xNyk/council-of-high-intelligence.git && cd council-of-high-intelligence && ./install.sh"
compatibleAgents: ["Claude Code", "Codex"]
featured: false
icon: "Users"
---

## 어떤 도구인가

`Council of High Intelligence`는 아리스토텔레스, 소크라테스, 페인만, 칸먼, 토발즈 등 18명의 AI 인물 페르소나가 독립적으로 분석하고 교차 심문한 뒤 종합 판단을 내려주는 결정 숙의 스킬이다. Claude Code와 Codex에 `/council` 형태로 설치해 사용한다.

## 언제 쓰나

- 기술 전략, 제품 방향, 리스크 같은 어려운 결정을 여러 관점에서 검토하고 싶을 때
- 단일 LLM의 단일 관점보다 구조적 반대와 역발상을 원할 때
- 빠른 판단(`--quick`), 극명한 대립(`--duo`), 도메인별 3인 패널(`--triad <domain>`) 같은 모드별 숙의가 필요할 때

## 핵심 특징

- **18명의 council members**: polarity pairs로 짝지어진 페르소나들이 실제 다른 사고방식을 강제한다. 예를 들어 아리스토텔레스는 분류하고, 라오-tzu는 구조 자체를 문제시한다.
- **3가지 숙의 모드**: full은 독립 분석→교차 심문→최종 입장의 3라운드, quick은 간이 2라운드, duo는 두 페르소나의 변증법이다.
- **20가지 사전 정의 triad**: architecture, strategy, debugging, ai-safety, design 등 도메인별 3인 조합이 준비되어 있다.
- **멀티 LLM 자동 라우팅**: Claude, OpenAI, Gemini, Ollama, NVIDIA NIM, Cursor 등 제공자를 자동 감지해 멤버를 분산 배치한다. 같은 모델로 위장한 답변이 아니라 실제 모델 다양성을 만든다.
- **그룹싱 방지**: >70%가 너무 일찍 동의하면 반대 입장을 강화하는 강제 장치가 들어간다.

## 빠른 시작

```bash
git clone https://github.com/0xNyk/council-of-high-intelligence.git
cd council-of-high-intelligence
./install.sh
```

Claude Code에서 바로 사용할 수 있다:

```text
/council Should we open-source our agent framework?
/council --quick Should we add caching here?
/council --duo Should we use microservices or monolith?
/council --triad decision Should we accept this acquisition offer?
```

Codex 사용 시:

```bash
./install.sh --codex
```

## 참고

- GitHub: https://github.com/0xNyk/council-of-high-intelligence
- 설치 없이 구조를 먼저 보고 싶다면 repo releases와 README의 Council Members, Triads 표를 참고하라.
- README에 제공한 라우팅 방식은 각 제공자 CLI/환경변수가 필요할 수 있으므로 로컬 환경을 미리 점검하라.
