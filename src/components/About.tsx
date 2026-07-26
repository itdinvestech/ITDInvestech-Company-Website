import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Target, Users, Lightbulb, Award } from "lucide-react"

const VALUES = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To empower businesses with innovative technology solutions that drive measurable results and sustainable growth.",
  },
  {
    icon: Users,
    title: "Our Team",
    description:
      "A diverse group of experts in software development, design, and business strategy working together.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We stay ahead of the curve by embracing emerging technologies and creative problem-solving approaches.",
  },
  {
    icon: Award,
    title: "Excellence",
    description:
      "Committed to delivering the highest quality solutions that exceed expectations and industry standards.",
  },
]

export function About() {
  return (
    <section id="about" className="relative overflow-hidden py-16 sm:py-24 lg:py-32">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/40 to-transparent dark:via-muted/20" />
        <div className="absolute inset-0 dot-pattern opacity-30 dark:opacity-15" />
      </div>
      
      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            About ITDInvestech
          </h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            We&apos;re a team of passionate technologists specializing in{' '}
            <span className="font-semibold text-foreground">Custom Management Software Development</span>.
            Helping businesses across education, healthcare, retail, real estate, and recruitment thrive
            with tailored digital solutions.
          </p>
        </div>

        <div className="mb-10 grid gap-5 sm:mb-12 sm:gap-6 md:grid-cols-2 xl:grid-cols-4">
          {VALUES.map((item) => {
            const Icon = item.icon
            return (
              <Card
                key={item.title}
                className="group border border-border/80 bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg"
              >
                <CardHeader className="p-5 sm:p-6">
                  <div className="mb-2 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-105">
                    <Icon className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-lg transition-colors group-hover:text-primary">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-5 pb-5 sm:px-6 sm:pb-6">
                  <CardDescription className="text-sm leading-relaxed">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="mx-auto max-w-3xl">
          <Card className="border border-border/80 bg-card">
            <CardContent className="p-5 sm:p-8">
              <p className="text-center text-base leading-relaxed text-muted-foreground sm:text-lg">
                Founded in 2019, our journey has been marked by a relentless pursuit of excellence and an
                unwavering commitment to our clients&apos; success. With{' '}
                <strong className="font-semibold text-foreground">
                  international reach extending to the Netherlands
                </strong>
                , we serve businesses across various industries, helping them navigate digital
                transformation with confidence.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
