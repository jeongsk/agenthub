---
title: "insane-review"
description: "Claude Code 안에서 로그인된 ChatGPT 웹 세션을 CDP로 조작해 GPT-5.5 Pro에게 코드 리뷰를 맡기는 Claude Code 플러그인입니다. repomix로 관련 코드를 패킹하고 결과를 프로젝트별 .insane-review 폴더에 저장합니다."
category: "plugin"
tags: ["claude-code", "code-review", "chatgpt", "gpt-5.5", "cdp", "repomix", "browser-automation", "agent-council", "python", "plugin"]
githubUrl: "https://github.com/fivetaku/insane-review"
githubStars: 81
author: "fivetaku"
installCommand: "/plugin marketplace add https://github.com/fivetaku/gptaku_plugins.git && /plugin install insane-review"
compatibleAgents: ["Claude Code"]
featured: false
icon: "Bot"
---

# insane-review

insane-review는 Claude Code에서 GPT-5.5 Pro의 웹 전용 추론을 코드 리뷰에 활용하기 위한 플러그인입니다. 공식 API가 없는 ChatGPT Pro 모델을 직접 호출하는 대신, 사용자가 로그인해 둔 ChatGPT 웹 세션을 Chrome DevTools Protocol(CDP)로 조작합니다. Claude Code가 리뷰 범위를 정하고, repomix로 관련 파일을 패킹한 뒤, ChatGPT Pro에 프롬프트를 보내고 답변을 수확해 프로젝트의 `.insane-review/` 디렉터리에 저장합니다.

## 언제 쓰나

- Claude Code 작업 중 특정 디렉터리나 설계를 GPT-5.5 Pro에게 추가 검토시키고 싶을 때
- API 비용 없이 기존 ChatGPT Pro 구독을 코드 리뷰 보조 모델로 쓰고 싶을 때
- Claude가 고른 관련 파일 목록을 repomix 패키지로 감사하고, 라인 번호가 포함된 리뷰를 받고 싶을 때
- agent-council 구성에서 GPT-5.5 Pro를 웹 전용 council member로 참여시키고 싶을 때
- 긴 추론이 필요한 리뷰를 `--force-answer-after`, `--max-wait` 등으로 제한하며 운영하고 싶을 때

## 핵심 기능

- **Claude Code 플러그인 명령**: `/insane-review [target/question]` 또는 “have Pro review this” 같은 자연어 요청으로 동작합니다.
- **repomix 기반 코드 패킹**: 리뷰에는 기본적으로 전체 코드를 보내며, 라인 번호와 packed-file-list audit으로 누락을 줄입니다.
- **CDP 브라우저 브리지**: Comet 또는 Chrome을 `--remote-debugging-port=9222`로 실행하고, 로그인된 ChatGPT 세션에서 GPT-5.5 Pro를 선택해 사용합니다.
- **fail-closed 설계**: 모델 불일치, 로그인 미확인, 빈 pack, 프롬프트 전송 실패, 이전 턴 응답 수확 같은 상황에서는 조용히 진행하지 않고 중단합니다.
- **프로젝트별 산출물**: 보낸 pack과 Pro 응답을 현재 프로젝트의 `.insane-review/pack_*.md`, `.insane-review/response_*.md`로 저장합니다.
- **두 가지 운영 모드**: 단독 리뷰어로 쓰거나, `--council` 모드로 agent-council의 웹 전용 멤버로 붙일 수 있습니다.

## 빠른 시작

Claude Code에서 플러그인 marketplace를 추가하고 설치합니다.

```text
/plugin marketplace add https://github.com/fivetaku/gptaku_plugins.git
/plugin install insane-review
```

Claude Code를 재시작한 뒤, ChatGPT에 로그인된 브라우저를 CDP 포트로 실행합니다.

```bash
open -a Comet --args --remote-debugging-port=9222
# 또는 Chrome 사용
# open -a "Google Chrome" --args --remote-debugging-port=9222
```

환경 점검은 플러그인 저장소의 스크립트로 수행합니다.

```bash
python3 bin/pack_and_ask.py --check-env
```

필요한 Python 의존성(`playwright`, `pyperclip`)이 없으면 다음처럼 설치까지 시도할 수 있습니다.

```bash
python3 bin/pack_and_ask.py --check-env --install
```

이후 Claude Code에서 다음처럼 실행합니다.

```text
/insane-review review the auth flow in src/auth
```

## 참고

insane-review는 Python 3.11+, Node.js/`npx`, Claude Code, `playwright`, `pyperclip`, 그리고 GPT-5.5 Pro를 사용할 수 있는 ChatGPT 구독 계정이 필요합니다. ChatGPT 웹 UI 자동화는 OpenAI가 공식 보증하는 API 방식이 아니며, 웹 DOM 변경에 따라 selector 유지보수가 필요할 수 있습니다. README에서도 개인 구독 사용을 전제로 하며, 민감한 코드를 외부 웹 서비스에 보내기 전에 보안·계약·개인정보 범위를 반드시 확인해야 합니다.
