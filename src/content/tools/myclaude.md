---
title: "myclaude"
description: "Claude Code에 BMAD·요구사항·개발 명령·멀티 에이전트 오케스트레이션 워크플로를 설치하고, Codex·Claude·Gemini·OpenCode 백엔드를 연결하는 에이전트 자동화 시스템입니다."
category: "agent-skill"
tags: ["claude-code", "multi-agent", "orchestration", "workflow", "bmad", "codeagent", "codex", "gemini", "opencode", "plugin"]
githubUrl: "https://github.com/stellarlinkco/myclaude"
githubStars: 2728
author: "stellarlinkco"
installCommand: "npx github:stellarlinkco/myclaude"
compatibleAgents: ["Claude Code", "Codex", "Gemini", "OpenCode"]
featured: false
icon: "Bot"
---

# myclaude

myclaude는 Claude Code에 여러 개발 방법론과 에이전트 스킬을 설치하는 멀티 에이전트 워크플로 시스템입니다. Claude Code를 Orchestrator로 사용해 요구사항을 정리하고 계획·구현·리뷰·테스트 단계를 진행하며, `codeagent-wrapper`를 통해 Codex·Claude·Gemini·OpenCode 같은 백엔드 CLI에 작업을 위임할 수 있습니다.

## 언제 쓰나

- Claude Code 안에서 요구사항부터 구현·리뷰·테스트까지 이어지는 재사용 가능한 개발 프로세스를 쓰고 싶을 때
- 기능 개발, 버그 조사, 빠른 프로토타이핑 등 작업 성격에 따라 워크플로를 선택하고 싶을 때
- 여러 AI 코딩 백엔드를 연결해 구현·검증 작업을 분산하고 싶을 때
- Claude Code의 slash command, agents, skills, hooks를 한 번에 설치·업데이트하고 싶을 때

## 핵심 기능

- **`do` 워크플로** — 5단계 기능 개발 흐름과 codeagent 오케스트레이션을 제공하는 기본 추천 모듈입니다.
- **`omo` 워크플로** — 버그 조사와 수정에 적합한 멀티 에이전트 오케스트레이션 흐름입니다.
- **BMAD 모듈** — 제품 요구사항·아키텍처·스프린트 계획·개발·코드 리뷰·QA를 역할별 에이전트로 나누는 애자일 프로세스입니다.
- **requirements 모듈** — 요구사항 생성부터 구현·리뷰·테스트까지 가볍게 연결하는 개발 파이프라인입니다.
- **development-essentials** — `/code`, `/debug`, `/test`, `/review`, `/refactor`, `/optimize` 등 일상 개발용 slash command를 제공합니다.
- **추가 스킬** — browser, codeagent, codex, dev, gemini, product-requirements, prototype-prompt-generator, skill-install 등을 개별 설치할 수 있습니다.
- **품질 게이트와 승인 지점** — 단계별 품질 점수, 반복 개선, 핵심 단계의 사용자 확인, `.claude/specs/` 기반 산출물 보존을 지원합니다.
- **모듈식 설치·업데이트** — 설치 가능한 모듈을 나열하고, 선택 설치하거나 기존 설치 항목만 업데이트할 수 있습니다.

## 설치 및 빠른 시작

대화형 설치:

```bash
npx github:stellarlinkco/myclaude
```

설치 가능한 모듈·스킬 목록 확인:

```bash
npx github:stellarlinkco/myclaude --list
```

특정 설치 디렉터리에 강제 설치하거나 업데이트:

```bash
npx github:stellarlinkco/myclaude --install-dir ~/.claude --force
npx github:stellarlinkco/myclaude --update
```

설치 후 Claude Code에서 주요 명령을 사용할 수 있습니다.

```text
/do "Build user authentication with OAuth2 and MFA"
/omo "Investigate and fix the flaky reconnect bug"
/code "Add API rate limiting"
```

기존 저장소를 직접 클론해 설치하는 방식도 제공됩니다.

```bash
git clone https://github.com/stellarlinkco/myclaude.git
cd myclaude
make install
```

## 주의사항

- 이 프로젝트는 Claude Code의 `~/.claude` 디렉터리에 commands, agents, skills, hooks, 설정 파일을 설치하는 도구입니다. 설치 대상 디렉터리와 기존 파일을 먼저 확인해야 합니다.
- Codex·Gemini·OpenCode를 백엔드로 사용하려면 해당 CLI를 별도로 설치하고 인증해야 하며, 필요한 출력 형식·resume·stdin 옵션이 각 도구 버전과 맞아야 합니다.
- README의 기본 Orchestrator는 Claude Code이며, 백엔드 실행은 `codeagent-wrapper`가 담당합니다. 모든 모듈이 모든 백엔드에서 동일하게 동작한다고 가정하면 안 됩니다.
- 설치·업데이트는 대상 디렉터리의 모듈 파일을 덮어쓸 수 있습니다. `--update`도 추적 중인 설치 모듈을 최신 GitHub 파일로 갱신하므로 로컬 수정 사항을 먼저 백업해야 합니다.
- 현재 기본 브랜치 `master` 기준 프로젝트 버전은 6.x이며, 라이선스는 **AGPL-3.0**입니다. AGPL 의무 없이 상업적으로 사용하려면 저장소가 안내하는 별도 상업 라이선스를 확인해야 합니다.

AGPL-3.0 라이선스로 배포됩니다.
