import React from 'react'

export default function HeavenPattern({ className = '' }) {
  return (
    <div className={`absolute inset-0 ${className}`} aria-hidden>
      <div className="absolute inset-0 opacity-[0.55]" style={{
        background: 'radial-gradient(60% 60% at 50% 20%, rgba(233,255,244,0.7) 0%, rgba(207,237,226,0.5) 22%, rgba(255,255,255,0) 65%)'
      }} />
      <div className="absolute inset-0" style={{
        backgroundImage: 'radial-gradient(rgba(14,138,99,0.10) 1px, transparent 1px)',
        backgroundSize: '22px 22px'
      }} />
      <div className="absolute inset-0" style={{
        background: 'linear-gradient(180deg, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0) 40%)'
      }} />
    </div>
  )
}
