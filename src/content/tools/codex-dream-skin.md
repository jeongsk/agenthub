---
title: "Codex Dream Skin"
description: "Codex 데스크톱 앱에 로컬 CDP로 테마와 배경을 주입해 외관을 바꾸는 macOS·Windows용 비공식 스킨 도구입니다."
category: "desktop-utility"
tags: ["codex", "macos", "windows", "theme", "desktop-app", "cdp", "customization", "javascript", "powershell"]
githubUrl: "https://github.com/Fei-Away/Codex-Dream-Skin"
githubStars: 8059
author: "Fei-Away"
installCommand: "git clone https://github.com/Fei-Away/Codex-Dream-Skin.git && cd Codex-Dream-Skin/macos && ./scripts/install-dream-skin-macos.sh --no-launch"
compatibleAgents: ["Codex"]
featured: false
icon: "MonitorSmartphone"
---

## 개요

Codex Dream Skin은 Codex 데스크톱 앱의 외관을 바꾸는 외부 테마·스킨 도구입니다. 본기능은 본체를 다시 빌드하거나 `.app`, `app.asar`, WindowsApps를 수정하지 않고, 본기기에서 loopback CDP를 통해 스타일·배경·UI 주입을 수행하는 방식입니다.

macOS와 Windows용 설치·실행·복구 스크립트를 제공하며, Codex의 원래 사이드바·추천 카드·프로젝트 선택·입력창 같은 네이티브 컨트롤 위에 테마를 적용합니다.

## 주요 기능

- 16:9 배경 이미지를 Codex 창에 적용
- 라이트·다크 테마와 색상·분위기 전환
- 사용자가 만든 순수 배경 이미지로 커스텀 테마 생성
- macOS 메뉴 막대와 Windows 시스템 트레이에서 테마 저장·전환
- Codex 공식 외관으로 원클릭 복원
- 홈 화면과 작업 화면에 맞춘 배경 초점·안전 영역·가독성 조정
- 실시간 UI를 유지하는 CDP 기반 주입
- API Key·Base URL·모델 공급자 설정은 건드리지 않음

## 플랫폼별 시작

### macOS

```bash
git clone https://github.com/Fei-Away/Codex-Dream-Skin.git
cd Codex-Dream-Skin/macos
./scripts/install-dream-skin-macos.sh --no-launch
~/.codex/codex-dream-skin-studio/scripts/switch-theme-macos.sh \
  --id preset-romantic-rose
```

Apple Silicon과 Intel Mac을 모두 대상으로 하며, 메뉴 막대에서 저장한 테마를 전환할 수 있습니다.

### Windows

PowerShell에서 다음 스크립트를 실행합니다.

```powershell
powershell -ExecutionPolicy Bypass -File .\windows\scripts\install-dream-skin.ps1
powershell -ExecutionPolicy Bypass -File .\windows\scripts\start-dream-skin.ps1
```

실행 후 시스템 트레이에서 저장된 테마를 선택하거나 자신의 순수 배경 이미지를 가져올 수 있습니다.

## 언제 사용하는가

- Codex 데스크톱 앱을 개인 작업 환경에 맞게 꾸미고 싶을 때
- 코딩 세션마다 배경·색상·분위기를 빠르게 바꾸고 싶을 때
- 공식 앱의 기능과 네이티브 컨트롤은 유지하면서 시각적 테마만 바꾸고 싶을 때
- macOS와 Windows에서 같은 테마 컬렉션을 관리하고 싶을 때

## 안전 경계와 주의사항

- OpenAI가 만든 공식 제품이 아닌 커뮤니티 도구입니다.
- CDP는 `127.0.0.1` loopback에만 바인딩해야 하며, 테마 실행 중 출처를 알 수 없는 로컬 프로그램을 함께 실행하지 않는 것이 좋습니다.
- 공식 설치 디렉터리·코드 서명·`.app`·`app.asar`·WindowsApps를 수정하지 않습니다.
- API Key, Base URL, 모델 공급자 설정을 자동 변경하지 않는 것이 프로젝트의 설계 경계입니다.
- 저장소의 일부 프리셋·효과 이미지에는 AI 생성 인물·IP 소재가 포함될 수 있습니다. 공개 재배포·상업적 사용 전에 초상권·저작권·상표권을 직접 확인해야 합니다.
- 설치·주입·복구 동작이 Codex 데스크톱 앱의 버전과 플랫폼에 의존하므로, 업그레이드 후 `verify`·`restore`와 플랫폼별 테스트를 실행하는 것이 안전합니다.
