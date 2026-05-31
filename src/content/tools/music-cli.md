---
title: "music-cli"
description: "개발자용 백그라운드 음악 데몬입니다. 터미널에서 라디오, 로컬 MP3, YouTube 오디오, AI 생성 음악을 끊김 없이 재생하고 싶을 때 유용합니다."
category: "cli-utility"
tags: ["music", "audio-player", "terminal", "cli", "radio", "youtube", "ai-music", "daemon"]
githubUrl: "https://github.com/luongnv89/music-cli"
websiteUrl: "https://music-cli.luongnv.com"
githubStars: 66
author: "luongnv89"
installCommand: "curl -sSL https://raw.githubusercontent.com/luongnv89/music-cli/main/install.sh | bash"
compatibleAgents: ["Claude Code", "Codex", "Cursor", "OpenCode", "Hermes Agent"]
featured: false
icon: "Radio"
---

# music-cli

`music-cli`는 개발자를 위한 백그라운드 음악 데몬입니다. 터미널에서 라디오, 로컬 MP3, YouTube 오디오, AI 생성 음악을 하나의 명령어 흐름으로 제어할 수 있어, 작업 중 음악을 따로 신경 쓰지 않고 계속 켜 두기 좋습니다.

![music-cli AI 음악 생성 및 터미널 제어 데모](/tool-screenshots/music-cli-ai-demo.webp)

## 언제 쓰나

- 코드 작업 중 배경음악을 끊김 없이 틀어 두고 싶을 때
- 라디오, 로컬 파일, YouTube 오디오를 하나의 CLI로 다루고 싶을 때
- 터미널을 닫아도 음악이 계속 재생되게 하고 싶을 때
- AI 생성 음악까지 포함한 집중용 사운드트랙이 필요할 때
- 브라우저 앱 대신 가벼운 백그라운드 데몬을 원할 때

## 핵심 특징

- 백그라운드 데몬 기반 재생
- 라디오, 로컬 MP3, YouTube 오디오, AI 음악 생성 지원
- 상태 확인, 일시정지, 재개, 다음 곡 제어
- 40+ 라디오 스테이션과 캐시 기능
- Linux, macOS, Windows 지원
- 개발자 작업 흐름에 맞춘 CLI 우선 설계
