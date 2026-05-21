---
name: analog-reading-note-image
description: Generate a Korean prompt for creating a Pinterest/Instagram-style analog reading journal image from a book title, author, finish date, rating, and optional notes. Use when the user wants a one-page handwritten scrapbook-style book memo image for Codex, OpenClaw, Hermes Agent, or an image generation model.
metadata:
  short-description: Korean analog book journal image prompts
---

# Analog Reading Note Image

Use this skill to turn book metadata into a polished image-generation prompt for a vertical Korean reading journal page. The output should be ready for an image tool such as Codex image generation, OpenClaw, Hermes Agent, or another text-to-image model.

## Inputs

Collect or infer these fields:

- `책 제목`: required from the user.
- `저자`: use the user-provided author if present. If unknown, say `저자 미상` or infer only when widely known.
- `완독일`: use the user-provided date. If missing, use today's date in `YYYY.MM.DD`.
- `평점`: use the user-provided rating. If missing, choose a natural rating such as `★★★★☆` unless the user's sentiment suggests otherwise.
- `분류`: infer a broad category from the book when reasonably clear; otherwise use `독서/에세이 메모`.
- `왜 읽었는지`: write one short, natural Korean note. Avoid claiming personal facts the user did not give.

If the book is obscure or details are uncertain, avoid fabricating plot points, quotes, or author biography. Use safe phrasing such as "이 책이 던지는 질문", "읽으며 떠올린 생각", or "작품의 분위기".

## Workflow

1. Normalize missing metadata.
2. Decide 1-2 soft accent colors from: 연한 하늘색, 연보라, 베이지, 옅은 노랑.
3. Generate 4-6 keywords. Prefer real themes if known; otherwise use safe, general concepts tied to the book title and category.
4. Write short Korean text blocks that fit inside an image:
   - Why this book: 1-2 short sentences.
   - Keyword descriptions: each 1 short phrase or sentence.
   - Summary: 2-3 short sentences.
   - Favorite line: do not invent a verbatim quote unless provided by the user. Instead use `기억하고 싶은 문장:` followed by a clearly original paraphrase or reflective sentence.
   - Note: 1 concise reaction.
5. Produce one final prompt only, unless the user asks for explanation.

## Image Prompt Template

Replace bracketed fields before sending to the image generator.

```text
세로형 4:5 또는 A4 세로 비율의 초고해상도 이미지. 깨끗한 화이트 노트 한 페이지 위에 실제 대학생이 손으로 정리한 듯한 감성 독서 메모를 그린다. 은은한 종이 질감, 넓은 여백, 정돈된 정보 배치, 검은 펜 손글씨 중심. 포인트 컬러는 [ACCENT_COLORS]만 사용. 전체 분위기는 Pinterest/Instagram 스타일의 아날로그 독서기록, 미니멀하고 감성적이며 과하게 화려하지 않다.

상단 왼쪽:
- 작은 날짜: [FINISHED_DATE]
- 별점: [RATING]
- 책 표지 느낌의 작은 썸네일. 실제 책 표지를 복제하지 말고, [BOOK_TITLE]의 분위기를 반영한 추상적 미니 커버로 표현.

상단 오른쪽:
- TITLE: [BOOK_TITLE]
- AUTHOR: [AUTHOR]
- CATEGORY: [CATEGORY]
- FINISHED DATE: [FINISHED_DATE]
- WHY THIS BOOK?: [WHY_THIS_BOOK]

중앙 영역:
- KEYWORDS 섹션.
- [KEYWORD_1], [KEYWORD_2], [KEYWORD_3], [KEYWORD_4], [OPTIONAL_KEYWORD_5], [OPTIONAL_KEYWORD_6]를 둥근 제목 박스 안에 배치.
- 키워드 사이를 점선 화살표로 연결.
- 각 키워드 아래에 짧은 한국어 손글씨 설명:
  [KEYWORD_NOTES]

하단 영역:
- SUMMARY: [SUMMARY]
- FAVORITE LINE: [FAVORITE_LINE]
- NOTE: [REACTION_NOTE]
- 책 내용을 연결하는 작은 화살표 다이어그램과 마인드맵 구조를 함께 배치.

스타일 세부사항:
- 실제 손으로 쓴 듯 자연스럽고 약간 불규칙하지만 선명하게 읽히는 한국어 필기체.
- 동글동글한 제목 글씨.
- 점선 화살표, 밑줄, 동그라미 표시, 작은 낙서.
- 귀여운 별, 행성, 하트, 책갈피, 커피잔, 작은 고양이 또는 토끼 캐릭터 낙서를 보조 장식으로만 작게 넣기.
- 스크랩북, 다이어리 꾸미기, 스티커 감성은 살리되 본문을 가리지 않기.

레이아웃 제약:
- 모든 정보가 한 페이지 안에 들어가야 한다.
- 요소들이 겹치지 않도록 충분한 간격 유지.
- 상단은 책 정보, 중앙은 핵심 개념, 하단은 감상과 다이어그램 구조.
- 디지털 UI처럼 보이지 않게, 손으로 만든 노트 페이지처럼 표현.

피해야 할 것:
- 과도하게 복잡한 장식, 본문을 가리는 스티커, 실제 책 표지의 저작권 이미지 복제, 읽을 수 없는 무작위 글자, 네온 색감, 3D, 플라스틱 질감.
```

## Output Format

Return the final image prompt in Korean. If useful, include a compact metadata block before the prompt:

```text
책 제목: ...
저자: ...
완독일: ...
평점: ...
```

When directly using an image generation tool, pass only the final prompt.
