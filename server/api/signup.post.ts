import { createClient } from '@supabase/supabase-js'

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const body = await readBody<{ email?: string }>(event)

  const email = body?.email?.trim().toLowerCase()

  if (!email || !email.includes('@')) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Bad Request',
      message: 'Please enter a valid email address.',
    })
  }

  const supabase = createClient(
    config.public.supabaseUrl as string,
    config.supabaseServiceRoleKey as string,
  )

  // Treat a duplicate as success — no need to alarm the visitor
  const { data: existing } = await supabase
    .from('lastingmemory_signups')
    .select('id')
    .eq('email', email)
    .maybeSingle()

  if (existing) {
    return { success: true, duplicate: true }
  }

  const { error } = await supabase.from('lastingmemory_signups').insert({
    email,
    signed_up_at: new Date().toISOString(),
    source: 'landing_v1',
  })

  if (error) {
    console.error('Supabase insert error:', error)
    throw createError({
      statusCode: 500,
      statusMessage: 'Internal Server Error',
      message: 'Could not save your email. Please try again.',
    })
  }

  return { success: true }
})
