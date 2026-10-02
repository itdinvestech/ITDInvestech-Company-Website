import {
  Briefcase,
  Building2,
  Clapperboard,
  Factory,
  Film,
  GraduationCap,
  Layers,
  Stethoscope,
  Store,
  UtensilsCrossed,
  Warehouse,
} from 'lucide-react'
import { useCallback, useEffect, useLayoutEffect, useRef } from 'react'
import { pushSample, readVelocity, type Sample } from '@/lib/motion'

const ITEMS = [
  { icon: GraduationCap, label: 'Education' },
  { icon: Stethoscope, label: 'Healthcare' },
  { icon: Store, label: 'Retail' },
  { icon: Warehouse, label: 'Inventory' },
  { icon: Factory, label: 'ERP' },
  { icon: Building2, label: 'Property' },
  { icon: Briefcase, label: 'Hiring' },
  { icon: UtensilsCrossed, label: 'Food delivery' },
  { icon: Film, label: 'Movies' },
  { icon: Clapperboard, label: 'Production tools' },
  { icon: Layers, label: 'Custom software' },
]

const COPIES = 3
const SPEED = 42
const RESUME_MS = 1200

function MarqueeSet({
  setRef,
  hidden,
}: {
  setRef?: React.Ref<HTMLDivElement>
  hidden?: boolean
}) {
  return (
    <div
      ref={setRef}
      className="flex shrink-0 items-center gap-10 pr-10"
      aria-hidden={hidden || undefined}
    >
      {ITEMS.map((item) => {
        const Icon = item.icon
        return (
          <div key={item.label} className="flex items-center gap-2.5 text-muted-foreground">
            <Icon className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium whitespace-nowrap">{item.label}</span>
          </div>
        )
      })}
    </div>
  )
}

export function IndustryMarquee() {
  const viewportRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const setRef = useRef<HTMLDivElement>(null)
  const offsetRef = useRef(0)
  const widthRef = useRef(0)
  const pausedRef = useRef(false)
  const draggingRef = useRef(false)
  const hoveringRef = useRef(false)
  const dragStartX = useRef(0)
  const dragStartY = useRef(0)
  const dragStartOffset = useRef(0)
  const resumeTimer = useRef(0)
  const reduceMotionRef = useRef(false)
  const samplesRef = useRef<Sample[]>([])
  const armedRef = useRef(false)
  const axisLocked = useRef(false)
  const pointerIdRef = useRef<number | null>(null)
  const glideFrame = useRef(0)

  const wrapOffset = useCallback((value: number) => {
    const width = widthRef.current
    if (width <= 0) return value
    return ((value % width) + width) % width
  }, [])

  const apply = useCallback(() => {
    const track = trackRef.current
    const viewport = viewportRef.current
    const width = widthRef.current
    if (!track || width <= 0) return
    offsetRef.current = wrapOffset(offsetRef.current)
    track.style.transform = `translate3d(${-offsetRef.current}px, 0, 0)`
    if (viewport) {
      viewport.dataset.offset = String(Math.round(offsetRef.current))
      viewport.dataset.paused = pausedRef.current ? '1' : '0'
    }
  }, [wrapOffset])

  const measure = useCallback(() => {
    widthRef.current = setRef.current?.offsetWidth ?? 0
    apply()
  }, [apply])

  const pause = useCallback(() => {
    pausedRef.current = true
    window.clearTimeout(resumeTimer.current)
    apply()
  }, [apply])

  const scheduleResume = useCallback(() => {
    window.clearTimeout(resumeTimer.current)
    resumeTimer.current = window.setTimeout(() => {
      if (!draggingRef.current && !hoveringRef.current) {
        pausedRef.current = false
        apply()
      }
    }, RESUME_MS)
  }, [apply])

  const stopGlide = useCallback(() => {
    cancelAnimationFrame(glideFrame.current)
  }, [])

  const startGlide = useCallback(
    (velocity: number) => {
      stopGlide()
      if (reduceMotionRef.current || Math.abs(velocity) < 40) {
        if (!hoveringRef.current) scheduleResume()
        return
      }
      pausedRef.current = true
      let speedNow = velocity
      let last = performance.now()
      const step = (now: number) => {
        const dt = Math.min(now - last, 34)
        last = now
        speedNow *= Math.pow(0.998, dt)
        offsetRef.current += (speedNow * dt) / 1000
        apply()
        if (Math.abs(speedNow) < 18) {
          if (!hoveringRef.current && !draggingRef.current) scheduleResume()
          return
        }
        glideFrame.current = requestAnimationFrame(step)
      }
      glideFrame.current = requestAnimationFrame(step)
    },
    [apply, scheduleResume, stopGlide],
  )

  useLayoutEffect(() => {
    measure()
    const node = setRef.current
    if (!node || typeof ResizeObserver === 'undefined') return
    const observer = new ResizeObserver(measure)
    observer.observe(node)
    return () => observer.disconnect()
  }, [measure])

  useEffect(() => {
    reduceMotionRef.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    let frame = 0
    let last = performance.now()

    const tick = (now: number) => {
      const dt = Math.min(now - last, 48)
      last = now
      if (!pausedRef.current && !reduceMotionRef.current && widthRef.current > 0) {
        offsetRef.current += (SPEED * dt) / 1000
        apply()
      }
      frame = requestAnimationFrame(tick)
    }

    frame = requestAnimationFrame(tick)
    return () => {
      cancelAnimationFrame(frame)
      cancelAnimationFrame(glideFrame.current)
      window.clearTimeout(resumeTimer.current)
    }
  }, [apply])

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
    <div aria-label="Industries we build for" className="relative mt-14 overflow-hidden pb-7 pt-2 sm:mt-16 sm:pb-9">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent sm:w-24" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent sm:w-24" />
      <p className="eyebrow mb-4 text-center">Software we build and host across</p>
      <div
        ref={viewportRef}
        data-marquee="industries"
        className="cursor-grab select-none overflow-hidden overscroll-x-contain touch-pan-y active:cursor-grabbing"
        onPointerEnter={() => {
          hoveringRef.current = true
          pause()
        }}
        onPointerLeave={() => {
          hoveringRef.current = false
          if (draggingRef.current) return
          scheduleResume()
        }}
        onPointerDown={(event) => {
          if (event.button !== 0) return
          stopGlide()
          draggingRef.current = false
          armedRef.current = false
          dragStartX.current = event.clientX
          dragStartY.current = event.clientY
          dragStartOffset.current = offsetRef.current
          samplesRef.current = [{ x: event.clientX, t: performance.now() }]
          pointerIdRef.current = event.pointerId
        }}
        onPointerMove={(event) => {
          if (pointerIdRef.current !== event.pointerId) return
          const dx = event.clientX - dragStartX.current
          const dy = event.clientY - dragStartY.current
          if (!armedRef.current && !axisLocked.current) {
            if (Math.abs(dx) < 10 && Math.abs(dy) < 10) return
            if (Math.abs(dy) > Math.abs(dx)) {
              pointerIdRef.current = null
              axisLocked.current = false
              return
            }
            axisLocked.current = true
            armedRef.current = true
            draggingRef.current = true
            pause()
            event.currentTarget.setPointerCapture(event.pointerId)
          }
          if (!armedRef.current) return
          pushSample(samplesRef.current, event.clientX, performance.now())
          offsetRef.current = dragStartOffset.current - dx
          apply()
        }}
        onPointerUp={(event) => {
          if (pointerIdRef.current !== null && pointerIdRef.current !== event.pointerId) return
          const wasDrag = armedRef.current
          draggingRef.current = false
          armedRef.current = false
          axisLocked.current = false
          pointerIdRef.current = null
          if (wasDrag) {
            startGlide(-readVelocity(samplesRef.current))
            return
          }
          if (!hoveringRef.current) scheduleResume()
        }}
        onPointerCancel={() => {
          draggingRef.current = false
          armedRef.current = false
          axisLocked.current = false
          pointerIdRef.current = null
          if (!hoveringRef.current) scheduleResume()
        }}
      >
        <div ref={trackRef} className="flex w-max will-change-transform">
          {Array.from({ length: COPIES }, (_, copy) => (
            <MarqueeSet key={copy} setRef={copy === 0 ? setRef : undefined} hidden={copy > 0} />
          ))}
        </div>
      </div>
    </div>
  )
}
