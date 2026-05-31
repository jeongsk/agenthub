---
title: "SkillSpector"
description: "AI 에이전트 skill을 설치하기 전에 숨은 지시문, 데이터 유출, 권한 남용 같은 위험 패턴을 검사하는 보안 스캐너입니다. 외부 skill을 검토하거나 CI에서 안전성 점검을 자동화할 때 유용합니다."
category: "cli-utility"
tags: ["security", "skill-audit", "ai-agents", "scanner", "cli", "vulnerability"]
githubUrl: "https://github.com/NVIDIA/SkillSpector"
githubStars: 680
author: "NVIDIA"
installCommand: "pip install git+https://github.com/NVIDIA/skillspector.git"
compatibleAgents: ["Claude Code", "Codex", "Gemini", "Cursor", "OpenCode"]
featured: true
icon: "ShieldCheck"
---

# SkillSpector

`SkillSpector`는 Claude Code, Codex CLI, Gemini CLI 같은 AI 에이전트용 skill을 설치하기 전에 보안 위험을 검사하는 도구입니다. 저장소, URL, zip, 로컬 디렉토리, 단일 파일까지 스캔할 수 있고, 정적 패턴 분석과 선택적 LLM 분석을 함께 써서 악성 패턴, 과도한 권한 요구, 시스템 프롬프트 유출, 데이터 exfiltration 가능성을 찾아냅니다.

## 언제 쓰나

- 외부에서 받은 skill을 설치하기 전에 안전성 검토가 필요할 때
- AI 에이전트용 SKILL.md와 보조 스크립트에 숨은 지시문이 있는지 검사하고 싶을 때
- CI에서 skill 배포 전 보안 점검을 자동화하고 싶을 때
- Git 저장소, zip, 로컬 폴더, 단일 파일을 한 번에 같은 기준으로 스캔하고 싶을 때
- 위험도 점수와 Markdown/JSON/SARIF 보고서가 필요한 경우

## 핵심 특징

- **다중 입력 지원**: Git repo, URL, zip, 디렉토리, 단일 파일을 스캔합니다.
- **64개 패턴 탐지**: 프롬프트 인젝션, 데이터 유출, 권한 상승, 공급망, MCP tool poisoning까지 폭넓게 검사합니다.
- **2단계 분석**: 빠른 정적 분석 후 필요하면 LLM semantic 분석을 추가합니다.
- **실시간 취약점 조회**: OSV.dev 연동으로 알려진 취약 패키지를 확인합니다.
- **다양한 출력 형식**: 터미널, JSON, Markdown, SARIF 리포트를 제공합니다.
- **위험 점수화**: 0~100 점수와 severity, 권장 조치까지 함께 제시합니다.
