import { cn } from '@/lib/utils'
import { useEffect, useRef } from 'react'

type Node = {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
}

type NetworkCanvasProps = {
  className?: string
}

export function NetworkCanvas({ className }: NetworkCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const context = canvas.getContext('2d')
    if (!context) return

    let animationFrame = 0
    let nodes: Node[] = []
    const pointer = { x: 0, y: 0, active: false }

    const resize = () => {
      const parent = canvas.parentElement
      if (!parent) return

      const ratio = window.devicePixelRatio || 1
      const width = parent.clientWidth
      const height = parent.clientHeight

      canvas.width = width * ratio
      canvas.height = height * ratio
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      context.setTransform(ratio, 0, 0, ratio, 0, 0)

      const count = Math.max(18, Math.floor((width * height) / 12000))
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        radius: Math.random() * 1.6 + 1.2,
      }))
    }

    const onMove = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect()
      pointer.x = event.clientX - rect.left
      pointer.y = event.clientY - rect.top
      pointer.active = true
    }

    const onLeave = () => {
      pointer.active = false
    }

    const draw = () => {
      const width = canvas.clientWidth
      const height = canvas.clientHeight

      context.clearRect(0, 0, width, height)

      for (const node of nodes) {
        node.x += node.vx
        node.y += node.vy

        if (node.x <= 0 || node.x >= width) node.vx *= -1
        if (node.y <= 0 || node.y >= height) node.vy *= -1

        if (pointer.active) {
          const dx = pointer.x - node.x
          const dy = pointer.y - node.y
          const distance = Math.hypot(dx, dy)
          if (distance < 120) {
            node.x -= dx * 0.015
            node.y -= dy * 0.015
          }
        }
      }

      for (let i = 0; i < nodes.length; i += 1) {
        for (let j = i + 1; j < nodes.length; j += 1) {
          const a = nodes[i]
          const b = nodes[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const distance = Math.hypot(dx, dy)

          if (distance < 130) {
            const alpha = 1 - distance / 130
            context.strokeStyle = `rgba(59, 130, 246, ${alpha * 0.35})`
            context.lineWidth = 1
            context.beginPath()
            context.moveTo(a.x, a.y)
            context.lineTo(b.x, b.y)
            context.stroke()
          }
        }
      }

      for (const node of nodes) {
        context.fillStyle = 'rgba(96, 165, 250, 0.85)'
        context.beginPath()
        context.arc(node.x, node.y, node.radius, 0, Math.PI * 2)
        context.fill()
      }

      if (pointer.active) {
        context.strokeStyle = 'rgba(99, 102, 241, 0.25)'
        context.lineWidth = 1.5
        context.beginPath()
        context.arc(pointer.x, pointer.y, 80, 0, Math.PI * 2)
        context.stroke()
      }

      animationFrame = window.requestAnimationFrame(draw)
    }

    resize()
    draw()

    const observer = new ResizeObserver(resize)
    observer.observe(canvas.parentElement ?? canvas)
    canvas.addEventListener('pointermove', onMove)
    canvas.addEventListener('pointerleave', onLeave)

    return () => {
      window.cancelAnimationFrame(animationFrame)
      observer.disconnect()
      canvas.removeEventListener('pointermove', onMove)
      canvas.removeEventListener('pointerleave', onLeave)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className={cn('pointer-events-auto h-full w-full opacity-80', className)}
      aria-hidden="true"
    />
  )
}
