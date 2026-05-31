---
title: "cliamp"
description: "터미널에서 로컬 음악, 스트림, 팟캐스트, 각종 온라인 음악 서비스를 재생하는 Winamp풍 플레이어입니다. 플레이리스트 관리와 시각화, 원격 소스 연동이 필요한 경우 유용합니다."
category: "cli-utility"
tags: ["music", "audio-player", "terminal", "cli", "streaming", "playlist", "radio", "podcast"]
githubUrl: "https://github.com/bjarneo/cliamp"
websiteUrl: "http://www.cliamp.stream"
githubStars: 2325
author: "bjarneo"
installCommand: "curl -fsSL https://raw.githubusercontent.com/bjarneo/cliamp/HEAD/install.sh | sh"
compatibleAgents: ["Claude Code", "Codex", "Cursor", "OpenCode", "Hermes Agent"]
featured: false
icon: "Radio"
---

# cliamp

`cliamp`는 Winamp에서 영감을 받은 터미널 음악 플레이어입니다. 로컬 파일뿐 아니라 스트림, 팟캐스트, YouTube, SoundCloud, Spotify, Navidrome, Plex, Jellyfin 같은 외부 소스까지 붙여서 음악을 재생하고 관리할 수 있습니다.

## 언제 쓰나

- 터미널 안에서 음악을 재생하고 싶을 때
- 로컬 음악과 온라인 소스를 한 플레이어로 함께 다루고 싶을 때
- 플레이리스트 관리, 시각화, 이퀄라이저가 필요한 경우
- Navidrome, Plex, Jellyfin 같은 미디어 서버를 CLI에서 붙이고 싶을 때
- 라디오/팟캐스트/스트림을 음악 플레이어 흐름에 섞고 싶을 때

## 핵심 특징

- 로컬 파일, URL 스트림, 폴더 재생 지원
- YouTube, SoundCloud, Spotify, Navidrome, Plex, Jellyfin 연동
- 라디오 브라우징, 플레이리스트 편집, 시각화 지원
- Lua 플러그인 시스템
- Headless/원격 제어 문서가 있어 자동화 흐름에 붙이기 쉬움
- Winamp풍 레트로 UI를 터미널에서 구현
