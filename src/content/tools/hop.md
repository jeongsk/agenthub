---
title: "HOP"
description: "HWP/HWPX 문서를 별도의 한글 프로그램 없이 보고 편집할 수 있는 오픈소스 데스크톱 앱입니다. macOS, Windows, Linux를 모두 지원하며, 문서 열기·저장·PDF 내보내기·인쇄까지 기본 편집 흐름을 다룹니다. 한컴오피스가 없는 환경에서 HWP 문서를 열어야 할 때 유용합니다."
category: "desktop-utility"
tags: ["hwp", "hwpx", "korean", "document-editor", "cross-platform", "electron", "open-source", "desktop-app"]
githubUrl: "https://github.com/golbin/hop"
websiteUrl: "https://golbin.github.io/hop/"
githubStars: 1420
author: "golbin"
installCommand: "brew install hop"
compatibleAgents: []
featured: false
icon: "FileText"
---

# HOP (Open HWP)

HOP는 HWP/HWPX 문서를 열고 편집할 수 있는 오픈소스 크로스플랫폼 데스크톱 앱입니다. 문서 파싱과 렌더링은 [rhwp](https://github.com/edwardkim/rhwp) 엔진을 기반으로 하며, HOP는 그 위에 파일 열기·저장·PDF 내보내기·인쇄·파일 연결 같은 OS 통합 기능을 제공합니다.

## 언제 쓰나

- 한컴오피스가 설치되지 않은 Mac/Windows/Linux에서 HWP 문서를 열어야 할 때
- HWPX(신규 XML 포맷) 문서를 다른 포맷으로 변환하거나 확인해야 할 때
- HWP 문서를 PDF로 내보내고 싶을 때
- 한글 프로그램 없이 HWP 문서의 기본적인 내용을 확인하고 수정해야 할 때
- macOS 사용자로서 한컴오피스 대신 쓸 수 있는 HWP 뷰어/에디터가 필요할 때

## 주요 기능

- HWP/HWPX 문서 열기
- HWP 문서 저장 / 다른 이름으로 저장
- PDF로 내보내기
- 인쇄 다이얼로그
- 파일 드래그 앤 드롭으로 열기
- `.hwp`, `.hwpx` 파일 연결 (더블클릭으로 바로 열기)
- 여러 창에서 동시에 문서 열기
- macOS, Windows, Linux 전 플랫폼 지원

## 설치

```bash
brew install hop
```

또는 [GitHub Releases](https://github.com/golbin/hop/releases)에서 DMG/MSI/DEB/RPM/AppImage 다운로드.

- macOS: Apple Silicon + Intel (signed/notarized)
- Windows: x64 MSI
- Linux: x64/arm64 DEB, x64 RPM, AppImage, AUR (`hop-openhwp-bin`)
