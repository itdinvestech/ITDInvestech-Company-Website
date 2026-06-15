import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const SCROLL_HEADER_OFFSET = 72
export const SCROLL_DURATION = 1600

let cancelScroll: (() => void) | null = null

export function smoothScrollTo(targetY: number, duration = SCROLL_DURATION): () => void {
  const startY = window.scrollY
  const distance = targetY - startY
  const startTime = performance.now()
  let frameId = 0

  const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3)

  const step = (currentTime: number) => {
    const progress = Math.min((currentTime - startTime) / duration, 1)
    window.scrollTo(0, startY + distance * easeOutCubic(progress))
    if (progress < 1) {
      frameId = requestAnimationFrame(step)
    }
  }

  frameId = requestAnimationFrame(step)
  return () => cancelAnimationFrame(frameId)
}

export function scrollToSection(
  sectionId: string,
  options: { headerOffset?: number; duration?: number } = {},
) {
  const element = document.getElementById(sectionId)
  if (!element) return

  const headerOffset = options.headerOffset ?? SCROLL_HEADER_OFFSET
  const duration = options.duration ?? SCROLL_DURATION
  const offset = element.getBoundingClientRect().top + window.scrollY - headerOffset

  cancelScroll?.()
  cancelScroll = smoothScrollTo(offset, duration)
}




