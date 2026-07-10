---
title: "claude-real-video"
description: "Claude나 다른 LLM이 영상의 핵심 장면과 전사문을 읽을 수 있도록 로컬에서 장면 변화 기반 키프레임, 중복 제거 프레임, 오디오 전사, 매니페스트를 만들어 주는 Python CLI입니다."
category: "cli-utility"
tags: ["video", "claude", "llm", "vision", "ffmpeg", "whisper", "yt-dlp", "keyframes", "transcription"]
githubUrl: "https://github.com/HUANGCHIHHUNGLeo/claude-real-video"
websiteUrl: "https://pypi.org/project/claude-real-video/"
githubStars: 1383
author: "HUANGCHIHHUNGLeo"
installCommand: "pip install \"claude-real-video[whisper]\""
compatibleAgents: ["Claude Code", "Claude", "ChatGPT", "Gemini", "Hermes Agent"]
featured: false
icon: "Video"
---

# claude-real-video

claude-real-video는 Claude나 다른 LLM이 직접 영상 파일을 처리하지 못하는 상황에서, 모델이 읽을 수 있는 영상 컨텍스트를 로컬에서 만들어 주는 Python CLI입니다. YouTube·Instagram·TikTok 같은 URL이나 로컬 비디오 파일을 입력하면 장면 변화 기반 키프레임, 중복 제거된 프레임, 오디오 전사문, `MANIFEST.txt`를 생성합니다.

## 언제 쓰나

- Claude Code나 Claude에 영상 링크/파일의 시각 정보를 함께 넘기고 싶을 때
- 고정 간격 프레임 샘플링 대신 장면 변화가 실제로 생긴 순간을 뽑아 토큰 낭비를 줄이고 싶을 때
- 영상 프레임, 자막/Whisper 전사문, 매니페스트를 묶어 LLM 분석 자료로 만들고 싶을 때
- 로그인 게이트가 있는 본인 소유/권한 있는 영상에 쿠키 파일을 붙여 로컬에서 처리하고 싶을 때
- 영상 분석 전에 사람이 먼저 확인할 수 있는 로컬 viewer나 contact sheet를 만들고 싶을 때

## 특징

- `crv <url-or-file>` 한 줄로 `crv-out/frames`, `transcript.txt`, `MANIFEST.txt` 생성
- `yt-dlp` 기반 URL 다운로드와 로컬 파일 처리 지원
- `ffmpeg` 장면 변화 감지와 density floor로 빠른 컷과 느린 화면을 모두 보강
- 슬라이딩 윈도우 기반 프레임 중복 제거로 반복 장면을 줄임
- 기존 자막이 있으면 우선 사용하고, 없으면 `openai-whisper` 전사를 선택적으로 사용
- `--grid`, `--viewer`, `--adaptive`, `--text-anchors`, `--keep-audio`, `--why`, `--kb` 등 분석 보조 옵션 제공
- `crv-web` 로컬 웹 UI를 통해 터미널 없이 URL이나 파일 경로를 넣어 처리 가능
- Claude Code용 skill 디렉터리를 포함해, Claude Code가 영상 링크를 받았을 때 이 도구를 호출하는 패턴을 제공

## 설치와 빠른 시작

```bash
# 핵심 기능만 설치
pip install claude-real-video

# Whisper 전사까지 포함
pip install "claude-real-video[whisper]"

# macOS ffmpeg 의존성
brew install ffmpeg

# 영상 처리
crv "https://www.youtube.com/watch?v=..."
```

Claude Code skill로도 사용할 수 있습니다.

```bash
pip install claude-real-video
mkdir -p ~/.claude/skills && cp -r skills/claude-real-video ~/.claude/skills/
```

## 참고

- Python 3.10+와 시스템 `ffmpeg`/`ffprobe`가 필요합니다. Whisper 전사를 쓰려면 `claude-real-video[whisper]` 또는 `openai-whisper`가 필요합니다.
- 처리 결과는 로컬에 생성됩니다. 실제로 LLM 서비스에 전송되는 것은 사용자가 선택해 붙여 넣는 프레임과 텍스트입니다.
- URL 다운로드는 `yt-dlp`에 의존하므로 대상 서비스의 정책과 접근 권한을 지켜야 합니다. `--cookies`는 본인에게 권한이 있는 콘텐츠 접근용으로만 사용해야 합니다.
- 출력 디렉터리는 재실행 시 덮어쓸 수 있습니다.
- 무료 버전은 화면에 무엇이 보이는지 전달하는 데 초점을 둡니다. README에는 카메라 움직임·편집 리듬·감정/사운드 이벤트 타임라인 등을 다루는 별도 유료 Pro 버전도 안내되어 있습니다.
