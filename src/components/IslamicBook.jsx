import React from 'react'
import { motion } from 'framer-motion'

export default function IslamicBook({ className = '' }) {
  return (
    <motion.div
      className={`relative ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="absolute -inset-10 rounded-3xl opacity-40 blur-2xl" style={{
        background: 'radial-gradient(60% 60% at 50% 40%, rgba(228,184,90,0.10) 0%, rgba(1,107,97,0.20) 40%, rgba(14,14,14,0) 70%)'
      }} />

      <svg viewBox="0 0 700 420" className="relative z-10 w-full h-full">
        <defs>
          <linearGradient id="gold" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#F2D08B" />
            <stop offset="100%" stopColor="#D9A74A" />
          </linearGradient>
          <linearGradient id="green" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#0BA68F" />
            <stop offset="100%" stopColor="#016B61" />
          </linearGradient>
          <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="8" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <pattern id="geom" patternUnits="userSpaceOnUse" width="24" height="24" patternTransform="scale(1)">
            <path d="M12 0L24 12L12 24L0 12Z" fill="none" stroke="#1D2A29" strokeWidth="1"/>
          </pattern>
        </defs>

        {/* Background panel with subtle pattern */}
        <rect x="30" y="30" width="640" height="360" rx="28" fill="#0B1515" stroke="#12312C" />
        <rect x="30" y="30" width="640" height="360" rx="28" fill="url(#geom)" opacity="0.25" />

        {/* Book base */}
        <g filter="url(#softGlow)">
          <path d="M120 110 C200 90, 260 90, 340 110 L340 310 C260 290, 200 290, 120 310 Z" fill="#0D2522" stroke="#1E4E47" />
          <path d="M360 110 C440 90, 500 90, 580 110 L580 310 C500 290, 440 290, 360 310 Z" fill="#0D2522" stroke="#1E4E47" />

          {/* Pages */}
          <path d="M130 120 C200 105, 260 105, 330 120 L330 300 C260 285, 200 285, 130 300 Z" fill="#F9F9F5" fillOpacity="0.9" />
          <path d="M370 120 C440 105, 500 105, 570 120 L570 300 C500 285, 440 285, 370 300 Z" fill="#F9F9F5" fillOpacity="0.9" />

          {/* Center spine */}
          <rect x="340" y="110" width="20" height="200" fill="url(#green)" rx="6" />

          {/* Crescent and star motif */}
          <g transform="translate(350,160)">
            <path d="M60 20a38 38 0 1 1-52 52 30 30 0 1 0 52-52z" fill="url(#green)" opacity="0.9" />
            <path d="M84 46l8 16 18 3-13 13 3 18-16-8-16 8 3-18-13-13 18-3z" fill="url(#gold)" opacity="0.95" />
          </g>

          {/* Kufic-inspired frame */}
          <rect x="150" y="150" width="160" height="140" fill="none" stroke="url(#gold)" strokeWidth="3" rx="4" />
          <rect x="390" y="150" width="160" height="140" fill="none" stroke="url(#gold)" strokeWidth="3" rx="4" />

          {/* Decorative dividers on pages */}
          <path d="M170 190 H290" stroke="#D9A74A" strokeWidth="2" strokeLinecap="round" opacity="0.8" />
          <path d="M170 220 H290" stroke="#D9A74A" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
          <path d="M410 190 H530" stroke="#D9A74A" strokeWidth="2" strokeLinecap="round" opacity="0.8" />
          <path d="M410 220 H530" stroke="#D9A74A" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
        </g>
      </svg>
    </motion.div>
  )
}
