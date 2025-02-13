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

## 🛠️ Installation

Clone the repository:
```
git clone https://github.com/Chakravarthy-E/mini-job-board.git
cd mini-job-board
```
### Install dependencies:
```
npm install
```
### Set up environment variables:
```
.env.example .env.local
```
### Configure your environment variables:
```
NEON_DATABASE_URL=your_neon_db_url
```

### Run database migrations:
```
npm run db:migrate
```
### Start the development server:
```
npm run dev
```

## 📝 Database Schema
Jobs Table
```
model Job {
  id          String   @id @default(uuid())
  title       String
  description String
  category    String
  location    String
  salaryRange String
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt

  applications Application[] @relation("JobApplications")
}
```

Applications Table
```
model Application {
  id          String   @id @default(uuid())
  jobId       String
  name        String
  email       String
  resumeLink  String
  coverLetter String?
  submittedAt DateTime @default(now())

  Job Job @relation(fields: [jobId], references: [id], name: "JobApplications")

  @@unique([email, jobId])
}
```

## 🌐 API Routes (Server Actions)

- POST /api/jobs - Create new job posting
- GET /api/jobs - Fetch all job posts
- GET /api/jobs/:id - Fetch specific job details
- POST /api/applications/:id - Submit job application
- GET /api/applications/:id - Get Application for Job



## 💡 Local Development
To run the project locally:
### Install dependencies
```
npm install
```
### Run development server
```
npm run dev
```


