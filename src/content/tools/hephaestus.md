---
title: "Hephaestus"
description: "여러 pi harness 환경에 흩어진 로컬 LLM 에이전트를 데스크톱 GUI에서 관리하고 모니터링하는 크로스 플랫폼 앱입니다."
category: "desktop-utility"
tags: ["desktop-app", "llm-agents", "agent-management", "monitoring", "harness", "pi-forge", "electron", "cross-platform", "local-first"]
githubUrl: "https://github.com/Ellian-Eorwyn/Hephaestus"
githubStars: 49
author: "Ellian-Eorwyn"
installCommand: "Download the v0.1.0 alpha installer from https://github.com/Ellian-Eorwyn/Hephaestus/releases"
compatibleAgents: []
featured: false
icon: "MonitorCog"
---

# Hephaestus

Hephaestus는 여러 `pi` harness 환경에서 실행되는 로컬 LLM 에이전트를 한 화면에서 관리하고 모니터링하기 위한 데스크톱 GUI입니다. 명령줄이나 로그 파일만으로 에이전트 상태를 확인하는 대신, 기존 워크스페이스 구조를 읽어 에이전트, 프로세스, 로그, 설정 파일을 중앙 대시보드로 보여 줍니다.

## 언제 쓰나

- 로컬 LLM 에이전트가 여러 harness/워크스페이스에 흩어져 있어 상태를 한곳에서 보고 싶을 때
- 에이전트 로그, 설정, 작업 파일을 실시간으로 열람해야 할 때
- Finder나 Explorer에서 폴더를 끌어다 놓고 해당 프로젝트에 대해 AI 모델과 바로 대화하고 싶을 때
- `pi-forge` 기반 환경을 GUI로 다루거나, 비슷한 커스텀 pi harness 구조를 모니터링하고 싶을 때

## 핵심 특징

- **중앙 에이전트 관리**: 활성 에이전트와 진행 중인 프로세스, 상태를 대시보드에서 확인합니다.
- **실시간 파일 보기**: 로그, 설정, 작업 파일을 즉시 열고 모니터링할 수 있습니다.
- **드래그 앤 드롭 워크스페이스**: 폴더를 프로젝트 패널에 끌어다 놓아 해당 파일과 데이터에 대해 AI 모델과 상호작용합니다.
- **파일시스템 직접 연동**: 별도 데이터베이스나 설정 파일을 요구하지 않고 기존 harness 구성과 에이전트 데이터를 읽습니다.
- **Harness agnostic**: `pi-forge`와의 네이티브 통합을 목표로 하지만, 커스텀 pi harness 구성에도 맞춰 사용할 수 있습니다.
- **크로스 플랫폼**: Windows, macOS, Linux용 Electron 빌드를 제공합니다.

## 빠른 시작

GitHub Releases에서 운영체제에 맞는 v0.1.0 alpha 바이너리를 내려받아 설치합니다.

- Windows: `.exe` 설치 파일
- macOS: `.dmg` 파일
- Linux: `.AppImage` 파일

설치 후 앱을 실행하고 기존 pi agent 폴더를 지정하면, Hephaestus가 harness 구조를 파싱해 에이전트와 관련 데이터를 인터페이스에 표시합니다.

## 참고

현재 공개 릴리스는 `v0.1.0` alpha이며 GitHub에서 prerelease로 표시되어 있습니다. 초기 릴리스인 만큼 버그나 거친 부분이 있을 수 있고, README의 `/latest` 설치 스크립트는 prerelease만 있는 상태에서는 GitHub의 latest release API와 맞지 않을 수 있으므로 Releases 페이지에서 직접 자산을 확인하는 편이 안전합니다.
