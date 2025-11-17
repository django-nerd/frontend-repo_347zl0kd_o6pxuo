import React from 'react'

export default function CoreValue() {
  return (
    <section className="relative bg-[#0E0E0E] py-20 text-white">
      <div className="absolute inset-0" style={{
        background: 'radial-gradient(40% 50% at 50% 50%, rgba(1,107,97,0.15), rgba(14,14,14,0))'
      }} />
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <div className="mx-auto inline-flex rounded-full border border-[#E4B85A]/20 bg-[#E4B85A]/5 px-4 py-1 text-xs text-[#E4B85A]/80">
          Quranic Principle
        </div>
        <blockquote className="mt-6 text-2xl font-semibold leading-relaxed text-white sm:text-3xl">
          “And whoever relies upon Allah – then He is sufficient for him.”
        </blockquote>
        <p className="mt-2 text-sm text-white/60">(At-Talaq 65:3)</p>
        <div className="mx-auto mt-8 h-px w-24 bg-gradient-to-r from-transparent via-[#E4B85A] to-transparent opacity-70" />
      </div>
    </section>
  )
}
