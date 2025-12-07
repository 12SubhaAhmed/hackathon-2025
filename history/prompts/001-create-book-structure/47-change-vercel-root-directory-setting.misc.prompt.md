---
id: 47
title: Change Vercel Root Directory Setting
stage: misc
date: 2025-12-07
surface: agent
model: gemini-1.5-pro
feature: "001-create-book-structure"
branch: main
user: "perfect solution"
command: "how to i tell you root directory..there is nill in root directory in settings of vercel"
labels: ["vercel", "deployment", "configuration", "root-directory"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files: []
tests:
  - none
---

## Prompt

how to i tell you root directory..there is nill in root directory in settings of vercel

## Response snapshot

Okay, I understand. If the "Root Directory" in your Vercel Project Settings is `.` (which often appears as empty or `null` in the UI if it's the default), that means Vercel is treating the *entire repository* as the project.

This is a **critical piece of information** and explains why we've been having trouble.

Here's why:

*   **Our `vercel.json` is located at the root of your repository:** `E:\AI Native\Hackathon-1\humanoid-robotics\vercel.json`
*   **Our Docusaurus project is located in a subdirectory:** `E:\AI Native\Hackathon-1\humanoid-robotics\website\`

When the "Root Directory" setting in Vercel is `.` (or empty), Vercel expects the `package.json` and the build artifacts to be directly in the repository root. However, your Docusaurus `package.json` is in `website/package.json`.

The `vercel.json` we have tried to use:

```json
{
  "version": 2,
  "builds": [
    {
      "src": "website/package.json",
      "use": "@vercel/static-build",
      "config": {
        "distDir": "build"
      }
    }
  ],
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

This `vercel.json` is designed for a monorepo setup where the Vercel project *itself* is configured to point to the `website` subdirectory, or where the `builds` array explicitly tells Vercel to build a *specific part* of the repo.

**The most straightforward solution is to correctly configure the "Root Directory" in the Vercel Project Settings.**

**Here's what you need to do in the Vercel dashboard:**

1.  **Go to your project settings.**
2.  **Find the "Root Directory" setting under "Build & Development Settings".**
3.  **Change the value of "Root Directory" to `website/` (or just `website` if Vercel auto-adds the slash).**
4.  **Save the changes.**
5.  **Redeploy your project.**

By setting the "Root Directory" to `website/`, you are telling Vercel to treat the `website` subdirectory as the root of your project. When Vercel does this, it will automatically look for `package.json` inside `website/`, run `npm run build` inside `website/`, and expect the output to be in `website/build`.

**This change will make our existing `vercel.json` (which uses `distDir: "build"`) and `docusaurus.config.ts` (with `baseUrl: '/'`) work as intended.** The `rewrites` in `vercel.json` should then also function correctly.

Please try this in your Vercel dashboard and let me know the outcome!

## Outcome

- ✅ Impact: Identified that the Vercel "Root Directory" setting being default/empty (`.`) was the root cause of the "Page Not Found" error. Provided clear, step-by-step instructions to the user to change this setting in the Vercel dashboard to `website/` to correctly align Vercel's project interpretation with the Docusaurus project's actual location.
- 🧪 Tests: No tests were run.
- 📁 Files: None (instructions for Vercel dashboard)
- 🔁 Next prompts: User needs to implement the suggested change in Vercel and redeploy.
- 🧠 Reflection: This interaction highlighted the importance of user-provided context, especially external platform settings not accessible to the agent. The default Vercel "Root Directory" setting was critical and, once understood, provided a clear path to resolution, validating the iterative questioning process.
