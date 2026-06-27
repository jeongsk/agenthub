---
title: "Awesome Harness Engineering"
description: "AI 에이전트를 더 안정적으로 만들기 위한 harness engineering 자료, 논문, 플레이북, 벤치마크, 오픈소스 구현을 큐레이션한 awesome list입니다."
category: "agent-infrastructure"
tags: ["harness-engineering", "agent-harness", "context-engineering", "evals", "observability", "benchmarks", "guardrails", "agentic-ai", "awesome-list", "coding-agents"]
githubUrl: "https://github.com/walkinglabs/awesome-harness-engineering"
githubStars: 3356
author: "walkinglabs"
installCommand: "git clone https://github.com/walkinglabs/awesome-harness-engineering.git"
compatibleAgents: ["Claude Code", "Codex", "OpenCode", "Hermes Agent", "Cursor", "Gemini CLI"]
featured: false
icon: "Library"
---

# Awesome Harness Engineering

Awesome Harness Engineering은 AI 에이전트 주변의 실행 환경을 설계해 더 안정적으로 일하게 만드는 **harness engineering** 자료 모음입니다. context engineering, 평가, observability, orchestration, safe autonomy, 소프트웨어 아키텍처처럼 장시간 실행되는 코딩·리서치 에이전트의 신뢰성에 영향을 주는 주제를 한곳에 모읍니다.

## 언제 쓰나

- Codex, Claude Code, OpenCode 같은 코딩 에이전트의 성공률을 높이는 운영 패턴을 찾을 때
- repo-local instructions, initializer agents, handoff artifact, self-verification 같은 harness 설계를 비교하고 싶을 때
- agent eval, trace grading, observability, benchmark를 도입해 결과를 반복 가능하게 검증하고 싶을 때
- context window, memory, working state, tool boundary, guardrail 같은 reliability-critical primitive를 정리하고 싶을 때
- 단순 agent framework 목록이 아니라 “환경을 어떻게 만들면 에이전트가 더 잘 일하는가”에 집중한 참고 자료가 필요할 때

## 핵심 특징

- **Harness engineering 중심 큐레이션**: 일반적인 에이전트 도구 목록이 아니라 context management, evaluation, runtime control, safe autonomy, workflow design처럼 harness 품질에 직접 영향을 주는 자료를 선별합니다.
- **주요 기관 글 모음**: OpenAI, Anthropic, LangChain, Thoughtworks, HumanLayer, OpenHands, Inngest 등의 harness·agent engineering 글을 주제별로 정리합니다.
- **Context와 working state 섹션**: context engineering, 파일시스템 메모리, bounded conversation memory, `CLAUDE.md`/`AGENTS.md` 같은 장기 작업 상태 관리 자료를 모읍니다.
- **Evals와 observability 섹션**: OpenAI evals, trace grading, Inspect AI, OpenTelemetry GenAI semantic conventions, AgentOps, agenttrace 등 검증·관측 도구와 글을 포함합니다.
- **Benchmarks 섹션**: AgentBench, AppWorld, BrowseComp, BrowserGym 등 harness 품질을 비교할 때 참고할 수 있는 benchmark를 제공합니다.
- **Runtimes와 reference implementations**: agent harness와 관련된 runtime, reference implementation, 오픈소스 프로젝트를 계속 추가하는 awesome-list 형태입니다.

## 빠른 시작

웹에서 바로 README를 참고하거나, 로컬에 clone해서 검색하면서 사용할 수 있습니다.

```bash
git clone https://github.com/walkinglabs/awesome-harness-engineering.git
cd awesome-harness-engineering
```

특정 주제를 빠르게 찾고 싶다면 README 안의 섹션을 기준으로 탐색합니다.

```bash
# 예: eval/observability 관련 항목 찾기
python3 - <<'PY'
from pathlib import Path
text = Path('README.md').read_text()
for keyword in ['Evals', 'Observability', 'Benchmarks', 'Context']:
    print(keyword, text.find(keyword))
PY
```

## 주요 섹션

- Courses & Learning Resources
- Foundations
- Context, Memory & Working State
- Constraints, Guardrails & Safe Autonomy
- Specs, Agent Files & Workflow Design
- Evals & Observability
- Benchmarks
- Runtimes, Harnesses & Reference Implementations

## 참고

- 이 저장소는 실행 가능한 단일 프레임워크나 CLI가 아니라 curated awesome list입니다.
- README 기준으로 “generic agent tooling”은 범위 밖이며, harness design, context management, evaluation, runtime control 같은 신뢰성 핵심 요소를 직접 다루는 자료에 초점을 둡니다.
- GitHub 라이선스 메타데이터는 `Other`로 표시됩니다. 재사용이나 배포 전에는 저장소의 실제 license/README 조건을 확인하는 것이 좋습니다.
