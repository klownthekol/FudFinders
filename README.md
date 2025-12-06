# FudFinder 🔍

> The bullshit filter for crypto

FudFinder is a community-powered platform that curates, analyzes, and filters crypto FUD (Fear, Uncertainty, Doubt).

Users submit FUD they encounter → AI categorizes it → Community votes on impact → Cream rises, bullshit sinks.

## Status

🚧 **Pre-development** - Currently building foundations

## The Problem

A single tweet can tank a project's price, trigger panic selling, and kill communities—even when the accusations are completely baseless. Crypto holders have no good way to filter signal from noise.

## The Solution

FudFinder lets the crowd act as a collective "bullshit filter":

- **Submit** FUD tweets you encounter
- **AI analyzes** sentiment, category, and claims
- **Community votes** on whether it's impactful or noise
- **See consensus** before making emotional decisions

## Tech Stack

- **Frontend:** React + TypeScript + Vite
- **Backend:** Node.js + Express + TypeScript
- **Database:** MongoDB / Supabase
- **AI:** Claude API
- **Auth:** Wallet (Solana) + Twitter OAuth

## Project Structure

```
fudfinder/
├── cli/        # CLI tools (development utilities)
├── shared/     # Shared types and utilities
├── web/        # React frontend
└── api/        # Express backend
```

## Development

Coming soon.

## Author

Built by [@klownthekol](https://github.com/klownthekol)

## License

MIT
