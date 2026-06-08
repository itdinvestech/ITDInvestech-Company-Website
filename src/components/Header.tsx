const links = [
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#contact', label: 'Contact' },
]

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-white/90 backdrop-blur">
      <div className="section-shell flex h-16 items-center justify-between">
        <a href="#" className="text-lg font-bold tracking-tight text-primary">
          ITD Investech
        </a>
        <nav className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition hover:text-primary">
              {link.label}
            </a>
          ))}
        </nav>
        <a href="#contact" className="btn-primary">
          Get in touch
        </a>
      </div>
    </header>
  )
}
