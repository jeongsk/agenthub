---
title: "Codex First Customer Finder"
description: "스타트업 URL이나 제품 아이디어를 분석해 공개 신호에 근거한 초기 고객 후보, ICP, 적합도·타이밍 점수와 개인화된 outreach 초안을 만드는 Codex 스킬입니다."
category: "agent-skill"
tags: ["codex", "customer-discovery", "early-adopters", "prospecting", "startup", "ideal-customer-profile", "market-research", "sales"]
githubUrl: "https://github.com/Kappaemme-git/codex-first-customer-finder-skill"
githubStars: 403
author: "Kappaemme-git"
installCommand: "npx --yes codex-first-customer-finder-skill@latest"
compatibleAgents: ["Codex"]
featured: false
icon: "Users"
---

# Codex First Customer Finder

Codex First Customer Finder는 스타트업 URL, 저장소 또는 제품 설명을 바탕으로 **첫 고객 후보를 공개 근거와 함께 찾는 Codex 스킬**입니다. 이상적인 고객 프로필(ICP)을 정의하고, 공개 게시물·커뮤니티·문서에 나타난 pain, 수요, workaround, switching, timing 신호를 조사해 후보를 우선순위화합니다.

## 언제 쓰나

- 초기 스타트업의 첫 고객 또는 design partner 후보를 찾고 싶을 때
- 제품에 맞는 primary·adjacent ICP를 정의하고 싶을 때
- 공개적으로 드러난 문제·구매 의향·시점 신호를 바탕으로 prospect를 좁히고 싶을 때
- 조사 근거와 개인화된 첫 연락 초안을 포함한 영업 리포트가 필요할 때

## 주요 기능

- **ICP 분석** — 스타트업 URL, GitHub 저장소, 제품 설명에서 primary·adjacent ICP와 제외 조건을 정리합니다.
- **공개 신호 조사** — 명시적인 수요, pain, workaround, switching, timing 신호를 찾습니다.
- **근거 기반 후보 평가** — 각 주요 후보에 원문 출처 링크와 신호 날짜를 연결하고 fit·timing 점수를 계산합니다.
- **여러 조사 모드** — `quick`, `standard`, `deep`, `design-partners`, `b2b`, `community` 모드를 제공합니다.
- **HTML 리포트 생성** — 초기 고객 판단, 후보 목록, 반복 pain 패턴, 7일 수동 outreach 계획과 조사 한계를 포함한 반응형 standalone HTML 리포트를 생성합니다.
- **수동 outreach 원칙** — 연락 초안은 만들지만 메시지를 자동으로 보내지 않습니다.

## 설치 및 사용

```bash
npx --yes codex-first-customer-finder-skill@latest
```

설치 후 Codex를 재시작하고 다음처럼 사용합니다.

```text
Use $first-customer-finder to find ten evidence-backed potential first customers for https://example.com and create the final HTML report.
```

수동 설치가 필요하면 저장소를 클론한 뒤 `first-customer-finder` 디렉터리를 `~/.codex/skills/first-customer-finder`로 복사할 수 있습니다.

## 주의사항

- 결과는 공개 신호를 바탕으로 한 **고객 후보 가설**이며, 실제 고객·구매 의향·전환을 보장하지 않습니다.
- 조사 출처는 공개 웹 자료에 한정되며 private contact enrichment나 민감한 개인정보를 수집하지 않습니다.
- outreach는 기본적으로 수동 검토·전송 방식이며 자동 발송 기능이 아닙니다.

MIT 라이선스로 배포됩니다.
