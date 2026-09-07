import { Separator } from "@/components/ui/separator"
import BrandLogo from "@/components/BrandLogo"
import { Github, Twitter, Linkedin, Facebook } from "lucide-react"
import { scrollToSection } from "@/lib/utils"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const handleNavClick = (event: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    event.preventDefault()
    scrollToSection(sectionId)
  }

  const links = [
    { id: 'home', label: 'Home' },
    { id: 'ai', label: 'AI' },
    { id: 'solutions', label: 'Product' },
    { id: 'services', label: 'Services' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ]

  return (
    <footer className="relative overflow-hidden border-t border-border">
      <div className="absolute inset-0 -z-10 bg-muted/40 dark:bg-muted/20" />
      
      <div className="container relative z-10 mx-auto px-4 py-10 sm:py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-4">
              <BrandLogo iconSize={40} />
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">
              AI inside the LMS and every workflow we ship — quizzes, lectures, analysis, video, and
              the rest of the stack.
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {links.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => handleNavClick(e, link.id)}
                    className="text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">Services</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>AI in the workflow</li>
              <li>LMS &amp; schools</li>
              <li>Custom platforms</li>
              <li>Cloud delivery</li>
              <li>Digital transformation</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">Connect With Us</h3>
            <div className="flex flex-wrap gap-3">
              {[
                { icon: Twitter, label: 'Twitter', href: '#' },
                {
                  icon: Linkedin,
                  label: 'LinkedIn',
                  href: 'https://www.linkedin.com/company/itdinvestech/about',
                },
                { icon: Github, label: 'GitHub', href: '#' },
                { icon: Facebook, label: 'Facebook', href: '#' },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  {...(href.startsWith('http')
                    ? { target: '_blank', rel: 'noopener noreferrer' }
                    : {})}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-card text-muted-foreground transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
                  aria-label={label}
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex justify-center text-center text-sm text-muted-foreground">
          <p>© {currentYear} ITDInvestech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
