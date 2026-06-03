---
title: "Defending Code Reference Harness"
description: "Claude로 취약점 탐지·분류·패치 검증 흐름을 실험하는 오픈소스 레퍼런스 하네스입니다. 자율 스캐닝, triage, patch 검증 파이프라인을 만들거나 보안 에이전트 워크플로를 참고할 때 유용합니다."
category: "agent-harness"
tags: ["security", "vulnerability-discovery", "triage", "patching", "sandbox", "claude-code", "autonomous-agents", "reference-implementation"]
githubUrl: "https://github.com/anthropics/defending-code-reference-harness"
githubStars: 227
author: "anthropics"
compatibleAgents: ["Claude Code"]
featured: false
icon: "ShieldAlert"
---

# Defending Code Reference Harness

Defending Code Reference Harness는 Claude를 이용해 취약점 탐지, triage, 패치 검증까지 이어지는 보안 워크플로를 보여 주는 레퍼런스 구현입니다. 자율 스캐닝 파이프라인을 직접 만들거나, 보안 에이전트가 어떻게 분리된 단계로 동작해야 하는지 참고하고 싶을 때 유용합니다.

## 언제 쓰나

- 자율적인 취약점 발견·분류·수정 파이프라인을 설계하고 싶을 때
- Claude 기반 보안 에이전트의 흐름을 참고하고 싶을 때
- 스캔, verify, dedupe, report, patch 같은 단계형 하네스를 만들고 싶을 때
- gVisor 같은 샌드박스 안에서 실행되는 보안 자동화 구조를 보고 싶을 때
- 보안 연구용 레퍼런스 구현을 통해 워크플로를 학습하고 싶을 때

## 핵심 특징

- **단계형 파이프라인**: recon → find → verify → report → patch 흐름을 제공합니다.
- **Claude Code 스킬**: `/quickstart`, `/threat-model`, `/vuln-scan`, `/triage`, `/patch`, `/customize`를 포함합니다.
- **샌드박스 실행**: 자율 에이전트 실행은 격리 환경에서 돌리도록 설계됐습니다.
- **레퍼런스 구현**: 제품이라기보다 보안 자동화 구조를 보여 주는 참고용 하네스입니다.
