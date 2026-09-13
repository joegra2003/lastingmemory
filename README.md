# Lasting Memory

> Preserve who you are, not just what you made.

An agentic life vault — an AI-guided platform that captures your stories, values, and wisdom, and shares them with the people you love.

## Tech Stack

- **Nuxt 4** (Vue 3, TypeScript)
- **Tailwind CSS** (`@nuxtjs/tailwindcss`)
- **Supabase** (email signups)
- **Vercel** (deployment)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
app/
  app.vue                  # Root — renders NuxtPage
  assets/css/main.css      # Tailwind + custom animations
  components/
    StarField.vue          # Animated canvas starfield
    EmailSignup.vue        # Email capture form
  pages/
    index.vue              # Landing page
server/
  api/signup.post.ts       # Email signup endpoint (service-role Supabase)
supabase/
  migrations/              # SQL migrations
```

## Environment Variables

Copy `.env.example` to `.env.local` and fill in the values:

```bash
cp .env.example .env.local
```

| Variable | Scope | Purpose |
|---|---|---|
| `NUXT_PUBLIC_SUPABASE_URL` | public | Supabase project URL |
| `NUXT_PUBLIC_SUPABASE_ANON_KEY` | public | Supabase publishable key |
| `SUPABASE_SERVICE_ROLE_KEY` | **server only** | Used by `/api/signup` to insert rows |

The service role key is exposed only through `runtimeConfig` (server-side), never to the client.

## Database Setup (One-Time)

Run [`supabase/migrations/001_email_signups.sql`](supabase/migrations/001_email_signups.sql) in the Supabase SQL editor:

```sql
CREATE TABLE IF NOT EXISTS public.lastingmemory_signups (
  id           bigserial   PRIMARY KEY,
  email        text        NOT NULL UNIQUE,
  signed_up_at timestamptz NOT NULL DEFAULT now(),
  source       text        DEFAULT 'landing_v1',
  created_at   timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE public.lastingmemory_signups ENABLE ROW LEVEL SECURITY;
```

RLS is enabled with no public policy, so the email list is only readable via the service role.

## Deployment

Deployed on Vercel with GitHub auto-deploy. Push to `main` to ship.

Environment variables are configured in the Vercel project settings.
