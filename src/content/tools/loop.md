---
title: "Loop"
description: "macOS용 방사형 메뉴 기반 창 관리 앱입니다. 트리거 키 하나로 마우스/트랙패드만 움직여 창을 이동·리사이즈·분할·숨길 수 있어서, 키보드 단축키를 외우기 싫거나 더 직관적인 창 배치가 필요할 때 유용합니다."
category: "desktop-utility"
tags: ["macos", "window-management", "radial-menu", "productivity", "desktop-app", "swiftui"]
githubUrl: "https://github.com/MrKai77/Loop"
githubStars: 10828
author: "MrKai77"
installCommand: "brew install loop"
compatibleAgents: []
featured: false
icon: "LayoutTemplate"
---

# Loop

Loop는 macOS에서 **방사형 메뉴(Radial Menu)**를 통해 창을 직관적으로 조작하게 해주는 데스크톱 앱입니다. 트리거 키(예: Caps Lock, Control)를 누른 채 마우스를 원하는 방향으로 움직이면 창이 그 위치로 이동/리사이즈됩니다. "어디로 보낼지"를 손가락 방향이 결정한다는 느낌이라, 키보드 단축키 조합을 외우기보다 마우스 하나로 끝내고 싶은 사용자에게 맞습니다.

## 언제 쓰나

- 창을 반쪽/4분할/3분할로 빠르게 배치하고 싶을 때
- 키보드 단축키 대신 마우스/트랙패드로 창을 조작하고 싶을 때
- 여러 모니터 사이를 이동하며 창을 옮겨야 할 때
- 창을 화면 가장자리에 숨겼다가(Stash) 필요할 때 꺼내고 싶을 때
- 쉘이나 AppleScript에서 `loop://` URL scheme으로 창을 제어하고 싶을 때

## 주요 기능

- **방사형 메뉴** — 트리거 키 + 마우스 방향으로 창 이동/크기 조정
- **미리보기** — 리사이즈 적용 전 결과를 먼저 확인
- **키보드 단축키** — 40여 가지 액션(전체화면, 반/3분할/4분할, 화면 이동, 창 크기 조절 등)
- **Cycles** — 같은 키/클릭 반복으로 연속 창 조작
- **Stash** — 창을 화면 가장자리에 숨겼다가 필요할 때 꺼내기
- **테마 커스터마이징** — 메뉴 폭/모양/색상 완전 변경 가능
- **URL Scheme** — `loop://direction/right` 형태로 쉘/AppleScript에서 제어

## 설치

```bash
brew install loop
```

또는 [GitHub Releases](https://github.com/MrKai77/Loop/releases/latest/download/Loop.zip)에서 ZIP 다운로드.

macOS 13 이상에서 동작합니다.
