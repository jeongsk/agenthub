---
title: "AI Job Search"
description: "Claude Code 기반 AI 구직 워크플로 프레임워크입니다. 채용 공고를 평가하고, 이력서와 커버레터를 맞춤 생성하며, 면접 준비까지 한 흐름으로 자동화하고 싶을 때 유용합니다."
category: "agent-skill"
tags: ["job-search", "career", "claude-code", "resume", "cover-letter", "interview", "workflow", "job-application"]
githubUrl: "https://github.com/MadsLorentzen/ai-job-search"
githubStars: 1326
author: "MadsLorentzen"
compatibleAgents: ["Claude Code"]
featured: false
icon: "Briefcase"
---

# AI Job Search

AI Job Search는 Claude Code를 기반으로 한 구직 지원 워크플로 프레임워크입니다. 지원자 프로필을 정리하고, 공고를 평가한 뒤, 이력서와 커버레터를 맞춤으로 만들고, 면접 준비까지 이어서 처리할 수 있게 설계되어 있습니다.

## 언제 쓰나

- 채용 공고를 넣으면 내 프로필과의 적합도를 먼저 평가하고 싶을 때
- 지원할 회사마다 이력서와 커버레터를 빠르게 맞춤화하고 싶을 때
- 면접 대비 질문과 답변 흐름까지 한 번에 준비하고 싶을 때
- 구직 과정 전체를 Claude Code 중심의 반복 가능한 워크플로로 만들고 싶을 때
- 덴마크 잡보드용 검색 도구를 포함한 구직 자동화 패턴을 참고하고 싶을 때

## 특징

- Claude Code 기반의 구직 자동화 프레임워크
- `/setup`, `/scrape`, `/apply` 중심의 명확한 작업 흐름
- 프로필 정리, 적합도 평가, CV/커버레터 작성, 리뷰-수정 루프 지원
- LaTeX 기반 이력서와 커버레터 생성
- 덴마크 구직 포털 검색 도구 포함
- `/expand`, `/upskill`로 프로필 보강과 갭 분석 지원

## 참고

- 이 저장소는 구직용 에이전트 워크플로와 프롬프트/스킬 구조가 핵심이므로 `agent-skill`로 분류했습니다.
- GitHub 저장소 기준으로 검증한 레지스트리 항목입니다.
