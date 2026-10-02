import {
  Children,
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  type ReactNode,
} from 'react'
import { prefersReducedMotion, project, pushSample, readVelocity, springTo, type Sample } from '@/lib/motion'
import { cn } from '@/lib/utils'

const COPIES = 3
const RESUME_MS = 1200
const AXIS_SLOP = 10

type LoopCarouselProps = {
  children: ReactNode
  speed?: number
  gap?: number
  className?: string
  viewportClassName?: string
}

type Axis = 'x' | 'y'

function visibleCount() {
  if (typeof window === 'undefined') return 4
  if (window.matchMedia('(min-width: 1024px)').matches) return 4
  if (window.matchMedia('(min-width: 640px)').matches) return 2
  return 1
}

export function LoopCarousel({
  children,
  speed = 32,
  gap = 24,
  className,
  viewportClassName,
}: LoopCarouselProps) {
  const viewportRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const setRef = useRef<HTMLDivElement>(null)
  const offsetRef = useRef(0)
  const widthRef = useRef(0)
  const stepRef = useRef(0)
  const pausedRef = useRef(false)
  const autoplayRef = useRef(true)
  const draggingRef = useRef(false)
  const hoveringRef = useRef(false)
  const dragStartX = useRef(0)
  const dragStartY = useRef(0)
  const dragStartOffset = useRef(0)
  const resumeTimer = useRef(0)
  const reduceMotionRef = useRef(false)
  const samplesRef = useRef<Sample[]>([])
  const axisRef = useRef<Axis | null>(null)
  const pointerIdRef = useRef<number | null>(null)
  const suppressClick = useRef(false)
  const cancelSnap = useRef<(() => { value: number; velocity: number }) | null>(null)

  const items = Children.toArray(children)

  const wrapOffset = useCallback((value: number) => {
    const width = widthRef.current
    if (width <= 0) return value
    return ((value % width) + width) % width
  }, [])

  const apply = useCallback(() => {
    const track = trackRef.current
    const viewport = viewportRef.current
    if (!track || widthRef.current <= 0) return
    const wrapped = wrapOffset(offsetRef.current)
    track.style.transform = `translate3d(${-wrapped}px, 0, 0)`
    if (viewport) viewport.dataset.offset = String(Math.round(wrapped))
  }, [wrapOffset])

  const measure = useCallback(() => {
    const viewport = viewportRef.current
    if (viewport) {
      const count = visibleCount()
      const bleed = count === 1 ? gap + 40 : 0
      const width = (viewport.clientWidth - gap * (count - 1) - bleed) / count
      const card = Math.max(width, 0)
      viewport.style.setProperty('--card-w', `${card}px`)
      viewport.style.setProperty('--card-gap', `${gap}px`)
    }
    widthRef.current = setRef.current?.offsetWidth ?? 0
    if (items.length > 0 && widthRef.current > 0) {
      stepRef.current = widthRef.current / items.length
    }
    apply()
  }, [apply, gap, items.length])

  const pause = useCallback(() => {
    pausedRef.current = true
    window.clearTimeout(resumeTimer.current)
  }, [])

  const scheduleResume = useCallback(() => {
    window.clearTimeout(resumeTimer.current)
    resumeTimer.current = window.setTimeout(() => {
      if (!draggingRef.current && !hoveringRef.current) pausedRef.current = false
    }, RESUME_MS)
  }, [])

  const stopSnap = useCallback(() => {
    cancelSnap.current?.()
    cancelSnap.current = null
  }, [])

  const snapToCard = useCallback(
    (velocity: number) => {
      stopSnap()
      const step = stepRef.current
      if (step <= 0) {
        scheduleResume()
        return
      }
      const current = offsetRef.current
      const projected = current + project(velocity)
      const target = Math.round(projected / step) * step
      const momentum = Math.abs(velocity) > 200

      if (prefersReducedMotion() || Math.abs(target - current) < 0.5) {
        offsetRef.current = wrapOffset(target)
        apply()
        scheduleResume()
        return
      }

      pausedRef.current = true
      cancelSnap.current = springTo(current, target, {
        damping: momentum ? 0.8 : 1,
        response: 0.35,
        velocity,
        onUpdate: (value) => {
          offsetRef.current = value
          apply()
        },
        onComplete: () => {
          offsetRef.current = wrapOffset(offsetRef.current)
          apply()
          cancelSnap.current = null
          if (!draggingRef.current && !hoveringRef.current) scheduleResume()
        },
      })
    },
    [apply, scheduleResume, stopSnap, wrapOffset],
  )

  useLayoutEffect(() => {
    measure()
    const viewport = viewportRef.current
    const set = setRef.current
    if (!viewport || typeof ResizeObserver === 'undefined') return
    const observer = new ResizeObserver(measure)
    observer.observe(viewport)
    if (set) observer.observe(set)
    return () => observer.disconnect()
  }, [measure])

  useEffect(() => {
    reduceMotionRef.current = prefersReducedMotion()
    const desktop = window.matchMedia('(min-width: 1024px)')
    const syncAutoplay = () => {
      autoplayRef.current = desktop.matches
    }
    syncAutoplay()
    desktop.addEventListener('change', syncAutoplay)

    const onResize = () => measure()
    window.addEventListener('resize', onResize)

    let frame = 0
    let last = performance.now()
    const tick = (now: number) => {
      const dt = Math.min(now - last, 48)
      last = now
      if (autoplayRef.current && !pausedRef.current && !reduceMotionRef.current && widthRef.current > 0) {
        offsetRef.current += (speed * dt) / 1000
        apply()
      }
      frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => {
      cancelAnimationFrame(frame)
      stopSnap()
      desktop.removeEventListener('change', syncAutoplay)
      window.removeEventListener('resize', onResize)
      window.clearTimeout(resumeTimer.current)
    }
  }, [apply, measure, speed, stopSnap])

  useEffect(() => {
    const viewport = viewportRef.current
    if (!viewport) return
    const onWheel = (event: WheelEvent) => {
      if (Math.abs(event.deltaX) <= Math.abs(event.deltaY)) return
      event.preventDefault()
      stopSnap()
      pause()
      offsetRef.current += event.deltaX
      apply()
      if (!hoveringRef.current) scheduleResume()
    }
    viewport.addEventListener('wheel', onWheel, { passive: false })
    return () => viewport.removeEventListener('wheel', onWheel)
  }, [apply, pause, scheduleResume, stopSnap])

  return (
    <div className={cn('relative', className)}>
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 hidden w-8 bg-gradient-to-r from-background to-transparent sm:block sm:w-14" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 hidden w-8 bg-gradient-to-l from-background to-transparent sm:block sm:w-14" />
      <div
        ref={viewportRef}
        data-loop-carousel=""
        className={cn(
          'cursor-grab select-none overflow-hidden overscroll-x-contain touch-pan-y active:cursor-grabbing',
          viewportClassName,
        )}
        onPointerEnter={() => {
          hoveringRef.current = true
          if (autoplayRef.current) pause()
        }}
        onPointerLeave={() => {
          hoveringRef.current = false
          if (draggingRef.current) return
          scheduleResume()
        }}
        onPointerDown={(event) => {
          if (event.button !== 0) return
          stopSnap()
          pointerIdRef.current = event.pointerId
          axisRef.current = null
          draggingRef.current = false
          dragStartX.current = event.clientX
          dragStartY.current = event.clientY
          dragStartOffset.current = offsetRef.current
          samplesRef.current = [{ x: event.clientX, t: performance.now() }]
        }}
        onPointerMove={(event) => {
          if (pointerIdRef.current !== event.pointerId) return
          const dx = event.clientX - dragStartX.current
          const dy = event.clientY - dragStartY.current
          if (!axisRef.current) {
            if (Math.abs(dx) < AXIS_SLOP && Math.abs(dy) < AXIS_SLOP) return
            if (Math.abs(dy) > Math.abs(dx)) {
              axisRef.current = 'y'
              pointerIdRef.current = null
              return
            }
            axisRef.current = 'x'
            draggingRef.current = true
            pause()
            event.currentTarget.setPointerCapture(event.pointerId)
          }
          if (axisRef.current !== 'x') return
          pushSample(samplesRef.current, event.clientX, performance.now())
          offsetRef.current = dragStartOffset.current - dx
          apply()
        }}
        onPointerUp={(event) => {
          if (pointerIdRef.current !== event.pointerId && axisRef.current !== 'x') {
            pointerIdRef.current = null
            return
          }
          const dragged = axisRef.current === 'x'
          pointerIdRef.current = null
          axisRef.current = null
          draggingRef.current = false
          if (!dragged) {
            if (!hoveringRef.current) scheduleResume()
            return
          }
          suppressClick.current = true
          snapToCard(-readVelocity(samplesRef.current))
        }}
        onPointerCancel={() => {
          const dragged = axisRef.current === 'x'
          pointerIdRef.current = null
          axisRef.current = null
          draggingRef.current = false
          if (dragged) snapToCard(0)
          else if (!hoveringRef.current) scheduleResume()
        }}
        onClickCapture={(event) => {
          if (!suppressClick.current) return
          suppressClick.current = false
          event.preventDefault()
          event.stopPropagation()
        }}
      >
        <div ref={trackRef} className="flex w-max items-stretch will-change-transform">
          {Array.from({ length: COPIES }, (_, copy) => (
            <div
              key={copy}
              ref={copy === 0 ? setRef : undefined}
              className="flex shrink-0 items-stretch"
              style={{ gap, paddingRight: gap }}
              aria-hidden={copy > 0 || undefined}
            >
              {items.map((item, index) => (
                <div key={`${copy}-${index}`} className="flex h-full w-[var(--card-w)] shrink-0 flex-col">
                  {item}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
