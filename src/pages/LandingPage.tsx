import { useEffect, useState } from 'react'
import { AnimatedCake } from '../components/AnimatedCake'
import { BirthdayWishes } from '../components/BirthdayWishes'
import { AnimatedGift } from '../components/AnimatedGift'
import SurpriseButton from '../components/SurpriseButton'
import { CuteGiftCards } from '../components/CuteGiftCards'
import './LandingPage.css'

export function LandingPage() {
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    // Animate content in after a short delay
    const timer = setTimeout(() => {
      setShowContent(true)
    }, 300)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="landing-page">
      {/* Animated background elements */}
      <div className="background-elements">
        <div className="floating-shape shape-1"></div>
        <div className="floating-shape shape-2"></div>
        <div className="floating-shape shape-3"></div>
        <div className="floating-shape shape-4"></div>
      </div>

      {/* Main content */}
      <div className={`main-content ${showContent ? 'visible' : ''}`}>
        {/* Hero section with cake */}
        <section className="hero-section">
          <div className="hero-container">
            <div className="hero-text">
              <h1 className="main-title">
                <span className="title-line">Happy Birthday</span>
                <span className="title-line highlight">Nahal! 🎂</span>
              </h1>
              <p className="hero-description">
                Wishing you the most amazing day filled with joy, laughter, and all the happiness you deserve!
                You're an incredible friend! 🎉✨
              </p>
            </div>
            <div className="cake-wrapper">
              <AnimatedCake />
            </div>
          </div>
        </section>

        {/* Animated Gift section */}
        <section className="gift-section-wrapper">
          <AnimatedGift />
          <div className="gift-caption">Happy Birthday Nahal 🎀</div>
        </section>

        {/* Surprise Button section */}
        <section className="surprise-section-wrapper">
          <SurpriseButton />
        </section>

        {/* Birthday Wishes section */}
        <section className="wishes-section-wrapper">
          <BirthdayWishes />
        </section>

        {/* Cute Gift Cards section */}
        <CuteGiftCards />
      </div>

      {/* Confetti effect on scroll */}
      <div className="confetti-container"></div>
    </div>
  )
}
