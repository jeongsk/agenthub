---
title: "obsidian-second-brain"
description: "Obsidian 볼트를 AI-first 세컨드 브레인으로 바꾸는 크로스-CLI 스킬입니다. Claude Code, Codex, Gemini CLI, OpenCode에서 같은 지식 루프를 쓰고 싶을 때 유용합니다."
category: "agent-skill"
tags: ["obsidian", "second-brain", "knowledge-management", "claude-code", "codex", "gemini-cli", "opencode", "commands"]
githubUrl: "https://github.com/eugeniughelbur/obsidian-second-brain"
websiteUrl: "https://theaioperator.io"
githubStars: 1723
author: "eugeniughelbur"
installCommand: "curl -fsSL https://raw.githubusercontent.com/eugeniughelbur/obsidian-second-brain/main/scripts/quick-install.sh | bash"
compatibleAgents: ["Claude Code", "Codex", "Gemini CLI", "OpenCode"]
icon: "BookMarked"
---

# obsidian-second-brain

`obsidian-second-brain`은 Obsidian 볼트를 여러 AI CLI에서 공통으로 쓰게 해 주는 스킬입니다. Karpathy의 LLM Wiki 패턴을 확장해, 지식을 누적하고 기존 노트를 다시 써서 vault를 살아 있는 세컨드 브레인으로 운영합니다.

![obsidian-second-brain 배너](/tool-screenshots/obsidian-second-brain-banner.png)

## 언제 쓰나

- Obsidian vault를 Claude Code, Codex, Gemini CLI, OpenCode와 함께 쓰고 싶을 때
- 새 메모를 쌓기보다 기존 페이지를 갱신하는 지식 루프를 만들고 싶을 때
- 코드베이스 문서화, 웹 리서치, 캘린더, 자동 재작성 같은 워크플로를 붙이고 싶을 때
- AI가 만든 지식을 vault 안에서 재사용 가능하게 축적하고 싶을 때

## 핵심 특징

- **크로스-CLI 지원**: 한 코드베이스를 여러 CLI에서 같은 방식으로 씁니다.
- **AI-first vault**: 기존 노트를 갱신하며 지식이 누적되도록 설계됐습니다.
- **다양한 명령**: 문서화, 연구, 캘린더, 자가 재작성 등 40개 이상의 명령을 제공합니다.
- **Obsidian 중심**: Obsidian vault를 AI 작업의 중심 저장소로 둡니다.
- **설치가 간단함**: one-line installer로 빠르게 시작할 수 있습니다.
