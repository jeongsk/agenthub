---
title: "Capsomnia"
description: "Caps Lock을 물리적인 keep-awake 스위치로 바꿔 닫힌 MacBook에서도 AI 에이전트·SSH·빌드 작업을 계속 실행하게 하는 macOS 메뉴 막대 앱입니다."
category: "desktop-utility"
tags: ["macos", "apple-silicon", "menu-bar", "caps-lock", "sleep-prevention", "pmset", "ai-agents", "ssh", "swift", "developer-tools"]
githubUrl: "https://github.com/fuji-mak/Capsomnia"
websiteUrl: "https://fuji-mak.github.io/Capsomnia/"
githubStars: 176
author: "fuji-mak"
installCommand: "Download from https://github.com/fuji-mak/Capsomnia/releases/latest/download/Capsomnia.pkg"
compatibleAgents: ["Codex", "Claude Code", "Hermes Agent"]
featured: false
icon: "MonitorSmartphone"
---

# Capsomnia

Capsomnia는 macOS의 Caps Lock을 **물리적인 keep-awake 스위치**로 바꾸는 작은 메뉴 막대 앱입니다. Caps Lock을 켜면 MacBook 덮개를 닫아도 로컬 작업이 계속 실행되고, 끄면 일반적인 sleep 동작으로 돌아갑니다.

## 언제 쓰나

- 닫힌 MacBook에서 Codex·Claude Code 같은 AI 에이전트 작업을 계속 실행하고 싶을 때
- SSH 세션이나 원격 접속을 유지해야 할 때
- 장시간 빌드·테스트·다운로드·스크립트를 중단 없이 실행할 때
- Caps Lock LED로 sleep 방지 상태를 물리적으로 확인하고 싶을 때

## 주요 기능

- **Caps Lock 기반 상태 전환** — 켜면 `disablesleep 1`, 끄면 `disablesleep 0`을 적용합니다.
- **닫힌 덮개 작업 지원** — 덮개를 닫은 동안에도 작업을 유지하고 디스플레이만 sleep시킬 수 있습니다.
- **물리 상태 표시** — Caps Lock LED가 sleep 방지 상태를 보여줍니다.
- **메뉴 막대 설정** — 상태 표시, 덮개를 닫을 때 디스플레이 끄기, 로그인 시 자동 실행, 영어·일본어 설정을 제공합니다.
- **작은 로컬 전용 앱** — 네트워크 통신·텔레메트리·계정이 필요하지 않습니다.

## 설치 및 빠른 시작

요구사항은 Apple silicon Mac과 macOS 14 Sonoma 이상입니다. 설치 시 관리자 권한이 필요합니다.

서명·공증된 패키지를 다운로드합니다.

```text
https://github.com/fuji-mak/Capsomnia/releases/latest/download/Capsomnia.pkg
```

패키지 설치 후 Capsomnia가 `/Applications`에 설치되고 로그인 시 자동으로 실행됩니다. 소스에서 설치하려면 Swift 6 toolchain으로 다음을 실행할 수 있습니다.

```bash
git clone https://github.com/fuji-mak/Capsomnia.git
cd Capsomnia
./scripts/install.sh
```

## 보안과 주의사항

- 메뉴 막대 앱 본체는 현재 사용자 권한으로 실행되며 root로 실행되지 않습니다.
- 시스템 sleep 설정 변경을 위해 고정된 native privileged helper와 제한된 passwordless `sudo` 규칙을 사용합니다.
- helper가 실행할 수 있는 명령은 `on`, `off`, `display-sleep` 세 가지로 제한됩니다.
- 입력 감시 권한을 요구하거나 키보드 이벤트를 읽지 않고, 로컬 Caps Lock 상태만 주기적으로 확인합니다.
- sleep 방지 상태에서 덮개를 닫으면 발열과 배터리 소비가 증가할 수 있으므로 충분한 통풍과 안정적인 전원을 사용해야 합니다.
- 사용 후 Caps Lock을 끄고 정상 sleep 동작으로 돌아왔는지 확인해야 합니다.
- 중요한 작업을 Capsomnia에만 의존하지 말고 백업을 유지해야 합니다.

MIT 라이선스로 배포됩니다.
