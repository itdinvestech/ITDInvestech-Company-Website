import { Badge } from '@/components/ui/badge'
import { BrainCircuit, Cloud, Lock, Rocket, Server, Workflow } from 'lucide-react'

const CAPABILITIES = [
  {
    icon: Cloud,
    title: 'Cloud-native delivery',
    description: 'Automated CI/CD to S3, CloudFront, and containerized APIs with zero-downtime rollouts.',
    tag: 'AWS',
  },
  {
    icon: Server,
    title: 'GraphQL platforms',
    description: 'Unified APIs powering LMS, billing, analytics, and multi-tenant SaaS products.',
    tag: 'API-first',
  },
  {
    icon: BrainCircuit,
    title: 'Intelligent systems',
    description: 'Data pipelines, dashboards, and automation that turn operations into insight.',
    tag: 'AI-ready',
  },
  {
    icon: Lock,
    title: 'Enterprise security',
    description: 'Role-based access, audit trails, encrypted transport, and production-grade hardening.',
    tag: 'Secure',
  },
  {
    icon: Workflow,
    title: 'Custom workflows',
    description: 'School, medical, inventory, and real-estate platforms built around your processes.',
    tag: 'Tailored',
  },
  {
    icon: Rocket,
    title: 'Scale with confidence',
    description: 'Performance tuning, observability, and architecture designed for growth.',
    tag: 'Production',
  },
]

export function TechCapabilities() {
  return (
    <section className="relative py-16 sm:py-20">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-blue-50/40 to-transparent dark:via-blue-950/20" />

      <div className="container mx-auto px-4">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <Badge variant="secondary" className="mb-4 rounded-full px-4 py-1">
            Engineering excellence
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Built like a product company, not a template shop
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We ship production systems with modern stacks, automated delivery, and the kind of polish
            enterprises expect from advanced software teams.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {CAPABILITIES.map((item, index) => (
            <article
              key={item.title}
              className="group relative overflow-hidden rounded-2xl border bg-background/80 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-blue-500/0 opacity-0 transition-opacity duration-300 group-hover:from-primary/5 group-hover:to-blue-500/10 group-hover:opacity-100" />
              <div className="relative">
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <Badge variant="outline" className="rounded-full">
                    {item.tag}
                  </Badge>
                </div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
