---
title: "Agent Governance Toolkit"
description: "자율 에이전트를 프로덕션에 안전하게 배포하기 위한 정책 집행, zero-trust 신원, 샌드박싱, 신뢰성 도구 모음입니다. 에이전트 보안과 운영 통제가 필요할 때 유용합니다."
category: "agent-infrastructure"
tags: ["governance", "security", "sandbox", "identity", "policy", "agents"]
githubUrl: "https://github.com/microsoft/agent-governance-toolkit"
websiteUrl: "https://microsoft.github.io/agent-governance-toolkit"
githubStars: 3562
author: "microsoft"
installCommand: "pip install agent-governance-toolkit[full]"
compatibleAgents: ["Claude Code", "Codex", "Cursor", "OpenCode"]
icon: "ShieldCheck"
---

# Agent Governance Toolkit

Agent Governance Toolkit은 에이전트의 보안·정책·실행 통제를 한 번에 다루는 툴킷입니다. 프로덕션 에이전트를 배포할 때 필요한 신원 관리, 샌드박싱, 정책 검증, 운영 가시성을 묶어서 제공합니다.

## 언제 쓰나

- 자율 에이전트를 안전한 운영 환경에 올리고 싶을 때
- 실행 권한, 네트워크, 신원, 정책을 일관되게 제어하고 싶을 때
- OWASP Agentic Top 10 같은 리스크에 맞춰 방어선을 만들고 싶을 때
- 여러 언어/런타임에서 공통 거버넌스 계층을 두고 싶을 때

## 핵심 특징

- **정책 집행**: 에이전트 행동을 규칙 기반으로 통제합니다.
- **Zero-trust 지향**: 실행 주체와 리소스 접근을 엄격하게 구분합니다.
- **샌드박싱 지원**: 위험한 작업을 격리된 환경에서 실행하기 쉽게 합니다.
- **다중 런타임 패키지**: Python, TypeScript, .NET, Rust, Claude Code, OpenCode용 배포물을 함께 제공합니다.
