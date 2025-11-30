import React from 'react'

export default function Contact(){
  return (
    <section id="contact" className="content contact">
      <h1>Get in touch</h1>

      <div className="contact-grid">
        <aside className="contact-card contact-panel">
          <ul className="contact-list">
            <li><strong>Email:</strong> <a href="mailto:hello@mealar.app">support@mealar.in</a></li>
            <li><strong>Phone:</strong> <a href="tel:+919876543210">+91 98765 43210</a></li>
            <li><strong>Address:</strong> Mealar Kitchens, Sample Road, Bengaluru, India</li>
            {/* <li><strong>Instagram:</strong> <a href="https://www.instagram.com/saraswathi_meals?igsh=MWNhMWdwdHR5ajZ4bw==">@mealar</a></li> */}
          </ul>

          <div style={{marginTop:50}}>
            <a className="store-btn" href="https://play.google.com/store/apps/details?id=YOUR_PACKAGE_NAME"><img src="/assets/play-store-badge.svg" alt="Google Play"/></a>
            <a className="store-btn" href="https://apps.apple.com/app/idYOUR_APP_ID" style={{marginLeft:8}}><img src="/assets/app-store-badge.svg" alt="App Store"/></a>
          </div>
        </aside>

        {/* <div className="contact-card contact-form-card">
          <h3>Contact us</h3>
          <p className="muted">Prefer to reach out directly? Use the buttons below to open your mail client or call us — we typically respond within one business day.</p>

          <div className="form-actions" style={{marginTop:16}}>
            <a href="mailto:hello@mealar.app" className="primary-btn" style={{display:'inline-flex',alignItems:'center',gap:8}}>Email us</a>
            <a href="tel:+919876543210" className="secondary-btn" style={{display:'inline-flex',alignItems:'center',gap:8}}>Call us</a>
          </div>
        </div> */}
      </div>
    </section>
  )
}
