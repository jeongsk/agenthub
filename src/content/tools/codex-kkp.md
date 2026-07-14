---
title: "Codex KKP"
description: "Claude Code에서 Codex AI Agent를 subagent와 skill로 호출해 코드 분석·구현·리뷰를 병렬 수행하는 멀티플랫폼 플러그인입니다."
category: "plugin"
tags: ["claude-code", "codex", "claude-plugin", "subagents", "code-review", "multi-agent", "sandbox", "kotlin", "kotlin-multiplatform", "cross-platform"]
githubUrl: "https://github.com/ForteScarlet/codex-kkp"
githubStars: 25
author: "ForteScarlet"
installCommand: "git clone -b plugins/release https://github.com/ForteScarlet/codex-kkp.git"
compatibleAgents: ["Claude Code", "Codex"]
featured: false
icon: "Blocks"
---

# Codex KKP

Codex KKP는 Claude Code에서 Codex AI Agent를 subagent와 skill로 사용할 수 있게 해 주는 플러그인입니다. Claude Code가 코드 분석·구현·협업·리뷰 작업을 Codex에 위임하거나, 여러 Codex subagent를 병렬로 실행해 개발 속도와 검증 범위를 높일 수 있습니다.

## 언제 쓰나

- Claude Code에서 Codex를 별도 협업 에이전트로 호출하고 싶을 때
- 코드 분석·구현·리뷰 작업을 Codex에 위임하거나 병렬 subagent로 나누고 싶을 때
- Codex 세션을 재개하면서 이전 맥락을 유지하고 싶을 때
- macOS·Linux·Windows에서 동일한 Claude Code skill을 사용하고 싶을 때

## 핵심 기능

- **Claude Code 플러그인 통합** — Codex 협업용 skill과 subagent를 Claude Code의 marketplace 또는 프로젝트 skill 디렉터리에 설치합니다.
- **병렬 subagent 실행** — Claude Code가 Codex subagent를 여러 개 실행해 작업 협업과 코드 리뷰를 병렬화할 수 있습니다.
- **멀티플랫폼 실행 파일** — macOS Intel·Apple Silicon, Linux x86_64·ARM64, Windows x86_64용 실행 파일을 제공합니다.
- **결과 압축** — 기본적으로 완료된 결과만 반환해 불필요한 중간 출력과 토큰 사용량을 줄입니다.
- **샌드박스 모드** — `read-only`, `workspace-write`, `danger-full-access` 실행 모드를 선택할 수 있습니다.
- **세션 관리** — 이전 Codex 세션을 재개해 작업 맥락을 유지할 수 있습니다.

## 설치 및 빠른 시작

`plugins/release` 브랜치를 클론합니다.

```bash
git clone -b plugins/release https://github.com/ForteScarlet/codex-kkp.git
```

그 다음 Claude Code에서 `/plugin`을 실행하고 **Add marketplace**를 선택한 뒤, 클론한 저장소의 로컬 경로를 marketplace로 추가합니다.

릴리스 페이지의 `codex-agent-collaboration-marketplace.zip`을 내려받아 압축 해제한 뒤, 압축 해제된 디렉터리를 marketplace로 추가하는 방법도 사용할 수 있습니다. skill만 필요한 경우 `codex-agent-collaboration.zip`을 프로젝트의 `.claude/skills/` 아래에 배치할 수 있습니다.

설치 여부는 Claude Code에서 다음으로 확인할 수 있습니다.

```text
/agents
What skills do you have?
```

## 권한 및 주의사항

- 기본적으로 Codex는 `sandbox=read-only` 모드로 실행됩니다. 파일을 직접 수정해야 할 때는 `sandbox=workspace-write`를 지정해야 하며, `--full-auto`는 더 넓은 권한을 부여하므로 신뢰할 수 있는 저장소에서만 사용해야 합니다.
- 실행 파일은 플랫폼별 native binary로 제공되므로 운영체제와 CPU 아키텍처에 맞는 파일이 선택되는지 확인해야 합니다.
- Codex CLI를 별도로 설치·인증해야 하며, Claude Code와 Codex의 CLI 옵션·세션·출력 형식이 호환되는지 확인해야 합니다.
- marketplace 업데이트·제거가 Claude Code CLI 문제로 완전히 처리되지 않을 수 있습니다. 문제가 생기면 `~/.claude/plugins` 아래의 `installed_plugins.json`, `known_marketplaces.json` 등을 수동으로 정리해야 할 수 있습니다.

MIT 라이선스로 배포됩니다.
