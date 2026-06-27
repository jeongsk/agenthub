---
title: "BMad Method"
description: "AI-driven agile development 프레임워크입니다. 스케일 적응형 지능으로 버그 수정에서 기업 시스템까지 프로젝트 복잡도에 맞춰 계획 깊이를 자동 조절하고, 34개 이상의 워크플로우와 12개 이상의 전문 에이전트를 제공합니다."
category: "agent-framework"
tags: ["agile", "ai-driven", "agents", "workflow", "orchestration", "development", "methodology", "scale-adaptive", "claude-code", "cursor", "gemini-cli", "multi-agent"]
githubUrl: "https://github.com/bmad-code-org/BMAD-METHOD"
websiteUrl: "https://bmadcode.com"
githubStars: 49756
author: "Brian (BMad) Madison"
installCommand: "npx bmad-method install"
compatibleAgents: ["Claude Code", "Codex", "Cursor", "Gemini CLI", "OpenCode", "Windsurf"]
featured: false
icon: "Bot"
---

# BMad Method

BMad Method (Build More Architect Dreams)는 AI 협업 중심의 agile development 방법론 프레임워크입니다. 전통적인 AI 도구가 사용자 대신 모든 판단을 하는 것과 달리, BMad는 에이전트와 페실리테이티드 워크플로우를 통해 전문가와 함께 구조화된 프로세스로 최고 결과를 이끌어내는 구조를 제공합니다. 스케일 적응형 지능(scale-adaptive intelligence)을 갖추어 버그 수정 수준의 소규모 작업에서 기업 시스템 구축까지 프로젝트 복잡도에 맞춰 계획 깊이를 자동으로 조절합니다.

## 언제 쓰나

- AI coding assistant와 구조화된 agile workflow로 일하고 싶을 때
- 프로젝트 규모와 복잡도에 따라 계획 깊이를 자동으로 조절하고 싶을 때
- brainstorming → PRD → 구현 → 배포 전 과정에서 일관된 프레임워크가 필요할 때
- 여러 전문 에이전트(PM, Architect, Developer, UX 등)를 하나의 세션에 불러들이고 싶을 때
- 기존 방법론(Scrum, Kanban 등)을 AI 협업 환경에 맞게 확장하고 싶을 때

## 핵심 특징

- **Scale-Domain-Adaptive**: 프로젝트 복잡도에 따라 계획 깊이를 자동 조절합니다.
- **34개 이상의 워크플로우**: 분석, 기획, 아키텍처, 구현, 테스트, 배포 등 전체 생명주기를 커버합니다.
- **12개 이상의 전문 에이전트**: PM, Architect, Developer, UX, Security, Test 등 도메인별 전문 에이전트를 제공합니다.
- **Party Mode**: 여러 에이전트 페르소나를 하나의 세션에 불러들여 협업하고 토론할 수 있습니다.
- **bmad-help 스킬**: 언제든 `bmad-help`를 호출하면 다음 단계와 선택적 옵션을 안내합니다.
- **모듈 확장**: BMM(core), BMB(Builder), TEA(Test Architect), BMGD(Game Dev), CIS(Creative Intelligence Suite) 등 공식 모듈로 도메인을 확장할 수 있습니다.
- **Web Bundles**: Gemini Gems, ChatGPT Custom GPT로 설치 가능한 planning 워크플로우 번들을 제공합니다. IDE 토큰 대신 웹 구독료로 planning 비용을 절감할 수 있습니다.
- **100% 무료**: paywall, gated content, gated Discord 없이 완전 오픈소스입니다.

## 빠른 시작

**사전 조건**: Node.js v20.12+ · Python 3.10+ · [uv](https://docs.astral.sh/uv/)

```bash
npx bmad-method install
```

설치 프롬프트를 따라가고, 프로젝트 폴더에서 AI IDE(Claude Code, Cursor 등)를 열면 됩니다. 설치 시 `--modules bmm --tools claude-code --yes` 같은 옵션으로 대화형 설치 없이 바로 설정할 수 있으며, `--set bmm.project_knowledge=research --set bmm.user_skill_level=expert`로 개별 모듈 설정을 덮어쓸 수 있습니다.

비대화형 설치(CI/CD용):

```bash
npx bmad-method install \
  --directory /path/to/project \
  --modules bmm --tools claude-code --yes
```

## 공식 모듈

| 모듈 | 목적 |
|---|---|
| BMM (BMad Method) | 코어 프레임워크, 34개+ 워크플로우 |
| BMB (BMad Builder) | 커스텀 BMad 에이전트와 워크플로우 생성 |
| TEA (Test Architect) | 리스크 기반 테스트 전략과 자동화 |
| BMGD (Game Dev Studio) | Unity, Unreal, Godot 게임 개발 워크플로우 |
| CIS (Creative Intelligence Suite) | 혁신, 브레인스토밍, 디자인 씽킹 |

## 참고와 주의사항

- 기본 브랜치는 `main`입니다.
- 라이선스는 `MIT`입니다.
- BMad™, BMad Method™, BMad Core™는 BMad Code, LLC의 상표입니다.
- Node.js 20.12+, Python 3.10+, uv 요구사항을 반드시 확인하세요.
- Web Bundles 기능은 Gemini Gems / ChatGPT Custom GPT 구독이 필요합니다.