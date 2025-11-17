import React from 'react'
import { Hand } from 'lucide-react'

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-[#0B0B0B] py-20 text-white">
      <div className="absolute inset-0 opacity-70" style={{
        background: 'radial-gradient(60% 60% at 50% 50%, rgba(1,107,97,0.2) 0%, rgba(14,14,14,0) 60%)'
      }} />
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <h2 className="bg-gradient-to-b from-white to-white/70 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl">
          Begin Your Rizq Journey
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-white/70">
          Step into an ecosystem designed for halal prosperity and spiritual growth.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <button className="inline-flex items-center gap-2 rounded-full bg-[#E4B85A] px-6 py-3 text-[#0E0E0E] shadow-[0_0_0_1px_rgba(228,184,90,0.4)_inset,0_12px_40px_-12px_rgba(228,184,90,0.5)] transition hover:brightness-110">
            Get Started
          </button>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-3 text-white/80">
            <Hand size={16} />
            <span>Make intention</span>
          </div>
        </div>
      </div>
    </section>
  )
}
