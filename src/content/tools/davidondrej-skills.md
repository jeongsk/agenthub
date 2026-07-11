---
title: "David Ondrej Skills"
description: "에이전트 오케스트레이션, 웹 리서치, 문서화, 스킬 authoring, 운영·설정을 다루는 David Ondrej의 공식 Agent Skills 모음입니다."
category: "agent-skill"
tags: ["agent-skills", "agent-orchestration", "research", "web", "documentation", "skill-authoring", "ops", "workflow", "youtube", "deep-research"]
githubUrl: "https://github.com/davidondrej/skills"
githubStars: 2287
author: "davidondrej"
installCommand: "npx skills add davidondrej/skills"
compatibleAgents: ["Claude Code", "Codex", "Cursor", "Gemini CLI", "OpenCode", "Windsurf", "Hermes Agent"]
featured: false
icon: "BookMarked"
---

# David Ondrej Skills

David Ondrej가 공개한 공식 **Agent Skills** 저장소입니다. 각 스킬은 `SKILL.md`를 중심으로 구성된 재사용 가능한 워크플로 지침이며, 코딩 에이전트뿐 아니라 리서치·문서화·운영 작업을 수행하는 에이전트에도 적용할 수 있습니다.

## 언제 쓰나

- 여러 AI 에이전트를 위임·예약·조율하는 워크플로가 필요할 때
- 웹 리서치, 심층 조사, YouTube transcript 분석을 표준화하고 싶을 때
- 아이디어를 문서로 정리하거나 인터뷰·교육·구조화된 사고를 지원하고 싶을 때
- Agent Skills를 작성·배포하고 에이전트별 컨텍스트 파일을 관리할 때
- 서버·머신 설정, 보안 점검, 운영 자동화 같은 실무 스킬이 필요할 때

## 포함된 스킬 영역

저장소에는 5개 영역, 총 31개의 `SKILL.md`가 포함되어 있습니다.

| 영역 | 대표 기능 |
| --- | --- |
| Agent orchestration | 에이전트 self-scheduling, handoff, Codex subagent, goal loop, cmux 조율 |
| Research & web | browser harness, deep research, DeepAPI, 쇼핑 조사, 웹 검색, YouTube transcript |
| Thinking & docs | 아이디어를 문서로 전환, 인터뷰·교육, ADR 읽기, 짧은 답변 작성 |
| Skill authoring | 효과적인 스킬 작성, 배포, GitHub 게시, Claude·AGENTS.md 관리 |
| Ops & setup | anti-sleep, DB read-only role, cyber audit, Safe Browsing, Pi 모델 설정, setup 도움말 |

## 설치

Agent Skills CLI를 사용해 설치할 수 있습니다.

```bash
npx skills add davidondrej/skills
```

특정 스킬만 선택하거나 설치 위치를 지정하는 방식은 사용하는 `skills` CLI와 에이전트에 따라 달라질 수 있습니다. 저장소를 직접 확인하려면:

```bash
git clone https://github.com/davidondrej/skills.git
```

## 특징

- **작업 영역별 구성**: 오케스트레이션, 리서치, 문서화, authoring, 운영을 폴더별로 분리
- **재사용 가능한 지침**: 각 스킬이 독립적인 `SKILL.md`로 구성되어 필요한 작업에 선택적으로 적용 가능
- **에이전트 운영 중심**: 단순 프롬프트 모음보다 예약 실행, 위임, 핸드오프, 검증 루프 등 실제 운영 패턴을 다룸
- **다양한 작업 지원**: 코딩뿐 아니라 웹 조사, 콘텐츠 작성, 시스템 설정까지 포함

## 참고 사항

- 스킬은 에이전트가 해당 `SKILL.md` 형식을 지원하거나 이를 읽도록 설치된 환경에서 사용하는 것이 적합합니다.
- 일부 스킬은 `cmux`, Codex CLI, Pi, 브라우저, 외부 API 등 특정 도구나 실행 환경을 전제로 합니다. 적용 전에 필요한 명령과 인증 상태를 확인해야 합니다.
- 저장소 라이선스는 MIT입니다.
