import React, { useRef } from 'react'
import Hero from './components/Hero'
import Features from './components/Features'
import CoreValue from './components/CoreValue'
import DashboardPreview from './components/DashboardPreview'
import Steps from './components/Steps'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  const exploreRef = useRef(null)
  const handleExplore = () => {
    exploreRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-[#0E0E0E]">
      <Hero onExplore={handleExplore} />
      <div ref={exploreRef}>
        <Features />
        <CoreValue />
        <DashboardPreview />
        <Steps />
        <CTA />
        <Footer />
      </div>
    </div>
  )
}

export default App
