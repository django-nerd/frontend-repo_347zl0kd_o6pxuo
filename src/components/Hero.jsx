import React from 'react'
import { ArrowRight } from 'lucide-react'
import LogoIcon from './LogoIcon'
import IslamicBook from './IslamicBook'
import Ornament from './Ornament'
import HeavenPattern from './HeavenPattern'
import ParallaxBubbles from './ParallaxBubbles'
import { motion } from 'framer-motion'

export default function Hero({ onExplore }) {
  return (
    <section className="relative min-h-[96vh] w-full overflow-hidden bg-[#E9FFF4] text-[#0B2C23]">
      {/* Heavenly ambient background */}
      <HeavenPattern />

      {/* Floating parallax bubbles (noor energy) */}
      <ParallaxBubbles className="absolute inset-0" />

      {/* Floating ornament for luxury accent */}
      <Ornament className="right-10 top-16 h-40 w-40 sm:right-20 sm:top-24 md:right-40 md:top-28 md:h-56 md:w-56 opacity-80" />

      {/* Minimal navbar */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl items-center justify-between px-6 pt-6">
        <div className="flex items-center gap-3">
          <LogoIcon className="h-10 w-10" />
          <span className="text-lg font-semibold text-emerald-900/90">Rizq.AI</span>
        </div>
        <button className="rounded-full border border-emerald-900/10 bg-white/60 px-4 py-2 text-emerald-900/70 shadow-sm backdrop-blur-md hover:bg-white/80">Menu</button>
      </div>

      {/* Bismillah shimmer */}
      <div className="relative z-10 mt-10 flex items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="rounded-full border border-emerald-900/10 bg-white/60 px-4 py-2 text-emerald-900/80 shadow-sm backdrop-blur-md"
        >
          <span className="text-sm font-medium">In the name of God, the Most Merciful, the Most Compassionate</span>
        </motion.div>
      </div>

      {/* Central 5D symbol: Quran + Rizq + Guidance + Heaven */}
      <div className="relative z-0 mx-auto mt-6 h-[320px] w-full max-w-6xl px-6 sm:h-[380px]">
        <div className="absolute -inset-6 rounded-[32px] opacity-60 blur-2xl" style={{
          background: 'radial-gradient(60% 60% at 50% 40%, rgba(14,138,99,0.20) 0%, rgba(233,255,244,0.60) 35%, rgba(255,255,255,0) 70%)'
        }} />
        <IslamicBook className="h-full w-full" />
      </div>

      {/* Headline + CTA */}
      <div className="relative z-10 mx-auto mt-2 max-w-5xl px-6 pb-20 text-center">
        <h1 className="mx-auto bg-gradient-to-b from-emerald-900 to-emerald-700 bg-clip-text text-5xl font-extrabold tracking-tight text-transparent sm:text-6xl">
          Guidance and Rizq — a light leading to goodness and blessing
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base text-emerald-900/70 sm:text-lg">
          A platform that unites knowledge, excellence, and technology to open doors to pure, ethical provision.
        </p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <button onClick={onExplore} className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-700 px-7 py-3 text-white shadow-[0_0_0_1px_rgba(14,138,99,0.25)_inset,0_18px_60px_-20px_rgba(14,138,99,0.65)] transition hover:brightness-110">
            Explore your Rizq
            <ArrowRight className="transition group-hover:translate-x-0.5" size={18} />
          </button>
          <button className="rounded-full border border-emerald-900/10 bg-white/70 px-6 py-3 text-emerald-900/80 shadow-sm backdrop-blur-md hover:bg-white">
            How it works?
          </button>
        </div>
      </div>
    </section>
  )
}
