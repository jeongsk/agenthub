---
title: "Handy"
description: "단축키 한 번으로 말한 내용을 원하는 입력창에 직접 붙여넣는 로컬 오프라인 음성 인식 앱. Whisper/Parakeet 모델로 100% 기기 내에서 처리되므로 음성 데이터가 클라우드에 전송되지 않음."
category: "desktop-utility"
tags: ["speech-to-text", "offline", "privacy", "whisper", "tauri", "cross-platform", "accessibility", "rust"]
githubUrl: "https://github.com/cjpais/Handy"
websiteUrl: "https://handy.computer"
githubStars: 25953
author: "cjpais"
installCommand: "brew install --cask handy"
compatibleAgents: ["Claude Code", "Codex", "Gemini", "Hermes Agent", "OpenCode", "Cursor"]
featured: false
icon: "Mic"
---

## Handy란?

단축키를 누르고 말하면, 음성이 텍스트로 변환되어 현재 포커스된 입력창에 직접 붙여넣어지는 **로컬 음성 인식 데스크톱 앱**입니다. Whisper-family 모델과 Parakeet V3를 지원하며, 모든 처리 과정이 사용자 컴퓨터 내에서完結하므로 음성 데이터가 클라우드로 전송되지 않습니다.

## 주요 특징

- **완전 오프라인**: 모든 음성 처리가 로컬에서 수행되어 프라이버시가 보호됨
- **다양한 STT 엔진 지원**: Whisper(Small/Medium/Turbo/Large), Parakeet V3(CPU 최적화)
- **자동 음성 감지**: Silero VAD로 무음 구간 자동 필터링
- **스마트 텍스트 입력**: 현재 포커스된 앱에 직접 텍스트 입력
- **크로스 플랫폼**: macOS, Windows, Linux 지원
- **확장성**: Raycast 확장으로 Raycast에서 직접 제어 가능
- **CLI 파라미터 지원**: `--toggle-transcription`, `--start-hidden` 등 원격 제어 가능

## 설치 방법

**macOS:**
```bash
brew install --cask handy
```

**Windows:**
```bash
winget install cjpais.Handy
```

**Linux:**
[릴리즈 페이지](https://github.com/cjpais/Handy/releases)에서 `.AppImage` 또는 `.deb` 다운로드

## 사용 방법

1. 설치 후 Handy 앱을 실행하고 마이크/접근성 권한 부여
2. 설정에서 키보드 단축키 구성
3. 단축키를 누르고 말하면 → 텍스트가 현재 앱에 직접 입력됨

## AI 에이전트에서의 활용

AI 에이전트가 사용자 대신 데스크톱에서 작업할 때, 음성으로 명령을 내려 손쉽게 텍스트를 입력할 수 있습니다. 특히 코드 작성, 문서 편집, 검색어 입력 등에서 키보드 타이핑 대신 음성 입력을 활용할 수 있습니다.

## 알려진 제한사항

- Whisper 모델은 일부 시스템(특히 Windows/Linux)에서 크래시가 발생할 수 있음
- Linux Wayland 환경에서는 `wtype` 또는 `dotool` 설치가 필요함
- Linux에서 오버레이가 활성화되면 포커스를 뺏을 수 있어 클립보드 기반 붙여넣기가 영향 받을 수 있음
- macOS Homebrew 캐스크는 Handy 개발팀이 아닌 커뮤니티에서 관리함

## 기술 스택

Tauri(Rust) + React + TypeScript 기반. 핵심 라이브러리로 `transcribe-cpp`(Whisper GGML/GGUF), `transcribe-rs`(Parakeet), `vad-rs`(Silero VAD), `rdev`(글로벌 단축키) 등을 사용합니다.