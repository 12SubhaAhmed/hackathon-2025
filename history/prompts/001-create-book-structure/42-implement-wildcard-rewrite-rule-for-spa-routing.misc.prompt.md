---
id: 42
title: Implement Wildcard Rewrite Rule for SPA Routing
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
Warning: Detected \"engines\": { \"node\": \">=20.0\" } in your `package.json` that will automatically upgrade when a new major Node.js Version is released. Learn More: http://vercel.link/node-version
Installing dependencies...
up to date in 2s
406 packages are looking for funding
  run `npm fund` for details
Running \"npm run build\"remaining logs: 
[INFO] [en] Creating an optimized production build...
[info] [webpackbar] Compiling Client
[info] [webpackbar] Compiling Server
[success] [webpackbar] Server: Compiled successfully in 1.50s
[success] [webpackbar] Client: Compiled successfully in 1.57s
[SUCCESS] Generated static files in \"build\".
[INFO] Use `npm run serve` command to test your build locally.
Build Completed in /vercel/output [7s]
Deploying outputs...
Deployment completed
Creating build cache...
Created build cache: 16.032s
Uploading build cache [51.37 MB]
Build cache uploaded: 1.084s"
labels: ["vercel", "docusaurus", "deployment", "debugging", "rewrite", "spa"]
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
406 packages are looking for funding
  run `npm fund` for details
Running "npm run build"remaining logs:
[INFO] [en] Creating an optimized production build...
[info] [webpackbar] Compiling Client
[info] [webpackbar] Compiling Server
[success] [webpackbar] Server: Compiled successfully in 1.50s
[success] [webpackbar] Client: Compiled successfully in 1.57s
[SUCCESS] Generated static files in "build".
[INFO] Use `npm run serve` command to test your build locally.
Build Completed in /vercel/output [7s]
Deploying outputs...
Deployment completed
Creating build cache...
Created build cache: 16.032s
Uploading build cache [51.37 MB]
Build cache uploaded: 1.084s

## Response snapshot

I have successfully pushed the updated `vercel.json` file to your "hackathon-2025" repository on GitHub. This change implements a wildcard rewrite rule to correctly handle Docusaurus's SPA routing. 

Now, please redeploy your project on Vercel. With this change, combined with the other fixes (correct `distDir`, `client-redirects` disabled), your Docusaurus site *should* now load correctly at the root.

Please let me know the outcome after this deployment. I am optimistic this will resolve the "Page Not Found" issue.

## Outcome

- ✅ Impact: Analyzed the complete Vercel deployment logs, confirming a successful Docusaurus build. Identified that the "Page Not Found" error likely stemmed from improper routing for client-side rendered applications. Implemented a wildcard rewrite rule (`/(.*)` to `/index.html`) in `vercel.json` to ensure all requests are handled by the Docusaurus SPA. The change was committed and pushed to the GitHub repository.
- 🧪 Tests: No tests were run.
- 📁 Files: `vercel.json`
- 🔁 Next prompts: User needs to redeploy on Vercel and report the outcome.
- 🧠 Reflection: The complete Vercel logs were instrumental in confirming the successful build and narrowing down the problem to routing. The wildcard rewrite is a standard solution for SPA deployment on platforms like Vercel. This iterative process of diagnosis and targeted fixes is crucial for complex deployment issues.
