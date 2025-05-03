# Next.js Project Starter

## Overview

This project is a starter template for [Next.js](https://nextjs.org/), a React framework. It's initialized using [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) for quick setup.

The project includes pre-configured settings for [Tailwind CSS](https://tailwindcss.com/) and utilizes the [Shadcn UI](https://ui.shadcn.com/) theme along with [Lucide icons](https://lucide.dev/).

## Getting Started

To begin, follow these steps:

**1. Clone the Repository:**

```bash
git clone <repository-url>
cd nextjs-project-starter
```

**2. Install Dependencies:**

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

**3. Run the Development Server:**

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

**4. View the Application:**

Open your browser and navigate to `http://localhost:3000` to see the application in action.

## Project Structure

```lua
.project-root
├── .github
│   └── workflows
│       └── ci.yml
├── .husky
├── .vscode
├── node_modules
├── public
│   └── favicon.ico
├── src
│   ├── app
│   │   ├── globals.css
│   │   ├── layout.jsx
│   │   └── page.jsx
│   ├── components
│   │   ├── Layout
│   │   │   ├── Footer.jsx
│   │   │   └── Navbar.jsx
│   │   └── Screen
│   │       └── .gitkeep
│   ├── lib
│   │   ├── api.js
│   │   └── utils.js
│   └── utils
│       ├── dateUtils.js
│       ├── numberUtils.js
│       └── stringUtils.js
├── .eslintrc.json
├── .eslintignore
├── .gitignore
├── .huskyrc
├── .lintstagedrc
├── .prettierrc
├── components.json
├── jsconfig.json
├── next.config.js
├── package-lock.json
├── package.json
└── postcss.config.js
```

**GitHub Actions:**

- `.github/workflows/ci.yml` for CI/CD pipeline setup.
  **Husky Integration:**
- `.husky` for managing pre-commit hooks.

**Next.js App Directory:**

- `src/app` for global CSS, layout, and routing.
- Modularized components under `src/components`.

**Reusable Utilities:**

- `src/utils` for helper functions (e.g., dateUtils.js, stringUtils.js).

**API Layer:**

- `src/lib/api.js` for centralizing API calls.

**Configuration Files:**

- `.eslintrc.json`, `.prettierrc`, and `.lintstagedrc` for maintaining code quality.
- `next.config.js` for Next.js-specific configuration.

**Styling:**

- `postcss.config.js` for PostCSS setup, which often works with Tailwind CSS.
