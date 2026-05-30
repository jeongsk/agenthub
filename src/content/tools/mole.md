---
title: "Mole"
description: "macOS 시스템 청소, 앱 삭제, 디스크 분석, 최적화, 실시간 모니터링을 터미널 하나로 처리하는 CLI 유틸리티입니다. CleanMyMac·AppCleaner·DaisyDisk·iStat Menus를 합친 느낌으로 쓸 수 있습니다."
category: "cli-utility"
tags: ["macos", "cleaner", "uninstaller", "disk-analysis", "system-monitor", "optimization", "cli", "homebrew"]
githubUrl: "https://github.com/tw93/Mole"
websiteUrl: "https://mole.fit"
githubStars: 53420
author: "tw93"
installCommand: "brew install mole"
compatibleAgents: []
icon: "Paintbrush"
---

# Mole

Mole는 macOS에서 시스템 청소, 앱 삭제, 디스크 분석, 성능 최적화, 실시간 모니터링을 커맨드 하나로 처리하는 CLI 도구입니다. CleanMyMac, AppCleaner, DaisyDisk, iStat Menus의 핵심 기능을 하나의 바이너리로 통합했습니다.

## 언제 쓰나

- 맥 저장공간이 부족할 때 캐시/로그/임시 파일을 한 번에 정리하고 싶을 때
- 앱을 깔끔하게 삭제하고 숨은 찌꺼기까지 제거하고 싶을 때
- 어떤 파일/폴더가 용량을 많이 차지하는지 시각적으로 확인하고 싶을 때
- 실시간 CPU/GPU/메모리/디스크/네트워크 상태를 터미널에서 보고 싶을 때
- CleanMyMac 같은 유료 앱 대신 CLI 기반의 가벼운 대안을 찾고 싶을 때

## 특징

- **올인원**: 청소 + 앱 삭제 + 디스크 분석 + 최적화 + 모니터링을 하나의 `mo` 명령어로
- **깊은 청소**: 캐시, 로그, 브라우저 찌꺼기, 삭제된 앱의 숨은 잔여물까지 제거
- **스마트 삭제**: 앱뿐 아니라 launch agent, preference, 숨은 파일까지 함께 정리
- **디스크 인사이트**: 용량 사용 시각화, 큰 파일 탐색, 캐시 재구축
- **실시간 모니터링**: CPU/GPU/메모리/디스크/네트워크 상태 대시보드
- **안전장치**: `--dry-run` 미리보기, 보호된 디렉토리 규칙, 작업 히스토리 로깅
- **설치**: `brew install mole` 또는 설치 스크립트
