import { useCallback, useEffect, useRef } from 'react'

type ConfettiPiece = {
  x: number
  y: number
  size: number
  speedY: number
  speedX: number
  rotation: number
  rotationSpeed: number
  color: string
}

const COLORS = ['#ff9ecb', '#ffb86c', '#8be9fd', '#bdb2ff', '#f8f99d']

export function ConfettiCanvas({ fire }: { fire: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const piecesRef = useRef<ConfettiPiece[]>([])
  const frameRef = useRef<number | null>(null)

  const createPieces = useCallback((width: number, height: number) => {
    const pieces: ConfettiPiece[] = []
    const count = 140

    for (let i = 0; i < count; i += 1) {
      pieces.push({
        x: Math.random() * width,
        y: Math.random() * -height,
        size: 6 + Math.random() * 8,
        speedY: 2 + Math.random() * 3,
        speedX: -1 + Math.random() * 2,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (-0.05 + Math.random() * 0.1) * 2,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
      })
    }

    piecesRef.current = pieces
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas || !fire) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resize = () => {
      canvas.width = canvas.clientWidth * window.devicePixelRatio
      canvas.height = canvas.clientHeight * window.devicePixelRatio
    }

    resize()
    createPieces(canvas.width, canvas.height)

    const render = () => {
      if (!ctx || !canvas) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      piecesRef.current.forEach((p) => {
        p.y += p.speedY
        p.x += p.speedX
        p.rotation += p.rotationSpeed

        if (p.y > canvas.height + 20) {
          p.y = -20
          p.x = Math.random() * canvas.width
        }

        ctx.save()
        ctx.translate(p.x, p.y)
        ctx.rotate(p.rotation)
        ctx.fillStyle = p.color
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6)
        ctx.restore()
      })

      frameRef.current = requestAnimationFrame(render)
    }

    render()

    return () => {
      if (frameRef.current != null) {
        cancelAnimationFrame(frameRef.current)
      }
    }
  }, [createPieces, fire])

  return (
    <canvas
      ref={canvasRef}
      className="position-absolute top-0 start-0 w-100 h-100 confetti-layer"
    />
  )
}


