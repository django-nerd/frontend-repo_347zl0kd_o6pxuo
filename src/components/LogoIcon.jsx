import React from 'react'

// Rizq.ai emblem: Quran on rehal + dua hands + soft glow (SVG only, no text)
export default function LogoIcon({ className = 'h-8 w-8' }) {
  return (
    <div className={className} aria-hidden>
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#E4B85A" stopOpacity="0.6"/>
            <stop offset="60%" stopColor="#016B61" stopOpacity="0.35"/>
            <stop offset="100%" stopColor="#0E0E0E" stopOpacity="0"/>
          </radialGradient>
          <linearGradient id="gold" x1="0" y1="0" x2="64" y2="64">
            <stop offset="0%" stopColor="#E4B85A"/>
            <stop offset="100%" stopColor="#F2D699"/>
          </linearGradient>
          <linearGradient id="emerald" x1="0" y1="0" x2="64" y2="64">
            <stop offset="0%" stopColor="#2BC0A8"/>
            <stop offset="100%" stopColor="#016B61"/>
          </linearGradient>
        </defs>

        {/* Soft halo */}
        <circle cx="32" cy="32" r="28" fill="url(#glow)"/>

        {/* Rehal (stand) */}
        <path d="M16 40l12-8 4 3 4-3 12 8-4 4-8-5-4 3-4-3-8 5-4-4z" fill="url(#emerald)" opacity="0.8"/>

        {/* Quran (book) */}
        <g filter="url(#shadow)">
          <rect x="20" y="18" width="24" height="18" rx="2" fill="#0F1514" stroke="url(#gold)" strokeWidth="1.5"/>
          <path d="M20 27h24" stroke="url(#gold)" strokeWidth="1" opacity="0.5"/>
          <path d="M26 23c2 1.5 4 1.5 6 0 2 1.5 4 1.5 6 0" stroke="#E4B85A" strokeWidth="1.2" strokeLinecap="round"/>
        </g>

        {/* Dua hands */}
        <path d="M22 36c2 2 5 3 10 3s8-1 10-3" stroke="url(#gold)" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
        <path d="M24 34c.6-1.8 2.1-3 4-3m12 3c-.6-1.8-2.1-3-4-3" stroke="#E4B85A" strokeWidth="1.2" strokeLinecap="round" fill="none"/>
      </svg>
    </div>
  )
}
