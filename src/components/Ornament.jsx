import React from 'react'
import { motion } from 'framer-motion'

export default function Ornament({ className = '' }) {
  return (
    <motion.div
      className={`pointer-events-none absolute ${className}`}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: [1, 1.04, 1] }}
      transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      aria-hidden
    >
      <svg viewBox="0 0 220 220" className="h-full w-full">
        <defs>
          <radialGradient id="orb" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#E4B85A" stopOpacity="0.35" />
            <stop offset="60%" stopColor="#0BA68F" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#001A21" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="stroke" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#F2CF8B"/>
            <stop offset="100%" stopColor="#016B61"/>
          </linearGradient>
        </defs>
        <circle cx="110" cy="110" r="100" fill="url(#orb)" />
        {/* Islamic geometric star */}
        <g transform="translate(110 110)">
          {Array.from({ length: 8 }).map((_, i) => (
            <g key={i} transform={`rotate(${i * 45})`}>
              <rect x="-6" y="-70" width="12" height="40" rx="3" fill="none" stroke="url(#stroke)" strokeWidth="1.5" opacity="0.9" />
              <rect x="-3" y="-85" width="6" height="12" rx="3" fill="#D9A74A" opacity="0.8" />
            </g>
          ))}
          <circle r="22" fill="#031A18" stroke="#1E4E47" />
          <circle r="10" fill="#0BA68F" opacity="0.8" />
        </g>
      </svg>
    </motion.div>
  )
}
