---

description: "Task list for feature implementation"
---

# Tasks: Create Book Structure

**Input**: Design documents from `/specs/001-create-book-structure/`
**Prerequisites**: plan.md (required), spec.md (required for goals)

## Format: `[ID] [P?] [Chapter/Lesson] Description`

-   **[P]**: Can run in parallel
-   **[Chapter/Lesson]**: Which chapter/lesson this task belongs to (e.g., C1L1, C2L3)
-   Include exact file paths in descriptions

## Path Conventions

-   Paths shown below assume the Docusaurus structure from plan.md

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic structure

- [X] T001 Create PowerShell script `scripts/generate-book-structure.ps1`

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before ANY user story can be implemented

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- No foundational tasks for this feature.

---

## Phase 3: User Story 1 - Generate Complete Book Structure (Priority: P1) 🎯 MVP

**Goal**: Generate the complete folder and file structure for the book "Physical AI & Humanoid Robotics".

**Independent Test**: The generated structure can be built by Docusaurus without errors.

### Implementation for User Story 1

- [X] T002 [US1] Implement logic in `scripts/generate-book-structure.ps1` to create chapter folders (`docs/chapter-1`, `docs/chapter-2`, etc.).
- [X] T003 [US1] Implement logic in `scripts/generate-book-structure.ps1` to create lesson files within each chapter folder (`lesson-1.md`, `lesson-2.md`, etc.).
- [X] T004 [US1] Implement logic in `scripts/generate-book-structure.ps1` to create `_category_.json` for each chapter folder.
- [X] T005 [US1] Implement logic in `scripts/generate-book-structure.ps1` to pre-populate each lesson file with the constitution-defined sections.
- [X] T006 [US1] Run the `scripts/generate-book-structure.ps1` script.
- [X] T007 [US1] Update the Docusaurus sidebar configuration to reflect the generated structure.

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **User Stories (Phase 3+)**: All depend on Setup phase completion

### User Story Dependencies

- **User Story 1 (P1)**: Can start after Setup (Phase 1) - No dependencies on other stories

### Within Each User Story

- Core implementation before integration

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup
2. Complete Phase 3: User Story 1
3. **STOP and VALIDATE**: Test User Story 1 independently by building the Docusaurus site.
4. Deploy/demo if ready
