import { useEffect, useState } from 'react'
import './BirthdayWishes.css'

const birthdayWishes = [
  "Happy Birthday Nahal! 🎉",
  "Wishing you a day filled with joy and laughter! ✨",
  "May all your dreams come true! 🌟",
  "You're an amazing friend! 💖",
  "Here's to another year of wonderful memories! 🎂",
  "May your special day be as beautiful as you are! 🌸",
  "Sending you lots of love and happiness! 💕",
  "Hope your birthday is absolutely magical! 🎊",
  "You deserve all the happiness in the world! 🌈",
  "Celebrating you today and always! 🥳",
]

export function BirthdayWishes() {
  const [visibleWishes, setVisibleWishes] = useState<string[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    // Show wishes one by one with delay
    if (currentIndex < birthdayWishes.length) {
      const timer = setTimeout(() => {
        setVisibleWishes((prev) => [...prev, birthdayWishes[currentIndex]])
        setCurrentIndex((prev) => prev + 1)
      }, 800)

      return () => clearTimeout(timer)
    }
  }, [currentIndex])

  return (
    <div className="birthday-wishes-container">
      <div className="wishes-header">
        <h2 className="wishes-title">
          <span className="heart-icon">💝</span>
          Birthday Wishes for Nahal
          <span className="heart-icon">💝</span>
        </h2>
      </div>
      <div className="wishes-list">
        {visibleWishes.map((wish, index) => (
          <div
            key={index}
            className="wish-line"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <span className="wish-text">{wish}</span>
            <span className="wish-sparkle">✨</span>
          </div>
        ))}
      </div>
    </div>
  )
}

