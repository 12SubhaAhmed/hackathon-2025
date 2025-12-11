---
id: 63
title: Refine chatbot auto-scrolling behavior
stage: misc
date: 2025-12-10
surface: agent
model: gemini-1.5-flash
feature: create-book-structure
branch: main
user: humanoid-robotics
command: chatbot page is scrolling down after pressing enter.. why??
labels: ["chatbot", "bug", "scrolling", "ui", "react"]
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

chatbot page is scrolling down after pressing enter.. why??

## Response snapshot

Modified `website/src/components/Chatbot/index.tsx` to implement a more robust auto-scrolling mechanism. Introduced `isUserScrolling` state, `handleScroll` event listener, and used `setTimeout` for `scrollToBottom` to prevent excessive and unwanted scrolling.

## Outcome

- ✅ Impact: Chatbot auto-scrolling should now be more intelligent, respecting user scrolling and preventing continuous jumps.
- 🧪 Tests: N/A
- 📁 Files: Modified `website/src/components/Chatbot/index.tsx`.
- 🔁 Next prompts: User to verify if the excessive scrolling issue is finally resolved.
- 🧠 Reflection: Implemented a common and robust pattern for auto-scrolling in dynamic content areas.

## Evaluation notes (flywheel)

- Failure modes observed: Previous scroll fix was not entirely effective.
- Graders run and results (PASS/FAIL): N/A
- Prompt variant (if applicable): N/A
- Next experiment (smallest change to try): N/A
