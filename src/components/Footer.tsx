import BrandLogo from './BrandLogo'

const SUPPORT_EMAIL = 'support@itdinvestech.co.za'

export default function Footer() {
  return (
    <footer className="border-t border-border bg-[#303956] text-white">
      <div className="section-shell flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <BrandLogo variant="light" />
          <p className="mt-3 text-sm text-white/70">
            Software, LMS platforms, and cloud solutions.
          </p>
        </div>
        <div className="text-sm text-white/75">
          <a href={`mailto:${SUPPORT_EMAIL}`} className="hover:text-white">
            {SUPPORT_EMAIL}
          </a>
          <p className="mt-2 text-white/55">© {new Date().getFullYear()} ITD Investech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
