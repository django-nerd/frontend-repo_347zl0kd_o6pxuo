import React from 'react'
import { Menu, ArrowRight } from 'lucide-react'
import Spline from '@splinetool/react-spline'
import LogoIcon from './LogoIcon'

export default function Hero({ onExplore }) {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden bg-[#0E0E0E] text-white">
      {/* Halo gradient background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -inset-[25%] mx-auto h-[140%] w-[140%] rounded-full opacity-60 blur-[120px]" style={{
          background: 'radial-gradient(60% 60% at 50% 40%, rgba(228,184,90,0.15) 0%, rgba(1,107,97,0.25) 35%, rgba(14,14,14,0) 70%)'
        }} />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.06)_0%,rgba(255,255,255,0)_40%)]" />
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
      </div>

      {/* Minimal navbar */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl items-center justify-between px-6 pt-6">
        <div className="flex items-center gap-3">
          <LogoIcon className="h-9 w-9" />
          <div className="sr-only">Rizq.ai</div>
        </div>
        <button className="rounded-full border border-white/10 bg-white/5 p-2 text-white/80 backdrop-blur hover:bg-white/10">
          <Menu size={18} />
        </button>
      </div>

      {/* Spline 3D object */}
      <div className="relative z-0 mx-auto mt-8 h-[340px] w-full max-w-6xl">
        <Spline scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Headline + CTA */}
      <div className="relative z-10 mx-auto mt-6 max-w-5xl px-6 pb-20 text-center">
        <h1 className="mx-auto bg-gradient-to-b from-white to-white/70 bg-clip-text text-5xl font-extrabold tracking-tight text-transparent sm:text-6xl">
          Divine Guidance. Real-World Rizq.
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base text-white/70 sm:text-lg">
          Where technology meets trust. Find halal income, guidance & opportunity.
        </p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <button onClick={onExplore} className="group inline-flex items-center gap-2 rounded-full bg-[#E4B85A] px-6 py-3 text-[#0E0E0E] shadow-[0_0_0_1px_rgba(228,184,90,0.4)_inset,0_12px_40px_-12px_rgba(228,184,90,0.5)] transition hover:brightness-110">
            Explore Rizq
            <ArrowRight className="transition group-hover:translate-x-0.5" size={18} />
          </button>
          <button className="rounded-full border border-white/10 px-5 py-3 text-white/80 hover:border-white/20 hover:bg-white/5">
            How it works
          </button>
        </div>
      </div>
    </section>
  )
}
