import { useEffect, useRef } from 'react'
import gsap from 'gsap'

const slides = [
  {
    accent: '💫',
    title: 'Your Laugh',
    caption: 'The way you laugh makes even the ordinary days feel like a festival.',
  },
  {
    accent: '🌸',
    title: 'Little Moments',
    caption:
      'The quiet talks, the shared glances, the random jokes—those are my favorite memories.',
  },
  {
    accent: '💖',
    title: 'Your Kindness',
    caption:
      'You have a gentle way of making everyone around you feel seen, safe, and special.',
  },
]

export function GalleryPage() {
  const trackRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLDivElement>('.memory-card')
      gsap.set(cards, { opacity: 0, y: 40 })
      gsap.to(cards, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
      })

      gsap.to(track, {
        xPercent: -20,
        duration: 40,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      })
    }, track)

    return () => ctx.revert()
  }, [])

  return (
    <div className="container py-4 py-md-5">
      <div className="row justify-content-center mb-4 text-center">
        <div className="col-lg-8">
          <h2 className="fw-bold magic-gradient-text mb-3">
            Tiny Snapshots of a Magical You
          </h2>
          <p className="lead text-muted">
            Here&apos;s a little carousel of memories—placeholders for all the
            beautiful moments you&apos;ve already created, and all the ones still
            waiting to bloom.
          </p>
        </div>
      </div>

      <div className="position-relative overflow-hidden">
        <div
          ref={trackRef}
          className="d-flex gap-4"
          style={{ willChange: 'transform' }}
        >
          {slides.map((slide) => (
            <div
              key={slide.title}
              className="memory-card glass-card p-3 p-md-4 flex-shrink-0"
              style={{ width: '320px' }}
            >
              <div className="mb-3 text-center">
                <div
                  className="d-inline-flex align-items-center justify-content-center magic-gradient-bg neon-glow"
                  style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    fontSize: '2rem',
                  }}
                >
                  {slide.accent}
                </div>
              </div>
              <h5 className="fw-semibold mb-2 text-center">{slide.title}</h5>
              <p className="small text-muted mb-0">{slide.caption}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}


