import { cn } from '@/lib/utils'

type BrandLogoProps = {
  className?: string
  variant?: 'dark' | 'light'
}

export default function BrandLogo({ className, variant = 'dark' }: BrandLogoProps) {
  const isLight = variant === 'light'
  return (
    <span className={cn('inline-flex items-center gap-2.5', className)}>
      <img
        src="/favicon.svg"
        alt=""
        aria-hidden="true"
        className="h-9 w-9 shrink-0 rounded-lg"
      />
      <span className="leading-tight">
        <span className={cn(
          'block text-[10px] font-bold uppercase tracking-[0.2em]',
          isLight ? 'text-white/70' : 'text-[#667eea]',
        )}>
          ITD
        </span>
        <span className={cn(
          'block text-sm font-semibold sm:text-base',
          isLight ? 'text-white' : 'text-[#303956]',
        )}>
          Investech
        </span>
      </span>
    </span>
  )
}
