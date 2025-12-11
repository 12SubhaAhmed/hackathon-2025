---
id: 62
title: Fix excessive chatbot scrolling
stage: misc
date: 2025-12-10
surface: agent
model: gemini-1.5-flash
feature: create-book-structure
branch: main
user: humanoid-robotics
command: please check this that after responding its scrolling agin and agin.why its happening?
labels: ["chatbot", "bug", "scrolling", "ui"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
  - website/src/components/Chatbot/index.tsx
tests:

---

## Prompt

please check this that after responding its scrolling agin and agin.why its happening?

## Response snapshot

Modified `website/src/components/Chatbot/index.tsx` to refine the `scrollToBottom` logic, adding a check to only scroll if the user is near the bottom of the chat container. This prevents continuous scrolling when not desired.

## Outcome

- ✅ Impact: Chatbot scrolling behavior is now smarter, preventing unwanted continuous scrolling and improving user experience.
- 🧪 Tests: N/A
- 📁 Files: Modified `website/src/components/Chatbot/index.tsx`.
- 🔁 Next prompts: User to verify if the scrolling issue is resolved.
- 🧠 Reflection: Implemented a common pattern for controlled auto-scrolling in chat interfaces.

## Evaluation notes (flywheel)

- Failure modes observed: Excessive scrolling after chatbot response.
- Graders run and results (PASS/FAIL): N/A
- Prompt variant (if applicable): N/A
- Next experiment (smallest change to try): N/A
