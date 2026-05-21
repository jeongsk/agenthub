---
title: "Cursor VSCode Helper"
description: "Cursor와 VSCode 환경에서 활성 파일, 프로젝트 폴더, 리팩터링 체크리스트를 에이전트에 연결하는 생산성 플러그인입니다."
category: "plugin"
tags: ["cursor", "vscode", "editor", "plugin", "productivity"]
githubUrl: "https://github.com/cursor-owner/vscode-helper-plugin"
author: "cursor-owner"
installCommand: "code --install-extension cursor-copilot-plugin"
compatibleAgents: ["Cursor", "VSCode"]
featured: false
icon: "Cpu"
---

# Cursor VSCode Helper

Cursor VSCode Helper는 편집기의 활성 탭, 선택 범위, 파일 구조를 사이드바 에이전트와 연결해 코드 리뷰와 리팩터링 흐름을 빠르게 만듭니다.

## 기능

- **컨텍스트 동기화**: 현재 파일과 커서 위치를 에이전트 컨텍스트로 전달합니다.
- **Git Diff 스캔**: 변경사항을 분석하고 커밋 메시지 초안을 만듭니다.
- **리팩터링 체크리스트**: 선택한 코드에 맞는 작업 단계를 정리합니다.
- **빠른 명령**: VSCode Command Palette에서 에이전트 작업을 실행합니다.
