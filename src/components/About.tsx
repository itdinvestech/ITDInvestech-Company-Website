const POINTS = [
  {
    title: 'Since 2019',
    description:
      'An independent software company. We sit with operators, ship a live system, and stay on it.',
  },
  {
    title: 'South Africa to the Netherlands',
    description:
      'Work happens with the teams who run the product — not as a remote slide deck that never goes live.',
  },
  {
    title: 'One team after go-live',
    description:
      'The people who built it still host it, support it, and add AI only where the job actually changes.',
  },
]

export function About() {
  return (
    <section id="about" className="section-pad relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container mx-auto px-4">
        <div className="section-intro">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-primary">
            About ITDInvestech
          </p>
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-5xl">
            Who is on the other side of the brief.
          </h2>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl gap-10 sm:mt-16 md:grid-cols-3 md:gap-12">
          {POINTS.map((item, index) => (
            <div key={item.title}>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                0{index + 1}
              </p>
              <h3 className="mt-4 text-xl font-bold">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-[15px]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
