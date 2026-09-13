-- Lasting Memory — email signups table
-- Run this once in the Supabase SQL editor for project fwbadufcmwbqlesqgrzc
-- Dashboard: https://supabase.com/dashboard/project/fwbadufcmwbqlesqgrzc/sql/new

CREATE TABLE IF NOT EXISTS public.lastingmemory_signups (
  id          bigserial    PRIMARY KEY,
  email       text         NOT NULL UNIQUE,
  signed_up_at timestamptz NOT NULL DEFAULT now(),
  source      text         DEFAULT 'landing_v1',
  created_at  timestamptz  NOT NULL DEFAULT now()
);

-- Enable RLS (service role bypasses it, anon cannot read)
ALTER TABLE public.lastingmemory_signups ENABLE ROW LEVEL SECURITY;

-- No public read policy — only service role can query
-- (This protects the email list from public exposure)
