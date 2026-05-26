---
title: "React Doctor"
description: "React 코드베이스의 상태/이펙트, 성능, 아키텍처, 보안, 접근성 문제를 자동으로 진단하고 코딩 에이전트 스킬로 설치해 수정까지 연결해주는 도구입니다. 에이전트가 작성한 리액트 코드 품질을 일관되게 유지하고 싶을 때 유용합니다."
category: "agent-skill"
tags: ["react", "code-review", "code-quality", "linting", "agent-skills", "ci", "github-actions"]
githubUrl: "https://github.com/millionco/react-doctor"
websiteUrl: "https://react.doctor"
githubStars: 10858
author: "millionco"
installCommand: "npx react-doctor@latest install"
compatibleAgents: ["Claude Code", "Codex", "Cursor", "OpenCode"]
featured: false
icon: "Stethoscope"
---

# React Doctor

React Doctor는 리액트 코드베이스를 정해진 규칙에 따라 분석해 상태 관리, 성능, 아키텍처, 보안, 접근성 문제를 찾아내고, 코딩 에이전트 스킬로도 설치할 수 있는 도구입니다.

## 언제 쓰나

- 에이전트가 작성한 React 코드의 품질을 코드 리뷰 전에 점검하고 싶을 때
- 상태 관리, 이펙트, 성능 최적화 이슈를 자동으로 진단하고 싶을 때
- 진단 결과를 에이전트 스킬로 설치해 다음 작업부터 개선된 코드를 작성하게 하고 싶을 때
- CI에서 PR마다 React 코드 품질을 자동 검사하고 싶을 때

## 특징

- React 코드베이스의 상태/이펙트, 성능, 아키텍처, 보안, 접근성을 자동 진단
- `npx react-doctor@latest` 한 줄로 실행
- 진단 후 `npx react-doctor@latest install`로 코딩 에이전트 스킬 설치 가능
- Claude Code, Codex, Cursor, OpenCode 등 주요 에이전트 호환
- GitHub Actions로 PR마다 자동 검사 및 인라인 어노테이션 지원
- Next.js, Vite, TanStack, React Native, Expo 등 모든 React 프레임워크 지원
