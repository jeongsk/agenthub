---
title: "deadskills"
description: "Claude Code와 Codex의 로컬 transcript를 분석해 사용하지 않는 스킬, context 비용, 토큰 사용량과 dead·zombie 스킬을 찾아주는 로컬 우선 CLI입니다."
category: "cli-utility"
tags: ["claude-code", "codex", "agent-skills", "skill-analytics", "unused-skills", "token-cost", "context-window", "local-first", "cli", "typescript"]
githubUrl: "https://github.com/anandsaini18/deadskills"
githubStars: 22
author: "anandsaini18"
installCommand: "npx deadskills"
compatibleAgents: ["Claude Code", "Codex"]
featured: false
icon: "Terminal"
---

# deadskills

deadskills는 설치된 에이전트 스킬이 실제로 사용되는지 분석하는 **로컬 우선·무의존성 CLI**입니다. Claude Code와 Codex의 로컬 skill 디렉터리와 session transcript를 읽어 스킬별 호출 횟수, prompt 주입 비용, 예상 토큰 비용을 계산하고, 사용하지 않는 스킬을 정리할 근거를 제공합니다.

## 언제 쓰나

- 설치된 스킬이 실제로 사용되는지 확인하고 싶을 때
- 모든 prompt에 주입되는 스킬 설명의 context 비용을 줄이고 싶을 때
- 오래 사용하지 않은 skill을 찾아 정리하고 싶을 때
- Claude Code·Codex transcript가 정상적으로 파싱되는지 점검하고 싶을 때
- 분석 결과를 JSON으로 받아 별도 도구나 리포트에 연결하고 싶을 때

## 주요 기능

- **Context tax 계산** — 설치된 스킬이 매 prompt에 추가하는 예상 토큰 비용을 하나의 수치로 보여줍니다.
- **스킬별 사용량 분석** — transcript 기반 호출 횟수와 예상 토큰 비용을 함께 표시합니다.
- **상태 분류** — 한 번이라도 호출된 `active`, 90일 이상 사용되지 않은 `zombie`, 한 번도 호출되지 않은 `dead` 상태를 구분합니다.
- **에이전트 자동 감지** — `~/.claude`와 `~/.codex` 디렉터리가 존재하면 해당 에이전트를 자동으로 분석합니다.
- **건강 검사** — `doctor` 명령으로 transcript 파싱 누락이나 건너뛴 라인을 확인합니다.
- **구조화된 출력** — `--json`으로 report schema에 맞는 machine-readable 결과를 생성합니다.
- **분석 기간·대상 제한** — `--since 30d`, `--since 8w`, ISO 날짜, `--agent <name>`으로 분석 범위를 제한할 수 있습니다.

## 설치 및 사용

Node.js 18 이상에서 바로 실행할 수 있습니다.

```bash
npx deadskills
```

주요 명령은 다음과 같습니다.

```bash
npx deadskills              # 감지된 모든 에이전트의 전체 리포트
npx deadskills dead         # dead 스킬만 표시
npx deadskills doctor       # transcript 파싱 상태 점검
npx deadskills --since 30d  # 최근 30일만 분석
npx deadskills --json       # JSON 결과 출력
npx deadskills --agent <name>
```

전역 설치가 필요하면 다음을 사용할 수 있습니다.

```bash
npm install -g deadskills
deadskills
```

## 동작 방식과 주의사항

1. 에이전트 skill 디렉터리에서 `SKILL.md` frontmatter와 토큰 비용 정보를 읽습니다.
2. JSONL session transcript를 분석해 스킬 호출 횟수와 비용을 계산합니다.
3. 누락되거나 건너뛴 transcript 라인은 `doctor` 결과에 표시하고 조용히 버리지 않습니다.

- transcript는 로컬에서만 읽으며 runtime 네트워크 통신이나 telemetry가 없습니다.
- 토큰 수치는 약 4문자당 1토큰을 사용하는 **추정치**이며 prompt caching으로 실제 비용은 더 낮을 수 있습니다.
- 분석 결과는 정리 후보를 제시할 뿐, 스킬 파일을 자동 삭제하지 않습니다.
- 현재 공식 지원 에이전트는 Claude Code와 Codex입니다.

MIT License로 배포되며 report schema는 CC0으로 공개됩니다.
