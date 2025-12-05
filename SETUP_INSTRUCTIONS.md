# FudFinder - Setup Instructions

## Step 1: Create the Project Locally

Open VS Code, open the terminal (`` Ctrl+` ``), and run:

```bash
# Create the project folder (if you want it somewhere specific)
mkdir -p ~/projects/fudfinder
cd ~/projects/fudfinder

# Or just navigate to wherever you want the project
```

## Step 2: Copy the Files

You have two options:

### Option A: Clone from GitHub (after you create the repo)

1. Go to https://github.com/new
2. Create a new repo called `fudfinder`
3. Make it **public** (good for portfolio)
4. **Don't** initialize with README (we have our own)
5. Click "Create repository"
6. Then clone it:

```bash
git clone https://github.com/klownthekol/fudfinder.git
cd fudfinder
```

Then copy the PROJECT_BRIEF.md, ROADMAP.md, README.md, and .gitignore files into this folder.

### Option B: Initialize Git locally first (recommended)

```bash
# Navigate to your project folder
cd ~/projects/fudfinder

# Copy in your files (PROJECT_BRIEF.md, ROADMAP.md, README.md, .gitignore)
# You can create them manually or download from the conversation

# Initialize Git
git init

# Add all files
git add .

# First commit
git commit -m "Initial commit: project brief and roadmap"

# Create the repo on GitHub, then connect:
git remote add origin https://github.com/klownthekol/fudfinder.git
git branch -M main
git push -u origin main
```

## Step 3: Create the Folder Structure

```bash
# Create all the folders
mkdir -p cli shared web api

# Create placeholder files so Git tracks empty folders
touch cli/.gitkeep
touch shared/.gitkeep
touch web/.gitkeep
touch api/.gitkeep

# Commit the structure
git add .
git commit -m "Add folder structure"
git push
```

## Step 4: Verify Your Setup

Your folder should look like this:

```
fudfinder/
├── .git/
├── .gitignore
├── README.md
├── PROJECT_BRIEF.md
├── ROADMAP.md
├── cli/
│   └── .gitkeep
├── shared/
│   └── .gitkeep
├── web/
│   └── .gitkeep
└── api/
    └── .gitkeep
```

## Step 5: Start Week 1

Now you're ready to build the Tweet Analyzer CLI!

```bash
cd cli

# Initialize a Node project
npm init -y

# Your first file
touch tweet-analyzer.js
```

Open `tweet-analyzer.js` and start coding.

---

## Quick Git Reference

Commands you'll use constantly:

```bash
# Check what's changed
git status

# Stage changes
git add .                    # Stage everything
git add filename.js          # Stage one file

# Commit
git commit -m "Description of what you did"

# Push to GitHub
git push

# Pull latest (if you work from multiple computers)
git pull
```

## Getting Help

- **Stuck on code?** Ask in Claude Code (VS Code extension)
- **Git issues?** Google the error message - every Git problem has been solved before
- **Motivation drop?** Re-read PROJECT_BRIEF.md to remember why you're building this

---

*You've got this. Start building.*
