import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Header(){
  const [open, setOpen] = useState(false)

  function handleLinkClick(){
    // close mobile nav after clicking an item
    if(open) setOpen(false)
  }

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link className="brand" to="/">
          <img src="/assets/logo.svg" alt="Mealar" className="logo" />
          <span className="brand-text">mealar</span>
        </Link>

        <button
          className="mobile-menu-btn"
          aria-controls="site-nav"
          aria-expanded={open}
          aria-label="Toggle navigation"
          onClick={() => setOpen(o => !o)}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
            <path d="M4 6h16M4 12h16M4 18h16" stroke="#6A3B0D" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <nav id="site-nav" className={`site-nav ${open ? 'open' : ''}`}>
          <Link to="/" onClick={handleLinkClick}>Home</Link>
          {/* removed Menu & Terms pages — single page app only */}
          <Link to="/privacy" className="nav-btn" onClick={handleLinkClick}>Privacy</Link>
          <Link to="/#contact" onClick={handleLinkClick}>Contact</Link>
        </nav>
      </div>
    </header>
  )
}
