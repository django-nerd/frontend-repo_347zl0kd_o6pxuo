import React from 'react'

export default function About() {
  return (
    <section className="relative bg-[#001A21] py-20 text-white">
      <div className="pointer-events-none absolute inset-0 opacity-60" style={{
        background: 'radial-gradient(60% 60% at 50% 20%, rgba(1,107,97,0.18) 0%, rgba(0,26,33,0) 60%)'
      }} />
      <div className="relative mx-auto max-w-5xl px-6">
        <div className="mx-auto mb-6 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs text-white/70">
          Our Vision
        </div>
        <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">Halal Rizq, Elevated by Knowledge & AI</h2>
        <p className="mx-auto mt-4 max-w-3xl text-center text-white/70">
          Rizq.AI blends timeless Islamic guidance with modern technology to help you seek ethical income with confidence. We design tools that respect deen, leverage verified knowledge, and focus on barakah-first growth.
        </p>
        <div className="mx-auto mt-10 grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-3">
          {["Halal-first intent","Scholarly-sourced insights","Privacy & trust"].map((item, i) => (
            <div key={i} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center text-white/80 backdrop-blur">
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
