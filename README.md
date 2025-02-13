# Mini Job Board
A full-stack job board application built with Next.js 15, TypeScript, and Neon DB, featuring separate flows for candidates and companies to manage job postings and applications.

## 🚀 Features
### Candidate Flow
 - Browse job listings with advanced filtering options
- View detailed job information
- Apply to jobs with a streamlined application process
- Search jobs by keywords
- Filter by category, location, and salary range

### Company Flow
- Comprehensive job posting dashboard
- Create and manage job listings
- View and manage job applications

## 💻 Tech Stack
### Frontend:
- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- shadcn/ui components
- Server Actions for form handling

### Backend:
- Next.js Server Actions
- Neon DB (PostgreSQL)
- Vercel Serverless Functions

## 🏗️ Project Structure

```
├── app/
│   ├── candidate/
│   │   ├── jobs/
│   │   │   ├── [id]/
│   │   │   └── page.tsx
│   │   └── apply/
│   │       └── [jobId]/
│   └── company/
│       ├── jobs/
│       │   ├── [id]/
│       │   ├── new/
│       │   └── page.tsx
│       └── applications/
├── components/
├── lib/
├── types/
└── validations/
```
