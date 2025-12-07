---
id: 37
title: Temporarily Disable Client Redirects Plugin
stage: misc
date: 2025-12-07
surface: agent
model: gemini-1.5-pro
feature: "001-create-book-structure"
branch: main
user: "perfect solution"
command: "iys deploy on vercel but now page not found error"
labels: ["vercel", "docusaurus", "deployment", "debugging", "redirects"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
  - website/docusaurus.config.ts
tests:
  - none
---

## Prompt

iys deploy on vercel but now page not found error

## Response snapshot

I have successfully pushed the updated `docusaurus.config.ts` file to your "hackathon-2025" repository on GitHub.

Now, please redeploy your project on Vercel. This change temporarily disables the `client-redirects` plugin, which we suspect might be causing the "Page Not Found" error.

Please let me know the outcome after this deployment. If the page loads, we'll know the redirect was the culprit and can then figure out a Vercel-compatible way to implement it.

## Outcome

- ✅ Impact: Temporarily disabled the `client-redirects` plugin in `docusaurus.config.ts` to troubleshoot a "Page Not Found" error on Vercel after successful deployment. The change was committed and pushed to the GitHub repository.
- 🧪 Tests: No tests were run.
- 📁 Files: `website/docusaurus.config.ts`
- 🔁 Next prompts: The user needs to redeploy on Vercel and report the outcome.
- 🧠 Reflection: The "Page Not Found" error after a successful Vercel deployment often points to client-side routing or redirection issues. Disabling the `client-redirects` plugin is a crucial step to isolate this problem.
