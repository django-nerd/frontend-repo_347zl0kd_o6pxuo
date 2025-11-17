import React, { useRef } from 'react'
import { motion, useMotionValue, useTransform } from 'framer-motion'

const bubbleConfigs = [
  { size: 120, depth: 0.02, color: 'rgba(14,138,99,0.15)', blur: '20px' },
  { size: 80, depth: 0.05, color: 'rgba(207,237,226,0.45)', blur: '14px' },
  { size: 160, depth: 0.015, color: 'rgba(233,255,244,0.55)', blur: '24px' },
  { size: 60, depth: 0.06, color: 'rgba(14,138,99,0.18)', blur: '12px' },
  { size: 100, depth: 0.03, color: 'rgba(217,167,74,0.18)', blur: '16px' }
]

export default function ParallaxBubbles({ className = '' }) {
  const ref = useRef(null)
  const mx = useMotionValue(0)
  const my = useMotionValue(0)

  const onMove = (e) => {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    mx.set(x)
    my.set(y)
  }

  return (
    <div ref={ref} onMouseMove={onMove} className={`pointer-events-auto ${className}`}>
      {bubbleConfigs.map((b, i) => {
        const x = useTransform(mx, (v) => v * 100 * b.depth)
        const y = useTransform(my, (v) => v * 100 * b.depth)
        const base = [
          'absolute rounded-full backdrop-blur',
          'shadow-[0_10px_40px_-10px_rgba(14,138,99,0.25)]'
        ].join(' ')
        const positions = [
          { top: '10%', left: '12%' },
          { top: '22%', right: '18%' },
          { top: '58%', left: '20%' },
          { top: '68%', right: '26%' },
          { top: '38%', left: '48%' }
        ]
        const pos = positions[i % positions.length]
        return (
          <motion.div
            key={i}
            style={{ x, y, ...pos, width: b.size, height: b.size, background: b.color, filter: `blur(${b.blur})` }}
            className={base}
          />
        )
      })}
    </div>
  )
}
