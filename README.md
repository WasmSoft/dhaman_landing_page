## Dhaman Landing Page

A professional public-facing landing page for **Dhaman**, a fintech MVP designed to protect freelance payments through structured agreements, milestone-based payment contracts, protected payment flows, client tracking portals, and AI-powered dispute review.

Dhaman helps freelancers and clients move from informal agreements and payment uncertainty into a clear, transparent, and trackable payment protection experience.

> **Core idea:**  
> The client does not pay without protection, and the freelancer does not work without protection.

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

## 📚 Table of Contents

- [Overview](#overview)
- [Project Purpose](#project-purpose)
- [Product Concept](#product-concept)
- [Main Features](#main-features)
- [System Flow](#system-flow)
- [Landing Page Sections](#landing-page-sections)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Available Scripts](#available-scripts)
- [API Integration](#api-integration)
- [Deployment](#deployment)
- [Roadmap](#roadmap)
- [Related Repositories](#related-repositories)
- [Contributing](#contributing)
- [License](#license)

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

Dhaman is not a marketplace.

It is a financial protection layer for freelance work.

The system helps freelancers and clients create clear agreements where every payment is connected to a milestone, acceptance criteria, delivery, review process, and timeline event.

The main product logic is:

```text
Agreement → Milestones → Protected Payments → Delivery → Review → Release or Hold
````

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
1. Freelancer creates an agreement
2. Freelancer defines project milestones
3. Client receives an invitation link
4. Client reviews and approves the agreement
5. Agreement becomes active
6. Freelancer submits milestone delivery
7. Client accepts, requests changes, or opens a dispute
8. AI reviews the dispute based on agreement conditions
9. Payment becomes ready to release, released, or placed on hold
10. All important actions are recorded in the project timeline
```

The landing page explains this flow visually and conceptually for users before they enter the actual dashboard.

---

## 🧩 Landing Page Sections

The landing page is designed around the following product sections:

### Hero Section

A strong first impression with a clear headline, short value proposition, and call-to-action.

The hero communicates that Dhaman protects freelance payments by making agreements structured, trackable, and milestone-based.

### Problem Section

Explains the common issues in freelance work:

* Unclear agreements
* Delayed payments
* Scope creep
* Trust issues
* Informal communication
* No reliable proof during disputes

### Solution Section

Introduces Dhaman as a structured payment protection system for freelancers and clients.

### How It Works

A simple step-by-step explanation of the platform:

```text
Create Agreement → Track Milestones → Review Delivery → Release Payment Safely
```

### Key Features

Highlights the most important platform capabilities:

* Agreement builder
* Milestone payments
* Client portal
* Protected payment flow
* AI review
* Timeline evidence

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

This repository is focused on the landing page frontend.

### Frontend

* Next.js
* React
* TypeScript
* Tailwind CSS

### UI / UX

* Responsive layout
* Modern landing page design
* Smooth animations
* Clean product storytelling
* Conversion-focused sections

### Backend Integration

The landing page may connect to backend APIs for authentication redirects, dashboard links, or demo interactions depending on the current integration stage.

Main backend documentation is available through Swagger:

```text
https://backend.dhaman.wasmsoft.com/docs
```

---

## 📂 Project Structure

The project structure follows a typical Next.js application format:

```text
dhaman_landing_page/
├── public/                 # Static assets and images
├── src/
│   ├── app/                # Next.js App Router pages
│   ├── components/         # Reusable UI components
│   ├── sections/           # Landing page sections
│   ├── lib/                # Utility functions and constants
│   ├── styles/             # Global styles if used
│   └── types/              # Shared TypeScript types if needed
├── .env.example            # Example environment variables
├── next.config.ts          # Next.js configuration
├── package.json            # Project dependencies and scripts
├── tailwind.config.ts      # Tailwind CSS configuration
└── tsconfig.json           # TypeScript configuration
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

* Node.js 18+
* npm, yarn, pnpm, or bun
* Git

---

### Installation

Clone the repository:

```bash
git clone https://github.com/YOUR_USERNAME/dhaman_landing_page.git
```

Navigate into the project directory:

```bash
cd dhaman_landing_page
```

Install dependencies:

```bash
npm install
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

## 🔐 Environment Variables

Create a `.env.local` file in the root directory and configure the required environment variables.

Example:

```env
NEXT_PUBLIC_APP_URL="http://localhost:3000"
NEXT_PUBLIC_API_URL="https://backend.dhaman.wasmsoft.com"
NEXT_PUBLIC_SWAGGER_URL="https://backend.dhaman.wasmsoft.com/docs"
```

Depending on the current frontend integration, additional variables may be added later.

---

## 📜 Available Scripts

### Start Development Server

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

### Start Production Server

```bash
npm run start
```

### Run Linting

```bash
npm run lint
```

---

## 🔌 API Integration

The landing page is part of a larger Dhaman system that includes:

* Freelancer dashboard
* Client portal
* NestJS backend
* PostgreSQL database
* AI review module
* Email invitation system

Some frontend-backend integrations may still be in progress.

To test the complete backend functionality, use the Swagger documentation:

```text
https://backend.dhaman.wasmsoft.com/docs
```

Swagger allows you to:

* View all available API routes
* Test authentication endpoints
* Create agreements
* Create milestones
* Send client invitations
* Explore portal-related routes
* Test payment and delivery workflows
* Review backend request and response structures

---

## 🧪 Current Functional Status

### Ready

* Landing page UI
* Product explanation sections
* Dashboard access flow
* Freelancer login flow
* Agreement creation flow
* Milestone creation flow
* Client invite flow
* Backend Swagger documentation
* Core backend APIs

### Partially Integrated

* Some secondary frontend actions
* Some dashboard-to-backend module integrations
* Some advanced workflow screens
* Some AI review and payment-related UI flows

### Testable Through Swagger

Even if a frontend screen is not fully connected yet, the backend route may already be available and testable through Swagger.

Use:

```text
https://backend.dhaman.wasmsoft.com/docs
```

---

## 🚢 Deployment

The project can be deployed to platforms such as:

* Vercel
* Netlify
* Render
* Any Node.js-compatible hosting provider

### Production Build

```bash
npm run build
```

### Production Start

```bash
npm run start
```

For Vercel deployment, connect the GitHub repository and configure the required environment variables in the Vercel dashboard.

---

## 🗺️ Roadmap

Planned improvements may include:

* Full frontend-backend integration for all modules
* Improved landing page animations
* More demo scenarios
* Public pricing or waitlist section
* Better mobile responsiveness
* Multi-language support
* More polished product visuals
* Live dashboard demo link
* Full integration with production backend APIs

---

## 🔗 Related Repositories

Dhaman is organized into multiple repositories:

```text
dhaman_landing_page   # Public product landing page
dhaman_dashboard      # Freelancer dashboard and client portal frontend
dhaman_backend        # NestJS backend API with Prisma and PostgreSQL
```

---

## 🤝 Contributing

Contributions are welcome.

Recommended contribution areas:

* UI/UX improvements
* Landing page copywriting
* Responsive design enhancements
* Animation improvements
* Component refactoring
* Frontend-backend integration
* Accessibility improvements

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

## 👥 Team Note

Dhaman is being developed as an MVP to demonstrate a focused fintech concept:

```text
A financial protection layer for freelance payments.
```

The goal of this landing page is to communicate the product clearly, build trust, and guide users toward the dashboard and client portal experience.

```
```
