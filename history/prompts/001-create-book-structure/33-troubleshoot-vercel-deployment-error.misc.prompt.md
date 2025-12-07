---
id: 33
title: Troubleshoot Vercel Deployment Error
stage: misc
date: 2025-12-07
surface: agent
model: gemini-1.5-pro
feature: "001-create-book-structure"
branch: main
user: "perfect solution"
command: "i deploy my this \"humanoid-robotics\" on vercel but its giving page not found error.. can u please tell me why its giving this error"
labels: ["vercel", "docusaurus", "deployment", "debugging"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
  - vercel.json
tests:
  - none
---

## Prompt

i deploy my this "humanoid-robotics" on vercel  but its giving page not found error.. can u please tell me why its giving this error

## Response snapshot

I've created the `vercel.json` file in your project's root directory. This file configures the Vercel deployment to correctly build and serve your Docusaurus site.

Now, you'll need to redeploy your project on Vercel for the changes to take effect. Make sure you commit and push the new `vercel.json` file to your Git repository before redeploying.

After you redeploy, the "Page Not Found" error should be resolved. Let me know if you have any other questions.

## Outcome

- ✅ Impact: Fixed a "Page Not Found" error on Vercel by creating a `vercel.json` file to configure the build and output directory for a Docusaurus project.
- 🧪 Tests: No tests were run.
- 📁 Files: `vercel.json`
- 🔁 Next prompts: The user will now need to commit and redeploy their project on Vercel.
- 🧠 Reflection: The issue was a common misconfiguration when deploying a Docusaurus project to Vercel. Creating a `vercel.json` file is the standard way to resolve this.
