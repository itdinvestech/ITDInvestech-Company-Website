import { ArrowRight, Sparkles } from 'lucide-react'

const stats = [
  { label: 'Years delivering software', value: '10+' },
  { label: 'Platforms in production', value: 'LMS · Commerce · Logistics' },
  { label: 'Support', value: 'support@itdinvestech.co.za' },
]

export default function Hero() {
  return (
    <section className="hero-shell relative overflow-hidden border-b border-border">
      <div className="hero-grid absolute inset-0 opacity-60" aria-hidden="true" />
      <div className="hero-orb hero-orb--one" aria-hidden="true" />
      <div className="hero-orb hero-orb--two" aria-hidden="true" />

      <div className="section-shell relative grid gap-12 py-20 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:py-28">
        <div className="animate-fade-up">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#667eea]/20 bg-[#667eea]/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#303956]">
            <Sparkles className="h-3.5 w-3.5 text-[#667eea]" />
            Innovative technology solutions
          </div>
          <h1 className="max-w-3xl text-4xl font-bold leading-[1.05] tracking-tight text-[#303956] sm:text-5xl lg:text-6xl">
            Software, learning platforms, and digital products built for Africa.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
            ITD Investech designs and delivers modern web platforms, LMS solutions, and
            business software with clean architecture, secure cloud deployments, and long-term support.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="btn-primary">
              Start a project
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            <a href="#services" className="btn-secondary">
              Explore services
            </a>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
          {stats.map((item, index) => (
            <div
              key={item.label}
              className="glass-card animate-fade-up"
              style={{ animationDelay: `${120 + index * 90}ms` }}>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                {item.label}
              </p>
              <p className="mt-2 text-lg font-semibold leading-snug text-[#303956] sm:text-xl">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
