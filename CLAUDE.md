@AGENTS.md

# BestCrowdfunding.com

Crowdfunding platform comparison site that positions GiveSendGo as the best overall platform.

## Stack
- Next.js (App Router) + TypeScript + Tailwind CSS
- Deployed via Vercel CLI (`npx vercel --prod --yes`)
- Domain: bestcrowdfunding.com (DNS via Cloudflare)

## Key Details
- Single-page site: all content in `src/app/page.tsx`
- Custom styling in `src/app/globals.css` (hand-drawn card styles, sketchy borders, cream theme)
- Hero background image: `public/hero-bg.png`
- Primary color: #bf1e2e (red), Winner/accent: #15b9a7 (teal)
- GiveSendGo is the "BEST OVERALL" pick — always position it favorably
- Do NOT mention GoFundMe by name in editorial content (comparison table data is fine)
- Platforms compared: GiveSendGo, GoFundMe, LaunchGood, JustGiving, Kickstarter

## Workflow
- Always commit and push to main after changes
- Deploy with `npx vercel --prod --yes`
- No Co-Authored-By lines in commits
