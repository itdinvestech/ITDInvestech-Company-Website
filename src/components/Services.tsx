import { BrainCircuit, Cloud, Code, Smartphone, Zap } from 'lucide-react'

const SERVICES = [
  {
    icon: Code,
    title: 'Custom software',
    description:
      'Platforms built around the client’s work — LMS, clinic, inventory, property, hiring, and systems that do not fit a box.',
  },
  {
    icon: Cloud,
    title: 'Hosting & delivery',
    description:
      'We put it in the cloud, keep it up, and hand over a live system — not a repo and a wish.',
  },
  {
    icon: BrainCircuit,
    title: 'AI integration',
    description:
      'A main ability: wire generation, scoring, retrieval, and reporting into the software we built — or the one you already run.',
  },
  {
    icon: Smartphone,
    title: 'Mobile experiences',
    description:
      'Operator and customer apps that keep the same workflows in someone’s pocket.',
  },
  {
    icon: Zap,
    title: 'Digital transformation',
    description:
      'Replace paper, spreadsheets, and bolted-on tools with one system. Then add AI only where it pays off.',
  },
]

export function Services() {
  return (
    <section id="services" className="section-pad relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute inset-0 -z-10 bg-muted/30 dark:bg-muted/10" />

      <div className="container mx-auto px-4">
        <div className="section-intro">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-primary">
            Services
          </p>
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-5xl">
            Build. Host. Deliver.
            <span className="mt-2 block text-muted-foreground">Integrate AI when it counts.</span>
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
            The company is custom software in production. AI is a core ability we add to those
            projects — not a product we sell on its own.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl gap-5 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {SERVICES.map((service) => {
            const Icon = service.icon
            return (
              <div key={service.title} className="rounded-2xl border border-border bg-card p-7 sm:p-8">
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
