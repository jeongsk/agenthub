---
title: "Agent Skills"
description: "AI 코딩 에이전트가 spec, plan, build, test, review, ship 흐름을 품질 게이트와 함께 일관되게 따르도록 만든 생산용 엔지니어링 스킬 팩입니다."
category: "agent-skill"
tags: ["agent-skills", "claude-code", "cursor", "codex", "gemini", "opencode", "workflow", "testing", "review", "shipping", "quality-gates", "software-engineering"]
githubUrl: "https://github.com/addyosmani/agent-skills"
githubStars: 66407
author: "addyosmani"
installCommand: "/plugin marketplace add addyosmani/agent-skills"
compatibleAgents: ["Claude Code", "Cursor", "Codex", "Gemini", "OpenCode", "Antigravity", "GitHub Copilot", "Kiro", "Windsurf"]
featured: true
icon: "BookMarked"
---

# Agent Skills

Agent Skills는 AI 코딩 에이전트가 senior engineer처럼 일관된 개발 절차를 따르도록 만든 생산용 엔지니어링 스킬 팩입니다. 아이디어 정의부터 계획, 구현, 테스트, 리뷰, 성능 감사, 코드 단순화, 릴리스까지 개발 수명주기 전반을 slash command와 `SKILL.md` 워크플로로 나누고, 각 단계마다 검증 증거와 품질 게이트를 요구합니다.

## 언제 쓰나

- Claude Code, Cursor, Codex, Gemini CLI, OpenCode 같은 코딩 에이전트에 검증된 개발 절차를 붙이고 싶을 때
- 에이전트가 바로 코드를 쓰기 전에 spec과 plan을 만들도록 강제하고 싶을 때
- 테스트, 리뷰, 보안, 성능, 문서화, 배포 체크리스트를 반복 가능한 스킬로 운영하고 싶을 때
- 팀의 엔지니어링 문화와 품질 기준을 여러 에이전트/IDE에 이식하고 싶을 때
- `/spec`, `/plan`, `/build`, `/test`, `/review`, `/ship` 같은 명령으로 개발 흐름을 표준화하고 싶을 때

## 핵심 특징

- **개발 수명주기 slash commands**: `/spec`, `/plan`, `/build`, `/test`, `/review`, `/webperf`, `/code-simplify`, `/ship` 8개 명령이 define, plan, build, verify, review, ship 단계를 연결합니다.
- **24개 스킬 팩**: 23개 lifecycle skill과 `using-agent-skills` meta skill을 포함합니다. 각 스킬은 단순 조언이 아니라 단계, 체크포인트, 종료 조건, anti-rationalization을 가진 워크플로입니다.
- **생산용 품질 게이트**: 테스트 통과, 빌드 출력, 런타임 데이터, 리뷰 기준 같은 증거를 요구해 “그럴듯함”이 아니라 실제 검증을 기준으로 삼습니다.
- **다중 에이전트 지원**: Claude Code plugin, Cursor rules, Gemini CLI skills, Antigravity plugin, OpenCode, Copilot instructions, Kiro/Windsurf 등 다양한 환경에 맞춘 설치 경로를 제공합니다.
- **전문 persona 포함**: `code-reviewer`, `test-engineer`, `security-auditor`, `web-performance-auditor` 같은 리뷰용 에이전트 persona를 포함합니다.
- **참고 체크리스트 제공**: Definition of Done, testing patterns, security, performance, accessibility, observability, orchestration reference를 함께 제공합니다.

## 빠른 시작

Claude Code에서는 marketplace plugin으로 설치할 수 있습니다.

```bash
/plugin marketplace add addyosmani/agent-skills
/plugin install agent-skills@addy-agent-skills
```

SSH 설정이 없으면 HTTPS URL을 직접 지정할 수 있습니다.

```bash
/plugin marketplace add https://github.com/addyosmani/agent-skills.git
/plugin install agent-skills@addy-agent-skills
```

로컬 개발용으로는 저장소를 clone한 뒤 plugin directory로 지정합니다.

```bash
git clone https://github.com/addyosmani/agent-skills.git
claude --plugin-dir /path/to/agent-skills
```

Gemini CLI에서는 skills 디렉터리를 설치합니다.

```bash
gemini skills install https://github.com/addyosmani/agent-skills.git --path skills
```

Antigravity CLI에서는 native plugin으로 설치할 수 있습니다.

```bash
agy plugin install https://github.com/addyosmani/agent-skills.git
```

## 포함된 스킬 영역

| 단계 | 대표 스킬 |
| --- | --- |
| Define | `interview-me`, `idea-refine`, `spec-driven-development` |
| Plan | `planning-and-task-breakdown` |
| Build | `incremental-implementation`, `test-driven-development`, `context-engineering`, `source-driven-development`, `doubt-driven-development`, `frontend-ui-engineering`, `api-and-interface-design` |
| Verify | `browser-testing-with-devtools`, `debugging-and-error-recovery` |
| Review | `code-review-and-quality`, `code-simplification`, `security-and-hardening`, `performance-optimization` |
| Ship | `git-workflow-and-versioning`, `ci-cd-and-automation`, `deprecation-and-migration`, `documentation-and-adrs`, `observability-and-instrumentation`, `shipping-and-launch` |
| Meta | `using-agent-skills` |

## 참고

- 각 스킬은 `skills/<name>/SKILL.md` 구조를 사용합니다.
- 저장소에는 `agents/`, `references/`, `hooks/`, `.claude/commands/`, `.gemini/commands/`, Antigravity용 `commands/`와 `plugin.json`도 포함됩니다.
- 라이선스는 MIT입니다.
