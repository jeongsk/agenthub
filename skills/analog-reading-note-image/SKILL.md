---
name: analog-reading-note-image
description: Generate a Pinterest/Instagram-style analog Korean reading journal image from a book title, author, finish date, rating, and optional notes. Use when the user wants a one-page handwritten scrapbook-style book memo image. Ask for missing required information first, then create the image directly with the available image generation capability.
metadata:
  short-description: Korean analog book journal image generator
---

# Analog Reading Note Image

Use this skill to create a finished vertical Korean reading journal image from book metadata. The assistant should not merely print the prompt by default. It should gather the necessary details, compose the internal image-generation prompt, and send that prompt to the active image generation capability such as gpt-5.5 image generation, Codex image generation, OpenClaw, Hermes Agent, or another text-to-image model.

Only output the final prompt when the user explicitly asks for a prompt, says not to generate an image, or the current environment has no image generation capability.

## Inputs

Collect these fields before image generation:

- `책 제목`: required from the user.
- `저자`: required unless the user says they do not know it.
- `완독일`: required unless the user asks you to use today's date.
- `평점`: required unless the user asks you to choose it.
- `왜 읽었는지` 또는 짧은 감상/메모: required unless the user asks you to infer a neutral note.

Infer these fields when reasonable:

- `분류`: infer a broad category from the book when reasonably clear; otherwise use `독서/에세이 메모`.
- `포인트 컬러`: if not provided, choose 1-2 soft accent colors from: 연한 하늘색, 연보라, 베이지, 옅은 노랑.

If the book is obscure or details are uncertain, avoid fabricating plot points, quotes, or author biography. Use safe phrasing such as "이 책이 던지는 질문", "읽으며 떠올린 생각", or "작품의 분위기".

## Missing Information Behavior

If any required user-provided input is missing, ask one concise Korean question before generating the image. Ask for all missing fields at once.

Example:

```text
이미지를 만들기 위해 아래 정보를 알려주세요.
- 책 제목:
- 저자:
- 완독일:
- 평점:
- 짧은 감상 또는 왜 읽었는지:
```

If the user already provided enough information, do not ask follow-up questions. Proceed to image generation.

## Workflow

1. Check whether the user explicitly asked for prompt-only output. If yes, return the prompt and do not generate an image.
2. Check whether required information is missing. If missing, ask for it and stop until the user answers.
3. Normalize metadata.
4. Decide 1-2 soft accent colors from: 연한 하늘색, 연보라, 베이지, 옅은 노랑.
5. Generate 4-6 keywords. Prefer real themes if known; otherwise use safe, general concepts tied to the book title and category.
6. Write short Korean text blocks that fit inside an image:
   - Why this book: 1-2 short sentences.
   - Keyword descriptions: each 1 short phrase or sentence.
   - Summary: 2-3 short sentences.
   - Favorite line: do not invent a verbatim quote unless provided by the user. Instead use `기억하고 싶은 문장:` followed by a clearly original paraphrase or reflective sentence.
   - Note: 1 concise reaction.
7. Send the final prompt to the active image generation capability and return the generated image. Do not display the prompt unless the user explicitly asks for it or image generation is unavailable.

## Image Prompt Template

Replace bracketed fields internally before sending to the image generator.

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

Default output: generate and return the image only.

Prompt-only fallback: if image generation is unavailable or the user explicitly requests the prompt, return the final image prompt in Korean. If useful, include a compact metadata block before the prompt:

```text
책 제목: ...
저자: ...
완독일: ...
평점: ...
```

When directly using an image generation model or tool, pass only the final prompt.
