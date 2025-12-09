import React from 'react'
import Hero from './components/Hero'
import UseCases from './components/UseCases'
import Features from './components/Features'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <UseCases />
      <Features />
      <CTA />
      <Footer />
    </div>
  )
}

export default App
