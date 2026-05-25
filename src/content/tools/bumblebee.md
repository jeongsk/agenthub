---
title: "Bumblebee"
description: "개발자 머신의 패키지, 확장 프로그램, 개발 도구 메타데이터를 읽기 전용으로 수집하고, 알려진 공급망 이슈 노출 여부를 빠르게 확인하는 Go CLI입니다. 엔드포인트 점검이나 노출 스캔이 필요할 때 유용합니다."
category: "cli-utility"
tags: ["security", "inventory", "scanner", "supply-chain", "cli"]
githubUrl: "https://github.com/perplexityai/bumblebee"
githubStars: 2447
author: "perplexityai"
installCommand: "go install github.com/perplexityai/bumblebee/cmd/bumblebee@latest"
compatibleAgents: ["Claude Code", "Cursor", "Codex", "OpenCode", "Hermes Agent"]
---

# Bumblebee

Bumblebee는 macOS와 Linux 개발자 엔드포인트에서 패키지, 확장 프로그램, 개발 도구 메타데이터를 읽기 전용으로 수집하는 Go CLI입니다. 공급망 이슈가 알려졌을 때, 특정 버전이나 구성요소가 로컬 머신에 노출되어 있는지 빠르게 확인하는 용도에 적합합니다.

## 언제 쓰나

- 개발자 머신의 로컬 패키지/확장 상태를 점검하고 싶을 때
- 알려진 공급망 사고나 취약 버전의 노출 여부를 빠르게 찾고 싶을 때
- EDR이나 SBOM만으로는 부족한, 엔드포인트의 실제 설치 메타데이터를 보고 싶을 때
- 에이전트가 로컬 시스템 인벤토리를 읽기 전용으로 수집해야 할 때

## 핵심 포인트

- **읽기 전용 수집**: 패키지 관리자 실행 없이 on-disk 메타데이터만 읽습니다.
- **엔드포인트 중심**: 개발자 노트북과 워크스테이션의 실제 설치 상태를 확인하는 데 맞춰져 있습니다.
- **노출 탐지 지원**: exposure catalog와 함께 쓰면 exact match 기반 노출 확인이 가능합니다.
- **CLI 단일 바이너리**: Go 기반 단일 실행 파일로 배포하기 쉽습니다.

## 참고

- 이 도구는 일반적인 개발 보조기보다 *엔드포인트 공급망 점검용 스캐너*에 가깝습니다.
- 그래서 이 레지스트리에서는 `cli-utility`로 분류하는 편이 자연스럽습니다.
