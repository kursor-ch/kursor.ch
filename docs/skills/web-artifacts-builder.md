# Web Artifacts Builder Skill

For building complex, multi-component frontend apps with React, Tailwind CSS, and shadcn/ui.

---

## Overview

Build powerful frontend artifacts by following these steps:

1. Initialize the frontend repo
2. Develop your artifact by editing the generated code
3. Bundle all code into a single HTML file
4. Display artifact to user
5. (Optional) Test the artifact

**Stack**: React 18 + TypeScript + Vite + Parcel (bundling) + Tailwind CSS + shadcn/ui

### Design & Style Guidelines

**VERY IMPORTANT**: To avoid what is often referred to as "AI slop", avoid using excessive centered layouts, purple gradients, uniform rounded corners, and Inter font.

---

## Quick Start

### Step 1: Initialize Project

Create a new React project with the following structure:

```bash
npx create-vite <project-name> --template react-ts
cd <project-name>
npm install
```

Then add Tailwind CSS and shadcn/ui:

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
npm install @radix-ui/react-* class-variance-authority clsx tailwind-merge lucide-react
```

This gives you:

- React + TypeScript (via Vite)
- Tailwind CSS 3.4.1 with shadcn/ui theming system
- Path aliases (`@/`) configured
- shadcn/ui components
- All Radix UI dependencies included
- Parcel configured for bundling

### Step 2: Develop Your Artifact

Build the artifact by editing the generated files. Key patterns:

#### Component structure

```tsx
// src/components/ui/button.tsx
import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        outline: "border border-input bg-background hover:bg-accent",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)
```

#### State management

```tsx
import { useState, useReducer } from 'react'

// For complex state, use useReducer
type State = { step: number; data: Record<string, any> }
type Action =
  | { type: 'NEXT_STEP' }
  | { type: 'SET_DATA'; payload: Record<string, any> }

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'NEXT_STEP': return { ...state, step: state.step + 1 }
    case 'SET_DATA': return { ...state, data: { ...state.data, ...action.payload } }
    default: return state
  }
}
```

### Step 3: Bundle to Single HTML File

To bundle the React app into a single HTML artifact:

```bash
npm install -D parcel @parcel/config-default parcel-resolver-tspaths html-inline

# Create .parcelrc
echo '{
  "extends": "@parcel/config-default",
  "resolvers": ["parcel-resolver-tspaths", "..."]
}' > .parcelrc

# Build
npx parcel build index.html --no-source-maps

# Inline all assets
npx html-inline -i dist/index.html -o bundle.html -b dist
```

This creates `bundle.html` — a self-contained artifact with all JavaScript, CSS, and dependencies inlined.

**What the bundling does:**

- Installs bundling dependencies (parcel, @parcel/config-default, parcel-resolver-tspaths, html-inline)
- Creates `.parcelrc` config with path alias support
- Builds with Parcel (no source maps)
- Inlines all assets into single HTML using html-inline

### Step 4: Share Artifact with User

Share the bundled HTML file so they can view it as an artifact.

### Step 5: Testing (Optional)

Test/visualize the artifact using available tools (Playwright, Puppeteer, etc.). In general, avoid testing upfront as it adds latency. Test later if requested or if issues arise.

---

## Reference

- [shadcn/ui components](https://ui.shadcn.com/docs/components)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Radix UI](https://www.radix-ui.com/docs/primitives)
- [Lucide icons](https://lucide.dev/icons)
