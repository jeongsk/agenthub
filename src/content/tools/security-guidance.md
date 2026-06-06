---
title: "Claude Code Security Guidance"
description: "Claude Code용 보안 가이드 플러그인입니다. 코드 변경을 할 때 위험한 패턴을 즉시 경고하고, diff와 커밋 단위로 보안 리뷰까지 붙여 취약점을 더 일찍 잡고 싶을 때 유용합니다."
category: "plugin"
tags: ["claude-code", "security", "guardrails", "code-review", "vulnerability", "anthropic", "plugin"]
githubUrl: "https://github.com/anthropics/claude-code"
githubStars: 130066
author: "anthropics"
installCommand: "/plugin install security-guidance@claude-plugins-official"
compatibleAgents: ["Claude Code"]
featured: true
icon: "ShieldCheck"
---

# Claude Code Security Guidance

Claude Code Security Guidance는 Anthropic의 Claude Code 저장소에 포함된 공식 보안 가이드 플러그인입니다. 편집 직후의 위험한 패턴 경고, diff 기반 LLM 리뷰, 커밋 시 에이전틱 보안 리뷰를 묶어서 제공해 코드 취약점을 더 일찍 발견하도록 돕습니다.

## 언제 쓰나

- Claude Code로 코드를 수정할 때 위험한 패턴을 즉시 경고받고 싶을 때
- 단순 정규식보다 변경 의미를 반영한 보안 리뷰가 필요할 때
- 커밋 전에 다중 파일 취약점까지 점검하고 싶을 때
- 팀 차원에서 Claude Code 보안 가드레일을 표준화하고 싶을 때
- 프로젝트별 보안 정책 파일을 Claude Code 리뷰 흐름에 연결하고 싶을 때

## 특징

- `Edit`/`Write` 시점의 패턴 경고
- 작업 종료 시 diff 기반 LLM 리뷰
- `git commit` 시 에이전틱 커밋 리뷰
- `claude-security-guidance.md`로 조직별 보안 정책 주입
- `SECURITY_GUIDANCE_DISABLE`, `ENABLE_*` 환경변수로 세부 제어
- Claude Code 플러그인 마켓플레이스 경로로 바로 설치 가능

## 참고

- 이 항목은 개별 저장소가 아니라 `anthropics/claude-code` 저장소의 플러그인 디렉터리입니다.
- 그래서 레지스트리에서는 `plugin`으로 분류하는 편이 자연스럽습니다.
