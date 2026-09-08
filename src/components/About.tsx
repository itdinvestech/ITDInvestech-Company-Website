const POINTS = [
  {
    title: 'We build and host custom software',
    description:
      'Platforms for education, healthcare, retail, property, hiring, and whatever the client already runs. Design, implementation, cloud, and support — that is the company.',
  },
  {
    title: 'We deliver working systems',
    description:
      'Not a slide deck. Live software, trained teams, and results you can measure. Since 2019, from South Africa to the Netherlands.',
  },
  {
    title: 'AI is a main ability — used with judgment',
    description:
      'We find the jobs that eat time or hide insight, then wire AI into those steps. It sits inside the product. It is not the whole story.',
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
            Three things you should know
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
            A software company that ships and hosts platforms. AI integration is one of the
            strongest things we do with those platforms.
          </p>
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
