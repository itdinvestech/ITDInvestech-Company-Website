import BrandLogo from './BrandLogo'

const SUPPORT_EMAIL = 'support@itdinvestech.co.za'

export default function Footer() {
  return (
    <footer className="border-t border-border bg-white/95 backdrop-blur-xl">
      <div className="section-shell flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <BrandLogo />
          <p className="mt-3 text-sm text-muted-foreground">
            Software, LMS platforms, and cloud solutions.
          </p>
        </div>
        <div className="text-sm text-muted-foreground">
          <a href={`mailto:${SUPPORT_EMAIL}`} className="font-medium text-foreground hover:text-primary">
            {SUPPORT_EMAIL}
          </a>
          <p className="mt-2">© {new Date().getFullYear()} ITD Investech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
