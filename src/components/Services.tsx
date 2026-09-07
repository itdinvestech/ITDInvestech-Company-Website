import { BrainCircuit, Cloud, Code, Smartphone, Zap } from 'lucide-react'

const SERVICES = [
  {
    icon: BrainCircuit,
    title: 'AI in the workflow',
    description:
      'Quiz generation, lecture authoring, student analysis, video fetching, and hooks into rendering software — then the same AI pattern across hiring and operations.',
  },
  {
    icon: Code,
    title: 'Custom platforms',
    description:
      'LMS, school, clinic, inventory, property, and recruitment systems built on modern web stacks with APIs teams can actually extend.',
  },
  {
    icon: Smartphone,
    title: 'Mobile experiences',
    description:
      'Student, parent, and operator apps that keep the same AI-backed workflows in someone’s pocket — iOS, Android, and the web.',
  },
  {
    icon: Cloud,
    title: 'Cloud delivery',
    description:
      'AWS and Azure infrastructure, GraphQL APIs, and migrations so platforms stay fast, private, and cheap enough to run.',
  },
  {
    icon: Zap,
    title: 'Digital transformation',
    description:
      'Replace paper, spreadsheets, and bolted-on tools with one system. We modernise the process, then put AI where the work already happens.',
  },
]

export function Services() {
  return (
    <section id="services" className="relative overflow-hidden py-20 sm:py-28 lg:py-32">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute inset-0 -z-10 bg-muted/30 dark:bg-muted/10" />

      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-primary">
            Services
          </p>
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-5xl">
            Built around the AI, not bolted on
          </h2>
          <p className="mt-5 text-base text-muted-foreground sm:text-lg">
            Engineering, cloud, and product — organised so intelligence can sit inside the LMS and
            every other system we ship.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => {
            const Icon = service.icon
            return (
              <div key={service.title} className="bg-card p-6 sm:p-8">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
