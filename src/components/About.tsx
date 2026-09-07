const POINTS = [
  {
    title: 'It is already in the product',
    description:
      'AI is not a demo or a chatbot overlay. It writes quizzes, lectures, reports, and media inside the LMS — then the same pattern lands in hiring, clinics, retail, and property.',
  },
  {
    title: 'It is built for operators',
    description:
      'Lecturers, recruiters, and ops teams keep their workflow. AI drafts, scores, and surfaces gaps. People approve, teach, and decide.',
  },
  {
    title: 'It ships as real software',
    description:
      'Since 2019 we have delivered production platforms from South Africa to the Netherlands — GraphQL APIs, cloud delivery, and the polish operators expect.',
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
            We build custom management software. The difference is where the intelligence sits:
            inside the lesson, the report, the hire — not in a tab nobody opens.
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
