import React, { useRef } from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Features from './components/Features'
import CoreValue from './components/CoreValue'
import DashboardPreview from './components/DashboardPreview'
import Knowledge from './components/Knowledge'
import LiveChat from './components/LiveChat'
import Steps from './components/Steps'
import Signup from './components/Signup'
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
        <About />
        <Features />
        <CoreValue />
        <DashboardPreview />
        <Knowledge />
        <LiveChat />
        <Steps />
        <Signup />
        <CTA />
        <Footer />
      </div>
    </div>
  )
}

export default App
