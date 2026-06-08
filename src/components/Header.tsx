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
          'sticky top-0 z-50 transition-all duration-300',
          scrolled
            ? 'border-b border-white/10 bg-[#1a2038]/90 shadow-lg shadow-[#303956]/10 backdrop-blur-xl'
            : 'border-b border-transparent bg-[#303956]/95 backdrop-blur-md',
        )}>
        <div className="section-shell flex h-[4.25rem] items-center justify-between gap-3">
          <a href="#" className="shrink-0" onClick={closeMenu}>
            <BrandLogo variant="light" />
          </a>

          <nav className="hidden items-center gap-1 md:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-white/75 transition hover:bg-white/10 hover:text-white">
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="#contact"
              className="hidden rounded-full bg-gradient-to-r from-[#667eea] to-[#764ba2] px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-[#667eea]/25 transition hover:scale-[1.02] hover:shadow-[#667eea]/40 sm:inline-flex">
              Get in touch
            </a>
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/10 text-white md:hidden"
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
          'fixed inset-0 z-40 bg-[#0f1324]/70 backdrop-blur-sm transition md:hidden',
          open ? 'visible opacity-100' : 'invisible opacity-0 pointer-events-none',
        )}
        aria-hidden={!open}
        onClick={closeMenu}
      />

      <nav
        className={cn(
          'fixed right-0 top-0 z-50 flex h-full w-[min(88vw,320px)] flex-col bg-[#1a2038] p-5 shadow-2xl transition-transform duration-300 md:hidden',
          open ? 'translate-x-0' : 'translate-x-full',
        )}
        aria-hidden={!open}>
        <div className="mb-6 flex items-center justify-between">
          <BrandLogo variant="light" />
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 text-white"
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
              className="animate-fade-up rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-base font-semibold text-white transition hover:border-[#667eea]/40 hover:bg-white/10"
              style={{ animationDelay: `${index * 70}ms` }}
              onClick={closeMenu}>
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="mt-4 inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-[#667eea] to-[#764ba2] px-4 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#667eea]/30"
          onClick={closeMenu}>
          Get in touch
        </a>

        <p className="mt-4 text-center text-xs text-white/50">
          support@itdinvestech.co.za
        </p>
      </nav>
    </>
  )
}
