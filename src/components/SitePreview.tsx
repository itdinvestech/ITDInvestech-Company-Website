import { ExternalLink } from 'lucide-react'
import { cn } from '@/lib/utils'

type SitePreviewProps = {
  title: string
  url?: string
  image?: string
  live?: boolean
  className?: string
}

function hostname(url: string) {
  try {
    return new URL(url).hostname.replace(/^www\./, '')
  } catch {
    return url
  }
}

export function SitePreview({ title, url, image, live = false, className }: SitePreviewProps) {
  return (
    <div
      className={cn(
        'overflow-hidden rounded-xl border border-border bg-background',
        className,
      )}
    >
      <div className="flex items-center gap-1.5 border-b border-border px-3 py-2">
        <span className="h-1.5 w-1.5 rounded-full bg-border" />
        <span className="h-1.5 w-1.5 rounded-full bg-border" />
        <span className="h-1.5 w-1.5 rounded-full bg-border" />
        <span className="ml-2 min-w-0 flex-1 truncate text-[10px] text-muted-foreground">
          {url ? hostname(url) : title}
        </span>
        {url && (
          <ExternalLink className="h-3 w-3 shrink-0 text-muted-foreground" aria-hidden />
        )}
      </div>

      <div className="relative aspect-[16/10] overflow-hidden bg-muted/50">
        {image ? (
          <img
            src={image}
            alt={`${title} website`}
            className="absolute inset-0 h-full w-full object-cover object-top"
          />
        ) : (
          <div className="absolute inset-0 flex flex-col justify-end gap-2 p-4">
            <div className="h-2 w-1/3 rounded bg-muted" />
            <div className="h-16 rounded-lg bg-muted/70" />
            <div className="h-2 w-2/3 rounded bg-muted" />
          </div>
        )}

        {live && url && (
          <iframe
            src={url}
            title={title}
            loading="lazy"
            tabIndex={-1}
            className="pointer-events-none absolute left-0 top-0 h-[400%] w-[400%] origin-top-left scale-[0.25] bg-background"
          />
        )}

        {url && (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 z-10 flex items-end justify-end bg-gradient-to-t from-black/45 via-transparent to-transparent p-3 opacity-100 transition-opacity sm:opacity-0 sm:hover:opacity-100 sm:focus-visible:opacity-100"
          >
            <span className="inline-flex items-center gap-1.5 rounded-full bg-background/95 px-2.5 py-1 text-[11px] font-semibold text-foreground shadow-sm">
              Open live site
              <ExternalLink className="h-3 w-3" />
            </span>
          </a>
        )}
      </div>
    </div>
  )
}
