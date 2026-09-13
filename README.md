# Lasting Memory

> Preserve who you are, not just what you made.

An agentic life vault — an AI-guided platform that captures your stories, values, and wisdom, and shares them with the people you love.

## Tech Stack

- **Next.js 16** (App Router, TypeScript)
- **Tailwind CSS**
- **Supabase** (email signups)
- **Vercel** (deployment)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

Copy `.env.example` to `.env.local` and fill in the values:

```bash
cp .env.example .env.local
```

Required variables:
- `NEXT_PUBLIC_SUPABASE_URL` — your Supabase project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` — Supabase publishable key
- `SUPABASE_SERVICE_ROLE_KEY` — Supabase service role key (server-side only)

## Database Setup (One-Time)

Run this SQL in the [Supabase SQL editor](https://supabase.com/dashboard/project/fwbadufcmwbqlesqgrzc/sql/new):

```sql
-- See supabase/migrations/001_email_signups.sql
CREATE TABLE IF NOT EXISTS public.lastingmemory_signups (
  id          bigserial    PRIMARY KEY,
  email       text         NOT NULL UNIQUE,
  signed_up_at timestamptz NOT NULL DEFAULT now(),
  source      text         DEFAULT 'landing_v1',
  created_at  timestamptz  NOT NULL DEFAULT now()
);

ALTER TABLE public.lastingmemory_signups ENABLE ROW LEVEL SECURITY;
```

## Deployment

Deployed on Vercel. Push to `main` to deploy.

Set the environment variables in Vercel project settings (they're already in `.env.local` — just add them to the Vercel dashboard).
