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
  { label: 'Latency', value: '<180ms' },
  { label: 'Uptime', value: '99.9%' },
  { label: 'Edge', value: '12+' },
  { label: 'Stack', value: 'React · GraphQL · AWS' },
]

const toneClass = {
  command: 'text-blue-700 dark:text-blue-300',
  success: 'text-emerald-700 dark:text-emerald-300',
  highlight: 'text-primary font-medium',
}

type LiveTerminalProps = {
  className?: string
}

export function LiveTerminal({ className }: LiveTerminalProps) {
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
    <div className={cn('relative', className)}>
      <div className="relative overflow-hidden rounded-xl border border-border/70 bg-background/75 shadow-sm backdrop-blur-sm">
        <div className="flex items-center gap-1.5 border-b border-border/60 bg-muted/30 px-3 py-2">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
          <span className="ml-1.5 text-[10px] font-medium text-muted-foreground">itd-deploy</span>
        </div>

        <div className="space-y-1 px-3 py-3 font-mono text-[10px] leading-relaxed sm:text-[11px]">
          {TERMINAL_LINES.slice(0, visibleLines).map((line, index) => (
            <div key={`${line.text}-${index}`} className={cn('animate-fade-in', toneClass[line.tone])}>
              {line.text}
            </div>
          ))}
          {visibleLines < TERMINAL_LINES.length && (
            <span
              className={cn(
                'inline-block h-3.5 w-1.5 rounded-sm bg-primary/70',
                cursorOn ? 'opacity-100' : 'opacity-0',
              )}
            />
          )}
        </div>

        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 border-t border-border/60 bg-muted/20 px-3 py-2 text-[10px] text-muted-foreground">
          {METRICS.map((metric, index) => (
            <span key={metric.label} className="inline-flex items-center gap-1">
              {index > 0 && <span className="text-border">·</span>}
              <span>{metric.label}</span>
              <span className="font-medium text-foreground">{metric.value}</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
