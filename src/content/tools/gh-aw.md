---
title: "GitHub Agentic Workflows (gh-aw)"
description: "자연어 마크다운으로 에이전트 워크플로우를 작성하고 GitHub Actions에서 실행하는 gh CLI 확장."
category: "agent-harness"
tags: ["gh-extension", "github-actions", "agentic-workflows", "copilot", "claude", "codex", "gemini", "ci"]
githubUrl: "https://github.com/github/gh-aw"
websiteUrl: "https://gh.io/gh-aw"
githubStars: 4753
author: "github"
installCommand: "gh extension install github/gh-aw"
compatibleAgents: ["Copilot", "Claude Code", "Codex", "Gemini"]
featured: false
icon: "Blocks"
---

## 개요

**GitHub Agentic Workflows (gh-aw)**는 자연어 마크다운으로 에이전트 워크플로우를 작성하고, 이를 GitHub Actions에서 안전하게 실행하는 공식 GitHub CLI 확장입니다. = Actions + Agent + Safety.

GitHub에서 직접 개발·유지 관리하며, Copilot·Claude (Anthropic)·Codex (OpenAI)·Gemini (Google) 엔진을 모두 지원합니다. 이미 보유한 AI 계정을 그대로 사용할 수 있습니다.

## 주요 기능

- **자연어 워크플로우**: 마크다운으로 워크플로우를 작성하면 GitHub Actions에서 컴파일하여 실행합니다.
- **멀티 에이전트 지원**: Copilot, Claude, Codex, Gemini 중 원하는 AI 엔진을 선택 가능.
- **안전 가드레일**:
  - 기본 읽기 전용 권한, 쓰기는 sanitize된 `safe-outputs` 통해서만 허용
  - 샌드박스 실행, 입력 검증, 네트워크 격리
  - SHA-pinned 의존성으로 공급망 보안 보장
  - 도구 허용 리스트(tool allow-listing) 및 컴파일 타임 검증
  - 팀 멤버만 접근 가능하도록 게이트 설정, 중요 작업에 인간 승인 게이트
- **GitHub 통합**: PR 리뷰, 이슈 트리아지, 데일리 저장소 상태 요약 등 저장소 관리 작업 자동화.
- **컴패니언 프로젝트**: Agent Workflow Firewall(네트워크 송신 제어), MCP Gateway(MCP 호출 라우팅), gh-aw-actions(공유 GitHub Actions 라이브러리).

## 설치

```bash
# gh CLI 확장으로 설치
gh extension install github/gh-aw

# 또는 설치 스크립트 (GitHub 토큰 불필요)
curl -sL https://raw.githubusercontent.com/github/gh-aw/main/install-gh-aw.sh | bash
```

## 빠른 시작

```bash
# 저장소 초기화
gh aw init

# 샘플 워크플로우 추가 (PR 생성)
gh aw add --create-pull-request
```

## 주의사항

- **버전 경고**: 0.68.4 ~ 0.71.3 버전은 빌링 버그가 있어 사용이 중단(retire)되었습니다. 최신 버전으로 업그레이드해야 합니다.
- 에이전트 워크플로우 사용 시 보안 및 인간 감독이 필수적이며, 주의해서 사용해야 합니다.
- Go로 작성된 CLI 도구이며 `gh` CLI 확장으로 동작합니다.
