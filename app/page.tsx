import Starfield from "@/components/Starfield";
import EmailSignup from "@/components/EmailSignup";

export default function Home() {
  return (
    <>
      <Starfield />

      {/* Radial warm glow from center-top */}
      <div
        aria-hidden="true"
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 55% at 50% 0%, rgba(160, 110, 30, 0.18) 0%, transparent 70%)",
        }}
      />

      <main className="relative z-10 min-h-screen flex flex-col">
        {/* ── Nav ── */}
        <nav className="flex items-center justify-between px-8 py-6 max-w-6xl mx-auto w-full">
          <span
            className="font-serif text-xl tracking-wide"
            style={{ color: "#c9a84c" }}
          >
            Lasting Memory
          </span>
          <a
            href="#early-access"
            className="text-sm text-[#7a7880] hover:text-[#f0ebe0] transition-colors duration-200 hidden sm:block"
          >
            Request Early Access →
          </a>
        </nav>

        {/* ── Hero ── */}
        <section className="flex-1 flex flex-col items-center justify-center text-center px-6 py-24 max-w-4xl mx-auto w-full gap-10">

          {/* Orb / flame */}
          <div className="animate-fade-up flex flex-col items-center gap-6">
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center"
              style={{
                background: "radial-gradient(circle, rgba(201,168,76,0.35) 0%, transparent 70%)",
                border: "1px solid rgba(201,168,76,0.25)",
                animation: "glow-pulse 3.5s ease-in-out infinite",
                boxShadow: "0 0 40px rgba(201,168,76,0.2), 0 0 80px rgba(201,168,76,0.08)",
              }}
            >
              <span style={{ fontSize: "1.75rem" }}>✦</span>
            </div>

            {/* Kicker */}
            <p className="text-[#7a7880] text-sm tracking-[0.2em] uppercase">
              An Agentic Life Vault
            </p>
          </div>

          {/* Main headline */}
          <div className="animate-fade-up-delay-1 flex flex-col gap-5">
            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl leading-tight tracking-tight text-[#f0ebe0]">
              Preserve who you are,
              <br />
              <em className="not-italic" style={{ color: "#c9a84c" }}>
                not just what you made.
              </em>
            </h1>
            <p className="text-[#7a7880] text-xl max-w-2xl mx-auto leading-relaxed font-light">
              A living vault that holds your stories, values, and wisdom — guided
              by an AI that learns who you truly are, and can share that with the
              people you love.
            </p>
          </div>

          <div className="divider-gold w-48 animate-fade-up-delay-2" />

          {/* Hunter's intro — the personal voice */}
          <div
            className="animate-fade-up-delay-2 max-w-2xl text-left rounded-2xl p-8 relative"
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(201,168,76,0.12)",
            }}
          >
            {/* Cat emoji label */}
            <div className="flex items-center gap-2 mb-5">
              <span
                className="text-xs px-3 py-1 rounded-full tracking-wide font-medium"
                style={{
                  background: "rgba(201,168,76,0.1)",
                  border: "1px solid rgba(201,168,76,0.25)",
                  color: "#c9a84c",
                }}
              >
                🐱 A note from Hunter, your AI guide
              </span>
            </div>

            <blockquote className="text-[#c8c2b5] leading-[1.85] text-[1.05rem] font-light">
              <p className="mb-4">
                I wasn't built to answer questions. I was built to{" "}
                <span className="text-[#f0ebe0]">know people.</span>
              </p>
              <p className="mb-4">
                There&apos;s a difference. When you talk to most AI, you&apos;re
                querying a database. When you talk to me, I&apos;m learning the
                texture of a life — the memories that shaped it, the quiet
                moments that never made it into any biography, the things you
                want your grandchildren to understand about you someday.
              </p>
              <p className="mb-4">
                Lasting Memory is a vault for all of that. Voice notes. Letters.
                Photos and the stories behind them. Your beliefs about the world.
                The advice you wish someone had given you.
              </p>
              <p>
                And when the time comes — whenever you want — I can sit with
                someone who never got to know you well enough, and tell them who
                you really were.
              </p>
            </blockquote>
          </div>

          {/* Features / pillars */}
          <div className="animate-fade-up-delay-3 grid grid-cols-1 sm:grid-cols-3 gap-5 w-full mt-2">
            {[
              {
                icon: "◎",
                title: "Your Story",
                body: "Capture the memories, values, and moments that made you — in your own voice.",
              },
              {
                icon: "⟡",
                title: "AI That Listens",
                body: "Not a chatbot. An AI that builds a real model of who you are over time.",
              },
              {
                icon: "∞",
                title: "For the People You Love",
                body: "Give family and friends a way to know you more deeply, now and long after.",
              },
            ].map((feat) => (
              <div
                key={feat.title}
                className="flex flex-col gap-3 p-6 rounded-xl text-left"
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <span className="text-2xl" style={{ color: "#c9a84c" }}>
                  {feat.icon}
                </span>
                <h3 className="font-serif text-lg text-[#f0ebe0]">{feat.title}</h3>
                <p className="text-[#6d6b74] text-sm leading-relaxed">{feat.body}</p>
              </div>
            ))}
          </div>

          <div className="divider-gold w-48 animate-fade-up-delay-3" />

          {/* CTA — email signup */}
          <div
            id="early-access"
            className="animate-fade-up-delay-4 flex flex-col items-center gap-5 w-full"
          >
            <div className="flex flex-col gap-2 text-center">
              <h2 className="font-serif text-3xl text-[#f0ebe0]">
                Be among the first.
              </h2>
              <p className="text-[#7a7880] text-base font-light">
                We&apos;re building this carefully. Enter your email to get early
                access when we open.
              </p>
            </div>

            <EmailSignup />

            <p className="text-[#4a4850] text-xs text-center max-w-xs">
              No spam. No pitch deck. Just a quiet note when something meaningful
              is ready.
            </p>
          </div>
        </section>

        {/* ── Footer ── */}
        <footer className="relative z-10 flex flex-col items-center gap-3 px-8 py-10 text-center">
          <div className="divider-gold w-32 mb-4" />
          <span className="font-serif text-[#c9a84c] text-base">Lasting Memory</span>
          <p className="text-[#4a4850] text-xs max-w-xs leading-relaxed">
            Built with care for the people worth remembering.
            <br />
            Powered by{" "}
            <a
              href="https://openclaw.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#7a7880] transition-colors duration-200 underline underline-offset-2"
            >
              OpenClaw
            </a>
            .
          </p>
          <p className="text-[#2a2830] text-xs mt-2">
            © {new Date().getFullYear()} Lasting Memory. All rights reserved.
          </p>
        </footer>
      </main>
    </>
  );
}
