import { useState } from 'react'
import './CuteGiftCards.css'

// 🔥 Import images from src/assets
import memoryImg from '../assets/ht-1.jpg'
import sweetwishImg from '../assets/ht-2.jpg'
import loveImg from '../assets/ht-3.jpg'
import friendImg from '../assets/ht-4.jpg'

function AnimatedKitten({ delay }: { delay: number }) {
  return (
    <div className="kitten" style={{ animationDelay: `${delay}s` }}>
      <div className="kitten-body"></div>
      <div className="kitten-head">
        <div className="kitten-ear kitten-ear-left"></div>
        <div className="kitten-ear kitten-ear-right"></div>
        <div className="kitten-face">
          <div className="kitten-eye kitten-eye-left"></div>
          <div className="kitten-eye kitten-eye-right"></div>
          <div className="kitten-nose"></div>
          <div className="kitten-mouth"></div>
        </div>
      </div>
      <div className="kitten-tail"></div>
      <div className="kitten-paw kitten-paw-left"></div>
      <div className="kitten-paw kitten-paw-right"></div>
    </div>
  )
}

function GiftCard({
  title,
  emoji,
  message,
  color,
  delay,
  image,
}: {
  title: string
  emoji: string
  message: string
  color: string
  delay: number
  image: string
}) {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <div
      className={`gift-card ${isFlipped ? 'flipped' : ''}`}
      style={{ '--card-color': color, animationDelay: `${delay}s` } as React.CSSProperties}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div className="card-front">
        <div className="card-emoji">{emoji}</div>
        <div className="card-title">{title}</div>
        <div className="card-hint">Click to open!</div>
      </div>

      <div className="card-back">
        <img src={image} className="card-image" alt="gift" />
        <div className="card-message">{message}</div>
        <div className="card-emoji-back">{emoji}</div>
      </div>
    </div>
  )
}

export function CuteGiftCards() {
  const cards = [
    {
      title: 'Special Memory',
      emoji: '💝',
      message: 'Every moment with you is a treasure!',
      color: '#ff6b9d',
      image: memoryImg,       // <-- here
    },
    {
      title: 'Sweet Wishes',
      emoji: '🎂',
      message: 'May Allah bless you with unlimited happiness and good healthy life!',
      color: '#8be9fd',
      image: sweetwishImg,    // <-- here
    },
    {
      title: 'Love & Joy',
      emoji: '🌸',
      message: 'You bring so much happiness!',
      color: '#ffd700',
      image: loveImg,         // <-- here
    },
    {
      title: 'Best Friend',
      emoji: '💖',
      message: 'Thank you for being an amazing friend!',
      color: '#ff8fab',
      image: friendImg,       // <-- here
    },
  ]

  return (
    <section className="cute-gift-cards-section">
      <div className="cards-container">
        <h2 className="cards-title">
          <span className="title-icon">🎁</span>
          Special Messages for You
          <span className="title-icon">🎁</span>
        </h2>

        <div className="kittens-container">
          <AnimatedKitten delay={0} />
          <AnimatedKitten delay={0.5} />
          <AnimatedKitten delay={1} />
        </div>

        <div className="gift-cards-grid">
          {cards.map((card, i) => (
            <GiftCard
              key={i}
              title={card.title}
              emoji={card.emoji}
              message={card.message}
              color={card.color}
              delay={i * 0.2}
              image={card.image}
            />
          ))}
        </div>

        <div className="floating-hearts">
          {Array.from({ length: 10 }).map((_, i) => (
            <div
              key={i}
              className="floating-heart"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
              }}
            >
              💕
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
