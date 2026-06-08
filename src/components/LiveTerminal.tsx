import { cn } from '@/lib/utils'
import { useEffect, useState } from 'react'

const TERMINAL_LINES = [
  { text: 'itd@platform:~$ deploy --env production', tone: 'command' as const },
  { text: '▸ Building React + Vite bundle .............. OK', tone: 'success' as const },
  { text: '▸ Syncing GraphQL API schema ................ OK', tone: 'success' as const },
  { text: '▸ Provisioning CloudFront edge nodes ........ OK', tone: 'success' as const },
  { text: '▸ Running health checks on lms-api .......... 200', tone: 'success' as const },
  { text: '▸ Invalidating CDN cache .................... OK', tone: 'success' as const },
  { text: '✓ Deploy complete — live at itdinvestech.co.za', tone: 'highlight' as const },
]

const METRICS = [
  { label: 'API latency', value: '< 180ms' },
  { label: 'Uptime SLA', value: '99.9%' },
  { label: 'Edge regions', value: '12+' },
  { label: 'Stack', value: 'React · GraphQL · AWS' },
]

const toneClass = {
  command: 'text-sky-300',
  success: 'text-emerald-300',
  highlight: 'text-violet-300 font-semibold',
}

export function LiveTerminal() {
  const [visibleLines, setVisibleLines] = useState(1)
  const [cursorOn, setCursorOn] = useState(true)

  useEffect(() => {
    const cursorTimer = window.setInterval(() => setCursorOn((on) => !on), 520)
    return () => window.clearInterval(cursorTimer)
  }, [])

  useEffect(() => {
    if (visibleLines >= TERMINAL_LINES.length) {
      const resetTimer = window.setTimeout(() => setVisibleLines(1), 2800)
      return () => window.clearTimeout(resetTimer)
    }

    const lineTimer = window.setTimeout(() => {
      setVisibleLines((count) => count + 1)
    }, 650)

    return () => window.clearTimeout(lineTimer)
  }, [visibleLines])

  return (
    <div className="relative">
      <div className="absolute -inset-4 rounded-[1.75rem] bg-gradient-to-br from-blue-500/20 via-indigo-500/10 to-violet-500/20 blur-2xl" />

      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0b1220]/95 shadow-2xl shadow-blue-950/30 backdrop-blur-md">
        <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-red-400/90" />
          <span className="h-3 w-3 rounded-full bg-amber-400/90" />
          <span className="h-3 w-3 rounded-full bg-emerald-400/90" />
          <span className="ml-2 text-xs font-medium text-slate-400">itd-deploy — zsh</span>
        </div>

        <div className="space-y-1.5 px-4 py-4 font-mono text-[11px] leading-relaxed sm:text-xs md:text-sm">
          {TERMINAL_LINES.slice(0, visibleLines).map((line, index) => (
            <div key={`${line.text}-${index}`} className={cn('animate-fade-in', toneClass[line.tone])}>
              {line.text}
            </div>
          ))}
          {visibleLines < TERMINAL_LINES.length && (
            <span className={cn('inline-block h-4 w-2 bg-sky-300', cursorOn ? 'opacity-100' : 'opacity-0')} />
          )}
        </div>

        <div className="grid grid-cols-2 gap-2 border-t border-white/10 bg-white/[0.03] p-3 sm:grid-cols-4">
          {METRICS.map((metric) => (
            <div
              key={metric.label}
              className="rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2 transition-colors hover:border-sky-400/40 hover:bg-sky-400/10"
            >
              <div className="text-[10px] uppercase tracking-wider text-slate-400">{metric.label}</div>
              <div className="mt-1 text-sm font-semibold text-white">{metric.value}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
