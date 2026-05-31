---
title: "Maccy"
description: "macOS용 경량 클립보드 매니저입니다. 복사한 내용의 히스토리를 메뉴바에 보관해두고 키보드로 빠르게 검색·선택·붙여넣을 수 있어서, 같은 걸 여러 번 복사하거나 예전에 복사했던 텍스트를 다시 찾을 때 유용합니다."
category: "desktop-utility"
tags: ["macos", "clipboard-manager", "clipboard", "productivity", "menu-bar", "swift", "desktop-app"]
githubUrl: "https://github.com/p0deje/Maccy"
websiteUrl: "https://maccy.app"
githubStars: 20076
author: "p0deje"
installCommand: "brew install maccy"
compatibleAgents: []
featured: false
icon: "ClipboardList"
---

# Maccy

Maccy는 macOS 메뉴바에서 동작하는 가벼운 클립보드 매니저입니다. `⌘C`로 복사한 모든 내용의 히스토리를 저장해두고, 단축키(`⇧⌘C`)로 팝업을 띄워 검색·선택·붙여넣기까지 키보드만으로 처리할 수 있습니다.

![Maccy 클립보드 히스토리 팝업 화면](/tool-screenshots/maccy-clipboard-history.webp)

## 언제 쓰나

- 여러 개를 연속으로 복사한 후 필요한 것만 골라 붙여넣고 싶을 때
- 아까 복사했던 내용을 다시 찾을 때 (클립보드 히스토리 탐색)
- 자주 쓰는 텍스트 조각을 고정(Pin)해두고 빠르게 접근하고 싶을 때
- 서식 없는 텍스트로 붙여넣고 싶을 때 (Paste without formatting)
- 복사 기록을 주기적으로 지우거나 특정 항목만 골라 삭제하고 싶을 때

## 주요 기능

- **히스토리 저장** — 복사한 모든 텍스트/이미지/파일의 기록을 유지
- **키보드 퍼스트** — `⇧⌘C`로 팝업, 타이핑으로 검색, `Enter`로 선택·복사, `⌥Enter`로 붙여넣기까지 키보드만으로 전부 처리
- **Pin (고정)** — 중요한 항목은 히스토리 최상단에 고정, 영구 단축키 할당
- **서식 없이 붙여넣기** — `⌥⇧Enter` 또는 `⌥⇧Click`으로 포맷 제거하고 붙여넣기
- **보안** — 암호 필드나 민감한 데이터를 복사할 때는 일시적으로 기록하지 않음
- **네이티브 UI** — Swift/macOS 네이티브로 가볍고 빠름
- **무료 오픈소스** — MIT 라이선스

## 설치

```bash
brew install maccy
```

또는 [GitHub Releases](https://github.com/p0deje/Maccy/releases/latest)에서 다운로드.

macOS Sonoma 14 이상에서 동작합니다.
