<script setup lang="ts">
const year = new Date().getFullYear()

const pillars = [
  {
    icon: '◎',
    title: 'Your Story',
    body: 'Capture the memories, values, and moments that made you — in your own voice.',
  },
  {
    icon: '✦',
    title: 'AI That Listens',
    body: 'Not a chatbot. An AI that builds a real model of who you are over time.',
  },
  {
    icon: '∞',
    title: 'For the People You Love',
    body: 'Give family and friends a way to know you more deeply, now and long after.',
  },
]
</script>

<template>
  <div>
    <StarField />

    <!-- Warm radial glow from the top -->
    <div
      aria-hidden="true"
      class="fixed inset-0 z-0 pointer-events-none"
      style="background: radial-gradient(ellipse 70% 55% at 50% 0%, rgba(160,110,30,0.18) 0%, transparent 70%)"
    />

    <main class="relative z-10 min-h-screen flex flex-col">
      <!-- Nav -->
      <nav class="flex items-center justify-between px-8 py-6 max-w-6xl mx-auto w-full">
        <span class="font-serif text-xl tracking-wide text-gold">Lasting Memory</span>
        <a
          href="#early-access"
          class="text-sm text-muted hover:text-parchment transition-colors duration-200 hidden sm:block"
        >
          Request Early Access →
        </a>
      </nav>

      <!-- Hero -->
      <section
        class="flex-1 flex flex-col items-center justify-center text-center px-6 py-24 max-w-4xl mx-auto w-full gap-10"
      >
        <!-- Orb -->
        <div class="animate-fade-up flex flex-col items-center gap-6">
          <div
            class="w-16 h-16 rounded-full flex items-center justify-center border border-gold/25"
            style="
              background: radial-gradient(circle, rgba(201,168,76,0.35) 0%, transparent 70%);
              animation: glow-pulse 3.5s ease-in-out infinite;
              box-shadow: 0 0 40px rgba(201,168,76,0.2), 0 0 80px rgba(201,168,76,0.08);
            "
          >
            <span class="text-[1.75rem]">✦</span>
          </div>

          <p class="text-muted text-sm tracking-[0.2em] uppercase">
            An Agentic Life Vault
          </p>
        </div>

        <!-- Headline -->
        <div class="animate-fade-up-delay-1 flex flex-col gap-5">
          <h1 class="font-serif text-5xl sm:text-6xl md:text-7xl leading-tight tracking-tight text-parchment">
            Preserve who you are,<br>
            <span class="text-gold">not just what you made.</span>
          </h1>
          <p class="text-muted text-xl max-w-2xl mx-auto leading-relaxed font-light">
            A living vault that holds your stories, values, and wisdom — guided by
            an AI that learns who you truly are, and can share that with the
            people you love.
          </p>
        </div>

        <div class="divider-gold w-48 animate-fade-up-delay-2" />

        <!-- Hunter's note -->
        <div
          class="animate-fade-up-delay-2 max-w-2xl text-left rounded-2xl p-8 bg-white/[0.03] border border-gold/[0.12]"
        >
          <div class="mb-5">
            <span
              class="text-xs px-3 py-1 rounded-full tracking-wide font-medium
                     bg-gold/10 border border-gold/25 text-gold"
            >
              🐱 A note from Hunter, your AI guide
            </span>
          </div>

          <blockquote class="text-[#c8c2b5] leading-[1.85] text-[1.05rem] font-light space-y-4">
            <p>
              I wasn't built to answer questions. I was built to
              <span class="text-parchment">know people.</span>
            </p>
            <p>
              There's a difference. When you talk to most AI, you're querying a
              database. When you talk to me, I'm learning the texture of a life —
              the memories that shaped it, the quiet moments that never made it
              into any biography, the things you want your grandchildren to
              understand about you someday.
            </p>
            <p>
              Lasting Memory is a vault for all of that. Voice notes. Letters.
              Photos and the stories behind them. Your beliefs about the world.
              The advice you wish someone had given you.
            </p>
            <p>
              And when the time comes — whenever you want — I can sit with someone
              who never got to know you well enough, and tell them who you really
              were.
            </p>
          </blockquote>
        </div>

        <!-- Pillars -->
        <div class="animate-fade-up-delay-3 grid grid-cols-1 sm:grid-cols-3 gap-5 w-full mt-2">
          <div
            v-for="p in pillars"
            :key="p.title"
            class="flex flex-col gap-3 p-6 rounded-xl text-left bg-white/[0.02] border border-white/[0.06]"
          >
            <span class="text-2xl text-gold">{{ p.icon }}</span>
            <h3 class="font-serif text-lg text-parchment">{{ p.title }}</h3>
            <p class="text-[#6d6b74] text-sm leading-relaxed">{{ p.body }}</p>
          </div>
        </div>

        <div class="divider-gold w-48 animate-fade-up-delay-3" />

        <!-- CTA -->
        <div
          id="early-access"
          class="animate-fade-up-delay-4 flex flex-col items-center gap-5 w-full scroll-mt-24"
        >
          <div class="flex flex-col gap-2 text-center">
            <h2 class="font-serif text-3xl text-parchment">Be among the first.</h2>
            <p class="text-muted text-base font-light">
              We're building this carefully. Enter your email to get early access
              when we open.
            </p>
          </div>

          <EmailSignup />

          <p class="text-[#4a4850] text-xs text-center max-w-xs">
            No spam. No pitch deck. Just a quiet note when something meaningful is
            ready.
          </p>
        </div>
      </section>

      <!-- Footer -->
      <footer class="relative z-10 flex flex-col items-center gap-3 px-8 py-10 text-center">
        <div class="divider-gold w-32 mb-4" />
        <span class="font-serif text-gold text-base">Lasting Memory</span>
        <p class="text-[#4a4850] text-xs max-w-xs leading-relaxed">
          Built with care for the people worth remembering.<br>
          Powered by
          <a
            href="https://openclaw.ai"
            target="_blank"
            rel="noopener noreferrer"
            class="hover:text-muted transition-colors duration-200 underline underline-offset-2"
          >OpenClaw</a>.
        </p>
        <p class="text-[#2a2830] text-xs mt-2">
          © {{ year }} Lasting Memory. All rights reserved.
        </p>
      </footer>
    </main>
  </div>
</template>
