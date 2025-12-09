import { useEffect, useRef, useState } from 'react'
import './AnimatedCake.css'

export function AnimatedCake() {
  const [candlesLit, setCandlesLit] = useState(false)
  const [showSparkles, setShowSparkles] = useState(false)
  const cakeRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Auto-light candles after a short delay
    const timer = setTimeout(() => {
      setCandlesLit(true)
      setShowSparkles(true)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  const handleCakeClick = () => {
    if (!candlesLit) {
      setCandlesLit(true)
      setShowSparkles(true)
    }
  }

  return (
    <div className="cake-container" ref={cakeRef} onClick={handleCakeClick}>
      {/* Sparkles effect */}
      {showSparkles && (
        <div className="sparkles">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="sparkle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      )}

      {/* Cake base */}
      <div className="cake">
        {/* Bottom layer */}
        <div className="cake-layer layer-bottom">
          <div className="frosting frosting-bottom"></div>
        </div>

        {/* Middle layer */}
        <div className="cake-layer layer-middle">
          <div className="frosting frosting-middle"></div>
        </div>

        {/* Top layer */}
        <div className="cake-layer layer-top">
          <div className="frosting frosting-top"></div>
        </div>

        {/* Candles */}
        <div className="candles">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="candle" style={{ left: `${20 + i * 15}%` }}>
              <div className="candle-wick"></div>
              <div className={`candle-flame ${candlesLit ? 'lit' : ''}`}>
                <div className="flame-inner"></div>
              </div>
              <div className="candle-body"></div>
            </div>
          ))}
        </div>

        {/* Decorative cherries */}
        <div className="cherries">
          <div className="cherry cherry-1"></div>
          <div className="cherry cherry-2"></div>
          <div className="cherry cherry-3"></div>
        </div>
      </div>

      {/* Birthday text */}
      <div className="birthday-text">
        <h2 className="birthday-title">Happy Birthday!</h2>
        <p className="birthday-subtitle">Gobi! 🎂✨</p>
      </div>
    </div>
  )
}

