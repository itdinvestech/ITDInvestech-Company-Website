import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { prefersReducedMotion, springTo } from "@/lib/motion"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const SCROLL_HEADER_OFFSET = 64

let cancelScroll: (() => void) | null = null

export function smoothScrollTo(targetY: number): () => void {
  const startY = window.scrollY
  const distance = targetY - startY

  if (Math.abs(distance) < 2 || prefersReducedMotion()) {
    window.scrollTo(0, targetY)
    return () => {}
  }

  let detach = () => {}
  const response = Math.min(0.9, Math.max(0.36, Math.abs(distance) / 2800))
  const stopSpring = springTo(startY, targetY, {
    damping: 1,
    response,
    onUpdate: (value) => window.scrollTo(0, value),
    onComplete: () => detach(),
  })

  const stop = () => {
    stopSpring()
    detach()
  }

  const onUser = () => stop()
  detach = () => {
    window.removeEventListener('wheel', onUser)
    window.removeEventListener('touchstart', onUser)
    window.removeEventListener('keydown', onUser)
  }

  window.addEventListener('wheel', onUser, { passive: true })
  window.addEventListener('touchstart', onUser, { passive: true })
  window.addEventListener('keydown', onUser)

  return stop
}

export function scrollToSection(
  sectionId: string,
  options: { headerOffset?: number; duration?: number } = {},
) {
  const element = document.getElementById(sectionId)
  if (!element) return

  const headerOffset = options.headerOffset ?? SCROLL_HEADER_OFFSET
  const offset = element.getBoundingClientRect().top + window.scrollY - headerOffset

  cancelScroll?.()
  cancelScroll = smoothScrollTo(offset)
}




