import {
  Children,
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  type ReactNode,
} from 'react'
import { cn } from '@/lib/utils'

const COPIES = 3
const RESUME_MS = 1200

type LoopCarouselProps = {
  children: ReactNode
  speed?: number
  gap?: number
  className?: string
  viewportClassName?: string
}

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
  const pausedRef = useRef(false)
  const draggingRef = useRef(false)
  const hoveringRef = useRef(false)
  const dragStartX = useRef(0)
  const dragStartOffset = useRef(0)
  const resumeTimer = useRef(0)
  const reduceMotionRef = useRef(false)

  const items = Children.toArray(children)

  const wrapOffset = useCallback((value: number) => {
    const width = widthRef.current
    if (width <= 0) return value
    return ((value % width) + width) % width
  }, [])

  const apply = useCallback(() => {
    const track = trackRef.current
    if (!track || widthRef.current <= 0) return
    offsetRef.current = wrapOffset(offsetRef.current)
    track.style.transform = `translate3d(${-offsetRef.current}px, 0, 0)`
  }, [wrapOffset])

  const measure = useCallback(() => {
    const viewport = viewportRef.current
    if (viewport) {
      const count = visibleCount()
      const width = (viewport.clientWidth - gap * (count - 1)) / count
      viewport.style.setProperty('--card-w', `${Math.max(width, 0)}px`)
      viewport.style.setProperty('--card-gap', `${gap}px`)
    }
    widthRef.current = setRef.current?.offsetWidth ?? 0
    apply()
  }, [apply, gap])

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
    reduceMotionRef.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const onResize = () => measure()
    window.addEventListener('resize', onResize)

    let frame = 0
    let last = performance.now()
    const tick = (now: number) => {
      const dt = Math.min(now - last, 48)
      last = now
      if (!pausedRef.current && !reduceMotionRef.current && widthRef.current > 0) {
        offsetRef.current += (speed * dt) / 1000
        apply()
      }
      frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('resize', onResize)
      window.clearTimeout(resumeTimer.current)
    }
  }, [apply, measure, speed])

  useEffect(() => {
    const viewport = viewportRef.current
    if (!viewport) return
    const onWheel = (event: WheelEvent) => {
      if (event.deltaY === 0 && event.deltaX === 0) return
      event.preventDefault()
      pause()
      offsetRef.current += event.deltaX !== 0 ? event.deltaX : event.deltaY
      apply()
      if (!hoveringRef.current) scheduleResume()
    }
    viewport.addEventListener('wheel', onWheel, { passive: false })
    return () => viewport.removeEventListener('wheel', onWheel)
  }, [apply, pause, scheduleResume])

  return (
    <div className={cn('relative', className)}>
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r from-background to-transparent sm:w-14" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l from-background to-transparent sm:w-14" />
      <div
        ref={viewportRef}
        className={cn(
          'cursor-grab select-none overflow-hidden touch-pan-x active:cursor-grabbing',
          viewportClassName,
        )}
        onPointerEnter={() => {
          hoveringRef.current = true
        }}
        onPointerLeave={() => {
          hoveringRef.current = false
          draggingRef.current = false
          scheduleResume()
        }}
        onPointerDown={(event) => {
          if ((event.target as HTMLElement).closest('button, a, input, textarea')) return
          draggingRef.current = true
          dragStartX.current = event.clientX
          dragStartOffset.current = offsetRef.current
          pause()
          event.currentTarget.setPointerCapture(event.pointerId)
        }}
        onPointerMove={(event) => {
          if (draggingRef.current) {
            offsetRef.current = dragStartOffset.current - (event.clientX - dragStartX.current)
            apply()
            return
          }
          if (hoveringRef.current) pause()
        }}
        onPointerUp={() => {
          draggingRef.current = false
          if (!hoveringRef.current) scheduleResume()
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
