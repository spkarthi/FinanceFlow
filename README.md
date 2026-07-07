# FinanceFlow

A personal finance management dashboard built with React, Vite, and Tailwind CSS.

## Getting Started

### Prerequisites
- Node.js (v16+)
- npm or yarn

### Installation

```bash
npm install
npm run dev
```

Visit `http://localhost:5174` in your browser.

## Development Workflow

### Branch Naming Convention

All feature branches follow the pattern: `feat/TASK-XXX-description`

Examples:
- `feat/task-001-scaffold-project`
- `feat/task-002-design-tokens-base-styles`
- `feat/task-003-git-github-setup`

### Creating a Pull Request

1. Create a branch following the naming convention
2. Make your changes
3. Push to your branch
4. Open a PR against `main`
5. Ensure main branch protection rules pass
6. Request review and merge

## Tech Stack

- **Framework**: React 19 + Vite 8
- **Styling**: Tailwind CSS 4 with custom color tokens
- **Typography**: Inter (Google Fonts)
- **Build Tool**: Vite with @tailwindcss/vite plugin

## Project Structure

```
src/
├── components/     # Reusable UI components
├── pages/          # Page components
├── hooks/          # Custom React hooks
├── layouts/        # Layout components
├── data/           # Data files and constants
└── assets/         # Images and static files
```

## Design System

The project uses a custom Tailwind CSS design system with four main color palettes:
- **Primary** (Purple): Main brand color
- **Income** (Green): Positive transactions
- **Expense** (Red): Negative transactions
- **Neutral** (Grey): UI backgrounds and text

See `tailwind.config.js` for the complete color definitions.
