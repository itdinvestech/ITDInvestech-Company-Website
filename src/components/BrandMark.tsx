import { cn } from '@/lib/utils'
import { useId } from 'react'

type BrandMarkProps = {
  className?: string
  size?: number
}

export function BrandMark({ className, size = 36 }: BrandMarkProps) {
  const gradientId = useId()

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      width={size}
      height={size}
      role="img"
      aria-label="ITD Investech"
      className={cn('shrink-0', className)}
    >
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
          <stop stopColor="#303956" />
          <stop offset="1" stopColor="#1e40af" />
        </linearGradient>
      </defs>
      <rect width="32" height="32" rx="8" fill={`url(#${gradientId})`} />
      <text
        x="16"
        y="20.5"
        textAnchor="middle"
        fill="#ffffff"
        fontFamily="Segoe UI, system-ui, sans-serif"
        fontSize="8"
        fontWeight="800"
        letterSpacing="0.08em"
      >
        ITD
      </text>
      <path
        d="M9.25 17.25 6.75 19.75 9.25 22.25M22.75 17.25 25.25 19.75 22.75 22.25"
        fill="none"
        stroke="#93c5fd"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
