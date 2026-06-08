import { BrandMark } from '@/components/BrandMark'
import { cn } from '@/lib/utils'

type BrandLogoProps = {
  className?: string
  iconSize?: number
  showWordmark?: boolean
  compact?: boolean
}

export default function BrandLogo({
  className,
  iconSize = 40,
  showWordmark = true,
  compact = false,
}: BrandLogoProps) {
  return (
    <span className={cn('inline-flex items-center gap-3', className)}>
      <BrandMark size={iconSize} className="rounded-lg shadow-sm ring-1 ring-black/5" />
      {showWordmark && (
        <span className={cn('flex flex-col leading-none text-left', compact && 'hidden min-[420px]:flex')}>
          <span className="text-lg font-extrabold tracking-tight text-[#303956] sm:text-xl">
            ITD
            <span className="bg-gradient-to-r from-[#1e40af] to-[#6366f1] bg-clip-text text-transparent">
              Investech
            </span>
          </span>
          {!compact && (
            <span className="mt-1 hidden text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground sm:block">
              Advanced Software Engineering
            </span>
          )}
        </span>
      )}
    </span>
  )
}
