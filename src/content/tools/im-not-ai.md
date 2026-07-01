---
title: "Humanize KR"
description: "Claude Code, Codex CLI, Gemini CLI에서 한국어 AI 문체를 자연스럽게 다듬는 스킬 번들입니다. 내용은 그대로 두고 번역투, 과한 접속사, 기계적인 불릿을 줄여 ‘사람이 쓴 것 같은’ 문장으로 바꾸고 싶을 때 유용합니다."
category: "agent-skill"
tags: ["claude-code", "codex", "gemini", "humanizer", "korean", "writing", "rewriting", "style", "ai-text", "skills-pack", "translationese"]
githubUrl: "https://github.com/epoko77-ai/im-not-ai"
githubStars: 3389
author: "epoko77-ai"
installCommand: "git clone https://github.com/epoko77-ai/im-not-ai.git && cd im-not-ai && ./install.sh"
compatibleAgents: ["Claude Code", "Codex", "Gemini"]
icon: "Sparkles"
---

# Humanize KR

Humanize KR은 Claude Code, Codex CLI, Gemini CLI에서 한국어 AI 문체를 자연스럽게 다듬는 스킬 번들입니다. 의미는 유지하면서 번역투, 과도한 영어식 표현, 기계적인 구조를 줄여 더 자연스러운 한국어로 바꿔 주기 때문에, AI 초안을 사람 톤으로 정리할 때 유용합니다.

![Humanize KR social preview](/tool-screenshots/im-not-ai-social-preview.webp)

## 언제 쓰나

- ChatGPT·Claude·Gemini 초안을 자연스러운 한국어로 다듬고 싶을 때
- 번역투, 과한 접속사, 기계적인 불릿/헤딩을 줄이고 싶을 때
- 의미와 사실은 그대로 두고 문체만 손보고 싶을 때
- Claude Code나 Codex CLI, Gemini CLI 안에서 한국어 윤문 워크플로를 표준화하고 싶을 때

## 특징

- 의미 불변 원칙을 두고 탐지된 구간만 수술적으로 수정합니다.
- Fast/Strict 모드로 짧은 글과 긴 글을 나눠 처리합니다.
- 탐지, 윤문, 내용 감사, 자연스러움 검증을 분리된 에이전트로 운영합니다.
- 한국어 특유의 번역투·AI 관용구 패턴을 세분화해 다룹니다.
- Claude Code 전용 스킬/커맨드 구조와 Codex CLI, Gemini CLI 지원을 함께 제공합니다.
