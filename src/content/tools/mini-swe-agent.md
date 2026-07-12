---
title: "mini-swe-agent"
description: "약 100줄의 Python으로 구현된 미니멀 소프트웨어 엔지니어링 에이전트. SWE-bench Verified 74% 이상 달성."
category: "agent-harness"
tags: ["swe-bench", "coding-agent", "cli", "python", "litellm", "princeton"]
githubUrl: "https://github.com/SWE-agent/mini-swe-agent"
websiteUrl: "https://mini-swe-agent.com"
githubStars: 5721
author: "SWE-agent"
installCommand: "pip install mini-swe-agent"
compatibleAgents: ["Claude Code", "Codex", "Gemini", "OpenCode"]
featured: false
icon: "Terminal"
---

## mini-swe-agent란?

SWE-bench와 SWE-agent를 만든 Princeton & Stanford 팀이 개발한 **극도로 미니멀한 코딩 에이전트**다. 에이전트 핵심 클래스가 약 100줄의 Python으로 작성되어 있으며, 별도의 도구 없이 **bash만**으로 동작한다. 그럼에도 SWE-bench Verified에서 **74% 이상**을 기록한다.

## 핵심 특징

- **미니멀 구조**: 도구 호출 인터페이스 없이 bash만 사용. 모든 모델에서 즉시 실행 가능.
- **선형 히스토리**: 각 단계가 메시지에 추가되는 구조로, 트라젝토리와 LLM 프롬프트가 동일. 디버깅과 파인튜닝에 유리.
- **독립적 실행**: `subprocess.run` 기반으로 각 액션이 완전히 독립적. 상태 유지 셸 세션 없이 샌드박스(Docker, Podman, Singularity 등)에서 쉽게 실행.
- **광범위한 모델 지원**: litellm, openrouter, portkey 등을 통해 모든 모델 호환. `/completion`, `/response` 엔드포인트 및 인터리브드 씽킹 지원.
- **CLI + Python 바인딩**: `mini` CLI로 터미널에서 직접 사용하거나, Python 라이브러리로 임베드 가능.
- **트라젝토리 브라우저**: 에이전트 실행 과정을 시각적으로 탐색하는 inspector 제공.

## 설치 및 실행

```bash
# 빠른 실행 (가상환경에 자동 설치)
uvx mini-swe-agent

# 또는 직접 설치
pip install mini-swe-agent
mini
```

## 언제 사용하나?

- 로컬에서 빠르게 작동하는 CLI 코딩 에이전트가 필요할 때
- 매우 단순한 제어 흐름의 에이전트를 원할 때
- 파인튜닝/RL을 위해 특정 스캐폴드에 과적합되지 않는 베이스라인이 필요할 때
- 샌드박스 환경에서 안정적인 에이전트 실행이 필요할 때

## 주의사항

- **v2 마이그레이션**: 현재 mini-swe-agent v2이며, v1에서 업그레이드 시 [마이그레이션 가이드](https://mini-swe-agent.com/latest/advanced/v2_migration/) 확인 필요.
- bash 외의 전용 도구가 필요한 경우, 대신 [SWE-agent](https://github.com/SWE-agent/SWE-agent) 사용을 권장.
- 모든 액션이 `subprocess.run`으로 독립 실행되므로, 상태 유지 셸 세션이 필요한 워크플로에는 부적합.
