---
name: spec-implementation-notes
description: Maintain a live implementation-notes.md while implementing a feature from a SPEC. Records ambiguous design decisions, intentional deviations, tradeoffs, and open questions as they happen so the user can give feedback during implementation, not after. Use after grill-me, or whenever the user asks to implement a SPEC / specification / design doc / requirements. Triggers include "스펙 구현", "specification 따라 구현", "design doc 따라 구현해줘", "implement this spec", "build this from the spec".
metadata:
  short-description: Implement specs with live notes
---

# Spec Implementation Notes

Use this skill when implementing a clarified `<SPEC>` — most commonly right after a `grill-me` session, but also any time the user says "implement this spec / design doc / requirements".

The goal is to keep implementation assumptions **visible** so the user can correct them mid-flight rather than after the fact.

## Core Instruction

Implement the user's `<SPEC>`. While working, maintain a live notes file that records every meaningful point where the implementation differs from, interprets, or extends the specification.

The notes are a **working artifact**, not a final report. Update them as decisions happen.

## File Format

Default: `implementation-notes.md` (Markdown).

Use HTML (`implementation-notes.html`) only when:

- The user explicitly asks for HTML.
- The artifact will be shared via a static-site / preview channel where Markdown rendering is unavailable.

Starter templates live next to this skill:

- `template.md` — copy when creating the file the first time.
- `template.html` — copy when the user opts into HTML.

Copy the relevant template verbatim into the project, then fill it in. Do not invent a new layout per project.

## Where to Put the File

- Default location: project root.
- For monorepos, place it at the **feature scope root** (the package/app directory that owns the SPEC), not the repo root.
- Default git policy: **do not commit** the file. On first creation, append `implementation-notes.md` (and `.html` if used) to the project's `.gitignore`. If the user later asks to commit it, remove the ignore entry — do not commit silently.

## Required Sections

The notes file must contain these four sections (templates already include them):

| Section | Records |
|---|---|
| Design Decisions | Choices made because the spec was ambiguous |
| Deviations | Places where the implementation intentionally diverges from the spec, with reason |
| Tradeoffs | Alternatives considered and why the chosen approach won |
| Open Questions | Items still needing confirmation; may force later changes |

## Entry Format

Each entry must include:

- **Title** — short, scannable.
- **Status** — see lifecycle below. Required.
- **Spec area / feature** — which part of the SPEC this touches.
- **Timestamp** — ISO 8601 with offset (e.g. `2026-05-25T14:30+09:00`). Required, not optional.
- **Body** — concise explanation, typically 1–4 sentences.

## Status Lifecycle

```
open ──► accepted ──► resolved
              │
              └──► changed ──► accepted | resolved
```

| Status | Meaning |
|---|---|
| `open` | Question raised, no decision yet. Implementation is either blocked or proceeding on a stated assumption. |
| `accepted` | A decision/assumption is in force and the implementation reflects it. Still revisable. |
| `changed` | A previously `accepted` decision was overturned. Record what changed and why, then add a follow-up entry with the new state. |
| `resolved` | The user (or empirical evidence) confirmed the decision. No further change expected. |

Never delete an entry. If a decision is reversed, transition it through `changed` and add a new entry — the audit trail is the point.

## Workflow

1. Read the SPEC and skim the codebase for likely ambiguity *before* writing code.
2. Copy the starter template into the project and append the file to `.gitignore` (unless told otherwise).
3. Seed the section headers, even if each section is initially empty.
4. Update notes **before or alongside** the code change whenever:
   - The spec has multiple valid interpretations.
   - A user-visible behavior is chosen without explicit spec language.
   - Codebase constraints force a different implementation than the spec implies.
   - A simpler / staged / lower-risk approach is chosen over a richer alternative.
   - A question remains but implementation proceeds on a reasonable assumption.
5. Do **not** log routine edits (renames, formatting, obvious refactors). Notes track *judgments*, not activity.
6. At the end, summarize the implemented behavior and list every entry still in `open` status or recently `changed`.

## Verification Before Declaring Done

Run, in order, whichever exist in the project:

1. Type check (`tsc`, `mypy`, `cargo check`, etc.).
2. Lint (`eslint`, `ruff`, `cargo clippy`, etc.).
3. Tests relevant to the touched code.
4. Build (if the project produces an artifact).

If a step does not exist or cannot be run, state that explicitly in the wrap-up. For behavioral verification (actually exercising the feature in a running app), delegate to the `verify` or `run` skill.

## Completion Criteria

The task is complete when **all** of the following hold:

- [ ] The SPEC implementation is done, or a clear blocker is recorded as an `open` entry.
- [ ] `implementation-notes.md` (or `.html`) exists and reflects every known decision, deviation, tradeoff, and open question.
- [ ] Verification appropriate to the project has been run, or its absence is stated explicitly.
- [ ] The final response summarizes the implemented behavior and explicitly lists unresolved `open` items.

## Default Starting Prompt

When invoked right after `grill-me`:

```text
Implement the clarified SPEC. Maintain a live implementation-notes.md recording every meaningful point where the implementation differs from, interprets, or extends the specification. Use the sections, entry format, and status lifecycle defined in this skill. No spec is complete — surface ambiguities and unexpected constraints as you find them, and keep your assumptions visible for continuous feedback.
```
