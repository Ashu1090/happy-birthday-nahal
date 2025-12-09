import { useEffect, useState } from 'react'
import { ConfettiCanvas } from '../components/ConfettiCanvas'
import { preloadAudio } from '../components/AudioManager'

export function FinalMessagePage() {
  const [fireConfetti] = useState(true)

  useEffect(() => {
    preloadAudio()
  }, [])

  return (
    <div className="container py-4 py-md-5 position-relative">
      <div className="row justify-content-center">
        <div className="col-lg-8 position-relative">
          <div className="glass-card p-4 p-md-5 position-relative overflow-hidden">
            <ConfettiCanvas fire={fireConfetti} />
            <div className="position-relative">
              <p className="text-uppercase small fw-semibold text-muted mb-2">
                A wish wrapped in stardust
              </p>
              <h2 className="fw-bold magic-gradient-text mb-3">
                I hope this year blooms with happiness — just like you.
              </h2>
              <p className="lead mb-3">
                May your days be filled with soft mornings, golden sunsets, and
                a quiet certainty that you are deeply, wholeheartedly cherished.
                I hope every dream you&apos;ve been gently keeping close steps a
                little nearer, and every room you walk into feels brighter
                because you&apos;re in it.
              </p>
              <p className="mb-0">
                Thank you for being the kind of person who turns ordinary
                moments into warm memories. The world feels kinder with you in
                it, and my world is definitely more magical because of you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

