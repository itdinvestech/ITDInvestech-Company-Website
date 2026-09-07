import { useState } from 'react'
import {
  BarChart3,
  BookOpen,
  Check,
  Clapperboard,
  FileQuestion,
  Layers,
  Sparkles,
  Video,
  WandSparkles,
} from 'lucide-react'
import { cn } from '@/lib/utils'

const WORKFLOWS = [
  {
    id: 'quizzes',
    icon: FileQuestion,
    title: 'Quiz generation',
    headline: 'AI writes the quiz from the lesson',
    body: 'Lecturers drop a topic, a chapter, or a full lecture. The LMS drafts graded quizzes, practice sets, and revision questions — then maps each item back to the learning outcome.',
    points: [
      'Multiple-choice, short answer, and scenario questions',
      'Difficulty bands for intro, core, and stretch work',
      'Instant drafts lecturers can edit before publishing',
    ],
    preview: {
      kicker: 'LMS · Assessment',
      title: 'Quiz from “Photosynthesis — Week 4”',
      items: [
        { label: 'Q1 · Multiple choice', meta: 'Core · 2 min' },
        { label: 'Q2 · Short answer', meta: 'Stretch · 4 min' },
        { label: 'Q3 · Scenario', meta: 'Applied · 6 min' },
      ],
      aside: '12 questions generated · 3 outcomes covered',
    },
  },
  {
    id: 'lectures',
    icon: BookOpen,
    title: 'Lecture authoring',
    headline: 'AI builds the lecture, not just the notes',
    body: 'Turn a brief, a syllabus week, or source material into a structured lecture: outline, talking points, slides, and student-facing summaries the lecturer can ship or refine.',
    points: [
      'Week-by-week outlines aligned to the module plan',
      'Slide-ready sections with examples and checks for understanding',
      'Student handouts generated in the same pass',
    ],
    preview: {
      kicker: 'LMS · Content',
      title: 'Lecture draft · “Cash flow for SMEs”',
      items: [
        { label: 'Hook & outcomes', meta: '4 min' },
        { label: 'Worked example', meta: '12 min' },
        { label: 'Student recap pack', meta: 'Ready' },
      ],
      aside: 'Outline + slides + recap in one workflow',
    },
  },
  {
    id: 'analysis',
    icon: BarChart3,
    title: 'Weakness analysis',
    headline: 'See who is stuck, and on what',
    body: 'After assessments, AI returns analysis reports: class-level gaps, individual weakness maps, and the next improvement areas — so lecturers intervene instead of guessing.',
    points: [
      'Per-student weakness and improvement reports',
      'Cohort heatmaps by topic and skill',
      'Suggested follow-up quizzes and revision paths',
    ],
    preview: {
      kicker: 'LMS · Insights',
      title: 'Cohort report · Grade 11 Science',
      items: [
        { label: 'Stoichiometry', meta: '62% · priority' },
        { label: 'Lab safety', meta: '88% · on track' },
        { label: 'Scientific method', meta: '71% · watch' },
      ],
      aside: '18 students flagged for targeted revision',
    },
  },
  {
    id: 'video',
    icon: Video,
    title: 'Video fetching',
    headline: 'The right clip, attached to the lesson',
    body: 'The LMS fetches lecture and supporting videos for students and lecturers — matching topic, level, and duration — then places them on the lesson timeline instead of leaving people to hunt YouTube.',
    points: [
      'Topic-matched videos for students and lecturers',
      'Length and level filters so clips actually get watched',
      'Pinned to the week, not dumped in a shared folder',
    ],
    preview: {
      kicker: 'LMS · Media',
      title: 'Fetched for “Intro to React hooks”',
      items: [
        { label: 'useState in 8 minutes', meta: 'Student' },
        { label: 'Lecture walkthrough', meta: 'Lecturer' },
        { label: 'Debugging useEffect', meta: 'Revision' },
      ],
      aside: '3 clips queued on the week 6 lesson',
    },
  },
  {
    id: 'rendering',
    icon: Clapperboard,
    title: 'Rendering tools',
    headline: 'AI that talks to the software you already use',
    body: 'Generated lectures, quizzes, and media are not trapped in the LMS. They flow into rendering and production tools — video, slides, and course packs — so content teams keep their existing pipeline.',
    points: [
      'Export into rendering and production software',
      'Keep slide, video, and LMS versions in sync',
      'One source of truth for course assets',
    ],
    preview: {
      kicker: 'Integrations',
      title: 'Publish path · Week 4 pack',
      items: [
        { label: 'LMS lesson', meta: 'Live' },
        { label: 'Render queue', meta: 'In progress' },
        { label: 'Student portal', meta: 'Synced' },
      ],
      aside: 'Same pack, three surfaces, no re-export chaos',
    },
  },
  {
    id: 'everywhere',
    icon: Layers,
    title: 'Every product',
    headline: 'The same AI pattern, across the stack',
    body: 'LMS is the clearest example. The same idea — AI inside the workflow — runs through recruitment scoring, clinic operations, inventory, and property systems. Not a chatbot parked on the side.',
    points: [
      'CV scoring and ranked shortlists in hiring',
      'Ops insights in inventory, clinics, and property',
      'One engineering approach, industry-specific products',
    ],
    preview: {
      kicker: 'Platform',
      title: 'AI in the workflow',
      items: [
        { label: 'LMS & schools', meta: 'Live' },
        { label: 'Recruitment', meta: 'Live' },
        { label: 'Ops products', meta: 'Shipping' },
      ],
      aside: 'Same core. Different industries.',
    },
  },
] as const

type WorkflowId = (typeof WORKFLOWS)[number]['id']

export function AiWorkflows() {
  const [activeId, setActiveId] = useState<WorkflowId>('quizzes')
  const active = WORKFLOWS.find((item) => item.id === activeId) ?? WORKFLOWS[0]
  const ActiveIcon = active.icon

  return (
    <section id="ai" className="relative overflow-hidden py-20 sm:py-28 lg:py-32">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute left-1/2 top-24 h-64 w-[42rem] -translate-x-1/2 rounded-full bg-primary/15 blur-3xl dark:bg-primary/20" />
      </div>

      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-primary">
            Finest feature
          </p>
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-5xl lg:text-[3.25rem] lg:leading-[1.1]">
            AI lives in the workflow.
            <span className="block text-muted-foreground">Not in a side chat.</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Our LMS is the proof. It generates quizzes, authors lectures, reports student
            weaknesses, fetches the right videos, and hands assets to rendering software — the same
            pattern we put in every product we ship.
          </p>
        </div>

        <div className="mt-12 overflow-hidden rounded-2xl border border-border bg-card shadow-sm lg:mt-16 lg:grid lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.35fr)]">
          <div className="border-b border-border lg:border-b-0 lg:border-r">
            <div className="hidden border-b border-border px-6 py-4 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground lg:block">
              LMS AI workflows
            </div>
            <div className="flex gap-2 overflow-x-auto p-3 lg:block lg:space-y-1 lg:overflow-visible lg:p-3">
              {WORKFLOWS.map((item) => {
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
            </div>

            <div className="rounded-2xl border border-border bg-background p-4 shadow-inner sm:p-5">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
                    {active.preview.kicker}
                  </p>
                  <p className="mt-1 text-sm font-semibold">{active.preview.title}</p>
                </div>
                <Sparkles className="h-4 w-4 text-primary" />
              </div>
              <div className="space-y-2">
                {active.preview.items.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center justify-between rounded-xl border border-border/80 bg-card px-3 py-3"
                  >
                    <span className="text-sm font-medium">{item.label}</span>
                    <span className="text-xs text-muted-foreground">{item.meta}</span>
                  </div>
                ))}
              </div>
              <p className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
                <WandSparkles className="h-3.5 w-3.5 text-primary" />
                {active.preview.aside}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
