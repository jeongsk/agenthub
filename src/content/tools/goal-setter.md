---
title: "goal-setter"
description: "Turn rough long-running requests into evidence-backed /goal completion contracts — an Agent Skill for Claude Code and Codex"
category: "agent-skill"
tags: ["agent-skill", "claude-code", "codex", "workflow-management", "codex-skill", "project-management", "python"]
githubUrl: "https://github.com/gotalab/goal-setter-skill"
githubStars: 60
author: "gotalab"
installCommand: "codex App Plugin: $skill-installer install https://github.com/gotalab/goal-setter-skill/tree/main/skills/goal-setter\nClaude Code: /plugin marketplace add gotalab/goal-setter-skill && /plugin install goal-setter@goal-setter"
compatibleAgents: ["Claude Code", "Codex"]
featured: false
icon: "Target"
---

# goal-setter

**Turn rough long-running work into a compact goal with a clear finish line.**

goal-setter는 단발성 프롬프트로 처리하기 어려운 장기 작업을 증거 기반의 완료 계약(Goal)으로 변환해주는 스킬입니다. 모호한 요청을 받아 결과물, 성공 증거, 경계, 중지 규칙을 명확히 정리하면서 구현 판단은 실행자에게 맡깁니다.

규칙 중심 절차보다 **검증 기준(verification target)** 을 선호합니다. Goal이 모든 단계를 규정하지 않고, 무엇을 증명해야 하는지 말하게 설계되어 있습니다.

## 핵심 동작

- 초안을 작성하기 전에 의도된 결과를 재구성합니다.
- 결과물(result), 증거(evidence), 경계(boundary), 위험(risk), 중지 판단(stop decision)을 바꾸는 절만 추가합니다.
- 답변이 Goal을 바꾸는 소재 질문만 하나씩 던집니다.
- 작은 작업은 가볍게 유지하고, 큰 작업은 증거 기반의 open-items loop를 유지하며 read-only 리뷰나 write 스레드를 유용할 때만 분리합니다.

## 설치

| 대상 | 방법 |
|------|------|
| Codex App Plugin | `/plugins` → Add plugin marketplace: Source `gotalab/goal-setter-skill`, Git ref `main`, Sparse paths `plugins/goal-setter` |
| Codex Skill | `$skill-installer install https://github.com/gotalab/goal-setter-skill/tree/main/skills/goal-setter` |
| Claude Code | `/plugin marketplace add gotalab/goal-setter-skill` → `/plugin install goal-setter@goal-setter` |
| Skills CLI | `npx skills add gotalab/goal-setter-skill` |

## 사용법

- `$goal-setter draft a goal for migrating our API client to v2` — Goal 초안 작성
- `$goal-setter set a goal: all checkout tests pass after the refactor` — Goal 활성화
- `spawn_agent`·`create_thread` 등 worker tool이 필요한 경우 `$goal-setter`가 정확한 `/goal ...` 라인을 반환하며, 사용자가 전송해야 tool이 승인됩니다.

## 특징 요약

- 불필요한 질문을 최소화하고, 답변에 따라 Goal이 바뀌는 질문만 선택적으로 던집니다.
- Codex/Claude Code의 `/goal` 시스템과 결합해 복잡한 작업을 여러 에이전트가 안정적으로 완료할 수 있게 합니다.
- 작은 작업은 `Goal` 없이 일반 프롬프트로, 큰 작업만 증명 가능한 `Goal`로 전환합니다.

## 관련 링크

- [GitHub 저장소](https://github.com/gotalab/goal-setter-skill)
- 라이선스: MIT