import React, { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Privacy from './pages/Privacy'
import DeleteAccountMailto from './components/DeleteAccountMailto'

export default function App(){
  // scroll to hash when location changes (useful for links like /#contact)
  // runs inside Router because App is wrapped by BrowserRouter in main.jsx
  const location = useLocation()
  useEffect(() => {
    if (location.hash) {
      // delay to allow routed page content to render
      setTimeout(() => {
        const id = location.hash.replace('#','')
        const el = document.getElementById(id)
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 80)
    }
  }, [location.pathname, location.hash])
  return (
    <div className="app-root">
      <Header />

      <main className="container main">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/privacy" element={<Privacy/>} />
          <Route path="/delete-account" element={<DeleteAccountMailto/>} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}
