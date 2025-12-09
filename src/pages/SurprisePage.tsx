import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import giftImg from '../assets/Picsart_25-12-07_20-22-47-659.jpg'
import '../components/Surprise.css'

// Different flower types
function RoseFlower({ delay, size, position }: { delay: number; size: number; position: { x: number; y: number } }) {
  return (
    <div 
      className="garden-flower rose-flower" 
      style={{
        left: `${position.x}%`,
        bottom: `${position.y}%`,
        animationDelay: `${delay}s`,
        '--flower-size': `${size}px`,
      } as React.CSSProperties}
    >
      <div className="flower-stem"></div>
      <div className="flower-head">
        <div className="rose-petal rose-petal-1"></div>
        <div className="rose-petal rose-petal-2"></div>
        <div className="rose-petal rose-petal-3"></div>
        <div className="rose-petal rose-petal-4"></div>
        <div className="rose-petal rose-petal-5"></div>
        <div className="rose-petal rose-petal-6"></div>
        <div className="rose-petal rose-petal-7"></div>
        <div className="rose-petal rose-petal-8"></div>
        <div className="rose-petal rose-petal-9"></div>
        <div className="rose-petal rose-petal-10"></div>
        <div className="rose-center"></div>
      </div>
      <div className="flower-leaf flower-leaf-left"></div>
      <div className="flower-leaf flower-leaf-right"></div>
    </div>
  )
}

function DaisyFlower({ delay, size, position }: { delay: number; size: number; position: { x: number; y: number } }) {
  return (
    <div 
      className="garden-flower daisy-flower" 
      style={{
        left: `${position.x}%`,
        bottom: `${position.y}%`,
        animationDelay: `${delay}s`,
        '--flower-size': `${size}px`,
      } as React.CSSProperties}
    >
      <div className="flower-stem"></div>
      <div className="flower-head">
        <div className="daisy-petal daisy-petal-1"></div>
        <div className="daisy-petal daisy-petal-2"></div>
        <div className="daisy-petal daisy-petal-3"></div>
        <div className="daisy-petal daisy-petal-4"></div>
        <div className="daisy-petal daisy-petal-5"></div>
        <div className="daisy-petal daisy-petal-6"></div>
        <div className="daisy-petal daisy-petal-7"></div>
        <div className="daisy-petal daisy-petal-8"></div>
        <div className="daisy-center"></div>
      </div>
      <div className="flower-leaf flower-leaf-left"></div>
      <div className="flower-leaf flower-leaf-right"></div>
    </div>
  )
}

function TulipFlower({ delay, size, position }: { delay: number; size: number; position: { x: number; y: number } }) {
  return (
    <div 
      className="garden-flower tulip-flower" 
      style={{
        left: `${position.x}%`,
        bottom: `${position.y}%`,
        animationDelay: `${delay}s`,
        '--flower-size': `${size}px`,
      } as React.CSSProperties}
    >
      <div className="flower-stem"></div>
      <div className="flower-head">
        <div className="tulip-petal tulip-petal-1"></div>
        <div className="tulip-petal tulip-petal-2"></div>
        <div className="tulip-petal tulip-petal-3"></div>
        <div className="tulip-petal tulip-petal-4"></div>
        <div className="tulip-petal tulip-petal-5"></div>
        <div className="tulip-petal tulip-petal-6"></div>
      </div>
      <div className="flower-leaf flower-leaf-left"></div>
      <div className="flower-leaf flower-leaf-right"></div>
    </div>
  )
}

function Butterfly({ delay, position }: { delay: number; position: { x: number; y: number } }) {
  return (
    <div 
      className="butterfly"
      style={{
        left: `${position.x}%`,
        top: `${position.y}%`,
        animationDelay: `${delay}s`,
      }}
    >
      <div className="butterfly-body"></div>
      <div className="butterfly-wing butterfly-wing-left-top"></div>
      <div className="butterfly-wing butterfly-wing-left-bottom"></div>
      <div className="butterfly-wing butterfly-wing-right-top"></div>
      <div className="butterfly-wing butterfly-wing-right-bottom"></div>
    </div>
  )
}

export function SurprisePage() {
  const [showGarden, setShowGarden] = useState(false)
  const [showGift, setShowGift] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowGarden(true)
    }, 300)
    return () => clearTimeout(timer)
  }, [])

  // Different flower types - fewer on mobile
  const flowers = [
    { type: 'rose', delay: 0.2, size: 85, position: { x: 20, y: 12 } },
    { type: 'daisy', delay: 0.4, size: 75, position: { x: 45, y: 15 } },
    { type: 'tulip', delay: 0.6, size: 70, position: { x: 70, y: 18 } },
    { type: 'rose', delay: 0.8, size: 80, position: { x: 30, y: 25 } },
    { type: 'daisy', delay: 1.0, size: 75, position: { x: 60, y: 28 } },
    { type: 'tulip', delay: 1.2, size: 70, position: { x: 50, y: 32 } },
  ]

  // Fewer butterflies
  const butterflies = [
    { delay: 2, position: { x: 25, y: 30 } },
    { delay: 2.5, position: { x: 65, y: 25 } },
  ]

  return (
    <div className="surprise-page">
      <button className="back-button" onClick={() => navigate('/')}>
        ← Back
      </button>

      <div className="surprise-page-container">
        <div className="wish-boxes">
          <div className="wish-box box-1">Happy</div>
          <div className="wish-box box-2">Birthday</div>
          <div className="wish-box box-3">Nahal</div>
        </div>

        {/* Special gift trigger */}
        <button className="special-gift-button" type="button" onClick={() => setShowGift(true)}>
          🎁 Special Gift
        </button>

        {showGift && (
          <div className="special-gift-panel">
            <div className="special-gift-bg"></div>
            <div className="special-gift-kittens">
              <span className="kitten-emoji">🐱</span>
              <span className="kitten-emoji">🐾</span>
              <span className="kitten-emoji">🐱</span>
            </div>
            <div className="special-gift-image-wrap">
              <img src={giftImg} alt="Special gift" className="special-gift-image" />
            </div>
            <div className="special-gift-message">For you, with all the love. 💖</div>
          </div>
        )}

        <div className={`garden-scene ${showGarden ? 'active' : ''}`}>
          <div className="sky-gradient"></div>
          <div className="garden-sun"></div>
          <div className="cloud cloud-1"></div>
          <div className="cloud cloud-2"></div>
          <div className="cloud cloud-3"></div>

          <div className="grass-layer">
            {Array.from({ length: 40 }).map((_, i) => (
              <div
                key={i}
                className="grass-blade"
                style={{
                  left: `${(i * 2.5) % 100}%`,
                  animationDelay: `${(i * 0.1) % 3}s`,
                  height: `${30 + Math.random() * 15}px`,
                }}
              />
            ))}
          </div>

          {flowers.map((flower, i) => {
            if (flower.type === 'rose') {
              return <RoseFlower key={i} delay={flower.delay} size={flower.size} position={flower.position} />
            } else if (flower.type === 'daisy') {
              return <DaisyFlower key={i} delay={flower.delay} size={flower.size} position={flower.position} />
            } else {
              return <TulipFlower key={i} delay={flower.delay} size={flower.size} position={flower.position} />
            }
          })}

          {butterflies.map((butterfly, i) => (
            <Butterfly key={i} {...butterfly} />
          ))}
        </div>

        <div className="heart-rain">
          {Array.from({ length: 15 }).map((_, i) => (
            <div
              key={i}
              className="falling-heart"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`,
              }}
            >
              ❤️
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
