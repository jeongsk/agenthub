---
title: "Sovereign Skills"
description: "Claude Code 프로젝트 생애주기를 setup, scope, freeze, goal-lock, code-autopsy, pre-push, session 관리까지 12개 스킬로 묶은 production-grade AI coding agent 스킬팩입니다. Codex와 Cursor에서도 npx skills로 일부 설치해 쓸 수 있습니다."
category: "agent-skill"
tags: ["agent-skills", "claude-code", "codex", "cursor", "code-review", "security", "pre-push", "session-management", "scope", "workflow", "goal-lock", "skill-pack"]
githubUrl: "https://github.com/AlexZio00/sovereign-skills"
websiteUrl: "https://x.com/AlexZio00"
githubStars: 94
author: "AlexZio00"
installCommand: "npx skills add AlexZio00/sovereign-skills --skill goal-lock --agent claude-code -g -y"
compatibleAgents: ["Claude Code", "Codex", "Cursor"]
featured: false
icon: "ShieldCheck"
---

# Sovereign Skills

Sovereign Skills는 AI 코딩 에이전트를 프로젝트 전 과정에서 더 엄격하게 운용하기 위한 스킬팩입니다. 새 프로젝트 초기화, Claude Code harness 설정, 작업 범위 고정, 구현 discipline, 코드 리뷰, pre-push 보안 점검, 세션 시작/체크포인트까지 12개 스킬로 구성되어 있습니다.

## 언제 쓰나

- Claude Code 프로젝트에 규칙, hooks, memory, agent routing을 갖춘 harness를 만들고 싶을 때
- 구현 전에 IN/OUT 범위와 exit criteria를 명확히 하고 싶을 때
- 에이전트가 목표에서 벗어나거나, 테스트 삭제·mock 감싸기·검증 생략 같은 “성공 위장”을 하지 못하게 막고 싶을 때
- push 전에 secrets scan, build/test/lint, AI code review를 한 번에 돌리는 pre-push 절차가 필요할 때
- 세션 시작/종료 시 handoff와 lesson을 남겨 장기 프로젝트의 맥락을 유지하고 싶을 때

## 포함된 스킬

| 영역 | 스킬 |
|---|---|
| Setup | `project-init`, `setup` |
| Daily workflow | `scope`, `freeze`, `goal-lock`, `pre-push` |
| Perspective | `stepback` |
| Session management | `session-start`, `session-checkpoint` |
| Code review | `code-autopsy` |
| Quality | `project-check`, `collab-audit` |

## 핵심 특징

- **12개 lifecycle 스킬**: setup부터 code review와 session checkpoint까지 반복 가능한 흐름을 제공합니다.
- **Goal-lock discipline**: PLAN → DO → VERIFY → FINALIZE → OUTPUT 루프와 실제 실행 기반 DONE EVIDENCE를 강제합니다.
- **Code Autopsy**: 12개 질문 기반 코드 리뷰, 4축 scoring, severity anchor, deployment verdict를 제공합니다.
- **Pre-push pipeline**: hardcoded credential, supply-chain risk, auth bypass, OWASP Top 10 계열 문제를 push 전에 확인하도록 설계되어 있습니다.
- **Cross-agent 설치 경로**: Claude Code skills 디렉터리에 복사하거나, Claude Code marketplace로 등록하거나, Codex/Cursor는 `npx skills add`로 설치할 수 있습니다.

## 빠른 설치

전체 스킬을 Claude Code에 복사하는 방식입니다.

```bash
git clone https://github.com/AlexZio00/sovereign-skills.git
cd sovereign-skills
for d in */; do [ -f "$d/SKILL.md" ] && cp -r "$d" ~/.claude/skills/; done
```

개별 스킬을 `npx skills`로 설치할 수도 있습니다.

```bash
npx skills add AlexZio00/sovereign-skills --skill goal-lock --agent claude-code -g -y
npx skills add AlexZio00/sovereign-skills --skill goal-lock --agent codex -g -y
npx skills add AlexZio00/sovereign-skills --skill goal-lock --agent cursor -g -y
```

## 참고

- README 기준 현재 버전은 `v6.2`입니다.
- `pre-push` 스킬은 포함된 `scan_secrets.pl` 실행을 위해 Perl이 필요합니다.
- 스킬 본문은 Markdown instruction이므로, Claude Code에 한정되지 않고 Markdown 지침을 읽는 LLM에도 참고 자료로 사용할 수 있습니다.
