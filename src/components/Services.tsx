import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
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
    <section id="services" className="py-20 sm:py-32 relative overflow-hidden">
      {/* Vibrant animated background */}
      <div className="absolute inset-0 -z-10">
        {/* Multi-layer gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-100/80 via-blue-100/60 to-cyan-100/80 dark:from-purple-950/30 dark:via-blue-950/20 dark:to-cyan-950/30" />
        <div className="absolute inset-0 mesh-gradient-subtle opacity-60" />
        
        {/* Grid overlay */}
        <div className="absolute inset-0 grid-pattern opacity-30" />
        
        {/* Dynamic gradient orbs */}
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-gradient-to-br from-purple-400/30 via-pink-400/20 to-transparent rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute top-1/2 -right-40 w-[500px] h-[500px] bg-gradient-to-br from-cyan-400/30 via-blue-400/20 to-transparent rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1.5s' }} />
        <div className="absolute -bottom-40 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-400/25 via-indigo-400/15 to-transparent rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '0.5s' }} />
        
        {/* Geometric accents */}
        <div className="absolute top-40 right-1/4 w-40 h-40 border border-primary/10 rounded-full animate-float-slow" />
        <div className="absolute bottom-40 left-1/3 w-32 h-32 border border-blue-500/10 rotate-45 animate-float-slower" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl mb-4">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive technology solutions tailored to your business needs
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card 
                key={index} 
                className="hover-lift group border-2 hover:border-primary/50 transition-all duration-300 relative overflow-hidden"
              >
                {/* Animated background on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <CardHeader className="relative z-10">
                  <div className="relative inline-block">
                    <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full group-hover:bg-primary/40 transition-all duration-300" />
                    <Icon className="h-12 w-12 text-primary mb-4 relative z-10 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300" />
                  </div>
                  <CardTitle className="group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="relative z-10">
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature, i) => (
                      <Badge 
                        key={i} 
                        variant="secondary"
                        className="hover:bg-primary hover:text-primary-foreground transition-colors duration-200 cursor-default"
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

