import { cn } from '@/lib/utils'

type BrandLogoProps = {
  className?: string
}

export default function BrandLogo({ className }: BrandLogoProps) {
  return (
    <span className={cn('inline-flex items-center gap-2.5', className)}>
      <img
        src="/favicon.svg"
        alt="ITD"
        className="h-9 w-9 shrink-0 rounded-lg"
      />
      <span className="text-xl font-bold tracking-tight text-[#303956] sm:text-2xl">
        ITD
      </span>
    </span>
  )
}
