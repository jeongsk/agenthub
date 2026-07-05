---
title: "MiMo Code"
description: "터미널 기반 AI 코딩 어시스턴트. 코드 읽기/쓰기, 명령 실행, Git 관리, SQLite FTS5 기반 세션 간 지속 메모리, 지능형 컨텍스트 관리, 서브에이전트, 음성 입력을 지원하는 Xiaomi MiMo의 CLI 에이전트 런처입니다."
category: "agent-harness"
tags: ["ai-coding", "terminal", "persistent-memory", "cli", "subagent", "typescript", "ai-agents", "mimo"]
githubUrl: "https://github.com/XiaomiMiMo/MiMo-Code"
websiteUrl: "https://mimo.xiaomi.com/coder"
githubStars: 11447
author: "XiaomiMiMo"
installCommand: "npm install -g @mimo-ai/cli --registry https://registry.npmjs.org"
compatibleAgents: ["Claude Code", "Codex", "Gemini", "OpenCode", "Cline", "Cursor"]
featured: false
icon: "Terminal"
---

## 개요

MiMo Code는 터미널 네이티브 AI 코딩 어시스턴트로, 코드 읽기/쓰기, 명령 실행, Git 관리, 세션 간 지속 메모리를 통해 프로젝트 문맥을 유지하면서 지속적으로 개선됩니다. Xiaomi MiMo 플랫폼의 무료 채널(MiMo Auto)을 내장하고 있어 **설정 없이 바로 시작**할 수 있으며, OpenAI 호환 API를 지원하는 모든 주류 LLM 프로바이더와 연결할 수 있습니다.

## 주요 기능

### 다중 에이전트 모드
| 에이전트 | 용도 |
|---------|------|
| **build** | 기본. 개발을 위한 전체 도구 권한 |
| **plan** | 읽기 전용 분석 모드 — 코드 탐색 및 솔루션 설계 |
| **compose** | 스펙 기반 개발 및 스킬 기반 워크플로우를 위한 오케스트레이션 모드 |

`Tab` 키로 주 에이전트를 전환할 수 있으며, 시스템이 필요에 따라 서브에이전트를 생성합니다.

### 지속 메모리 (Persistent Memory)
SQLite FTS5 기반의 프로젝트 전반에 걸친 메모리 시스템:
- **MEMORY.md** — 프로젝트 지식, 규칙, 아키텍처 결정의 영속적 저장
- **checkpoint.md** — 모델 컨텍스트 창 상태에 기반한 자동 저장 세션 체크포인트
- **notes.md** — 임시 메모 영역
- **tasks/<id>/progress.md** — 태스크별 진행 로그

### 지능형 컨텍스트 관리
- **자동 체크포인트** — 모델 컨텍스트 창에 따라 세션 상태 저장 시점 자동 결정
- **컨텍스트 재구축** — 컨텍스트 한계 접근 시 최신 체크포인트, 프로젝트 메모리, 태스크 진행 상황을 기반으로 재구축
- **토큰 예산 주입** — 메모리/노트 콘텐츠의 중요도 순위에 따른 토큰 예산 기반 컨텍스트 주입

### 태스크 트래킹
`T1`, `T1.1`, `T1.2` 트리 형태 태스크 시스템으로, 세션 복원 시 태스크 진행 상황이 자동으로 유지됩니다.

### 서브에이전트 시스템
주 에이전트가 온디맨드로 서브에이전트를 생성할 수 있으며, 세션 컨텍스트를 공유하고 병렬 작업이 가능합니다. 라이프사이클 추적, 취소, 백그라운드 실행을 지원합니다.

### /goal 명령어 및 중지 조건
`/goal` 명령어로 세션의 중지 조건을 설정할 수 있으며, 에이전트가 중지하려 할 때 독립적인 judge 모델이 조건 충족 여부를 평가하여 과도한 조기 중지를 방지합니다.

### 음성 입력
TenVAD와 MiMo ASR 기반의 실시간 스트리밍 음성 입력 (`/voice`로 활성화). MiMo 로그인 사용자에게 제공되며 `sox` 의존성이 필요합니다.

### Compose 모드
스펙 기반 개발을 위한 구조화된 워크플로우로, 플래닝, 실행, 코드 리뷰, TDD, 디버깅, 검증, 머지까지 스펙에서 출시까지의 전체 수명 주기를 오케스트레이션합니다.

## 설치

```bash
# macOS / Linux 원샷 설치
curl -fsSL https://mimo.xiaomi.com/install | bash

# npm으로 설치 (모든 플랫폼, npm 레지스트리 미러는 지연 가능)
npm install -g @mimo-ai/cli --registry https://registry.npmjs.org
```

첫 실행 시 설정 마법사가 자동으로 시작됩니다:
- **MiMo Auto (일정 기간 무료)** — 설정 불필요
- **Xiaomi MiMo 플랫폼** — OAuth 로그인
- **Claude Code에서 가져오기** — 기존 인증을 한 단계로 마이그레이션
- **커스텀 프로바이더** — OpenAI 호환 API 추가

## 주의사항

- **Windows**: 베타 상태로, PowerShell 원샷 설치 지원 (`irm https://mimo.xiaomi.com/install.ps1 | iex`)
- **npm 미러 레지스트리**(cnpm, taobao 등): 패키지 동기 지연이 발생할 수 있으므로 npmjs.org 직통 설치 권장
- **WSL**: 클립보드 문제는 `xsel` 설치로 해결 가능
- **CJK(한글/일본어/중국어) 출력 문제**: Windows 비UTF-8 로케일에서 UTF-8 코드 페이지를 강제 적용하며, 시스템 전체 UTF-8 베타 옵션도 제공

## 관련 에코시스템

Xiaomi MiMo 모델은 Cursor, Cline, Zed 등 다양한 코딩 도구에서도 사용할 수 있으며, [awesome-mimo-agent](https://github.com/XiaomiMiMo/awesome-mimo-agent)에서 각 도구별 설정 가이드를 확인할 수 있습니다.