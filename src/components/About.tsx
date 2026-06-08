export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="section-shell grid gap-10 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">About us</p>
          <h2 className="section-title mt-2">Technology partner for schools, startups, and enterprises</h2>
          <p className="section-copy">
            We build reliable digital products — from learning management systems and admin portals
            to customer-facing websites and integrations — with a focus on clean architecture,
            secure deployments, and long-term maintainability.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            'Custom software development',
            'Cloud deployment on AWS',
            'Product design and UX',
            'Ongoing support and enhancements',
          ].map((item) => (
            <div key={item} className="rounded-2xl border border-border bg-white p-5 shadow-sm">
              <p className="font-medium text-foreground">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
