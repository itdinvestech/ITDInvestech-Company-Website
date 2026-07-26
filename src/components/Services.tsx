import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Smartphone, Cloud, BrainCircuit, Zap } from "lucide-react"

export function Services() {
  const services = [
    {
      icon: Code,
      title: "Custom Web Development",
      description: "Tailored web applications built with modern frameworks and best practices for optimal performance and scalability.",
      features: ["React & Vue.js", "Node.js Backend", "Responsive Design", "PWA Support"]
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications that deliver exceptional user experiences on iOS and Android.",
      features: ["React Native", "Flutter", "Native iOS/Android", "App Store Optimization"]
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure with seamless integration into your existing systems, plus migration services to optimize costs and reliability.",
      features: ["AWS & Azure", "Cloud Integration", "Cloud Migration", "DevOps"]
    },
    {
      icon: BrainCircuit,
      title: "AI Automation Systems",
      description: "Intelligent automation that streamlines business processes, reduces manual work, and helps your team focus on what matters most.",
      features: ["Workflow Automation", "AI-Powered Insights", "Process Optimization", "Business Intelligence"]
    },
    {
      icon: Zap,
      title: "Digital Transformation",
      description: "End-to-end digital transformation strategies to modernize your business operations and processes.",
      features: ["Strategy Consulting", "Process Automation", "Legacy Modernization", "Change Management"]
    }
  ]

  return (
    <section id="services" className="relative overflow-hidden py-16 sm:py-24 lg:py-32">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.03] to-transparent" />
        <div className="absolute inset-0 grid-pattern opacity-20 dark:opacity-10" />
      </div>
      
      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Our Services
          </h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            Comprehensive technology solutions tailored to your business needs
          </p>
        </div>

        <div className="grid gap-5 sm:gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <Card 
                key={service.title} 
                className="group relative overflow-hidden border border-border/80 bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                
                <CardHeader className="relative z-10 p-5 sm:p-6">
                  <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-105">
                    <Icon className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-lg transition-colors group-hover:text-primary">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-sm leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="relative z-10 px-5 pb-5 sm:px-6 sm:pb-6">
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature) => (
                      <Badge 
                        key={feature} 
                        variant="secondary"
                        className="text-xs font-normal"
                      >
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
