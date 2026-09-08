import {
  Briefcase,
  Building2,
  Clapperboard,
  GraduationCap,
  Layers,
  Stethoscope,
  Store,
} from 'lucide-react'

const ITEMS = [
  { icon: GraduationCap, label: 'Education' },
  { icon: Stethoscope, label: 'Healthcare' },
  { icon: Store, label: 'Retail' },
  { icon: Building2, label: 'Property' },
  { icon: Briefcase, label: 'Hiring' },
  { icon: Clapperboard, label: 'Production tools' },
  { icon: Layers, label: 'Custom software' },
]

export function IndustryMarquee() {
  const row = [...ITEMS, ...ITEMS]

  return (
    <section aria-label="Industries we build for" className="relative overflow-hidden py-10 sm:py-12">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent sm:w-24" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent sm:w-24" />
      <p className="mb-6 text-center text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
        Software we build and host across
      </p>
      <div className="flex overflow-hidden">
        <div className="flex min-w-max animate-marquee items-center gap-10 pr-10">
          {row.map((item, index) => {
            const Icon = item.icon
            return (
              <div
                key={`${item.label}-${index}`}
                className="flex items-center gap-2.5 text-muted-foreground"
              >
                <Icon className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium whitespace-nowrap">{item.label}</span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
