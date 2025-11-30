import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer(){
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div>
          <img src="/assets/logo.svg" className="footer-logo" alt="mealar" />
          <p className="muted">© Mealar — Healthy meals, simple subscriptions</p>
        </div>

        <div className="footer-links">
          <Link className="footer-link-btn" to="/privacy">Privacy</Link>
          <Link className="footer-link-btn" to="/delete-account">Account deletion</Link>
          <Link className="footer-link-btn" to="/#contact">Contact</Link>
        </div>
      </div>
    </footer>
  )
}
