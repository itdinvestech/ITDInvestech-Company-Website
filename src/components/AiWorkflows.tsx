import { useState } from 'react'
import {
  Check,
  Link2,
  ShieldCheck,
  Timer,
  UserCheck,
  Workflow,
  Wrench,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn, scrollToSection } from '@/lib/utils'

const BENEFITS = [
  {
    icon: Timer,
    title: 'Hours back on the job',
    body: 'Drafts, scores, lookups, and reports happen inside the task — not in a separate tool people forget to open.',
  },
  {
    icon: Workflow,
    title: 'No new place to work',
    body: 'Staff keep the screens and processes they already know. AI shows up as a step in that flow.',
  },
  {
    icon: Link2,
    title: 'Talks to what you already run',
    body: 'APIs, files, rendering software, ERPs, and the rest of the stack stay in the loop instead of becoming a copy-paste tax.',
  },
  {
    icon: UserCheck,
    title: 'People stay in charge',
    body: 'AI proposes. Operators review, edit, and publish. Nothing ships without the team that owns the work.',
  },
]

const MEANINGS = [
  {
    id: 'means',
    icon: Wrench,
    title: 'What it means',
    headline: 'AI inside the client’s software — not a chatbot on the side',
    body: 'Integration is wiring models into the platforms we build or the systems a client already runs. Generation, scoring, retrieval, and analysis happen where the work already lives.',
    points: [
      'Built into new software or fitted into an existing product',
      'Uses the client’s data, documents, and rules — not a blank prompt',
      'Shows up as actions in the workflow: draft, score, fetch, report',
    ],
    preview: {
      title: 'Client system',
    },
  },
  {
    id: 'job',
    icon: Sparkles,
    title: 'On the actual job',
    headline: 'Draft, score, fetch, and report in the same screen',
    body: 'A lecturer, recruiter, clinician, or store manager does not leave their system to “ask AI”. The next artefact — a quiz, a shortlist, a report, a clip — is produced as part of the task.',
    points: [
      'Generate documents, assessments, and summaries from live records',
      'Score and rank against the client’s own criteria',
      'Surface gaps and next actions from the data already in the product',
    ],
    preview: {
      title: 'In the workflow',
    },
  },
  {
    id: 'stack',
    icon: Link2,
    title: 'Connected stack',
    headline: 'The rest of the tools stay in the picture',
    body: 'Integration includes the software around the product: rendering and production tools, file stores, identity, billing, and industry systems. AI output should land where work continues, not in a dead export.',
    points: [
      'APIs and webhooks into tools the client already paid for',
      'Media and documents handed to rendering or production pipelines',
      'One source of truth instead of re-keying between apps',
    ],
    preview: {
      title: 'Connected tools',
    },
  },
  {
    id: 'control',
    icon: ShieldCheck,
    title: 'Control & trust',
    headline: 'Drafts you can stand behind',
    body: 'Clients do not want a black box. Every integration is reviewable: people approve, edit, and audit. Access follows the same roles as the rest of the software.',
    points: [
      'Human review before anything is published or sent',
      'Role-based access, same as the host system',
      'Outputs tied back to source records so they can be explained',
    ],
    preview: {
      title: 'Review before publish',
    },
  },
] as const

type MeaningId = (typeof MEANINGS)[number]['id']

function EmptyFrame({ title }: { title: string }) {
  return (
    <div className="flex min-h-[17rem] flex-col overflow-hidden rounded-2xl border border-border bg-background">
      <div className="flex items-center gap-2 border-b border-border px-4 py-3">
        <span className="h-2 w-2 rounded-full bg-border" />
        <span className="h-2 w-2 rounded-full bg-border" />
        <span className="h-2 w-2 rounded-full bg-border" />
        <span className="ml-2 text-xs text-muted-foreground">{title}</span>
      </div>
      <div className="flex flex-1 flex-col justify-end gap-3 p-5">
        <div className="h-3 w-2/5 rounded-md bg-muted" />
        <div className="h-24 rounded-xl bg-muted/70" />
        <div className="h-3 w-4/5 rounded-md bg-muted" />
        <div className="h-3 w-3/5 rounded-md bg-muted" />
      </div>
    </div>
  )
}

export function AiWorkflows() {
  const [activeId, setActiveId] = useState<MeaningId>('means')
  const active = MEANINGS.find((item) => item.id === activeId) ?? MEANINGS[0]
  const ActiveIcon = active.icon

  return (
    <section id="ai" className="section-pad relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute left-1/2 top-24 h-64 w-[42rem] -translate-x-1/2 rounded-full bg-primary/15 blur-3xl dark:bg-primary/20" />
      </div>

      <div className="container mx-auto px-4">
        <div className="section-intro">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-primary">
            Finest capability
          </p>
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-5xl lg:text-[3.25rem] lg:leading-[1.1]">
            AI integration into client software.
            <span className="mt-3 block text-muted-foreground">That is the work.</span>
          </h2>
          <p className="mt-8 text-base leading-relaxed text-muted-foreground sm:text-lg">
            We are a software company. We build and extend platforms for clients, then put
            intelligence inside those systems so it drafts, scores, analyses, and talks to the rest
            of the stack — instead of sitting in a chat window nobody uses.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl gap-6 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {BENEFITS.map((item) => {
            const Icon = item.icon
            return (
              <div key={item.title} className="rounded-2xl border border-border bg-card p-6 sm:p-7">
                <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon className="h-4 w-4" />
                </div>
                <h3 className="text-base font-bold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
              </div>
            )
          })}
        </div>

        <div className="mt-16 overflow-hidden rounded-2xl border border-border bg-card shadow-sm sm:mt-24 lg:grid lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.35fr)]">
          <div className="border-b border-border lg:border-b-0 lg:border-r">
            <div className="hidden border-b border-border px-6 py-4 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground lg:block">
              What integration covers
            </div>
            <div className="flex gap-2 overflow-x-auto p-3 lg:block lg:space-y-1 lg:overflow-visible lg:p-3">
              {MEANINGS.map((item) => {
                const Icon = item.icon
                const selected = item.id === activeId
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setActiveId(item.id)}
                    className={cn(
                      'flex min-w-[11.5rem] items-center gap-3 rounded-xl px-3.5 py-3 text-left transition-colors lg:min-w-0 lg:w-full',
                      selected
                        ? 'bg-primary text-primary-foreground shadow-sm'
                        : 'text-muted-foreground hover:bg-muted hover:text-foreground',
                    )}
                  >
                    <Icon className="h-4 w-4 shrink-0" />
                    <span className="text-sm font-semibold">{item.title}</span>
                  </button>
                )
              })}
            </div>
          </div>

          <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:items-start lg:p-10">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                <ActiveIcon className="h-3.5 w-3.5" />
                {active.title}
              </div>
              <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">{active.headline}</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                {active.body}
              </p>
              <ul className="mt-6 space-y-3">
                {active.points.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm sm:text-base">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <Button
                className="mt-8"
                variant="outline"
                onClick={() => scrollToSection('solutions')}
              >
                See platforms we ship
              </Button>
            </div>

            <EmptyFrame title={active.preview.title} />
          </div>
        </div>
      </div>
    </section>
  )
}
