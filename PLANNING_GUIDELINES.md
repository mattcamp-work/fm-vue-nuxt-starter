# product_planning.md

## Purpose

This file defines a lightweight planning mode for Cursor or any AI coding agent.

The goal is simple: determine the size of the work, create a branch, and avoid starting epic-sized work with UI before the data model and business logic are clear.

---

## Planning Flow

### 1. Determine Size

Before planning or coding, classify the request as one of three sizes:

- **Patch** — a small fix or adjustment
- **Feature** — a contained piece of new functionality
- **Epic** — a larger body of work that will need to be broken down

Ask the user questions one at a time to fill in gaps.

Do not ask a long list of questions at once.

---

### 2. Create Branch

Before implementation starts, create a branch for the work.

Use a simple branch name based on the size and goal.

Examples:

- `patch/fix-token-save`
- `feature/google-font-picker`
- `epic/project-export-system`

Do not work directly on the main branch.

---

## Patch Plan

For a patch, run the normal plan.

A patch plan should briefly identify:

- What is broken or needs to change
- The likely cause
- The files likely involved
- The fix approach
- How to verify it works

Then implement the patch on the branch.

---

## Feature Plan

For a feature, run the normal plan.

A feature plan should briefly identify:

- What the feature does
- The expected user behavior
- The files likely involved
- The implementation approach
- How to verify it works

Then implement the feature on the branch.

---

## Epic Plan

For an epic, do not start with full implementation.

Start only with the data model and the minimum viable business logic. Sketch the larger plan only for context.

Ask the user questions one at a time to fill in gaps.

### Epic Step 1: Sketch the Larger Plan

Briefly describe the likely shape of the epic so the user understands the direction.

This should be short. Do not over-plan the whole epic.

Include:

- The likely goal
- The likely major pieces
- What will be intentionally deferred

---

### Epic Step 2: Define the Data Model

The data model should stay simple.

Answer only:

- What fields do we need?
- Where does this data live in Firebase?

Do not overcomplicate the model.

Do not start building polished UX or UI until this is clear.

---

### Epic Step 3: Build MVP Business Logic

After the data model is clear, build the minimum business logic needed to prove the system works.

This should include only the logic needed for the first working path.

Avoid polish. Avoid extra features. Avoid speculative architecture.

---

### Epic Step 4: Build Debugging UI

After the MVP business logic exists, build a crude debugging UI.

The debugging UI should show the important inputs and outputs as the system changes.

It can be ugly. It only needs to prove that the data model and business logic are working.

Examples of things the debugging UI may show:

- Current Firebase record
- Local form/input state
- Save results
- Derived output
- Errors
- Logs

---

### Epic Step 5: End Branch

Stop after the data model, MVP business logic, and debugging UI are working.

Do not continue into full UX or final UI unless the user explicitly asks for the next branch.

At the end of the branch, summarize:

- What was added
- What was proven
- What is still missing
- What the next branch should be

---

## Cursor Behavior Rules

When using this planning mode, Cursor should:

1. Determine whether the request is a patch, feature, or epic.
2. Ask the user one question at a time when details are missing.
3. Create a branch before implementation.
4. For patches and features, run the normal plan.
5. For epics, only start with:
   - simple data model
   - Firebase location
   - MVP business logic
   - debugging UI
6. Stop the epic branch after the debugging UI works.
7. Do not jump ahead to polished UX or UI during the first epic branch.

---

## Simple Epic Template

```md
# Epic: [Name]

## Size

Epic

## Branch

`epic/[branch-name]`

## Larger Plan Context

[Short sketch of the larger goal and major pieces.]

## First Branch Goal

Define the data model, build MVP business logic, and create a debugging UI.

## Data Model

Fields needed:

- [field]
- [field]

Firebase location:

- [collection/document path]

## MVP Business Logic

- [logic needed for first working path]

## Debugging UI

Show:

- [input]
- [output]
- [Firebase record]
- [error/log]

## Stop Point

Stop when the data model, MVP business logic, and debugging UI are working.

## Next Branch

[Likely next branch after this one.]
```

