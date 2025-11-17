import React from 'react'
import { Search, Sparkles, CheckCircle2 } from 'lucide-react'

const steps = [
  { title: 'Discover', desc: 'Tell us your skills and goals.', icon: Search },
  { title: 'Receive Guidance', desc: 'AI Quranic insights meet market data.', icon: Sparkles },
  { title: 'Act Ethically', desc: 'Follow vetted steps toward halal income.', icon: CheckCircle2 }
]

export default function Steps() {
  return (
    <section className="relative bg-[#0E0E0E] py-20 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(228,184,90,0.08),rgba(14,14,14,0))]" />
      <div className="relative mx-auto max-w-5xl px-6">
        <h2 className="text-center text-2xl font-semibold text-white sm:text-3xl">How It Works</h2>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {steps.map((s, i) => (
            <div key={i} className="relative rounded-2xl border border-white/10 bg-[#0B0B0B]/70 p-6 text-center">
              <div className="mx-auto mb-3 inline-flex rounded-full border border-[#E4B85A]/30 bg-[#E4B85A]/10 p-3 text-[#E4B85A]">
                <s.icon size={18} />
              </div>
              <h3 className="font-medium text-white">{s.title}</h3>
              <p className="mt-2 text-sm text-white/70">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
