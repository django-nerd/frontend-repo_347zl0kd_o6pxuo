import React from 'react'
import { Twitter, Linkedin, Instagram } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#0E0E0E] py-14 text-white">
      {/* Subtle geometric background */}
      <div className="pointer-events-none absolute inset-0 opacity-40" style={{
        backgroundImage: `radial-gradient(circle at 10% 10%, rgba(228,184,90,0.08) 0 2px, transparent 2px), radial-gradient(circle at 60% 40%, rgba(1,107,97,0.12) 0 2px, transparent 2px), radial-gradient(circle at 90% 80%, rgba(228,184,90,0.08) 0 2px, transparent 2px)`,
        backgroundSize: '40px 40px, 50px 50px, 60px 60px'
      }} />

      <div className="relative mx-auto flex w-full max-w-6xl flex-col items-center gap-6 px-6">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-[#E4B85A]/50 to-transparent" />
        <div className="flex items-center gap-4 text-white/70">
          <a href="#" className="rounded-full border border-white/10 p-2 hover:bg-white/5"><Twitter size={16} /></a>
          <a href="#" className="rounded-full border border-white/10 p-2 hover:bg-white/5"><Linkedin size={16} /></a>
          <a href="#" className="rounded-full border border-white/10 p-2 hover:bg-white/5"><Instagram size={16} /></a>
        </div>
        <div className="text-center text-xs text-white/50">
          © {new Date().getFullYear()} Rizq.ai — Built with ihsan. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
