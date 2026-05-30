---
title: "LosslessCut"
description: "FFmpeg 기반의 무손실(Lossless) 동영상/오디오 편집기입니다. 인코딩 없이 컷·트림·병합·트랙 편집이 가능해서, GoPro나 드론 영상에서 필요한 부분만 빠르게 추출하거나 방송 녹화에서 광고를 잘라낼 때 유용합니다."
category: "desktop-utility"
tags: ["video-editing", "ffmpeg", "lossless", "video", "audio", "cross-platform", "electron", "trimming"]
githubUrl: "https://github.com/mifi/lossless-cut"
websiteUrl: "https://losslesscut.app"
githubStars: 40743
author: "mifi"
compatibleAgents: []
featured: false
icon: "Scissors"
---

# LosslessCut

LosslessCut은 FFmpeg의 GUI 프론트엔드로, **인코딩 없이** 동영상/오디오 파일을 자르고 붙이는 데 특화된 크로스플랫폼 데스크톱 앱입니다. "무손실"이라는 이름처럼 데이터를 재인코딩하지 않아 원본 화질을 그대로 유지하면서도 수 기가바이트 단위의 파일을 순식간에 처리할 수 있습니다.

## 언제 쓰나

- 카메라/드론/액션캠에서 찍은 긴 영상에서 필요한 부분만 잘라내고 싶을 때
- 녹화한 방송/스트리밍에서 광고 구간을 잘라낼 때
- 여러 동영상 파일을 코드 변환 없이 이어붙이고 싶을 때
- 동영상에서 오디오 트랙만 추출하거나 자막을 제거하고 싶을 때
- 파일의 컨테이너 포맷만 바꾸고 싶을 때 (예: MKV → MP4 무손실 리먹싱)
- 동영상에서 씬 전환/정지화면(snapshot)을 고해상도로 추출하고 싶을 때

## 주요 기능

- **무손실 컷/트림** — 주요 프레임 기준으로 빠르게 잘라내기
- **Smart Cut** — 실험적 기능, 무손실로 정확한 지점 자르기
- **멀티 트랙 편집** — 여러 파일의 비디오/오디오/자막 트랙을 조합, 교체, 제거
- **무손실 머지** — 동일 코덱의 파일을 인코딩 없이 연결
- **리먹싱** — 컨테이너 포맷만 변경 (MP4, MKV, MOV, WebM 등)
- **타임라인** — 확대/축소, 키프레임 점프, 웨이브폼, 썸네일 표시
- **스냅샷/프레임 추출** — 전체 해상도 스크린샷, N프레임/시간/씬 단위 이미지 추출
- **메타데이터 편집** — 파일/트랙 메타데이터, 디스포지션 수정
- **챕터 마커** — MP4/MKV 챕터 편집, 세그먼트 레이블/태그
- **프로젝트 파일** — 세션 저장/복원, 다양한 포맷 임포트/익스포트 (YouTube, CSV, CUE, DaVinci, Final Cut Pro XML)
- **블랙/무음 감지, 씬 체인지 감지**
- **CLI 및 HTTP API** — 자동화/스크립트 연동
- **HLS 다운로드** — `.m3u8` 스트림을 무손실로 저장

## 설치

[losslesscut.app](https://losslesscut.app)에서 각 플랫폼용 설치 파일 다운로드.

macOS, Windows, Linux를 지원합니다.
