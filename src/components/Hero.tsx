import { ArrowRight, Sparkles } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#303956] via-[#3d4670] to-[#536097] text-white">
      <div className="section-shell grid gap-10 py-20 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:py-28">
        <div>
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-wide">
            <Sparkles className="h-3.5 w-3.5" />
            Innovative technology solutions
          </div>
          <h1 className="max-w-3xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Software, learning platforms, and digital products built for Africa.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-white/80 sm:text-lg">
            ITD Investech designs and delivers modern web platforms, LMS solutions, and
            business software that help organizations grow with confidence.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="btn-primary bg-white text-primary hover:bg-white/90">
              Start a project
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            <a href="#services" className="btn-secondary border-white/20 bg-transparent text-white hover:bg-white/10">
              Explore services
            </a>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
          {[
            { label: 'Years delivering software', value: '10+' },
            { label: 'Platforms in production', value: 'LMS, commerce, logistics' },
            { label: 'Support email', value: 'support@itdinvestech.co.za' },
          ].map((item) => (
            <div key={item.label} className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur">
              <p className="text-sm text-white/70">{item.label}</p>
              <p className="mt-2 text-xl font-semibold">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
