import { useState } from 'react'
import './AnimatedGift.css'

export function AnimatedGift() {
  const [isOpen, setIsOpen] = useState(false)
  const [showRabbit, setShowRabbit] = useState(false)
  const [showSparkles] = useState(true)

  const handleGiftClick = () => {
    if (!isOpen) {
      // Opening the box
      setIsOpen(true)
      setTimeout(() => {
        setShowRabbit(true)
      }, 1000)
    } else {
      // Closing the box - hide rabbit first, then close
      setShowRabbit(false)
      setTimeout(() => {
        setIsOpen(false)
      }, 300)
    }
  }

  return (
    <div className="gift-section">
      <div className="gift-container" onClick={handleGiftClick}>
        {/* Sparkles around gift */}
        {showSparkles && (
          <div className="gift-sparkles">
            {Array.from({ length: 15 }).map((_, i) => (
              <div
                key={i}
                className="sparkle-particle"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 2}s`,
                }}
              />
            ))}
          </div>
        )}

        {/* Gift box */}
        <div className={`gift-box ${isOpen ? 'opened' : ''}`}>
          <div className="gift-lid">
            <div className="gift-bow">
              <div className="bow-center"></div>
              <div className="bow-loop bow-left"></div>
              <div className="bow-loop bow-right"></div>
            </div>
          </div>
          <div className="gift-base">
            <div className="gift-ribbon gift-ribbon-vertical"></div>
            <div className="gift-ribbon gift-ribbon-horizontal"></div>
          </div>
        </div>

        {/* Rabbit that pops out */}
        <div className={`rabbit-container ${showRabbit ? 'visible' : ''}`}>
            <div className="rabbit">
              {/* Rabbit ears */}
              <div className="rabbit-ear rabbit-ear-left">
                <div className="ear-inner"></div>
              </div>
              <div className="rabbit-ear rabbit-ear-right">
                <div className="ear-inner"></div>
              </div>

              {/* Rabbit face */}
              <div className="rabbit-face">
                {/* Eyes */}
                <div className="rabbit-eye rabbit-eye-left">
                  <div className="eye-pupil"></div>
                </div>
                <div className="rabbit-eye rabbit-eye-right">
                  <div className="eye-pupil"></div>
                </div>

                {/* Nose */}
                <div className="rabbit-nose"></div>

                {/* Mouth */}
                <div className="rabbit-mouth"></div>

                {/* Cheeks */}
                <div className="rabbit-cheek rabbit-cheek-left"></div>
                <div className="rabbit-cheek rabbit-cheek-right"></div>
              </div>

              {/* Rabbit body */}
              <div className="rabbit-body">
                <div className="rabbit-paw rabbit-paw-left"></div>
                <div className="rabbit-paw rabbit-paw-right"></div>
              </div>
            </div>

            {/* Heart bubbles */}
            {showRabbit && (
              <div className="heart-bubbles">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div
                    key={i}
                    className="heart-bubble"
                    style={{
                      left: `${20 + i * 15}%`,
                      animationDelay: `${i * 0.3}s`,
                    }}
                  >
                    💖
                  </div>
                ))}
              </div>
            )}
        </div>

        {/* Floating hearts */}
        {isOpen && showRabbit && (
          <div className="floating-hearts">
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="floating-heart"
                style={{
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 2}s`,
                }}
              >
                ❤️
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Gift message */}
      <div className="gift-message">
        <h3 className="gift-title">A Special Gift for You! 🎁</h3>
        <p className="gift-subtitle">
          {isOpen ? 'Click again to close! ✨' : 'Click to open your surprise! ✨'}
        </p>
      </div>
    </div>
  )
}

