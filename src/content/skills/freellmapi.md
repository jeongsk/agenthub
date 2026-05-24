---
title: "FreeLLMAPI"
description: "여러 무료 LLM 제공자의 free tier를 하나의 OpenAI 호환 엔드포인트로 묶는 프록시입니다. 자동 failover와 키별 사용량 추적으로 안정적인 호출을 돕습니다."
category: "agent-harness"
tags: ["openai-compatible", "proxy", "model-routing", "failover", "llm", "free-tier"]
githubUrl: "https://github.com/tashfeenahmed/freellmapi"
author: "tashfeenahmed"
installCommand: "npm install -g freellmapi"
compatibleAgents: ["Claude Code", "Cursor", "Codex", "OpenCode"]
featured: true
icon: "Shuffle"
---

# FreeLLMAPI

FreeLLMAPI는 여러 무료 LLM 제공자의 free tier를 하나의 OpenAI 호환 엔드포인트로 묶는 프록시입니다. 자동 failover와 사용량 추적으로 안정적인 호출을 돕습니다.

## 언제 쓰나

- 하나의 `base_url`로 여러 무료 모델 공급자를 묶고 싶을 때
- 특정 제공자의 rate limit에 자주 걸려서 자동 failover가 필요할 때
- 에이전트나 앱에서 공급자별 키를 직접 관리하고 싶지 않을 때
- 개인 실험용으로 저비용 LLM 라우팅 레이어가 필요할 때

## 특징

- OpenAI 호환 `/v1/chat/completions` 와 `/v1/models` 를 제공합니다.
- 공급자별 rate limit을 추적하고, 실패 시 다음 후보로 넘어갑니다.
- 키를 암호화해 저장하고, 상태를 health check로 관리합니다.
- 대시보드와 플레이그라운드까지 포함한 운영 UI를 제공합니다.

## 참고

- 이 저장소는 단일 기능 도구보다 **에이전트 모델 공급망을 관리하는 하네스**에 가깝습니다.
- 그래서 이 레지스트리에서는 `agent-harness`로 분류하는 편이 자연스럽습니다.
