---
title: "Claude Code Security Reviewer"
description: "Claude Code와 GitHub Actions에서 PR 변경분의 보안 취약점을 검토하는 도구입니다. 코드 변경의 의미를 이해하는 보안 리뷰가 필요할 때 유용합니다."
category: "agent-infrastructure"
tags: ["claude-code", "github-actions", "security", "code-review", "vulnerability", "anthropic"]
githubUrl: "https://github.com/anthropics/claude-code-security-review"
githubStars: 4892
author: "anthropics"
installCommand: "Copy .claude/commands/security-review.md into your project's .claude/commands/ folder, or use the GitHub Action in .github/workflows/security.yml"
compatibleAgents: ["Claude Code"]
icon: "ShieldCheck"
---

# Claude Code Security Reviewer

Claude Code Security Reviewer는 Claude를 활용해 PR 변경분을 보안 관점에서 검토하는 도구입니다. GitHub Action으로 붙여 PR 코멘트를 남기거나, `.claude/commands/security-review.md`를 프로젝트에 복사해 Claude Code의 `/security-review` 명령으로 활용할 수 있습니다.

## 언제 쓰나

- PR에 올라온 변경분을 보안 관점에서 빠르게 점검하고 싶을 때
- 단순 패턴 매칭보다 코드 의미를 이해하는 리뷰가 필요할 때
- Claude Code 안에서 `/security-review` 같은 보안 검토 명령을 맞춤화하고 싶을 때
- GitHub Actions로 PR 보안 리뷰를 자동화하고 싶을 때

## 특징

- GitHub Action으로 동작해 PR 변경분을 자동 분석합니다.
- 변경된 파일만 중심으로 검토해 불필요한 노이즈를 줄입니다.
- PR 코멘트와 결과 아티팩트를 함께 남길 수 있습니다.
- `.claude/commands/security-review.md`를 복사해 Claude Code용 맞춤 명령으로 쓸 수 있습니다.
- 보안 취약점, 인증/권한 문제, 데이터 노출, 입력 검증 이슈를 중점적으로 다룹니다.
