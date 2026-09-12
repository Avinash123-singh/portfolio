import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollRail from './components/ScrollRail'
import AIAssistant from './components/AIAssistant'
import { Toaster } from "react-hot-toast"

function App() {
  return (
    <div className="relative bg-espresso min-h-screen overflow-x-hidden">
      <div className="grain"></div>
      <Navbar />
      <ScrollRail />
      <main className="relative z-10">
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <AIAssistant />
      <Toaster
        toastOptions={{
          style: {
            background: "#1C1714",
            color: "#F5EFE6",
            border: "1px solid rgba(205,252,138,0.3)",
          },
        }}
      />
    </div>
  )
}

export default App
