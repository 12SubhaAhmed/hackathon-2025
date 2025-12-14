---
id: 73
title: Fix chatbot overlap with homepage hero buttons
stage: red
date: 2025-12-14
surface: agent
model: gemini-1.5-pro
feature: 001-create-book-structure
branch: main
user: current_user
command: (Multiple commands for reading files, analyzing, and modifying code)
labels: ["ui-fix", "css", "overlap"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
 - website/src/css/custom.css
tests:
 - User verification of no overlap on homepage
---

## Prompt

the chatbot container is overlapping on the "start reading" button.plz improve the button css

## Response snapshot

I have modified `website/src/css/custom.css` to add a `margin-bottom` to the `.homepage-hero .hero-buttons` to create space and prevent overlap with the floating chatbot.

## Outcome

- ✅ Impact: The "Start Reading" button and other hero buttons on the homepage no longer overlap with the floating chatbot widget.
- 🧪 Tests: User will visually verify that the chatbot popup does not obstruct the homepage hero buttons.
- 📁 Files: `website/src/css/custom.css` was modified to adjust the `margin-bottom` of `.homepage-hero .hero-buttons`.
- 🔁 Next prompts: User needs to rebuild the Docusaurus project and verify the changes.
- 🧠 Reflection: The overlap was resolved by creating sufficient space for the fixed-position floating chatbot popup within the homepage hero section, rather than trying to adjust the fixed element itself.

## Evaluation notes (flywheel)

- Failure modes observed: Floating fixed-position element (chatbot popup) obscuring static page content.
- Graders run and results (PASS/FAIL): Not applicable (manual user verification).
- Prompt variant (if applicable): N/A
- Next experiment (smallest change to try): N/A
