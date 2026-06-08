import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const headerOffset = 64 // Height of sticky header
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      const offsetPosition = elementPosition - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section id="home" className="relative overflow-hidden pt-12 pb-20 sm:pt-16 sm:pb-32">
      {/* Dynamic animated background */}
      <div className="absolute inset-0 -z-10">
        {/* Base gradient mesh */}
        <div className="absolute inset-0 mesh-gradient-subtle" />
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 grid-pattern opacity-50" />
        
        {/* Animated orbs */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-primary/30 to-purple-500/30 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute top-1/4 right-0 w-80 h-80 bg-gradient-to-br from-blue-500/25 to-cyan-500/25 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1.5s' }} />
        
        {/* Floating geometric shapes */}
        <div className="absolute top-20 right-20 w-32 h-32 border-2 border-primary/20 rounded-lg animate-float-slow" />
        <div className="absolute bottom-40 left-10 w-24 h-24 border-2 border-blue-500/20 rounded-full animate-float-slower" />
        <div className="absolute top-1/2 right-1/3 w-20 h-20 border-2 border-purple-500/20 rotate-45 animate-float-slow" style={{ animationDelay: '3s' }} />
      </div>
      
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-8 inline-flex items-center rounded-full border px-4 py-1.5 text-sm animate-fade-in bg-background/50 backdrop-blur-sm hover:bg-background/80 transition-all duration-300">
            <Sparkles className="mr-2 h-4 w-4 text-primary animate-pulse" />
            <span>Welcome to the Future of Technology</span>
          </div>
          
          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl animate-slide-up">
            Transform Your Business with{" "}
            <span className="bg-gradient-to-r from-primary via-blue-600 to-purple-600 bg-clip-text text-transparent animate-gradient inline-block">
              Custom Management Software
            </span>
          </h1>
          
          <p className="mb-10 text-lg text-muted-foreground sm:text-xl animate-slide-up stagger-1">
            We specialize in creating powerful <span className="font-semibold text-foreground">Management Software Solutions</span> tailored to your industry. 
            From <span className="font-semibold text-foreground">School Management Systems</span> and <span className="font-semibold text-foreground">Medical Practice Software</span> to 
            <span className="font-semibold text-foreground"> Inventory Management</span> and <span className="font-semibold text-foreground">Real Estate Solutions</span>.
          </p>
          
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center animate-slide-up stagger-2">
            <Button 
              size="lg" 
              onClick={() => scrollToSection('contact')}
              className="group relative overflow-hidden"
            >
              <span className="relative z-10">Get Started</span>
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              onClick={() => scrollToSection('services')}
              className="group hover:border-primary hover:text-primary transition-all duration-300"
            >
              Explore Services
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-2 gap-8 sm:grid-cols-4 animate-fade-in stagger-3">
            <div className="group cursor-pointer transition-transform hover:scale-110 duration-300">
              <div className="text-3xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent group-hover:animate-pulse">25+</div>
              <div className="mt-1 text-sm text-muted-foreground">Projects Completed</div>
            </div>
            <div className="group cursor-pointer transition-transform hover:scale-110 duration-300">
              <div className="text-3xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent group-hover:animate-pulse">100%</div>
              <div className="mt-1 text-sm text-muted-foreground">Client Satisfaction</div>
            </div>
            <div className="group cursor-pointer transition-transform hover:scale-110 duration-300">
              <div className="text-3xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent group-hover:animate-pulse">6</div>
              <div className="mt-1 text-sm text-muted-foreground">Team Members</div>
            </div>
            <div className="group cursor-pointer transition-transform hover:scale-110 duration-300">
              <div className="text-3xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent group-hover:animate-pulse">🇿🇦→🇳🇱</div>
              <div className="mt-1 text-sm text-muted-foreground">SA to NL</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

