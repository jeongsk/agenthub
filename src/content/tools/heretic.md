---
title: "Heretic"
description: "LLM의 안전 필터와 alignment를 완화해 모델을 다시 쓰게 만드는 모델 레이어 도구입니다. 특정 오픈소스 모델의 제약을 분석하거나 연구용으로 조정할 때 유용합니다."
category: "model-runtime"
tags: ["llm", "model-editing", "abliteration", "safety", "runtime"]
githubUrl: "https://github.com/p-e-w/heretic"
websiteUrl: "https://heretic-project.org"
githubStars: 22756
author: "p-e-w"
installCommand: "pip install -U heretic-llm"
compatibleAgents: ["Claude Code", "Codex", "Cursor", "OpenCode"]
icon: "BrainCircuit"
---

# Heretic

Heretic은 transformer 기반 언어 모델에서 안전성 제약을 줄이는 모델 레이어 도구입니다. 모델 자체를 수정하는 방식이라, 특정 모델의 동작을 연구하거나 재구성하는 작업에 적합합니다.

## 언제 쓰나

- 오픈소스 LLM의 안전 제약을 연구하고 싶을 때
- 모델 행동을 분석하거나 비교 실험을 진행할 때
- 로컬 환경에서 특정 모델을 재가공해 실험하고 싶을 때
- “모델 자체”를 건드리는 작업이 필요한 경우

## 핵심 특징

- **모델 레벨 작업**: 프롬프트가 아니라 모델 가중치/표현을 다룹니다.
- **완전 자동화**: 별도 복잡한 설정 없이 실행할 수 있습니다.
- **PyTorch 기반**: 최신 PyTorch 환경에서 동작하도록 설계되었습니다.
- **연구용 CLI**: `heretic --help`로 옵션을 확인하며 실험 흐름을 제어합니다.
