const POINTS = [
  {
    title: 'We build the software',
    description:
      'Custom platforms for education, healthcare, retail, property, hiring, and whatever the client already runs. That is the company. AI is how those systems get sharper.',
  },
  {
    title: 'We integrate into the work',
    description:
      'Models sit inside the client’s product and stack — drafting, scoring, fetching, reporting — not in a separate chat that staff have to remember to open.',
  },
  {
    title: 'We ship it as production software',
    description:
      'Since 2019 we have delivered platforms from South Africa to the Netherlands — APIs, cloud delivery, roles, and the polish operators expect.',
  },
]

export function About() {
  return (
    <section id="about" className="relative overflow-hidden py-20 sm:py-28 lg:py-32">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-primary">
            About ITDInvestech
          </p>
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-5xl">
            Three things you should know
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
            A software company first. AI integration is the capability we put into client projects
            and the products we ship.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl gap-8 sm:mt-16 md:grid-cols-3 md:gap-10">
          {POINTS.map((item, index) => (
            <div key={item.title}>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                0{index + 1}
              </p>
              <h3 className="mt-3 text-xl font-bold">{item.title}</h3>
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
