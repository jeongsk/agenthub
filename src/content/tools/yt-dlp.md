---
title: "yt-dlp"
description: "수천 개 사이트에서 오디오와 비디오를 내려받는 명령줄 도구입니다. 에이전트가 미디어를 추출하거나 아카이브할 때 자주 쓰기 좋습니다."
category: "cli-utility"
tags: ["downloader", "video", "audio", "cli", "media"]
githubUrl: "https://github.com/yt-dlp/yt-dlp"
githubStars: 166807
author: "yt-dlp"
installCommand: "python -m pip install -U yt-dlp"
compatibleAgents: ["Claude Code", "Cursor", "Codex", "OpenCode", "Hermes Agent"]
icon: "Download"
---

# yt-dlp

yt-dlp는 다양한 사이트에서 오디오와 비디오를 내려받는 기능이 풍부한 명령줄 도구입니다. 에이전트 작업에서는 영상/음성 아카이브, 자막 수집, 원본 미디어 추출 같은 흐름에 특히 유용합니다.

## 핵심 포인트

- **사이트 지원 폭이 넓음**: 수천 개 사이트를 지원합니다.
- **미디어 추출에 강함**: 다운로드, 포맷 선택, 자막, 메타데이터 처리까지 다룹니다.
- **CLI 우선**: 자동화 스크립트나 에이전트 워크플로에 붙이기 쉽습니다.
- **아카이브 용도에 적합**: 반복 수집과 정리 작업에 자주 쓰입니다.

## 이런 경우에 유용합니다

- 영상이나 음성을 로컬로 저장해야 할 때
- 자막이나 메타데이터를 함께 수집하고 싶을 때
- 링크 기반 미디어를 에이전트가 자동 정리해야 할 때
- 아카이브/백업 워크플로에 미디어 추출 단계를 넣고 싶을 때

## 참고

- 이 저장소는 단순한 다운로드 스크립트라기보다, *미디어 수집용 실행 도구*에 가깝습니다.
- 그래서 이 레지스트리에서는 `cli-utility`로 분류합니다.
