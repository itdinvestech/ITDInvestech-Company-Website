import { BrainCircuit, Cloud, Lock, Rocket, Server, Workflow } from 'lucide-react'
import { cn } from '@/lib/utils'

const CAPABILITIES = [
  {
    icon: Cloud,
    title: 'Cloud-native delivery',
    description: 'Automated CI/CD to S3, CloudFront, and containerized APIs with zero-downtime rollouts.',
  },
  {
    icon: Server,
    title: 'GraphQL platforms',
    description: 'Unified APIs powering LMS, billing, analytics, and multi-tenant SaaS products.',
  },
  {
    icon: BrainCircuit,
    title: 'Intelligent systems',
    description: 'Data pipelines, dashboards, and automation that turn operations into insight.',
  },
  {
    icon: Lock,
    title: 'Enterprise security',
    description: 'Role-based access, audit trails, encrypted transport, and production-grade hardening.',
  },
  {
    icon: Workflow,
    title: 'Custom workflows',
    description: 'School, medical, inventory, and real-estate platforms built around your processes.',
  },
  {
    icon: Rocket,
    title: 'Scale with confidence',
    description: 'Performance tuning, observability, and architecture designed for growth.',
  },
]

type TechCapabilitiesProps = {
  embedded?: boolean
}

export function TechCapabilities({ embedded = false }: TechCapabilitiesProps) {
  return (
    <section className={cn('relative', !embedded && 'py-16 sm:py-20')}>
      {!embedded && (
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-blue-50/40 to-transparent dark:via-blue-950/20" />
      )}

      <div className={cn(!embedded && 'container mx-auto px-4')}>
        <div
          className={cn(
            'mx-auto mb-10 max-w-3xl text-center',
            embedded && 'mb-8 xl:text-left',
          )}
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Engineering excellence
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We ship production systems with modern stacks, automated delivery, and the kind of polish
            enterprises expect from advanced software teams.
          </p>
        </div>

        <div className={cn('grid gap-4', embedded ? 'md:grid-cols-2' : 'md:grid-cols-2 xl:grid-cols-3')}>
          {CAPABILITIES.map((item) => (
            <article
              key={item.title}
              className="group relative overflow-hidden rounded-2xl border border-border bg-background/80 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-blue-500/0 opacity-0 transition-opacity duration-300 group-hover:from-primary/5 group-hover:to-blue-500/10 group-hover:opacity-100" />
              <div className="relative">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110">
                  <item.icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
