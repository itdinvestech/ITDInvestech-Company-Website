export type Sample = { x: number; t: number }

/** Apple rubber-band: resistance grows the further past the edge you drag. */
export function rubberband(overshoot: number, dimension: number, constant = 0.55) {
  const limit = Math.max(dimension, 1)
  return (overshoot * limit * constant) / (limit + constant * Math.abs(overshoot))
}

/**
 * Exponential-decay projection from Designing Fluid Interfaces.
 * decelerationRate ≈ 0.998 for a normal scroll coast.
 */
export function project(initialVelocity: number, decelerationRate = 0.998) {
  return (initialVelocity / 1000) * (decelerationRate / (1 - decelerationRate))
}

export function pushSample(samples: Sample[], x: number, t: number) {
  samples.push({ x, t })
  const cutoff = t - 100
  while (samples.length > 1 && samples[0].t < cutoff) samples.shift()
}

/** Pointer velocity in px/s over the recent sample window. */
export function readVelocity(samples: Sample[]) {
  if (samples.length < 2) return 0
  const first = samples[0]
  const last = samples[samples.length - 1]
  const dt = (last.t - first.t) / 1000
  if (dt <= 0.001) return 0
  return (last.x - first.x) / dt
}

export function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

type SpringOptions = {
  /** Damping ratio. 1 = critically damped, ~0.8 = slight settle overshoot. */
  damping?: number
  /** Approximate settle time in seconds. Not a fixed duration. */
  response?: number
  /** Initial velocity in units per second. */
  velocity?: number
  onUpdate: (value: number) => void
  onComplete?: () => void
}

/**
 * Interruptible spring. Cancel returns the live value and velocity so the
 * next gesture can start from the presentation value without a jump.
 */
export function springTo(from: number, to: number, options: SpringOptions) {
  const dampingRatio = options.damping ?? 1
  const response = Math.max(options.response ?? 0.4, 0.05)
  const wn = 4 / response
  const stiffness = wn * wn
  const damp = 2 * dampingRatio * wn

  const state = {
    value: from,
    velocity: options.velocity ?? 0,
    stopped: false,
  }
  let last = performance.now()
  let frame = 0

  const step = (now: number) => {
    if (state.stopped) return
    const dt = Math.min((now - last) / 1000, 0.032)
    last = now
    const accel = stiffness * (to - state.value) - damp * state.velocity
    state.velocity += accel * dt
    state.value += state.velocity * dt
    options.onUpdate(state.value)

    const settled = Math.abs(to - state.value) < 0.5 && Math.abs(state.velocity) < 8
    if (settled) {
      state.value = to
      state.velocity = 0
      options.onUpdate(to)
      options.onComplete?.()
      return
    }
    frame = requestAnimationFrame(step)
  }

  frame = requestAnimationFrame(step)

  return () => {
    state.stopped = true
    cancelAnimationFrame(frame)
    return { value: state.value, velocity: state.velocity }
  }
}
