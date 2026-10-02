import { Button } from '@/components/ui/button'
import BrandLogo from '@/components/BrandLogo'
import { MobileNavSheet } from '@/components/MobileNavSheet'
import { ThemeToggle } from '@/components/ThemeToggle'
import { type TabId, useSiteTabs } from '@/components/SiteTabs'
import { cn, scrollToSection } from '@/lib/utils'
import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'

const NAV_ITEMS: { id: TabId; label: string }[] = [
  { id: 'how', label: 'How we work' },
  { id: 'platforms', label: 'Platforms' },
  { id: 'ai', label: 'AI' },
  { id: 'about', label: 'About' },
]

export function Header() {
  const { tab, openTab } = useSiteTabs()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const open = (next: TabId) => {
    setMobileOpen(false)
    window.setTimeout(() => openTab(next), 0)
  }

  const goHome = () => {
    setMobileOpen(false)
    window.setTimeout(() => scrollToSection('home'), 0)
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
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
        <div className="container mx-auto flex h-14 items-center justify-between gap-3 px-4">
          <button
            type="button"
            onClick={goHome}
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
                onClick={() => open(item.id)}
                aria-current={tab === item.id ? 'page' : undefined}
                className={cn(
                  'rounded-full px-3 py-1.5 text-[13px] font-medium transition-[transform,color,background-color] duration-150 ease-out active:scale-[0.97] motion-reduce:active:scale-100',
                  tab === item.id
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
            <Button onClick={() => open('contact')} size="sm" className="px-4">
              Book a call
            </Button>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <Button onClick={() => open('contact')} size="sm" className="h-11 px-3.5 text-[13px]">
              Book a call
            </Button>
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
          <div className="flex items-center gap-1">
            <ThemeToggle />
            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full hover:bg-muted active:scale-[0.97] motion-reduce:active:scale-100"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        <nav className="flex flex-1 flex-col gap-1 px-3 pb-4" aria-label="Mobile">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => open(item.id)}
              aria-current={tab === item.id ? 'page' : undefined}
              className={cn(
                'flex min-h-11 w-full items-center rounded-xl px-4 py-3 text-left text-base font-medium transition-[transform,background-color,color] duration-150 ease-out active:scale-[0.98] motion-reduce:active:scale-100',
                tab === item.id
                  ? 'bg-primary/10 text-primary'
                  : 'text-foreground hover:bg-muted',
              )}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="p-4 pb-[max(1rem,env(safe-area-inset-bottom))]">
          <Button onClick={() => open('contact')} className="w-full" size="lg">
            Book a call
          </Button>
        </div>
      </MobileNavSheet>
    </>
  )
}
