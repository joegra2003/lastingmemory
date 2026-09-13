<script setup lang="ts">
type Status = 'idle' | 'loading' | 'success' | 'error'

const email = ref('')
const status = ref<Status>('idle')
const message = ref('')

async function handleSubmit() {
  if (!email.value.trim()) return

  status.value = 'loading'
  message.value = ''

  try {
    await $fetch('/api/signup', {
      method: 'POST',
      body: { email: email.value },
    })

    status.value = 'success'
    message.value = "You're on the list. We'll be in touch."
    email.value = ''
  } catch (err: any) {
    status.value = 'error'

    // Nuxt masks 5xx messages in production (they'd surface as "Server Error"),
    // so only trust a server-provided message for client-side (4xx) validation.
    const statusCode = err?.statusCode ?? err?.response?.status
    const serverMessage = err?.data?.message

    message.value =
      statusCode && statusCode >= 400 && statusCode < 500 && serverMessage
        ? serverMessage
        : "We couldn't save your email just then. Please try again in a moment."
  }
}
</script>

<template>
  <div class="w-full flex flex-col items-center gap-3">
    <!-- Success state -->
    <div
      v-if="status === 'success'"
      class="flex flex-col items-center gap-2 animate-fade-up text-center"
    >
      <div class="text-gold text-2xl">✦</div>
      <p class="text-parchment font-medium text-lg">{{ message }}</p>
      <p class="text-muted text-sm">
        Something meaningful is being built. Thank you for being part of it.
      </p>
    </div>

    <!-- Form -->
    <form
      v-else
      class="flex flex-col sm:flex-row gap-3 w-full max-w-md"
      aria-label="Early access signup"
      @submit.prevent="handleSubmit"
    >
      <input
        v-model="email"
        type="email"
        placeholder="your@email.com"
        required
        :disabled="status === 'loading'"
        class="flex-1 px-5 py-3 rounded-lg bg-white/5 border border-white/10
               text-parchment placeholder-[#4a4850] text-base
               transition-all duration-200 hover:border-gold/30
               disabled:opacity-50"
      >
      <button
        type="submit"
        :disabled="status === 'loading' || !email.trim()"
        class="px-6 py-3 rounded-lg font-medium text-base whitespace-nowrap
               bg-gold text-deep hover:bg-gold-bright active:bg-gold-muted
               transition-all duration-200
               disabled:opacity-50 disabled:cursor-not-allowed
               shadow-[0_0_24px_rgba(201,168,76,0.25)]
               hover:shadow-[0_0_32px_rgba(201,168,76,0.4)]"
      >
        {{ status === 'loading' ? 'Saving…' : 'Get Early Access' }}
      </button>
    </form>

    <p v-if="status === 'error'" class="text-red-400 text-sm">
      {{ message }}
    </p>
  </div>
</template>
