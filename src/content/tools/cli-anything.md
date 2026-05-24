---
title: "CLI-Anything"
description: "모든 CLI 소프트웨어를 AI 에이전트 네이티브로 만드는 프레임워크입니다. 기존 CLI 도구에 에이전트 인터페이스를 자동 생성해, Claude Code, Codex 등이 모든 커맨드라인 도구를 직접 사용할 수 있게 해줍니다."
category: "agent-harness"
tags: ["cli", "agent-native", "developer-tools", "automation", "agent-framework"]
githubUrl: "https://github.com/HKUDS/CLI-Anything"
githubStars: 39856
author: "HKUDS"
installCommand: "pip install cli-anything"
compatibleAgents: ["Claude Code", "Codex", "Cursor", "Gemini CLI"]
featured: true
icon: "Terminal"
---

# CLI-Anything

CLI-Anything은 모든 CLI 소프트웨어를 AI 에이전트 네이티브로 만드는 프레임워크입니다. 기존 커맨드라인 도구에 에이전트 인터페이스(도구 설명, 파라미터 스키마, 사용 예시)를 자동 생성해, Claude Code, Codex, Cursor 등 AI 코딩 에이전트가 어떤 CLI 도구든 직접 호출하고 사용할 수 있게 해줍니다.

## 언제 쓰나

- AI 에이전트가 터미널 명령어를 더 정확하고 안전하게 실행하게 하고 싶을 때
- 수많은 CLI 도구를 에이전트가 자동으로 발견하고 사용하게 하고 싶을 때
- 에이전트에게 새로운 CLI 도구 사용법을 일일이 알려주지 않아도 될 때

## 특징

- 모든 CLI 도구를 에이전트 네이티브로 자동 변환
- 도구 설명, 파라미터 스키마, 사용 예시 자동 생성
- Claude Code, Codex, Cursor, Gemini CLI 등 주요 에이전트 호환
- CLI-Hub 온라인 레지스트리(clianything.cc)와 연동
- Python 기반, pip 한 줄 설치
