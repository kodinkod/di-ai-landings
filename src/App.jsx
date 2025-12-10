import React, { useState, useEffect } from 'react'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import UseCases from './components/UseCases'
import NanaBananaShowcase from './components/NanaBananaShowcase'
import PromptsLibrary from './components/PromptsLibrary'
import OCRShowcase from './components/OCRShowcase'
import Features from './components/Features'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  const [currentTab, setCurrentTab] = useState('home')

  const handleTabChange = (tab) => {
    setCurrentTab(tab)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen">
      <Navigation currentTab={currentTab} onTabChange={handleTabChange} />

      {currentTab === 'home' ? (
        <>
          <Hero />
          <UseCases />
          <NanaBananaShowcase onViewAllPrompts={() => handleTabChange('prompts')} />
          <OCRShowcase />
          <Features />
          <CTA />
          <Footer />
        </>
      ) : (
        <>
          <PromptsLibrary />
          <Footer />
        </>
      )}
    </div>
  )
}

export default App
