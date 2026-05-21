---
name: spec-implementation-notes
description: Use after grill-me or any clarified SPEC when implementing a feature from a specification. Maintain a live implementation-notes.html file that records ambiguous design decisions, intentional deviations, tradeoffs, and open questions while building the SPEC.
metadata:
  short-description: Implement specs with live notes
---

# Spec Implementation Notes

Use this skill immediately after a `grill-me` clarification session, or whenever the user asks to implement a `<SPEC>` and wants the agent to keep implementation assumptions visible.

## Core Instruction

Implement the user's `<SPEC>`. While working, maintain a live `implementation-notes.html` file that records every meaningful point where the implementation differs from, interprets, or extends the specification.

The notes are not a final report. Treat them as a working artifact that is updated as decisions happen, so the user can inspect and give feedback during implementation.

## Required Notes

Create or update `implementation-notes.html` at the project root unless the user specifies another path. The file must include these sections:

- `설계 결정`: Choices made because the spec was ambiguous.
- `편차`: Intentional places where the implementation does not follow the spec, with reasons.
- `트레이드오프`: Alternatives considered and why the chosen approach won.
- `미결 질문`: Items that still need confirmation or may require later changes.

Each entry should include:

- A short title.
- The current status: `open`, `accepted`, `changed`, or `resolved`.
- The relevant spec area or feature.
- A concise explanation.
- A timestamp or ordering marker if useful.

## Workflow

1. Read the spec and identify likely ambiguity before editing code.
2. Create `implementation-notes.html` early, even if most sections initially say there are no entries yet.
3. Update the notes before or alongside code changes whenever:
   - The spec has multiple valid interpretations.
   - A user-visible behavior is chosen without explicit spec language.
   - The codebase constraints force a different implementation than the spec implies.
   - A simpler, staged, or lower-risk approach is chosen over a richer alternative.
   - A question remains but implementation can proceed with a reasonable assumption.
4. Keep notes concise and factual. Do not use the notes as a task log for routine edits.
5. At the end, summarize the implemented behavior and mention any remaining open notes.

## HTML Requirements

The notes file should be standalone and readable in a browser:

- Use semantic HTML with a small embedded CSS block.
- Keep styling simple and compatible with the repository's tone when obvious.
- Make entries easy to scan with headings, status badges, and short paragraphs.
- Preserve existing entries when updating; append or revise them rather than replacing the file wholesale.

## Default Starting Prompt

When this skill is used after `grill-me`, proceed with:

```text
<SPEC>을 구현하십시오. 작업을 진행하면서 구현 방식이 명세와 달라지거나 해석이 필요한 모든 내용을 기록하는 실시간 implementation-notes.html 파일을 유지하십시오. 여기에는 다음 내용이 포함되어야 합니다:
- 설계 결정: 명세가 모호하여 본인이 내린 선택들
- 편차: 의도적으로 명세를 따르지 않은 부분과 그 이유
- 트레이드오프: 고려했던 대안들과 현재 방식을 선택한 이유
- 미결 질문: 확인이나 수정이 필요한 사항들
상세한 사양을 작성하더라도 언제나 모호한 점이나 예상치 못한 변수가 발생하기 마련입니다. 이러한 상황에서 모델이 스스로 판단을 내리되, 사용자에게 내용을 공유하여 지속적으로 피드백을 받을 수 있는 구조로 만들어줍니다.
```

## Completion Criteria

The task is not complete until:

- The requested spec implementation is done or a clear blocker is documented.
- `implementation-notes.html` exists and reflects all known decisions, deviations, tradeoffs, and unresolved questions.
- Verification appropriate to the codebase has been run, or the reason it could not be run is stated.
