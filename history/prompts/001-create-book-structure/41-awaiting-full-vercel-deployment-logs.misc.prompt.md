---
id: 41
title: Awaiting Full Vercel Deployment Logs
stage: misc
date: 2025-12-07
surface: agent
model: gemini-1.5-pro
feature: "001-create-book-structure"
branch: main
user: "perfect solution"
command: "Running build in Washington, D.C., USA (East) – iad1
Build machine configuration: 2 cores, 8 GB
Cloning github.com/12SubhaAhmed/hackathon-2025 (Branch: main, Commit: ee336ba)
Cloning completed: 422.000ms
Restored build cache from previous deployment (4wmJZYyPg55RHgWigaRC28ZX7K1a)
Running \"vercel build\"
Vercel CLI 49.0.0
WARN! Due to `builds` existing in your configuration file, the Build and Development Settings defined in your Project Settings will not apply. Learn More: https://vercel.link/unused-build-settings
Warning: Detected `engines`: { `node`: `>=20.0` } in your `package.json` that will automatically upgrade when a new major Node.js Version is released. Learn More: http://vercel.link/node-version
Installing dependencies...
up to date in 2s"
labels: ["vercel", "docusaurus", "deployment", "debugging", "logs-needed"]
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

Running build in Washington, D.C., USA (East) – iad1
Build machine configuration: 2 cores, 8 GB
Cloning github.com/12SubhaAhmed/hackathon-2025 (Branch: main, Commit: ee336ba)
Cloning completed: 422.000ms
Restored build cache from previous deployment (4wmJZYyPg55RHgWigaRC28ZX7K1a)
Running "vercel build"
Vercel CLI 49.0.0
WARN! Due to `builds` existing in your configuration file, the Build and Development Settings defined in your Project Settings will not apply. Learn More: https://vercel.link/unused-build-settings
Warning: Detected "engines": { "node": ">=20.0" } in your `package.json` that will automatically upgrade when a new major Node.js Version is released. Learn More: http://vercel.link/node-version
Installing dependencies...
up to date in 2s

## Response snapshot

Okay, **this is the crucial information I've been waiting for!** Thank you for providing the Vercel deployment logs.

Let's analyze the provided logs:

```
Running build in Washington, D.C., USA (East) – iad1
Build machine configuration: 2 cores, 8 GB
Cloning github.com/12SubhaAhmed/hackathon-2025 (Branch: main, Commit: ee336ba)
Cloning completed: 422.000ms
Restored build cache from previous deployment (4wmJZYyPg55RHgWigaRC28ZX7K1a)
Running "vercel build"
Vercel CLI 49.0.0
WARN! Due to `builds` existing in your configuration file, the Build and Development Settings defined in your Project Settings will not apply. Learn More: https://vercel.link/unused-build-settings
Warning: Detected "engines": { "node": ">=20.0" } in your `package.json` that will automatically upgrade when a new major Node.js Version is released. Learn More: http://vercel.link/node-version
Installing dependencies...
up to date in 2s
```

Here's what I gather:

*   **Deployment Started:** The deployment process has started successfully.
*   **Repo Cloned:** Your GitHub repository was cloned.
*   **Build Cache Restored:** This indicates Vercel is using its cache, which is good for speed.
*   **`WARN! Due to `builds` existing in your configuration file, the Build and Development Settings defined in your Project Settings will not apply.`**: This warning is expected and confirms that our `vercel.json` file is being used to define the build process, overriding any settings in the Vercel UI. This is exactly what we want.
*   **`Warning: Detected 