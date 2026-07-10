---
title: "DeepTeam"
description: "LLM과 AI 에이전트를 대상으로 탈옥·프롬프트 인젝션·멀티턴 공격을 시뮬레이션하는 오픈소스 레드팀 및 보안 테스트 프레임워크입니다."
category: "agent-infrastructure"
tags: ["llm-security", "red-teaming", "prompt-injection", "jailbreaking", "llm-evaluation", "guardrails", "ai-agents", "python", "owasp", "mitre-atlas"]
githubUrl: "https://github.com/confident-ai/deepteam"
websiteUrl: "https://trydeepteam.com"
githubStars: 2122
author: "confident-ai"
installCommand: "pip install -U deepteam"
compatibleAgents: ["Claude Code", "Codex", "Gemini", "Cursor", "OpenCode", "Hermes Agent"]
featured: false
icon: "ShieldCheck"
---

# DeepTeam

DeepTeam은 LLM 애플리케이션을 대상으로 하는 오픈소스 레드팀(red teaming) 프레임워크입니다. 침투 테스트처럼 실제 공격자가 사용할 법한 입력을 LLM 시스템에 보내 탈옥, 프롬프트 인젝션, 멀티턴 악용 등의 취약점을 찾습니다. AI 에이전트, RAG 파이프라인, 챗봇을 로컬 환경에서 테스트할 수 있으며 DeepEval 위에 구축되어 있습니다.

## 언제 쓰나

- 배포 전에 LLM 애플리케이션의 보안·안전 취약점을 자동으로 점검하고 싶을 때
- 프롬프트 유출, PII 유출, 편향, 유해성, SQL 인젝션, SSRF, 과도한 에이전시 등을 테스트할 때
- OWASP Top 10 for LLMs, OWASP Top 10 for Agents, NIST AI RMF, MITRE ATLAS 같은 프레임워크 기준으로 평가할 때
- 테스트에서 발견한 입력·출력 문제를 프로덕션 가드레일로 차단하고 싶을 때

## 핵심 기능

- **50개 이상의 취약점**: 데이터 프라이버시, 책임 있는 AI, 보안, 안전, 비즈니스, 에이전트 특화 취약점을 제공합니다.
- **20개 이상의 공격 기법**: 프롬프트 인젝션, 롤플레이, 인코딩 우회, 다국어 공격과 선형·트리·Crescendo 등 멀티턴 탈옥을 지원합니다.
- **LLM-as-a-Judge 평가**: 사용자가 선택한 LLM으로 응답을 로컬에서 판정하고 통과·실패 결과와 reasoning을 생성합니다.
- **프로덕션 가드레일**: 입력과 출력을 빠르게 분류하는 Toxicity, Prompt Injection, Privacy, Illegal, Hallucination, Topical, Cybersecurity 가드를 제공합니다.
- **확장 가능한 실행 방식**: 취약점과 공격을 직접 정의하고, YAML 기반 CLI 또는 Python API로 실행할 수 있습니다. 결과는 로컬 JSON과 데이터프레임으로 다룰 수 있습니다.

## 빠른 시작

```bash
pip install -U deepteam
```

```python
from deepteam import red_team
from deepteam.vulnerabilities import Bias
from deepteam.attacks.single_turn import PromptInjection

async def model_callback(input: str) -> str:
    # 실제 LLM 애플리케이션 호출로 교체합니다.
    return f"I'm sorry but I can't answer this: {input}"

risk_assessment = red_team(
    model_callback=model_callback,
    vulnerabilities=[Bias(types=["race"])],
    attacks=[PromptInjection()],
)
```

## 참고 및 주의사항

DeepTeam은 Apache-2.0 라이선스로 공개되어 개인·상업적 사용이 가능합니다. 레드팀 실행에는 평가 대상 애플리케이션을 호출할 수 있는 모델 설정이 필요하며, README는 모든 LLM을 선택할 수 있다고 설명합니다. 테스트 결과를 팀 단위로 관리하거나 프로덕션 취약점을 모니터링하려면 Confident AI 플랫폼을 함께 사용할 수 있습니다. 실제 운영 전에는 공격 생성 비용, 평가 모델의 판정 편향, 테스트 데이터의 민감정보 처리, 가드레일의 오탐·누락을 별도로 검증해야 합니다.
