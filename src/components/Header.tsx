import { Button } from '@/components/ui/button'
import BrandLogo from '@/components/BrandLogo'
import { MobileNavSheet } from '@/components/MobileNavSheet'
import { ThemeToggle } from '@/components/ThemeToggle'
import { cn, scrollToSection as navigateToSection } from '@/lib/utils'
import { Menu, X } from 'lucide-react'
import { useCallback, useEffect, useState } from 'react'

const NAV_ITEMS = [
  { id: 'how', label: 'How we work' },
  { id: 'solutions', label: 'Offerings' },
  { id: 'apps', label: 'Apps' },
  { id: 'ai', label: 'AI' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
] as const

const HEADER_HEIGHT = 56

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState<(typeof NAV_ITEMS)[number]['id'] | 'home'>('home')
  const [scrolled, setScrolled] = useState(false)

  const scrollToSection = useCallback((sectionId: string) => {
    setMobileOpen(false)
    window.setTimeout(() => navigateToSection(sectionId), 0)
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
        data-scrolled={scrolled ? 'true' : 'false'}
        className="material-bar sticky top-0 z-50 w-full"
      >
        <div className="container mx-auto flex h-14 items-center justify-between gap-4 px-4">
          <button
            type="button"
            onClick={() => scrollToSection('home')}
            className="rounded-lg outline-none ring-offset-background transition-opacity duration-150 ease-out hover:opacity-80 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 active:scale-[0.98] motion-reduce:active:scale-100"
            aria-label="Go to home"
          >
            <BrandLogo iconSize={32} compact />
          </button>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollToSection(item.id)}
                className={cn(
                  'rounded-full px-3 py-1.5 text-[13px] font-medium transition-[transform,color,background-color] duration-150 ease-out active:scale-[0.97] motion-reduce:active:scale-100',
                  activeSection === item.id
                    ? 'bg-foreground/10 text-foreground'
                    : 'text-muted-foreground hover:bg-foreground/5 hover:text-foreground',
                )}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="hidden items-center gap-2 lg:flex">
            <ThemeToggle />
            <Button onClick={() => scrollToSection('contact')} size="sm" className="px-4">
              Get started
            </Button>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />
            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border/80 bg-card/80 text-foreground transition-transform duration-150 ease-out active:scale-[0.97] motion-reduce:active:scale-100"
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

      <MobileNavSheet open={mobileOpen} onOpenChange={setMobileOpen}>
        <div className="flex h-14 items-center justify-between px-5 pl-6">
          <BrandLogo iconSize={32} />
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full hover:bg-muted active:scale-[0.97] motion-reduce:active:scale-100"
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav className="flex flex-1 flex-col gap-1 px-3 pb-4" aria-label="Mobile">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => scrollToSection(item.id)}
              className={cn(
                'flex min-h-11 w-full items-center rounded-xl px-4 py-3 text-left text-base font-medium transition-[transform,background-color,color] duration-150 ease-out active:scale-[0.98] motion-reduce:active:scale-100',
                activeSection === item.id
                  ? 'bg-primary/10 text-primary'
                  : 'text-foreground hover:bg-muted',
              )}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="p-4 pb-[max(1rem,env(safe-area-inset-bottom))]">
          <Button onClick={() => scrollToSection('contact')} className="w-full" size="lg">
            Get started
          </Button>
        </div>
      </MobileNavSheet>
    </>
  )
}
