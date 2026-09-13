"use client";

import { useState, FormEvent } from "react";

export default function EmailSignup() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("success");
        setMessage("You're on the list. We'll be in touch.");
        setEmail("");
      } else {
        setStatus("error");
        setMessage(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setMessage("Network error. Please try again.");
    }
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-2 animate-fade-up">
        <div className="text-[#c9a84c] text-2xl">✦</div>
        <p className="text-[#f0ebe0] font-medium text-lg">{message}</p>
        <p className="text-[#7a7880] text-sm">
          Something meaningful is being built. Thank you for being part of it.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row gap-3 w-full max-w-md"
      aria-label="Early access signup"
    >
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="your@email.com"
        required
        disabled={status === "loading"}
        className="
          flex-1 px-5 py-3 rounded-lg
          bg-white/5 border border-white/10
          text-[#f0ebe0] placeholder-[#4a4850]
          text-base transition-all duration-200
          hover:border-[rgba(201,168,76,0.3)]
          disabled:opacity-50
        "
      />
      <button
        type="submit"
        disabled={status === "loading" || !email.trim()}
        className="
          px-6 py-3 rounded-lg font-medium text-base
          bg-[#c9a84c] text-[#09090f]
          hover:bg-[#d4ba6a] active:bg-[#b8933c]
          transition-all duration-200
          disabled:opacity-50 disabled:cursor-not-allowed
          whitespace-nowrap
          shadow-[0_0_24px_rgba(201,168,76,0.25)]
          hover:shadow-[0_0_32px_rgba(201,168,76,0.4)]
        "
      >
        {status === "loading" ? "Saving..." : "Get Early Access"}
      </button>
      {status === "error" && (
        <p className="text-red-400 text-sm mt-1 sm:col-span-2">{message}</p>
      )}
    </form>
  );
}
