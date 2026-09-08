import { Button } from '@/components/ui/button'
import BrandLogo from '@/components/BrandLogo'
import { ThemeToggle } from '@/components/ThemeToggle'
import { cn, scrollToSection as navigateToSection } from '@/lib/utils'
import { Code2, Menu, X } from 'lucide-react'
import { useCallback, useEffect, useState } from 'react'

const NAV_ITEMS = [
  { id: 'how', label: 'How we work' },
  { id: 'services', label: 'Services' },
  { id: 'solutions', label: 'Offerings' },
  { id: 'apps', label: 'Apps' },
  { id: 'ai', label: 'AI' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
] as const

const HEADER_HEIGHT = 72

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState<(typeof NAV_ITEMS)[number]['id'] | 'home'>('home')
  const [scrolled, setScrolled] = useState(false)

  const scrollToSection = useCallback((sectionId: string) => {
    navigateToSection(sectionId)
    setMobileOpen(false)
  }, [])

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8)

      const marker = window.scrollY + HEADER_HEIGHT + 48
      let current: (typeof NAV_ITEMS)[number]['id'] | 'home' = 'home'

      for (const item of NAV_ITEMS) {
        const element = document.getElementById(item.id)
        if (element && element.offsetTop <= marker) {
          current = item.id
        }
      }

      setActiveSection(current)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  return (
    <>
      <header
        className={cn(
          'sticky top-0 z-50 w-full border-b transition-all duration-300',
          scrolled
            ? 'border-border/80 bg-background/90 shadow-sm backdrop-blur-md'
            : 'border-transparent bg-background/60 backdrop-blur-sm',
        )}
      >
        <div className="container mx-auto flex h-[72px] items-center justify-between gap-4 px-4">
          <div className="flex min-w-0 items-center gap-3">
            <button
              type="button"
              onClick={() => scrollToSection('home')}
              className="rounded-lg outline-none ring-offset-background transition-opacity hover:opacity-90 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              aria-label="Go to home"
            >
              <BrandLogo iconSize={36} compact />
            </button>
            <span className="hidden items-center gap-1.5 rounded-full border border-border px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground md:inline-flex">
              <Code2 className="h-3 w-3 text-primary" />
              Custom software
            </span>
          </div>

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollToSection(item.id)}
                className={cn(
                  'text-[13px] font-medium transition-colors',
                  activeSection === item.id
                    ? 'text-foreground'
                    : 'text-muted-foreground hover:text-foreground',
                )}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <ThemeToggle />
            <Button onClick={() => scrollToSection('contact')} size="sm" className="rounded-md px-4">
              Get started
            </Button>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />
            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-border bg-background text-foreground"
              onClick={() => setMobileOpen((open) => !open)}
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav-panel"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      <div
        className={cn(
          'fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 lg:hidden',
          mobileOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0',
        )}
        onClick={() => setMobileOpen(false)}
        aria-hidden={!mobileOpen}
      />

      <aside
        id="mobile-nav-panel"
        className={cn(
          'fixed inset-y-0 right-0 z-50 flex w-[min(100vw,320px)] flex-col border-l bg-background shadow-2xl transition-transform duration-300 ease-out lg:hidden',
          mobileOpen ? 'translate-x-0' : 'translate-x-full',
        )}
        aria-hidden={!mobileOpen}
      >
        <div className="flex h-[72px] items-center justify-between border-b px-5">
          <BrandLogo />
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border hover:bg-muted"
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav className="flex flex-1 flex-col gap-1 p-4" aria-label="Mobile">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => scrollToSection(item.id)}
              className={cn(
                'flex w-full items-center rounded-lg px-4 py-3.5 text-left text-base font-medium transition-colors',
                activeSection === item.id
                  ? 'bg-primary/10 text-primary'
                  : 'text-foreground hover:bg-muted',
              )}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="border-t p-4">
          <Button onClick={() => scrollToSection('contact')} className="w-full" size="lg">
            Get started
          </Button>
        </div>
      </aside>
    </>
  )
}
