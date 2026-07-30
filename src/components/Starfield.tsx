'use client'

import { useEffect, useRef } from 'react'

interface Star {
  x: number
  y: number
  radius: number
  baseAlpha: number
  twinkleSpeed: number
  twinklePhase: number
  driftSpeed: number
}

const STAR_DENSITY = 1 / 3200 // stars per square pixel

function createStars(width: number, height: number): Star[] {
  const count = Math.round(width * height * STAR_DENSITY)
  return Array.from({ length: count }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    radius: Math.random() * 1.1 + 0.25,
    baseAlpha: Math.random() * 0.5 + 0.35,
    twinkleSpeed: Math.random() * 0.6 + 0.15,
    twinklePhase: Math.random() * Math.PI * 2,
    driftSpeed: Math.random() * 3 + 1.5,
  }))
}

export function Starfield() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let stars: Star[] = []
    let width = 0
    let height = 0
    const dpr = Math.min(window.devicePixelRatio || 1, 2)

    function resize() {
      if (!canvas) return
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width * dpr
      canvas.height = height * dpr
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0)
      stars = createStars(width, height)
    }

    resize()
    window.addEventListener('resize', resize)

    function drawStatic() {
      ctx!.clearRect(0, 0, width, height)
      for (const star of stars) {
        ctx!.beginPath()
        ctx!.arc(star.x, star.y, star.radius, 0, Math.PI * 2)
        ctx!.fillStyle = `rgba(244, 243, 255, ${star.baseAlpha})`
        ctx!.fill()
      }
    }

    if (reduceMotion) {
      drawStatic()
      return () => window.removeEventListener('resize', resize)
    }

    let animationId: number

    function tick(time: number) {
      ctx!.clearRect(0, 0, width, height)
      const t = time / 1000

      for (const star of stars) {
        star.y += star.driftSpeed * 0.006
        if (star.y > height) {
          star.y = 0
          star.x = Math.random() * width
        }

        const twinkle = Math.sin(t * star.twinkleSpeed + star.twinklePhase) * 0.35
        const alpha = Math.min(1, Math.max(0.08, star.baseAlpha + twinkle))

        ctx!.beginPath()
        ctx!.arc(star.x, star.y, star.radius, 0, Math.PI * 2)
        ctx!.fillStyle = `rgba(244, 243, 255, ${alpha})`
        ctx!.fill()
      }

      animationId = requestAnimationFrame(tick)
    }

    animationId = requestAnimationFrame(tick)

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-20"
    />
  )
}
