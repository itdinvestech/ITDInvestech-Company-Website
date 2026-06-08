import BrandLogo from './BrandLogo'

const SUPPORT_EMAIL = 'support@itdinvestech.co.za'

export default function Footer() {
  return (
    <footer className="footer-shell text-white">
      <div className="section-shell py-12">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <BrandLogo variant="light" />
            <p className="mt-4 max-w-md text-sm leading-6 text-white/70">
              Software, LMS platforms, and cloud solutions for organizations across Africa.
            </p>
          </div>

          <div className="text-sm text-white/75">
            <a href={`mailto:${SUPPORT_EMAIL}`} className="font-medium text-white hover:text-[#a5b4fc]">
              {SUPPORT_EMAIL}
            </a>
            <p className="mt-3 text-white/55">
              © {new Date().getFullYear()} ITD Investech. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
