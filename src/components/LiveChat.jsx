import React from 'react'
import { Sparkles } from 'lucide-react'

export default function LiveChat() {
  return (
    <section className="relative bg-[#E9FFF4] py-20 text-emerald-900">
      <div className="pointer-events-none absolute inset-0 opacity-70" style={{
        background: 'radial-gradient(60% 60% at 50% 10%, rgba(233,255,244,0.8) 0%, rgba(207,237,226,0.6) 40%, rgba(255,255,255,0) 70%)'
      }} />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-semibold">Smart Chat</h2>
          <p className="mt-2 text-emerald-900/70">Ask about ethical income, growth, and guidance — AI-powered assistance coming soon.</p>
        </div>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="rounded-3xl border border-emerald-900/10 bg-white/70 p-4 shadow-sm backdrop-blur-md">
            <div className="text-sm text-emerald-900/70">Suggestions</div>
            <div className="mt-3 space-y-2">
              {["Is this investment permissible?","How to calculate zakat","Halal side-income ideas","How can I upskill for work?"]
                .map((s, i) => (
                  <button key={i} className="w-full rounded-xl border border-emerald-900/10 bg-white/60 px-3 py-2 text-left text-emerald-900/80 hover:bg-white">{s}</button>
                ))}
            </div>
          </div>
          <div className="lg:col-span-2 rounded-3xl border border-emerald-900/10 bg-gradient-to-b from-white/90 to-white/70 p-4 shadow-md backdrop-blur">
            <div className="mb-3 text-sm text-emerald-900/60">Conversation (coming soon)</div>
            <div className="mb-3 h-64 w-full rounded-2xl border border-emerald-900/10 bg-white/70 p-3 text-emerald-900/60 shadow-inner">Messages will appear here...</div>
            <div className="flex items-center gap-2">
              <div className="flex-1 rounded-2xl border border-emerald-900/10 bg-white/70 px-3 py-1 shadow-[inset_0_0_0_1px_rgba(14,138,99,0.06),0_10px_30px_-12px_rgba(14,138,99,0.25)] focus-within:border-emerald-800/20">
                <div className="flex items-center gap-2">
                  <Sparkles size={16} className="text-emerald-700" />
                  <input placeholder="Ask anything about ethical provision..." className="flex-1 bg-transparent px-2 py-3 text-sm text-emerald-900 placeholder-emerald-900/40 outline-none" />
                </div>
              </div>
              <button className="rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-700 px-4 py-3 text-white shadow-md">Send</button>
            </div>
            <div className="mt-2 text-xs text-emerald-900/60">Voice, recitation, and multilingual support coming soon.</div>
          </div>
        </div>
      </div>
    </section>
  )
}
