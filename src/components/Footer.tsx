import { Mail, Phone, Linkedin, ArrowRight, MapPin } from 'lucide-react'
import BrandLogo from '@/components/BrandLogo'
import { Button } from '@/components/ui/button'
import { scrollToSection } from '@/lib/utils'

const NAV = [
  { id: 'how', label: 'How we work' },
  { id: 'solutions', label: 'Offerings' },
  { id: 'apps', label: 'Apps' },
  { id: 'ai', label: 'AI' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
]

const PLATFORMS = [
  { id: 'solutions', label: 'LMS & school platforms' },
  { id: 'solutions', label: 'Clinic sites' },
  { id: 'solutions', label: 'Inventory systems' },
  { id: 'solutions', label: 'ERP systems' },
  { id: 'solutions', label: 'SearchBox hiring' },
  { id: 'apps', label: 'MoviesApp & delivery' },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  const go = (event: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    event.preventDefault()
    scrollToSection(sectionId)
  }

  return (
    <footer className="relative overflow-hidden border-t border-border">
      <div className="absolute inset-0 -z-10 bg-muted/40 dark:bg-muted/20" />

      <div className="container relative z-10 mx-auto px-4 py-16 sm:py-20">
        <div className="flex flex-col gap-8 rounded-2xl border border-border bg-card px-6 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              Next step
            </p>
            <h2 className="mt-2 text-2xl font-extrabold tracking-tight sm:text-3xl">
              Bring the system you run today.
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
              New platform or an existing one. We build it, host it, and add AI where it earns its
              place.
            </p>
          </div>
          <Button size="lg" className="h-12 shrink-0 px-6" onClick={() => scrollToSection('contact')}>
            Talk to us
            <ArrowRight className="ml-1 h-4 w-4" />
          </Button>
        </div>

        <div className="mt-14 grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <BrandLogo iconSize={40} />
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Independent software company since 2019. Custom platforms, hosted and delivered —
              from South Africa to the Netherlands.
            </p>
            <div className="mt-5 space-y-2.5 text-sm">
              <a
                href="mailto:info@itdinvestech.co.za"
                className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
              >
                <Mail className="h-4 w-4 shrink-0 text-primary" />
                info@itdinvestech.co.za
              </a>
              <a
                href="mailto:support@itdinvestech.co.za"
                className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
              >
                <Mail className="h-4 w-4 shrink-0 text-primary" />
                support@itdinvestech.co.za
              </a>
              <a
                href="tel:+27647848610"
                className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
              >
                <Phone className="h-4 w-4 shrink-0 text-primary" />
                +27 64 784 8610
              </a>
              <p className="flex items-start gap-2 text-muted-foreground">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                South Africa · Netherlands
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold">On this site</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {NAV.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => go(e, link.id)}
                    className="text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold">Platforms we ship</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {PLATFORMS.map((item) => (
                <li key={item.label}>
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => go(e, item.id)}
                    className="text-muted-foreground transition-colors hover:text-primary"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold">Hours</h3>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Mon–Fri, 9am–6pm SAST
            </p>
            <a
              href="https://www.linkedin.com/company/itdinvestech/about"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-lg border border-border bg-background px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:border-primary hover:text-primary"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </a>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-border pt-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {currentYear} ITDInvestech. All rights reserved.</p>
          <p>Custom software · Hosting · AI when it counts</p>
        </div>
      </div>
    </footer>
  )
}
