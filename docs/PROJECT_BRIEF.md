# FudFinder - Project Brief

> **Last Updated:** December 2024  
> **Status:** Pre-development  
> **This is a living document.** Update it as your thinking evolves.

---

## The Problem

FUD (Fear, Uncertainty, Doubt) is everywhere in crypto. A single tweet can tank a project's price, trigger panic selling, and kill communities—even when the accusations are completely baseless.

Crypto holders have no good way to:
- Filter signal from noise in the flood of negative content
- Know if FUD is legitimate concern or manufactured drama
- See what the community consensus is on specific accusations
- Make calm, informed decisions instead of emotional reactions

Projects have no good way to:
- See what concerns are actually affecting holder sentiment
- Address FUD in a centralized, visible way
- Build trust through transparency

---

## The Solution

**FudFinder** is a community-powered platform that curates, analyzes, and filters crypto FUD.

Users submit FUD they encounter → AI categorizes it → Community votes on impact → Cream rises, bullshit sinks.

The result: a real-time "bullshit filter" where the crowd's collective wisdom helps everyone make better decisions.

---

## Core User Loop

```
1. User spots FUD tweet about a project
           ↓
2. Submits it to FudFinder (Twitter login required)
           ↓
3. AI analyzes: sentiment, category, specific claims, severity
           ↓
4. Appears in feed for that project
           ↓
5. Community votes: "Impactful" or "Not Impactful"
           ↓
6. High-impact FUD surfaces to the top
   Low-impact FUD sinks
           ↓
7. Users browsing can see consensus at a glance
           ↓
8. (Phase 2) Project owners respond to top concerns
```

---

## Target Users

### Primary: Crypto Holders (Phase 1)
Anyone holding tokens who wants to:
- Stop panic-selling based on rumors
- Understand if concerns about their holdings are legitimate
- See community consensus before making decisions

### Secondary: Project Owners (Phase 2)
Teams who want to:
- Monitor sentiment about their project
- Address high-impact concerns publicly
- Build trust through transparency

### Tertiary: Researchers & Traders (Future)
People who want to:
- Track FUD patterns across the market
- Identify which projects are under attack
- Use sentiment data for analysis

---

## Scope

### Initial Launch
- **Solana ecosystem** projects (tokens, NFTs, DeFi protocols, memecoins)
- Web app only

### Future Expansion
- Chain-agnostic (ETH, BTC, Base, etc.)
- Mobile apps
- API for developers

---

## Access Tiers

| Level | Requirements | Permissions |
|-------|--------------|-------------|
| **Visitor** | None | Browse feed, view votes, search projects |
| **Voter** | Connect wallet | Everything above + upvote/downvote |
| **Submitter** | Connect Twitter | Everything above + submit FUD posts |

### Rationale
- No login to browse = low friction for curious visitors
- Wallet to vote = proves real person, some skin in game
- Twitter to submit = ties submissions to public identity, discourages spam

---

## Feature Set

### Core Features (MVP - Phase 1)

#### FUD Feed
- Chronological and "hot" sorting options
- Filter by project/ticker
- Filter by FUD category
- Search functionality

#### Submission Flow
- Paste tweet URL
- AI extracts: text, author, timestamp
- AI analyzes: sentiment, category, claims, severity
- User confirms/adjusts before submitting
- Duplicate detection (clusters similar narratives)

#### Voting System
- Upvote = "This FUD is impactful/legitimate"
- Downvote = "This FUD is noise/baseless"
- Impact score = upvotes - downvotes
- Vote counts visible to all

#### Project Pages
- Dedicated page per project/ticker
- All FUD for that project in one place
- Aggregate stats (total FUD, avg impact, trends)

#### User Profiles
- XP total and tier
- Submission history
- Voting accuracy score
- Join date

#### Leaderboard
- Public ranking by XP
- Top submitters
- Top accurate voters
- Time filters (daily, weekly, all-time)

### Gamification System (MVP - Phase 1)

#### XP Earning

| Action | XP | Notes |
|--------|-----|-------|
| Submit FUD (approved) | 10 | Base reward |
| Submission gets 50+ votes | 25 | Bonus for engagement |
| Submission addressed by project | 100 | Phase 2 |
| Early submission (first to flag narrative) | 50 | Speed bonus |
| Consistent daily activity | 15/day | Retention |
| Accurate sentiment prediction | 5 | Matched community consensus |

#### Tiers (Names TBD)

| Tier | XP Required | Perks |
|------|-------------|-------|
| Scout | 0 | Base access |
| Analyst | 500 | Priority queue for submissions |
| Sentinel | 2,000 | Moderation abilities, badge |
| Oracle | 10,000 | Weighted votes, potential revenue share |

*Note: Tier names and thresholds are placeholders. Revisit after launch.*

### Spam Prevention (MVP - Phase 1)

Since launching free (no x402 payments initially):

- **Rate limiting**: Max 5 submissions/day, max 20 votes/day per user
- **XP decay**: Consistently downvoted submissions = XP loss
- **Tiered access**: Wallet to vote, Twitter to submit
- **Delayed XP** (optional): XP "pending" for 24h, only confirmed with engagement

### Phase 2 Features (Post-Launch)

#### Project Owner Dashboard
- Verified project owner accounts
- Dashboard showing FUD about their project
- "Respond" feature to address specific FUD
- Responses appear on public feed
- Notification system for high-impact FUD
- Paid subscription model

#### Payment Integration (x402)
- Micropayments to vote (spam prevention at scale)
- Small fee generates revenue
- Consider: pay to boost submissions?

#### Advanced Analytics
- FUD pattern recognition across projects
- "FUD merchant" tracking (accounts that consistently post baseless FUD)
- Credibility scores for Twitter accounts
- Historical trends and charts
- Project health scores

### Future Ideas (Backlog)

- Mobile apps
- Browser extension (flag FUD while browsing Twitter)
- API for developers
- Token/governance system
- Integration with trading platforms
- Email/push notifications
- "FUD alerts" for watchlisted projects

---

## Technical Decisions

### Stack (Planned)

**Frontend:**
- React + TypeScript
- Vite for build tooling
- Tailwind CSS for styling
- React Router for navigation

**Backend:**
- Node.js + Express + TypeScript
- MongoDB (or PostgreSQL via Supabase)
- JWT for authentication

**AI:**
- Claude API for sentiment analysis and categorization

**Infrastructure:**
- Vercel (frontend)
- Render or Railway (backend)
- MongoDB Atlas or Supabase (database)

**Auth:**
- Wallet connection (Solana wallets)
- Twitter OAuth
- (Optional) Email/password

### Data Models (Draft)

```typescript
interface FudSubmission {
  id: string;
  tweetUrl: string;
  tweetText: string;
  tweetAuthor: string;
  tweetTimestamp: Date;
  projectTicker: string;
  projectName: string;
  submittedBy: string; // user ID
  
  // AI-generated
  sentiment: 'fud' | 'bullish' | 'neutral';
  fudCategory: 'rug_accusation' | 'team_dump' | 'security' | 'competition' | 'legal' | 'other';
  claimsExtracted: string[];
  severityScore: number; // 1-10
  
  // Community
  upvotes: number;
  downvotes: number;
  impactScore: number; // upvotes - downvotes
  
  // Meta
  createdAt: Date;
  updatedAt: Date;
  narrativeClusterId?: string; // links similar FUD
}

interface User {
  id: string;
  username: string;
  walletAddress?: string;
  twitterHandle?: string;
  
  // Gamification
  xp: number;
  tier: 'scout' | 'analyst' | 'sentinel' | 'oracle';
  
  // Stats
  totalSubmissions: number;
  totalVotes: number;
  accuracyScore: number; // % of votes matching final consensus
  
  // Meta
  createdAt: Date;
  lastActiveAt: Date;
}

interface Vote {
  id: string;
  oderId: string;
  submissionId: string;
  voteType: 'up' | 'down';
  createdAt: Date;
}

interface Project {
  id: string;
  ticker: string;
  name: string;
  chain: 'solana' | 'ethereum' | 'bitcoin' | 'other';
  category: 'token' | 'nft' | 'defi' | 'memecoin' | 'other';
  
  // Stats (computed)
  totalFudPosts: number;
  avgImpactScore: number;
  
  // Phase 2
  ownerId?: string;
  verified: boolean;
}
```

---

## Brand & Voice

### Positioning
"The bullshit filter for crypto"

### Tone
- **Playful but credible** - We don't take ourselves too seriously, but the product is serious
- **Self-aware** - We know crypto is wild, we're here to help navigate it
- **Community-first** - This is built for holders, by holders
- **Degen-friendly, normie-accessible** - Insiders get the jokes, newcomers aren't confused

### Brand Inspiration
- FeetFinder energy (the name joke works in crypto context)
- Meme-aware but not meme-dependent
- Clean UI, playful copy

### Name
**FudFinder** - Simple, memorable, does what it says

---

## Open Questions

Things to decide as you build:

- [ ] Exact XP amounts and tier thresholds - test and adjust
- [ ] Tier names - Scout/Analyst/Sentinel/Oracle or something else?
- [ ] How to handle FUD about projects not yet in the database?
- [ ] Moderation: How do Sentinels moderate? What can they remove?
- [ ] What happens when a submission is flagged as spam/abuse?
- [ ] Should there be a "report" function separate from downvoting?
- [ ] How to verify project owners in Phase 2?
- [ ] Token economics if pursuing that path?
- [ ] What does "accuracy score" actually measure? Final consensus after 7 days?

---

## Success Metrics

### Phase 1 (Launch)
- 100 users signed up
- 500 FUD submissions
- 5,000 votes cast
- 20 projects with active FUD tracking

### Phase 2 (Growth)
- 1,000 daily active users
- 5 project owners subscribed
- Revenue covering infrastructure costs

### Long-term
- Become the default place to check FUD legitimacy
- "Just check FudFinder" becomes a common response on CT

---

## Changelog

| Date | Change |
|------|--------|
| Dec 2024 | Initial brief created |

---

*This document will evolve. Update it whenever you make a decision or change direction.*
