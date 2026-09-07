import { BrainCircuit, Cloud, Code, Smartphone, Zap } from 'lucide-react'

const SERVICES = [
  {
    icon: BrainCircuit,
    title: 'AI integration',
    description:
      'Wire generation, scoring, retrieval, and reporting into the software a client already uses — or into the platform we build for them.',
  },
  {
    icon: Code,
    title: 'Custom platforms',
    description:
      'LMS, clinic, inventory, property, recruitment, and other systems on modern stacks with APIs teams can extend.',
  },
  {
    icon: Smartphone,
    title: 'Mobile experiences',
    description:
      'Operator and customer apps that keep the same workflows — and the same integrations — in someone’s pocket.',
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
      'Replace paper, spreadsheets, and bolted-on tools with one system. Then put AI where the work already happens.',
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
            Build the system. Then make it think.
          </h2>
          <p className="mt-5 text-base text-muted-foreground sm:text-lg">
            Engineering, cloud, and product — with AI integration as the capability we add to
            client projects, not a product we sell on its own.
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
