import React from 'react'
import { Link } from 'react-router-dom'
import Contact from './Contact'

export default function Home(){
  return (
    <>
      <section id="home" className="hero">
        <div className="hero-left">
          <h1>Healthy, home-style meals delivered daily</h1>
          <p className="lead">Mealar brings fresh, balanced meals to your doorstep with subscription plans tailored for busy lives.</p>

          <div className="store-links">
            {/* Play first — matches visual ordering from the example */}
            <a className="store-btn" href="https://play.google.com/store/apps/details?id=YOUR_PACKAGE_NAME" aria-label="Get it on Google Play">
              <img src="/assets/play-store-badge.svg" alt="Google Play" />
            </a>

            <a className="store-btn" href="https://apps.apple.com/app/idYOUR_APP_ID" aria-label="Download on the App Store">
              <img src="/assets/app-store-badge.svg" alt="App Store" />
            </a>
          </div>

        </div>

        {/* <div className="hero-right">
          <img src="/assets/logo_mealar_transparent.svg" className="hero-logo" alt="mealar" />
        </div> */}
      </section>

      <section className="about content">
        <h2>About</h2>
        <p>Mealar started as a small, home-style kitchen that wanted to bring comforting, familiar meals to busy households. Our menus focus on seasonally available ingredients, balanced nutrition and the kind of flavours you'd expect from a family meal.
        </p>

        <div className="features">
          <div className="card">
            <h3>Fresh everyday</h3>
            <p>Prepared daily in our kitchens and delivered while warm.</p>
          </div>
          <div className="card">
            <h3>Plan your meals</h3>
            <p>Manage subscriptions and add-ons from the app.</p>
          </div>
          <div className="card">
            <h3>Easy cancel & refunds</h3>
            <p>Transparent refund and cancellation policy — no surprises.</p>
          </div>
        </div>

          {/* <div style={{marginTop:20}}>
            <Link className="primary-btn" to="/#contact">See Plans & Subscribe</Link>
            <Link className="secondary-btn" to="/#contact">Get in touch</Link>
          </div> */}
      </section>
      
      {/* <section className="get-app content">
        <h2>Get Our App</h2>
        <p className="muted">You can download the app from following places</p>

        <div className="store-links" style={{marginTop:14}}>
          <a className="store-btn" href="https://play.google.com/store/apps/details?id=YOUR_PACKAGE_NAME" aria-label="Get it on Google Play">
            <img src="/assets/play-store-badge.svg" alt="Google Play" />
          </a>

          <a className="store-btn" href="https://apps.apple.com/app/idYOUR_APP_ID" aria-label="Download on the App Store">
            <img src="/assets/app-store-badge.svg" alt="App Store" />
          </a>
        </div>
      </section> */}

      <Contact />
    </>
  )
}
