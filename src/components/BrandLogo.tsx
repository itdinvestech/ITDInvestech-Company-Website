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
      <BrandMark size={iconSize} className="rounded-lg shadow-sm ring-1 ring-border/60" />
      {showWordmark && (
        <span className={cn('flex flex-col leading-none text-left', compact && 'hidden min-[420px]:flex')}>
          <span className="text-[17px] font-semibold tracking-[-0.02em] text-foreground">
            ITD
            <span className="text-primary">Investech</span>
          </span>
          {!compact && (
            <span className="mt-1 hidden text-[11px] font-medium tracking-normal text-muted-foreground sm:block">
              Advanced Software Engineering
            </span>
          )}
        </span>
      )}
    </span>
  )
}
