import React from 'react'

export default function DashboardPreview() {
  return (
    <section className="relative bg-[#0B0B0B] py-20 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(1,107,97,0.15),rgba(14,14,14,0))]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mx-auto w-full rounded-3xl border border-white/10 bg-gradient-to-b from-[#0F1312] to-[#0B0D0D] p-6 shadow-2xl">
          <div className="mb-4 flex items-center justify-between">
            <div className="text-sm text-white/60">Rizq Dashboard Preview</div>
            <div className="flex gap-2">
              <span className="h-2 w-2 rounded-full bg-[#E4B85A]" />
              <span className="h-2 w-2 rounded-full bg-[#016B61]" />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-[#0E0E0E]/60 p-4">
              <div className="text-xs text-white/60">Purity Score</div>
              <div className="mt-2 text-3xl font-bold text-[#E4B85A]">92</div>
              <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-white/10">
                <div className="h-2 w-[92%] bg-gradient-to-r from-[#E4B85A] to-[#016B61]" />
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-[#0E0E0E]/60 p-4">
              <div className="text-xs text-white/60">Opportunities</div>
              <ul className="mt-2 space-y-2 text-sm text-white/80">
                <li>Shariah-compliant ETF</li>
                <li>Remote halal consulting</li>
                <li>Ethical SaaS micro-service</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-white/10 bg-[#0E0E0E]/60 p-4">
              <div className="text-xs text-white/60">Zakat Tracker</div>
              <div className="mt-2 text-2xl font-semibold text-white">Next due: 20 Sha'ban</div>
              <div className="mt-3 text-sm text-white/70">Projected: <span className="text-[#E4B85A]">$540</span></div>
            </div>
          </div>
          <div className="pointer-events-none absolute -bottom-10 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-[#016B61]/30 blur-3xl" />
        </div>
      </div>
    </section>
  )
}
