<div align="center">

# 🌐 Dhaman Landing Page

### Public Product Landing Page — Structured Payment Protection for Freelance Work

[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-4-18181B?logo=shadcnui&logoColor=white)](https://ui.shadcn.com/)
[![GSAP](https://img.shields.io/badge/GSAP-3-88CE02?logo=greensock&logoColor=white)](https://gsap.com/)
[![Cloudflare](https://img.shields.io/badge/Cloudflare_Workers-F38020?logo=cloudflare&logoColor=white)](https://workers.cloudflare.com/)
[![Lucide](https://img.shields.io/badge/Lucide-Icons-FF6B6B?logo=lucide&logoColor=white)](https://lucide.dev/)
[![License](https://img.shields.io/badge/License-Private-red)]()

</div>

---

> **Core Principle:**
> Dhaman creates balanced financial protection between clients and freelancers: clients pay with confidence, and freelancers work with secured payment assurance.

---

## 📚 Table of Contents

- [🚧 Current Project Status](#-current-project-status)
- [🧾 Overview](#-overview)
- [🎯 Project Purpose](#-project-purpose)
- [💡 Product Concept](#-product-concept)
- [✨ Main Features](#-main-features)
- [🔁 System Flow](#-system-flow)
- [🧩 Landing Page Sections](#-landing-page-sections)
- [🛠️ Technology Stack](#-technology-stack)
- [📂 Project Structure](#-project-structure)
- [🔑 Key Files](#-key-files)
- [🔐 Environment Variables](#-environment-variables)
- [🚀 Getting Started](#-getting-started)
- [📜 Available Scripts](#-available-scripts)
- [🔌 API Integration](#-api-integration)
- [🧪 Current Functional Status](#-current-functional-status)
- [🚢 Deployment](#-deployment)
- [🗺️ Roadmap](#-roadmap)
- [🔗 Related Repositories](#-related-repositories)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)

---

## 🚧 Current Project Status

The Dhaman system is actively under development.

The primary and most important product flows are already implemented and ready, including:

- Freelancer login
- Access to the dashboard
- Creating new agreements
- Creating milestones
- Sending agreement invitations to clients
- Client access through secure invitation links
- Backend API routes for core system modules

Some secondary features may not be fully connected yet from the frontend because the integration between the frontend and backend is still in progress for all modules.

However, the backend API already exposes the full system capabilities through Swagger.

You can explore and test all available backend routes here:

**Swagger API Documentation:**
https://backend.dhaman.wasmsoft.com/docs

From Swagger, you can see all routes, modules, request bodies, responses, and test the available backend functionality directly.

---

## 🧾 Overview

**Dhaman Landing Page** is the public frontend entry point of the Dhaman platform.

It is designed to clearly communicate:

- The problem Dhaman solves
- The value proposition of the platform
- How Dhaman protects freelance payments
- How milestone-based payment agreements work
- How clients can track projects through a secure portal
- How AI can support dispute review when disagreement happens

The landing page is mainly focused on product presentation, storytelling, trust-building, and user onboarding.

It introduces visitors to the Dhaman ecosystem before they enter the dashboard or client portal.

---

## 🎯 Project Purpose

Freelance projects often suffer from trust and payment problems:

- Clients are afraid to pay before seeing the work.
- Freelancers are afraid to start work without payment security.
- Agreements are often handled through informal chats.
- Project scope is unclear.
- Payment release conditions are not documented.
- Disputes are difficult to evaluate fairly.

Dhaman solves this by creating a structured payment protection layer between freelancers and clients.

The landing page presents this idea in a simple and professional way, showing how the platform turns traditional freelance agreements into milestone-based contracts with protected payment logic and transparent progress tracking.

---

## 💡 Product Concept

Dhaman is a financial protection layer for freelance work.

The system helps freelancers and clients create clear agreements where every payment is connected to a milestone, acceptance criteria, delivery, review process, and timeline event.

The main product logic is:

```text
Agreement → Milestones → Protected Payments → Delivery → Review → Release or Hold
```

This gives both sides a safer and clearer way to manage freelance payments.

---

## ✨ Main Features

### Public Product Presentation

A clean landing page that explains the Dhaman vision, the freelance payment problem, and the platform solution.

### Clear Problem-Solution Structure

The page highlights the pain points in traditional freelance agreements and shows how Dhaman solves them using structured payment workflows.

### Milestone-Based Payment Explanation

Dhaman explains how large freelance projects can be divided into milestones, where each milestone has its own amount, scope, acceptance criteria, and review status.

### Protected Payment Flow

The landing page introduces the concept of protected demo payments, where payment status is linked to project progress and client approval.

### Client Portal Concept

Clients can access a secure portal through an invitation link without needing a full dashboard account in the MVP.

### AI-Powered Dispute Review

The platform introduces AI review as a support mechanism for analyzing disputes based on agreement scope, delivery evidence, and milestone conditions.

### Timeline-Based Transparency

Dhaman emphasizes the importance of tracking every important event, including agreement creation, invitation, approval, delivery, dispute, and payment release.

### Demo-Oriented Presentation

The page is designed to be suitable for hackathons, product demos, investor presentations, and early-stage product validation.

---

## 🔁 System Flow

The complete Dhaman MVP flow can be summarized as:

```text
1.  Freelancer creates an agreement
2.  Freelancer defines project milestones
3.  Client receives an invitation link
4.  Client reviews and approves the agreement
5.  Agreement becomes active
6.  Freelancer submits milestone delivery
7.  Client accepts, requests changes, or opens a dispute
8.  AI reviews the dispute based on agreement conditions
9.  Payment becomes ready to release, released, or placed on hold
10. All important actions are recorded in the project timeline
```

The landing page explains this flow visually and conceptually for users before they enter the actual dashboard.

---

## 🧩 Landing Page Sections

### Hero Section

A strong first impression with a clear headline, short value proposition, and call-to-action.

The hero communicates that Dhaman protects freelance payments by making agreements structured, trackable, and milestone-based.

### Problem Section

Explains the common issues in freelance work:

- Unclear agreements
- Delayed payments
- Scope creep
- Trust issues
- Informal communication
- No reliable proof during disputes

### Solution Section

Introduces Dhaman as a structured payment protection system for freelancers and clients.

### How It Works

A simple step-by-step explanation of the platform:

```text
Create Agreement → Track Milestones → Review Delivery → Release Payment Safely
```

### Key Features

Highlights the most important platform capabilities:

- Agreement builder
- Milestone payments
- Client portal
- Protected payment flow
- AI review
- Timeline evidence

### Demo Scenario

Shows a practical example of how Dhaman handles a real freelance payment conflict.

Example:

A freelancer delivers the first milestone of a landing page project.
The client requests additional pages outside the original milestone scope.
Dhaman uses the agreement conditions and AI review to determine whether the request is inside or outside the agreed scope.

### Call to Action

Encourages users to start using the platform or access the dashboard.

---

## 🛠️ Technology Stack

### Frontend

| Technology          | Purpose                                  |
| ------------------- | ---------------------------------------- |
| Next.js 16          | React framework with App Router          |
| React 19            | UI library                               |
| TypeScript          | Type-safe development                    |
| Tailwind CSS 4      | Utility-first CSS styling                |
| shadcn/ui           | Accessible component system              |
| Radix UI            | Headless UI primitives                   |
| Lucide React        | Icon library                             |
| GSAP                | Scroll animations and motion effects     |
| Lenis               | Smooth scroll library                    |

### Deployment & Hosting

| Technology          | Purpose                                  |
| ------------------- | ---------------------------------------- |
| Cloudflare Workers  | Edge deployment platform                 |
| OpenNext Cloudflare | Next.js adapter for Cloudflare           |
| Wrangler            | Cloudflare CLI for deployment            |

### Backend Integration

The landing page may connect to backend APIs for authentication redirects, dashboard links, or demo interactions depending on the current integration stage.

Main backend documentation is available through Swagger:

```text
https://backend.dhaman.wasmsoft.com/docs
```

---

## 📂 Project Structure

```text
dhaman_landing_page/
├── public/                  # Static assets such as images, icons, logos, and public files
├── src/                     # Main application source code
│   ├── app/                 # Next.js App Router pages, layouts, metadata, and route-level structure
│   ├── components/          # Reusable UI components and landing page sections
│   ├── constants/           # Shared constants, content data, routes, and static configuration
│   ├── lib/                 # Utility functions, helpers, formatters, and shared frontend logic
│   └── types/               # Shared TypeScript types and interfaces
├── .agents/                 # AI-agent skills or project automation instructions
├── .cursor/                 # Cursor editor configuration and project rules
├── .codex                   # Codex-related configuration or project notes
├── .nvmrc                   # Node.js version configuration for consistent local development
├── AGENTS.md                # Agent instructions or project collaboration notes
├── CLAUDE.md                # Claude-related project instructions or development notes
├── components.json          # Component/UI configuration, commonly used with shadcn/ui
├── eslint.config.mjs        # ESLint configuration for code quality and consistency
├── next.config.ts            # Next.js configuration
├── open-next.config.ts       # OpenNext configuration for deployment targets such as Cloudflare
├── opencode.json             # OpenCode configuration
├── package.json              # Dependencies, metadata, and available scripts
├── postcss.config.mjs        # PostCSS configuration, commonly used with Tailwind CSS
├── tsconfig.json             # TypeScript compiler configuration
└── wrangler.jsonc            # Cloudflare Workers/Pages deployment configuration
```

---

## 🔑 Key Files

| File                       | Purpose                                              |
| -------------------------- | ---------------------------------------------------- |
| `src/app/layout.tsx`       | Root layout with metadata and global structure        |
| `src/app/page.tsx`         | Landing page entry point                             |
| `src/components/`          | Reusable UI components and landing page sections     |
| `src/constants/`           | Static content, routes, and configuration data        |
| `src/lib/`                 | Utility functions, helpers, and shared logic          |
| `src/types/`               | TypeScript type definitions                           |
| `next.config.ts`           | Next.js configuration                                |
| `open-next.config.ts`      | OpenNext Cloudflare adapter configuration             |
| `wrangler.jsonc`            | Cloudflare Workers deployment configuration            |
| `components.json`           | shadcn/ui component configuration                     |

---

## 🔐 Environment Variables

Create a `.env.local` file in the root directory and configure the required environment variables.

```env
# Application
NEXT_PUBLIC_APP_URL="http://localhost:3000"

# Backend API
NEXT_PUBLIC_API_URL="https://backend.dhaman.wasmsoft.com"

# API Documentation
NEXT_PUBLIC_SWAGGER_URL="https://backend.dhaman.wasmsoft.com/docs"
```

> Depending on the current frontend integration, additional variables may be added later.

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

- **Node.js** 20+ (see `.nvmrc` for the recommended version)
- **npm**, yarn, pnpm, or bun
- **Git**

### Installation

Clone the repository:

```bash
git clone https://github.com/YOUR_USERNAME/dhaman_landing_page.git
```

Navigate into the project directory:

```bash
cd dhaman_landing_page
```

Install project dependencies:

```bash
npm install
```

Install animation and smooth scrolling dependencies:

```bash
npm install gsap @gsap/react lenis
```

Create your environment file:

```bash
cp .env.example .env.local
```

Run the development server:

```bash
npm run dev
```

Open the app in your browser:

```text
http://localhost:3000
```

---

## 📜 Available Scripts

| Command                | Description                                  |
| ---------------------- | -------------------------------------------- |
| `npm run dev`          | Start development server                      |
| `npm run next:build`   | Build Next.js only                            |
| `npm run build`        | Full build (Next.js + Cloudflare adapter)     |
| `npm run start`        | Start production server                      |
| `npm run lint`         | Run ESLint                                   |
| `npm run preview`      | Build and preview Cloudflare deployment locally |
| `npm run deploy`       | Build and deploy to Cloudflare Workers        |
| `npm run cf:deploy`    | Deploy to Cloudflare Workers                  |

---

## 🔌 API Integration

The landing page is part of a larger Dhaman system that includes:

- Freelancer dashboard
- Client portal
- NestJS backend
- PostgreSQL database
- AI review module
- Email invitation system

Some frontend-backend integrations may still be in progress.

To test the complete backend functionality, use the Swagger documentation:

```text
https://backend.dhaman.wasmsoft.com/docs
```

Swagger allows you to:

- View all available API routes
- Test authentication endpoints
- Create agreements and milestones
- Send client invitations
- Explore portal-related routes
- Test payment and delivery workflows
- Review backend request and response structures

---

## 🧪 Current Functional Status

### ✅ Ready

- Landing page UI
- Product explanation sections
- Dashboard access flow
- Freelancer login flow
- Agreement creation flow
- Milestone creation flow
- Client invite flow
- Backend Swagger documentation
- Core backend APIs

### 🔄 Partially Integrated

- Some secondary frontend actions
- Some dashboard-to-backend module integrations
- Some advanced workflow screens
- Some AI review and payment-related UI flows

### 📡 Testable Through Swagger

Even if a frontend screen is not fully connected yet, the backend route may already be available and testable through Swagger.

```text
https://backend.dhaman.wasmsoft.com/docs
```

---

## 🚢 Deployment

The project can be deployed to platforms such as:

- **Vercel**
- **Netlify**
- **Cloudflare Workers/Pages**
- **Render**
- Any Node.js-compatible hosting provider

### Production Build

```bash
npm run build
```

### Cloudflare Deployment

The project includes OpenNext Cloudflare adapter configuration for edge deployment:

```bash
npm run deploy
```

### Vercel Deployment

Connect the GitHub repository and configure the required environment variables in the Vercel dashboard.

---

## 🗺️ Roadmap

Planned improvements may include:

- Full frontend-backend integration for all modules
- Improved landing page animations
- More demo scenarios
- Public pricing or waitlist section
- Better mobile responsiveness
- Multi-language support
- More polished product visuals
- Live dashboard demo link
- Full integration with production backend APIs

---

## 🔗 Related Repositories

Dhaman is organized into multiple repositories:

| Repository              | Description                                              |
| ----------------------- | -------------------------------------------------------- |
| `dhaman_landing_page`  | Public product landing page                             |
| `dhaman_dashboard`     | Freelancer dashboard and client portal frontend          |
| `dhaman_backend`        | NestJS backend API with Prisma and PostgreSQL            |

---

## 🤝 Contributing

Contributions are welcome.

Recommended contribution areas:

- UI/UX improvements
- Landing page copywriting
- Responsive design enhancements
- Animation improvements
- Component refactoring
- Frontend-backend integration
- Accessibility improvements

### Contribution Flow

Create a new branch:

```bash
git checkout -b feature/your-feature-name
```

Commit your changes:

```bash
git commit -m "feat: add improved landing section"
```

Push your branch:

```bash
git push origin feature/your-feature-name
```

Then open a Pull Request.

---

## 📄 License

This project is part of the Dhaman MVP.

License details can be added based on the final project decision.

---

<div align="center">

**Dhaman Landing Page** — *A financial protection layer for freelance payments.*

</div>
