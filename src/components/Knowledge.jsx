import React, { useState } from 'react'

const tabs = [
  { key: 'quran', label: 'Quranic Library' },
  { key: 'hadith', label: 'Hadith Advice' },
  { key: 'fiqh', label: 'Fiqh Categories' },
  { key: 'ai', label: 'AI Recommendations' },
]

export default function Knowledge() {
  const [active, setActive] = useState('quran')

  return (
    <section className="relative bg-[#0B0B0B] py-20 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_60%_at_50%_0%,rgba(217,167,74,0.08),rgba(0,0,0,0))]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <h2 className="text-center text-3xl font-bold sm:text-4xl">Knowledge Center</h2>
        <p className="mx-auto mt-2 max-w-2xl text-center text-white/70">Explore sources and structured guidance powering Rizq.AI.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          {tabs.map(t => (
            <button key={t.key} onClick={() => setActive(t.key)} className={`rounded-full px-4 py-2 text-sm transition ${active === t.key ? 'bg-[#016B61] text-white' : 'bg-white/5 text-white/70 hover:bg-white/10'} border border-white/10`}>{t.label}</button>
          ))}
        </div>

        <div className="mt-8 rounded-3xl border border-white/10 bg-gradient-to-b from-[#0F1312] to-[#0B0D0D] p-6">
          {active === 'quran' && (
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {[1,2,3,4,5,6].map(i => (
                <div key={i} className="rounded-2xl border border-white/10 bg-[#0E0E0E]/60 p-4">
                  <div className="text-xs text-white/60">Surah {i}</div>
                  <div className="mt-1 text-white/80">Selected ayaat with tafsir links</div>
                </div>
              ))}
            </div>
          )}
          {active === 'hadith' && (
            <div className="space-y-3">
              {["On honesty in trade","On justice & fairness","On trust and dua"].map((h,i) => (
                <details key={i} className="rounded-2xl border border-white/10 bg-[#0E0E0E]/60 p-4">
                  <summary className="cursor-pointer text-white/80">{h}</summary>
                  <p className="mt-2 text-sm text-white/70">Reference and commentary preview.</p>
                </details>
              ))}
            </div>
          )}
          {active === 'fiqh' && (
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {["Trade","Riba","Zakat","Contracts"].map((f,i) => (
                <div key={i} className="rounded-2xl border border-white/10 bg-[#0E0E0E]/60 p-4">
                  <div className="text-white">{f}</div>
                  <p className="mt-1 text-sm text-white/70">Overview and links to detailed rulings.</p>
                </div>
              ))}
            </div>
          )}
          {active === 'ai' && (
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {["Career pivot ideas","Halal investment screens","Ethical side-hustles"].map((rec,i) => (
                <div key={i} className="rounded-2xl border border-white/10 bg-[#0E0E0E]/60 p-4">
                  <div className="text-white">{rec}</div>
                  <p className="mt-1 text-sm text-white/70">Generated suggestions tailored to your profile.</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
