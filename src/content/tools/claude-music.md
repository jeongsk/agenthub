---
title: "Claude Music"
description: "Claude Code 세션 안에서 배경 음악을 재생하는 플러그인입니다. 로파이, 재즈, 클래식, 앰비언트 같은 분위기별 음악과 AI DJ 기능을 함께 쓰고 싶을 때 유용합니다."
category: "plugin"
tags: ["claude-code", "music", "plugin", "background-music", "lofi", "dj", "focus", "terminal"]
githubUrl: "https://github.com/kennethleungty/claude-music"
githubStars: 14
author: "kennethleungty"
installCommand: "/plugin marketplace add kennethleungty/claude-music-marketplace && /plugin install claude-music@claude-music-marketplace"
compatibleAgents: ["Claude Code"]
featured: false
icon: "Music"
---

# Claude Music

Claude Music는 Claude Code 세션 안에서 바로 배경 음악을 틀어 주는 플러그인입니다. 코딩 중에 음악 앱으로 왔다 갔다 하지 않고, 세션 안에서 장르별 스테이션과 AI DJ를 함께 쓰는 흐름에 맞춰져 있습니다.

## 언제 쓰나

- Claude Code 작업 중 배경 음악을 바로 켜고 싶을 때
- 로파이, 재즈, 클래식, 앰비언트 같은 집중용 음악을 세션 안에서 다루고 싶을 때
- AI DJ가 세션 분위기를 보고 음악을 골라주길 원할 때
- 음악을 직접 고르기보다 `/vibe`, `/mood`, `/focus` 같은 명령으로 빠르게 제어하고 싶을 때
- 외부 음악 앱 없이 Claude Code 안에서 집중 환경을 만들고 싶을 때

## 핵심 특징

- Claude Code 플러그인 마켓플레이스 기반 설치
- `/play`, `/next`, `/stop`, `/volume`, `/status` 같은 명령 제공
- AI DJ가 세션 맥락과 분위기를 참고해 음악 선택
- 로파이, 재즈, 클래식, 앰비언트, 일렉트로닉 등 장르별 스테이션 지원
- 포모도로형 `/focus` 타이머 포함
- macOS, Linux, Windows, WSL2 지원
