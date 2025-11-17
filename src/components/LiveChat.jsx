import React from 'react'

export default function LiveChat() {
  return (
    <section className="relative bg-[#001A21] py-20 text-white">
      <div className="pointer-events-none absolute inset-0 opacity-60" style={{
        background: 'radial-gradient(60% 60% at 50% 10%, rgba(1,128,97,0.15) 0%, rgba(0,26,33,0) 60%)'
      }} />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur">
            <div className="text-sm text-white/70">Suggestions</div>
            <div className="mt-3 space-y-2">
              {["Is consulting in X halal?","Help me screen a stock","What side hustle suits my skills?","How to calculate zakat?"]
                .map((s, i) => (
                  <button key={i} className="w-full rounded-xl border border-white/10 bg-[#0E0E0E]/60 px-3 py-2 text-left text-white/80 hover:bg-white/10">{s}</button>
                ))}
            </div>
          </div>
          <div className="lg:col-span-2 rounded-3xl border border-white/10 bg-gradient-to-b from-[#0F1312] to-[#0B0D0D] p-4">
            <div className="mb-3 text-sm text-white/60">Live Chat (Coming Soon)</div>
            <div className="mb-3 h-64 w-full rounded-2xl border border-white/10 bg-[#0E0E0E]/60 p-3 text-white/60">Conversation will appear here...</div>
            <div className="flex items-center gap-2">
              <input placeholder="Ask anything about halal rizq..." className="flex-1 rounded-2xl border border-white/10 bg-[#0E0E0E]/70 px-4 py-3 text-sm text-white placeholder-white/40 outline-none focus:border-white/20" />
              <button className="rounded-2xl bg-[#D9A74A] px-4 py-3 text-[#0E0E0E]">Send</button>
            </div>
            <div className="mt-2 text-xs text-white/50">Voice input, recitation, and multilingual support planned.</div>
          </div>
        </div>
      </div>
    </section>
  )
}
