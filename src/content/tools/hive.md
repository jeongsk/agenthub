---
title: "Hive"
description: "브라우저 워크벤치에서 Claude Code, Codex, Gemini, OpenCode 등 실제 CLI 에이전트를 PTY 기반 팀으로 실행하고, 작업 그래프·터미널·리포트를 한곳에서 관리하는 로컬 우선 멀티 에이전트 협업 도구입니다."
category: "agent-harness"
tags: ["multi-agent", "agent-orchestration", "coding-agent", "browser-workbench", "local-first", "pty", "cli", "typescript", "team-memory"]
githubUrl: "https://github.com/tt-a1i/hive"
websiteUrl: "https://hivehq.dev"
githubStars: 414
author: "tt-a1i"
installCommand: "npm install -g @tt-a1i/hive"
compatibleAgents: ["Claude Code", "Codex", "Gemini", "OpenCode", "Qwen Code", "Hermes Agent", "Cursor", "Grok Build"]
featured: false
icon: "MonitorSmartphone"
---

# Hive

Hive는 여러 CLI 코딩 에이전트를 브라우저 기반 작업공간에서 실제 팀처럼 운영하는 로컬 우선 멀티 에이전트 협업 도구입니다. Orchestrator가 작업을 계획·분배하고, worker가 구현·리뷰·테스트·조사를 수행하며, 각 에이전트는 시뮬레이션이 아닌 로컬 PTY 프로세스로 실행됩니다.

## 언제 쓰나

- 구현자·리뷰어·테스터를 나눠 PR을 만들고 검증하는 흐름을 한 화면에서 관리하고 싶을 때
- 서버·UI·최근 커밋처럼 서로 다른 범위로 버그 조사를 병렬 분할하고 싶을 때
- 조사·초안 작성·팩트체크를 별도 에이전트에 맡기면서 작업 맥락과 보고서를 보존하고 싶을 때
- 여러 터미널을 직접 관리하지 않고 로컬 CLI 에이전트의 세션·작업·진행 상황을 시각적으로 추적하고 싶을 때

## 핵심 기능

- **실제 CLI 에이전트 실행** — Claude Code, Codex, Gemini, OpenCode, Qwen, Hermes, Cursor, Grok Build 등의 CLI를 Orchestrator 또는 worker로 연결합니다.
- **브라우저 작업공간** — `127.0.0.1`에서 팀 구성, 에이전트 터미널, 작업 목록, 리포트, 워크스페이스 전환을 제공합니다.
- **PTY 기반 터미널** — 에이전트를 실제 프로세스로 실행하고 백그라운드 세션 보존 및 네이티브 세션 재개를 지원합니다.
- **공유 작업 그래프** — 각 워크스페이스의 `.hive/tasks.md`에 작업 상태를 저장해 에이전트 간 핸드오프를 inspectable한 Markdown으로 남깁니다.
- **팀 명령과 메모리** — Hive가 관리하는 세션에 `team send`, `team list`, `team report`를 주입하고, workspace 제약·결정·장기 맥락을 팀 메모리로 유지합니다.
- **Auto-staff** — Orchestrator가 작업에 맞춰 coder·tester·reviewer를 임시 생성하고 완료 후 정리할 수 있습니다. 기본 활성화된 실험 기능입니다.
- **Workflows** — 구현·리뷰·테스트 등을 여러 단계로 연결하는 멀티 에이전트 워크플로를 실행할 수 있습니다. 설정에서 켜는 실험 기능이며 기본값은 비활성화입니다.
- **선택적 원격 접근** — 기본적으로 꺼져 있지만, 페어링한 휴대폰에서 종단간 암호화 터널을 통해 실행 중인 Hive에 접근할 수 있습니다.

## 설치 및 빠른 시작

필수 조건은 Node.js 22 이상과 PATH에 설치·인증된 CLI 에이전트 하나 이상입니다.

```bash
npm install -g @tt-a1i/hive
hive
```

Hive가 출력한 보통 `http://127.0.0.1:3000/` 주소를 브라우저에서 열고, 프로젝트 폴더로 workspace를 만든 뒤 Orchestrator와 worker를 추가합니다. 포트를 바꾸려면 다음처럼 실행합니다.

```bash
hive --port 4010
```

PWA 설치는 Chrome·Edge·Brave에서 지원되며, 설치 후에도 Hive 런타임 프로세스는 계속 실행되어야 합니다.

## 주의사항

- Hive는 에이전트 모델을 제공하거나 CLI를 대신 설치하지 않습니다. 각 CLI의 설치·인증·모델 접근 권한은 별도로 준비해야 합니다.
- macOS와 Linux가 Tier 1, Windows는 best-effort인 Tier 2 지원입니다. `node-pty`와 `better-sqlite3` 네이티브 패키지 때문에 사전 빌드 바이너리가 없으면 플랫폼 빌드 도구가 필요할 수 있습니다.
- Hive는 샌드박스, 다중 사용자 인증, 보안 경계를 제공하지 않습니다. worker는 Hive를 실행한 OS 계정과 선택한 workspace에 대해 동일한 수준의 셸·파일시스템 접근 권한을 가질 수 있습니다.
- 기본 원격 접근은 꺼져 있고 런타임은 `127.0.0.1`에 바인딩됩니다. 원격 접근을 켜면 페어링된 휴대폰이 로컬 브라우저와 같은 권한을 가지므로 신뢰할 수 있는 기기만 페어링해야 합니다.
- 기본 제공 preset은 가능한 경우 각 CLI의 비대화형 또는 승인 우회 모드를 사용합니다. 민감한 저장소에는 [SECURITY.md](https://github.com/tt-a1i/hive/blob/main/SECURITY.md)를 먼저 확인해야 합니다.
- 저장소 README 기준 Hive는 **alpha** 상태이며, Auto-staff와 Workflows는 실험 기능입니다.

Business Source License 1.1(BUSL-1.1)로 배포되며, 개인 사용·내부 배포·임베딩·포크 등의 정확한 허용 범위는 저장소의 `LICENSE.BSL`을 확인해야 합니다.
