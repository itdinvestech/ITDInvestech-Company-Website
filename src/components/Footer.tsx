export default function Footer() {
  return (
    <footer className="border-t border-border bg-primary text-primary-foreground">
      <div className="section-shell flex flex-col gap-4 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-lg font-semibold">ITD Investech</p>
          <p className="mt-1 text-sm text-primary-foreground/75">
            Software, LMS platforms, and cloud solutions.
          </p>
        </div>
        <div className="text-sm text-primary-foreground/75">
          <a href="mailto:support@itdinvestech.co.za" className="hover:text-white">
            support@itdinvestech.co.za
          </a>
          <p className="mt-2">© {new Date().getFullYear()} ITD Investech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
