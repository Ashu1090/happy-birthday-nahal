import { useEffect, useRef } from 'react'
import gsap from 'gsap'

const CLOUD_COUNT = 4
const RAINDROPS_PER_CLOUD = 10

export function FloatingClouds() {
  const containerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const ctx = gsap.context(() => {
      const clouds = gsap.utils.toArray<HTMLDivElement>('.cloud')
      clouds.forEach((cloud, index) => {
        const baseDuration = gsap.utils.random(40, 60)
        const startX = index % 2 === 0 ? -220 : window.innerWidth + 220
        const endX = index % 2 === 0 ? window.innerWidth + 220 : -220
        const y = 40 + index * 40

        gsap.set(cloud, { x: startX, y, scale: gsap.utils.random(0.9, 1.1) })

        gsap.to(cloud, {
          x: endX,
          duration: baseDuration,
          ease: 'none',
          repeat: -1,
        })

        const drops = cloud.querySelectorAll<HTMLElement>('.raindrop')
        drops.forEach((drop) => {
          const delay = gsap.utils.random(0, 4)
          const offsetX = gsap.utils.random(-60, 60)
          gsap.set(drop, {
            x: offsetX,
            y: gsap.utils.random(0, 30),
            opacity: 0,
            scaleY: gsap.utils.random(0.6, 1.1),
          })
          gsap.to(drop, {
            y: '+=80',
            opacity: 1,
            duration: gsap.utils.random(1.6, 2.4),
            ease: 'power1.in',
            repeat: -1,
            delay,
            stagger: 0.15,
            onRepeat() {
              gsap.set(drop, {
                x: offsetX + gsap.utils.random(-8, 8),
                y: gsap.utils.random(0, 25),
                opacity: 0,
              })
            },
          })
        })
      })
    }, container)

    return () => {
      ctx.revert()
    }
  }, [])

  const clouds = Array.from({ length: CLOUD_COUNT })

  return (
    <div ref={containerRef} className="cloud-layer">
      {clouds.map((_, cloudIndex) => (
        <div key={`cloud-${cloudIndex}`} className="cloud">
          {Array.from({ length: RAINDROPS_PER_CLOUD }).map((__, dropIndex) => (
            <span
              key={`drop-${cloudIndex}-${dropIndex}`}
              className="raindrop"
            />
          ))}
        </div>
      ))}
    </div>
  )
}


