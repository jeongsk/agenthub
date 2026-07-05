---
title: "Ponytail"
description: "AI 에이전트가 과설계를 피하고 기존 코드, 표준 라이브러리, 네이티브 기능을 먼저 재사용하도록 만드는 경량 개발 규칙·스킬·플러그인 모음입니다."
category: "agent-skill"
tags: ["agent-skill", "prompt-engineering", "yagni", "code-review", "developer-tools"]
githubUrl: "https://github.com/DietrichGebert/ponytail"
websiteUrl: "https://ponytail.dev"
githubStars: 74371
author: "DietrichGebert"
installCommand: "npm install @dietrichgebert/ponytail"
compatibleAgents: ["Claude Code", "Codex", "OpenCode", "Gemini", "GitHub Copilot CLI", "Cursor", "Windsurf", "Cline", "Kiro", "Swival", "OpenClaw"]
featured: false
icon: "Scissors"
---

# Ponytail

Ponytail은 AI 에이전트에게 “게으른 시니어 개발자”처럼 생각하게 하는 개발 규칙·스킬·플러그인 모음입니다. 새 코드를 쓰기 전에 정말 필요한지, 이미 코드베이스에 있는지, 표준 라이브러리나 플랫폼 기능으로 해결되는지부터 확인하게 만들어 과설계와 불필요한 LOC를 줄이는 데 초점을 둡니다.

## 언제 쓰나

- AI 에이전트가 간단한 요청에 라이브러리, 래퍼, 상태 관리, 추상화를 과하게 추가하는 것을 줄이고 싶을 때
- “최소한으로, 하지만 안전성과 검증은 유지”하는 코딩 규칙을 프로젝트에 상시 주입하고 싶을 때
- 현재 diff나 전체 저장소에서 과설계·불필요한 코드·미뤄 둔 단순화 후보를 리뷰하고 싶을 때
- Claude Code, Codex, OpenCode, Gemini, Cursor, Windsurf, Cline 등 여러 에이전트에 같은 원칙을 이식하고 싶을 때

## 핵심 특징

- **단순화 사다리**: 필요성, 기존 코드 재사용, 표준 라이브러리, 네이티브 기능, 설치된 의존성, 한 줄 해결책 순서로 먼저 검토합니다.
- **멀티 에이전트 배포**: Claude Code/Codex 플러그인, OpenCode 플러그인, Gemini 확장, pi·Swival·OpenClaw 스킬, Cursor/Windsurf/Cline/Kiro 규칙 파일을 제공합니다.
- **명령형 스킬**: `/ponytail`, `/ponytail-review`, `/ponytail-audit`, `/ponytail-debt`, `/ponytail-gain`, `/ponytail-help` 계열 명령을 제공합니다.
- **안전성 유지**: 검증, 오류 처리, 보안, 접근성, 데이터 손실 방지는 단순화 대상에서 제외한다는 원칙을 명시합니다.
- **벤치마크 포함**: 실제 에이전트 작업에서 LOC, 토큰, 비용, 시간 변화와 안전성 결과를 재현 가능한 benchmark 문서로 제공합니다.

## 빠른 시작

Claude Code 플러그인 예시:

```text
/plugin marketplace add DietrichGebert/ponytail
/plugin install ponytail@ponytail
```

Codex CLI 예시:

```bash
codex plugin marketplace add DietrichGebert/ponytail
codex
```

Gemini CLI 예시:

```bash
gemini extensions install https://github.com/DietrichGebert/ponytail
```

OpenCode에서는 `opencode.json`에 패키지를 추가할 수 있습니다.

```json
{ "plugin": ["@dietrichgebert/ponytail"] }
```

## 참고

- Claude Code와 Codex 플러그인의 lifecycle hook은 Node.js가 PATH에 있어야 항상 켜진 활성화가 동작합니다.
- 명령은 스킬을 지원하는 호스트에서 사용할 수 있으며, Cursor/Windsurf/Cline/Kiro 등은 규칙 파일 기반의 instruction-only 방식으로 사용할 수 있습니다.
- `PONYTAIL_DEFAULT_MODE` 또는 `~/.config/ponytail/config.json`으로 기본 모드(`lite`, `full`, `ultra`, `off`)를 지정할 수 있습니다.
- 라이선스는 MIT입니다.
