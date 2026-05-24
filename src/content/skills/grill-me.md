---
title: "Grill Me"
description: "계획이나 디자인을 끊임없이 질문하며 결함을 찾고 공유된 이해에 도달할 때까지 설계 결정 트리를 따라 내려가는 에이전트 스킬입니다."
category: "agent-skill"
tags: ["productivity", "planning", "design", "interview", "decision-tree", "code-review"]
githubUrl: "https://github.com/mattpocock/skills/blob/main/skills/productivity/grill-me/SKILL.md"
githubStars: 102416
author: "mattpocock"
installCommand: "npx skills add mattpocock/skills --skill grill-me"
compatibleAgents: ["Claude", "Gemini", "Codex"]
featured: false
icon: "Crosshair"
---

# Grill Me

Interview the user relentlessly about a plan or design until reaching shared understanding, resolving each branch of the decision tree.

## 사용 방법

Interview me relentlessly about every aspect of this plan until we reach a shared understanding. Walk down each branch of the design tree, resolving dependencies between decisions one-by-one. For each question, provide your recommended answer.

Ask the questions one at a time.

If a question can be answered by exploring the codebase, explore the codebase instead.
