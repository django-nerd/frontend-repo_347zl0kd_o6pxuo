import React from 'react'
import { Briefcase, BookOpen, PieChart, HeartHandshake } from 'lucide-react'

const features = [
  {
    title: 'Halal job & income insights',
    icon: Briefcase,
    desc: 'Curated, shariah-compliant roles, side-hustles, and vetted opportunities.'
  },
  {
    title: 'AI Quranic recommendations',
    icon: BookOpen,
    desc: 'Context-aware guidance rooted in Qur’an and authentic principles.'
  },
  {
    title: 'Ethical finance dashboard',
    icon: PieChart,
    desc: 'Track purity scores, screen holdings, and optimize for barakah.'
  },
  {
    title: 'Sadaqah & Zakat automations',
    icon: HeartHandshake,
    desc: 'Automate giving with transparent impact and trusted recipients.'
  }
]

export default function Features() {
  return (
    <section className="relative w-full bg-[#0B0B0B] py-20 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_50%_at_50%_0%,rgba(228,184,90,0.08),rgba(14,14,14,0))]" />
      <div className="relative mx-auto grid max-w-6xl grid-cols-1 gap-6 px-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f, i) => (
          <div key={i} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#0E0E0E]/60 p-6 backdrop-blur transition">
            <div className="mb-4 inline-flex rounded-lg border border-[#E4B85A]/30 bg-[#E4B85A]/10 p-2 text-[#E4B85A]">
              <f.icon size={18} />
            </div>
            <h3 className="text-lg font-semibold text-white">{f.title}</h3>
            <p className="mt-2 text-sm text-white/70">{f.desc}</p>
            <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-[#016B61]/30 blur-2xl opacity-40" />
          </div>
        ))}
      </div>
    </section>
  )
}
