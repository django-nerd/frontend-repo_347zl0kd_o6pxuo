import React from 'react'

export default function Signup() {
  return (
    <section className="relative bg-[#0E0E0E] py-20 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(217,167,74,0.08),rgba(14,14,14,0))]" />
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <div className="mx-auto inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs text-white/70">Coming Soon</div>
        <h2 className="mt-4 text-3xl font-bold sm:text-4xl">Reserve Your Spot</h2>
        <p className="mx-auto mt-2 max-w-2xl text-white/70">Be first to access Rizq.AI and receive early guidance updates.</p>
        <form className="mx-auto mt-6 flex max-w-md items-center gap-2">
          <input type="email" required placeholder="Enter your email" className="flex-1 rounded-2xl border border-white/10 bg-[#0B0B0B]/70 px-4 py-3 text-sm text-white placeholder-white/40 outline-none focus:border-white/20"/>
          <button className="rounded-2xl bg-[#016B61] px-5 py-3 text-white shadow-[0_0_0_1px_rgba(1,107,97,0.3)_inset,0_12px_30px_-12px_rgba(1,107,97,0.5)]">Notify me</button>
        </form>
        <div className="mt-3 text-xs text-white/50">We respect your privacy. No spam.</div>
      </div>
    </section>
  )
}
