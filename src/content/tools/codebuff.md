---
title: "Codebuff"
description: "자연어로 코드베이스를 수정하는 오픈소스 AI 코딩 어시스턴트. 멀티 에이전트(File Picker, Planner, Editor, Reviewer)가 협업하여 파일 탐색·변경·검토를 자동 수행합니다. Freebuff(무료 광고 버전)도 함께 제공됩니다."
category: "agent-harness"
tags: ["cli", "coding-assistant", "multi-agent", "typescript", "openrouter", "sdk", "freebuff"]
githubUrl: "https://github.com/CodebuffAI/codebuff"
websiteUrl: "https://codebuff.com"
githubStars: 7088
author: "CodebuffAI"
installCommand: "npm install -g codebuff"
compatibleAgents: ["Claude Code", "Cursor", "Codex", "OpenCode"]
featured: true
icon: "TerminalSquare"
---

# Codebuff

Codebuff는 자연어 지시로 코드베이스를 수정하는 **멀티 에이전트 AI 코딩 어시스턴트**입니다. File Picker·Planner·Editor·Reviewer 에이전트가 협업하여 파일 탐색·변경·검토를 자동 수행합니다.

## 제품 구성

Codebuff는 두 가지 CLI와 하나의 SDK로 제공됩니다:

- **Codebuff** (`npm install -g codebuff`) — 유료 플랫폼. OpenRouter 기반 다양한 모델 지원.
- **Freebuff** (`npm install -g freebuff`) — 무료 광고 지원 버전. DeepSeek, Kimi, MiniMax 등 최적화 오픈소스 모델 사용.
- **@codebuff/sdk** (`npm install @codebuff/sdk`) — 애플리케이션에 임베딩 가능한 SDK.

## 주요 특징

- **멀티 에이전트 아키텍처**: 파일 탐색, 계획, 편집, 리뷰를 역할 분담으로 처리
- **어떤 모델이든**: OpenRouter로 Claude, GPT, DeepSeek, Qwen 등 원하는 모델 선택
- **커스텀 에이전트**: TypeScript로 자신만의 에이전트와 워크플로 구성 가능
- **Agent Store**: 커뮤니티가 게시한 에이전트를 재사용 가능
- **evals 기준 Claude Code 대비 우위**: 175개 이상의 실제 유사 작업에서 Codebuff 61% vs Claude Code 53% 기록

## 설치 및 시작

```bash
# Codebuff (유료)
npm install -g codebuff

# Freebuff (무료)
npm install -g freebuff

# 프로젝트에서 실행
cd ~/my-project
codebuff
# 또는
freebuff
```

## 참고

- Freebuff는 미국, 캐나다, 영국, EU 등 일부 국가에서 전체 모드로 작동하며, 그 외 지역은 제한 모드(DeepSeek V4 Flash + MiMo 2.5) 제공
- SDK는 `@codebuff/sdk` npm 패키지로 별도 설치 필요
- 베타/실험적 기능이 아니며 Apache-2.0 라이선스下的 안정적인 오픈소스 프로젝트
