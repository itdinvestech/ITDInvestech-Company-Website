import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import BrandLogo from './BrandLogo'
import { cn } from '@/lib/utils'

const links = [
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#contact', label: 'Contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  function closeMenu() {
    setOpen(false)
  }

  return (
    <>
      <header
        className={cn(
          'sticky top-0 z-50 border-b bg-white/95 backdrop-blur-xl transition-all duration-300',
          scrolled ? 'border-border shadow-md shadow-[#303956]/5' : 'border-transparent',
        )}>
        <div className="section-shell flex h-[4.25rem] items-center justify-between gap-3">
          <a href="#" className="shrink-0" onClick={closeMenu}>
            <BrandLogo />
          </a>

          <nav className="hidden items-center gap-1 md:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition hover:bg-muted hover:text-primary">
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a href="#contact" className="btn-primary hidden sm:inline-flex">
              Get in touch
            </a>
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-white text-primary shadow-sm transition hover:border-[#667eea]/30 hover:bg-muted md:hidden"
              aria-expanded={open}
              aria-label={open ? 'Close menu' : 'Open menu'}
              onClick={() => setOpen((value) => !value)}>
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      <div
        className={cn(
          'fixed inset-0 z-40 bg-[#303956]/40 backdrop-blur-sm transition md:hidden',
          open ? 'visible opacity-100' : 'invisible opacity-0 pointer-events-none',
        )}
        aria-hidden={!open}
        onClick={closeMenu}
      />

      <nav
        className={cn(
          'fixed right-0 top-0 z-50 flex h-full w-[min(88vw,320px)] flex-col border-l border-border bg-white p-5 shadow-2xl transition-transform duration-300 md:hidden',
          open ? 'translate-x-0' : 'translate-x-full',
        )}
        aria-hidden={!open}>
        <div className="mb-6 flex items-center justify-between">
          <BrandLogo />
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border"
            aria-label="Close menu"
            onClick={closeMenu}>
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex flex-1 flex-col gap-2">
          {links.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              className="animate-fade-up rounded-2xl border border-border bg-muted/40 px-4 py-4 text-base font-semibold text-foreground transition hover:border-[#667eea]/40 hover:bg-muted"
              style={{ animationDelay: `${index * 70}ms` }}
              onClick={closeMenu}>
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="btn-primary mt-4 w-full justify-center"
          onClick={closeMenu}>
          Get in touch
        </a>

        <p className="mt-4 text-center text-xs text-muted-foreground">
          support@itdinvestech.co.za
        </p>
      </nav>
    </>
  )
}
