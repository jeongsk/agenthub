---
title: "LiteParse"
description: "문서와 파일을 빠르게 파싱하는 CLI/라이브러리입니다. PDF와 각종 문서를 구조화된 텍스트로 바꾸어 전처리하거나 에이전트 입력을 만들 때 유용합니다."
category: "cli-utility"
tags: ["document-parser", "pdf", "parsing", "cli", "library", "markdown"]
githubUrl: "https://github.com/run-llama/liteparse"
websiteUrl: "https://developers.llamaindex.ai/liteparse/"
githubStars: 8317
author: "run-llama"
installCommand: "pip install liteparse"
compatibleAgents: ["Claude Code", "Codex", "Cursor", "OpenCode", "Hermes Agent"]
icon: "FileText"
---

# LiteParse

LiteParse는 문서 파싱을 빠르게 처리하는 오픈소스 도구입니다. CLI, Python, Node, Rust, WASM까지 지원해서 문서 전처리와 구조화 추출을 다양한 환경에서 재사용할 수 있습니다.

## 언제 쓰나

- PDF나 오피스 문서를 구조화된 텍스트로 바꾸고 싶을 때
- 에이전트용 입력을 만들기 전에 문서를 전처리하고 싶을 때
- Node, Python, Rust, WASM 중 하나의 런타임에 맞는 파서가 필요할 때
- 문서 파싱 성능과 이식성을 함께 챙기고 싶을 때

## 핵심 특징

- **다중 런타임 지원**: Node, Python, Rust, WASM으로 제공됩니다.
- **CLI 제공**: `lit parse` 형태로 바로 사용할 수 있습니다.
- **에이전트 연계 가능**: Skill 형태로도 활용할 수 있어 워크플로에 붙이기 쉽습니다.
- **빠른 문서 처리**: 대용량 문서 파이프라인의 전처리 단계에 적합합니다.
