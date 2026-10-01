import { prefersReducedMotion, project, pushSample, readVelocity, rubberband, springTo, type Sample } from '@/lib/motion'
import { cn } from '@/lib/utils'
import { useCallback, useEffect, useLayoutEffect, useRef, type ReactNode } from 'react'

type MobileNavSheetProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
  children: ReactNode
}

const FLICK = 500

export function MobileNavSheet({ open, onOpenChange, children }: MobileNavSheetProps) {
  const panelRef = useRef<HTMLElement>(null)
  const backdropRef = useRef<HTMLButtonElement>(null)
  const presentation = useRef(0)
  const cancelSpring = useRef<(() => { value: number; velocity: number }) | null>(null)
  const skipEffect = useRef(false)
  const ready = useRef(false)
  const drag = useRef<{
    pointerId: number
    startX: number
    origin: number
    armed: boolean
    samples: Sample[]
  } | null>(null)
  const suppressClick = useRef(false)

  const widthOf = () => panelRef.current?.offsetWidth ?? 320

  const apply = useCallback((x: number) => {
    const panel = panelRef.current
    const backdrop = backdropRef.current
    if (!panel || panel.offsetWidth === 0) {
      if (backdrop) {
        backdrop.style.opacity = '0'
        backdrop.style.pointerEvents = 'none'
      }
      return
    }
    const width = panel.offsetWidth
    presentation.current = x
    if (panel) {
      const closed = x >= width - 1
      panel.inert = closed
      panel.setAttribute('aria-hidden', closed ? 'true' : 'false')
      const reduce = prefersReducedMotion()
      if (reduce) {
        const visible = x < width * 0.5
        panel.style.transform = 'none'
        panel.style.opacity = visible ? '1' : '0'
        panel.style.pointerEvents = visible ? 'auto' : 'none'
        panel.inert = !visible
      } else {
        panel.style.transform = `translate3d(${x}px, 0, 0)`
        panel.style.opacity = '1'
        panel.style.pointerEvents = closed ? 'none' : 'auto'
      }
    }
    if (backdrop) {
      const progress = 1 - Math.min(Math.max(x, 0) / width, 1)
      backdrop.style.opacity = String(reduceMotionProgress(progress))
      backdrop.style.pointerEvents = progress > 0.02 ? 'auto' : 'none'
    }
  }, [])

  const animateTo = useCallback(
    (target: number, velocity = 0, momentum = false) => {
      cancelSpring.current?.()
      const from = presentation.current
      if (prefersReducedMotion()) {
        apply(target)
        return
      }
      cancelSpring.current = springTo(from, target, {
        damping: momentum ? 0.8 : 1,
        response: 0.32,
        velocity,
        onUpdate: apply,
      })
    },
    [apply],
  )

  useLayoutEffect(() => {
    const width = widthOf()
    presentation.current = width
    apply(width)
    ready.current = true
  }, [apply])

  useEffect(() => {
    if (!ready.current) return
    if (skipEffect.current) {
      skipEffect.current = false
      return
    }
    animateTo(open ? 0 : widthOf())
  }, [animateTo, open])

  useEffect(() => {
    if (!open) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onOpenChange(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onOpenChange, open])

  useEffect(() => {
    return () => {
      cancelSpring.current?.()
    }
  }, [])

  const onPointerDown = (event: React.PointerEvent<HTMLElement>) => {
    if (event.button !== 0) return
    cancelSpring.current?.()
    drag.current = {
      pointerId: event.pointerId,
      startX: event.clientX,
      origin: presentation.current,
      armed: false,
      samples: [{ x: event.clientX, t: performance.now() }],
    }
  }

  const onPointerMove = (event: React.PointerEvent<HTMLElement>) => {
    const gesture = drag.current
    if (!gesture || gesture.pointerId !== event.pointerId) return
    pushSample(gesture.samples, event.clientX, performance.now())
    const dx = event.clientX - gesture.startX
    if (!gesture.armed) {
      if (Math.abs(dx) < 10) return
      gesture.armed = true
      event.currentTarget.setPointerCapture(event.pointerId)
    }
    const width = widthOf()
    const raw = gesture.origin + dx
    let next = raw
    if (raw < 0) next = -rubberband(-raw, width)
    else if (raw > width) next = width + rubberband(raw - width, width)
    apply(next)
  }

  const finishPointer = (event: React.PointerEvent<HTMLElement>) => {
    const gesture = drag.current
    drag.current = null
    if (!gesture || gesture.pointerId !== event.pointerId) return
    if (!gesture.armed) return
    suppressClick.current = true

    const width = widthOf()
    const x = presentation.current
    const velocity = readVelocity(gesture.samples)
    let target = x + project(velocity) > width / 2 ? width : 0
    if (velocity > FLICK) target = width
    if (velocity < -FLICK) target = 0

    const willOpen = target === 0
    if (willOpen !== open) {
      skipEffect.current = true
      onOpenChange(willOpen)
    }
    animateTo(target, velocity, Math.abs(velocity) > 200)
  }

  return (
    <>
      <button
        ref={backdropRef}
        type="button"
        tabIndex={-1}
        aria-label="Close menu"
        className="scrim fixed inset-0 z-[60] opacity-0 lg:hidden"
        style={{ pointerEvents: 'none' }}
        onClick={() => onOpenChange(false)}
      />
      <aside
        ref={panelRef}
        id="mobile-nav-panel"
        className={cn(
          'fixed inset-y-0 right-0 z-[70] flex w-[min(100vw,22rem)] flex-col bg-background shadow-[0_0_40px_hsl(0_0%_0%/0.18)] will-change-transform lg:hidden',
        )}
        style={{ pointerEvents: 'none', touchAction: 'pan-y', transform: 'translate3d(100%, 0, 0)' }}
        onClickCapture={(event) => {
          if (!suppressClick.current) return
          suppressClick.current = false
          event.preventDefault()
          event.stopPropagation()
        }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={finishPointer}
        onPointerCancel={finishPointer}
      >
        <span
          aria-hidden
          className="absolute left-1.5 top-1/2 h-10 w-1 -translate-y-1/2 rounded-full bg-foreground/15"
        />
        {children}
      </aside>
    </>
  )
}

function reduceMotionProgress(progress: number) {
  if (typeof window === 'undefined') return progress
  return prefersReducedMotion() ? (progress > 0.5 ? 1 : 0) : progress
}
