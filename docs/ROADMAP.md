# FudFinder - 16-Week Development Roadmap

> **Your Situation:** 3-4 hours/day, minimal coding experience, learning while building  
> **Goal:** Working MVP by end of Week 16  
> **Philosophy:** Every project builds toward FudFinder. No throwaway exercises.

---

## Overview

| Month | Focus | Outcome |
|-------|-------|---------|
| Month 1 | JavaScript → TypeScript foundations | CLI tools, data models, repo setup |
| Month 2 | React frontend | Working UI with dummy data, deployed |
| Month 3 | Backend + Database | Full working app (frontend ↔ backend) |
| Month 4 | AI + Polish | Smart analysis, production-ready launch |

---

## Month 1 – Foundations (JavaScript → TypeScript)

### Week 1 – JS Setup + Syntax

**🎯 Goal:** Install tools, learn JS basics (variables, loops, functions)

**Learn:**
- [ ] Watch: [JavaScript Crash Course – Traversy Media](https://www.youtube.com/watch?v=hdI2bqOjy3c)
- [ ] Write 3 mini-scripts practicing loops, functions, variables

**Build:**
- [ ] 🧩 **Tweet Text Analyzer CLI**
  - Paste tweet text into terminal
  - Script scans for FUD keywords (rug, scam, dump, hack, sell, dead, etc.)
  - Outputs: "Potential FUD: YES/NO" + which keywords triggered
  - This is ~20 lines of code. Keep it simple.

**Deliverable:** Working CLI script in `/cli/tweet-analyzer.js`

---

### Week 2 – Async JavaScript + APIs

**🎯 Goal:** Understand promises, async/await, fetching external data

**Learn:**
- [ ] Watch: [Async JS Playlist – Net Ninja](https://www.youtube.com/playlist?list=PL4cUxeGkcC9jx2TTZk3IGWKSbtugYdrlu)
- [ ] Practice fetching data from a public API

**Build:**
- [ ] 🧩 **Project Info Fetcher CLI**
  - Input a token name or ticker
  - Fetch price/market cap from CoinGecko API
  - Combine with Week 1: analyze tweet + show project context
  - Output: "FUD about $SOL (Price: $180, MC: $78B) - Potential FUD: YES"

**Deliverable:** Enhanced CLI that combines text analysis + live data

---

### Week 3 – TypeScript Basics

**🎯 Goal:** Switch to TypeScript, understand types and interfaces

**Learn:**
- [ ] Watch: [TypeScript Crash Course – Traversy Media](https://www.youtube.com/watch?v=BCg4U1FzODs)
- [ ] Convert your CLI scripts from JS to TS

**Build:**
- [ ] 🧩 **FudFinder Type Definitions**
  - Create `types.ts` with interfaces for:
    - `FudSubmission`
    - `User`
    - `Vote`
    - `Project`
  - These will be used throughout the entire app
  - See PROJECT_BRIEF.md for draft schemas

**Deliverable:** `/shared/types.ts` with all core data models

---

### Week 4 – Git + Project Setup

**🎯 Goal:** Configure TypeScript tooling, Git basics, repo structure

**Learn:**
- [ ] Watch: [Git & GitHub Crash Course – Traversy Media](https://www.youtube.com/watch?v=SWYqp7iY_Tc)
- [ ] Understand tsconfig.json and npm scripts

**Build:**
- [ ] 🧩 **FudFinder Monorepo**
  - Initialize Git repo
  - Push to GitHub
  - Set up folder structure (see below)
  - Write README.md explaining the project
  - Configure TypeScript for the project

**Deliverable:** Live GitHub repo at `github.com/klownthekol/fudfinder`

---

## Month 2 – React Frontend

### Week 5 – React Basics + Components

**🎯 Goal:** Understand JSX, props, component structure

**Learn:**
- [ ] Watch: [React Crash Course 2025 – Traversy Media](https://www.youtube.com/watch?v=LDB4uaJ87e0)
- [ ] Build simple components, understand props

**Build:**
- [ ] 🧩 **Static FUD Feed**
  - `<FudCard />` – single FUD post (tweet text, project, category, votes)
  - `<FudFeed />` – list of FudCards
  - `<ProjectBadge />` – shows ticker with color styling
  - `<Header />` – app header with logo/nav
  - Use hardcoded dummy data (create `mockData.ts`)

**Deliverable:** Visual feed displaying fake FUD posts

---

### Week 6 – React Hooks + State

**🎯 Goal:** useState, useEffect, managing interactive state

**Learn:**
- [ ] Watch: [React Hooks Intro – Web Dev Simplified](https://www.youtube.com/watch?v=f687hBjwFcM)
- [ ] Practice state management patterns

**Build:**
- [ ] 🧩 **Interactive Voting**
  - Add upvote/downvote buttons to FudCard
  - Track votes in local state
  - Calculate and display impact score
  - Visual feedback (button highlights, count updates)
  - Optimistic UI (updates immediately, no lag feel)

**Deliverable:** Clickable voting that updates in real-time (local state only)

---

### Week 7 – React Router + Filtering

**🎯 Goal:** Multi-page apps, URL routing, filtering data

**Learn:**
- [ ] Watch: [React Router v6 Tutorial](https://www.youtube.com/watch?v=59IXY5IDrBA)
- [ ] Implement basic routing patterns

**Build:**
- [ ] 🧩 **Multi-Page App**
  - `/` – Main feed (all FUD, sortable)
  - `/project/:ticker` – Filtered feed for one project
  - `/submit` – Submission form page (UI only)
  - `/leaderboard` – Top users by XP
  - `/user/:id` – User profile page
  - Add project search/filter dropdown

**Deliverable:** Navigable app with multiple pages

---

### Week 8 – Forms + Deployment

**🎯 Goal:** Form handling, validation, deploying to the internet

**Learn:**
- [ ] Watch: [React Forms Tutorial – Web Dev Simplified](https://www.youtube.com/watch?v=SdzMBWT2CDQ)
- [ ] Learn Vercel deployment

**Build:**
- [ ] 🧩 **Submission Form + Deploy**
  - Tweet URL input field
  - Project selector dropdown
  - Category selector
  - "Preview" before submit
  - Form validation (required fields, URL format)
  - Deploy to Vercel
  - **You now have a live URL to share!**

**Deliverable:** `fudfinder.vercel.app` (or similar) – live demo site

---

## Month 3 – Backend + Database

### Week 9 – Node.js + Express Setup

**🎯 Goal:** Create a backend server, basic API endpoints

**Learn:**
- [ ] Watch: [Node + TS Setup – Fireship](https://www.youtube.com/watch?v=G8uL0lFFoN0)
- [ ] Understand Express routing basics

**Build:**
- [ ] 🧩 **FudFinder API Skeleton**
  - `GET /health` – returns `{ status: "ok" }`
  - `GET /api/submissions` – returns dummy FUD data
  - `POST /api/submissions` – accepts submission, logs it
  - `GET /api/projects` – returns list of projects
  - Set up proper folder structure for API

**Deliverable:** Running local server responding to requests

---

### Week 10 – Full REST API

**🎯 Goal:** Complete CRUD operations, query parameters, proper REST design

**Learn:**
- [ ] Watch: [Express API in TS – Traversy Media](https://www.youtube.com/watch?v=vr0kqYw2d8Y)
- [ ] Understand REST conventions

**Build:**
- [ ] 🧩 **Complete API**
  - `GET /api/submissions` – list all, with filters (`?project=SOL&category=rug`)
  - `GET /api/submissions/:id` – single submission
  - `POST /api/submissions` – create new submission
  - `POST /api/submissions/:id/vote` – cast vote (up/down)
  - `GET /api/projects` – list projects
  - `GET /api/projects/:ticker` – single project with stats
  - `GET /api/leaderboard` – top users by XP
  - `GET /api/users/:id` – user profile

**Deliverable:** Fully functional API (still using in-memory data)

---

### Week 11 – Database Integration

**🎯 Goal:** Persist data to a real database

**Learn:**
- [ ] Watch: [MongoDB Crash Course](https://www.youtube.com/watch?v=ofme2o29ngU)
  - OR [Prisma + PostgreSQL](https://www.youtube.com/watch?v=RebA5J-rlwg) if you prefer SQL
- [ ] Set up MongoDB Atlas (free tier) or Supabase

**Build:**
- [ ] 🧩 **Persistent Storage**
  - Connect API to database
  - Store submissions, votes, users, projects
  - XP calculation triggered on vote events
  - **Connect React frontend to real API**
  - **Your app now actually works end-to-end!**

**Deliverable:** Full-stack app with real data persistence

---

### Week 12 – Authentication

**🎯 Goal:** User accounts, login, protected routes

**Learn:**
- [ ] Watch: [JWT Auth Tutorial](https://www.youtube.com/watch?v=mbsmsi7l3r4)
- [ ] Understand authentication patterns

**Build:**
- [ ] 🧩 **User System**
  - Registration/login endpoints
  - JWT token generation and validation
  - Protected routes (must be logged in to submit/vote)
  - User profiles with XP and tier
  - Rate limiting (max submissions/votes per day)
  - Basic middleware for spam prevention

**Deliverable:** Secure app with user accounts

---

## Month 4 – AI Integration + Launch

### Week 13 – Claude API Integration

**🎯 Goal:** Add AI-powered analysis to submissions

**Learn:**
- [ ] Read: [Anthropic API Docs](https://docs.anthropic.com/)
- [ ] Understand prompt engineering basics

**Build:**
- [ ] 🧩 **AI FUD Analyzer**
  - When user submits tweet URL, send text to Claude API
  - Extract: sentiment, FUD category, specific claims, severity (1-10)
  - Auto-populate submission fields with AI suggestions
  - User can adjust before final submit
  - Store AI analysis alongside submission

**Deliverable:** Smart submissions with AI categorization

---

### Week 14 – Duplicate Detection + Clustering

**🎯 Goal:** Group similar FUD, prevent duplicates

**Learn:**
- [ ] Research basic text similarity approaches
- [ ] Understand the concept of narrative clustering

**Build:**
- [ ] 🧩 **Smart Deduplication**
  - When new FUD submitted, check for similar existing posts
  - If duplicate: boost original, notify submitter
  - Show "X people flagged this narrative" count
  - Basic clustering: group submissions about same claim
  - Cluster view in UI

**Deliverable:** Intelligent duplicate handling

---

### Week 15 – Wallet + Twitter Auth

**🎯 Goal:** Implement the tiered access system

**Learn:**
- [ ] Research Solana wallet adapters
- [ ] Understand Twitter OAuth flow

**Build:**
- [ ] 🧩 **Real Authentication**
  - Wallet connection (Phantom, Solflare, etc.)
  - Twitter OAuth login
  - Tiered permissions:
    - No login: browse only
    - Wallet: can vote
    - Twitter: can submit + vote
  - Update UI to show login state and permissions

**Deliverable:** Production-ready auth system

---

### Week 16 – Polish + Launch

**🎯 Goal:** Production deployment, bug fixes, soft launch

**Build:**
- [ ] 🧩 **Launch Prep**
  - Deploy backend to Render/Railway
  - Environment variables properly configured
  - Error handling and logging
  - Mobile responsiveness pass
  - Landing page explaining the product
  - Basic analytics (submission counts, user counts)
  - Performance testing
  - Bug fixes from personal testing
  - **Soft launch to crypto Twitter**
  - **Get first 50 users!**

**Deliverable:** Live product with real users

---

## Folder Structure

```
fudfinder/
├── README.md
├── PROJECT_BRIEF.md
├── ROADMAP.md
│
├── cli/                    # Month 1 CLI tools
│   ├── tweet-analyzer.ts
│   └── project-fetcher.ts
│
├── shared/                 # Shared between frontend/backend
│   └── types.ts
│
├── web/                    # React frontend (Month 2)
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── hooks/
│   │   ├── utils/
│   │   ├── mockData.ts
│   │   └── App.tsx
│   ├── package.json
│   └── vite.config.ts
│
├── api/                    # Express backend (Month 3)
│   ├── src/
│   │   ├── routes/
│   │   ├── models/
│   │   ├── middleware/
│   │   ├── services/
│   │   └── index.ts
│   └── package.json
│
└── .gitignore
```

---

## Weekly Checklist Template

Use this for each week:

```markdown
## Week X - [Topic]

### Learning
- [ ] Watch: [Video Name](url)
- [ ] Read: [Resource](url)
- [ ] Practice: [Exercise]

### Building
- [ ] Feature 1
- [ ] Feature 2
- [ ] Feature 3

### Deliverable
- [ ] [Specific output]

### Notes
[What I learned, struggled with, want to revisit]
```

---

## Tips for Success

1. **Don't skip weeks.** Each builds on the last.

2. **Timebox learning.** Max 1 hour on tutorials, then start building. You learn by doing.

3. **Commit daily.** Even tiny progress. Green squares = momentum.

4. **Ask for help.** Come back to this conversation (or Claude Code) when stuck.

5. **Ship ugly.** Your Week 8 demo will be embarrassing. That's fine. Ship it anyway.

6. **Tell people.** Post your progress on Twitter. Accountability helps.

---

## After Week 16

If you've made it here, you'll have:
- A working product
- Real users
- Full-stack development skills
- A portfolio piece
- Momentum

Months 5-8 roadmap (Phase 2):
- Week 17-20: x402 payment integration
- Week 21-24: Project owner dashboard
- Week 25-28: Advanced analytics
- Week 29-32: Scaling and optimization

But don't think about that yet. Focus on Week 1.

---

*Start today. Build the Tweet Analyzer CLI. It's 20 lines of code.*
