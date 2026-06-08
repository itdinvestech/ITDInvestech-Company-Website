import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Target, Users, Lightbulb, Award } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-20 sm:py-32 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-purple-50/30 to-pink-50/50 dark:from-blue-950/20 dark:via-purple-950/10 dark:to-pink-950/20" />
        <div className="absolute inset-0 dot-pattern opacity-40" />
        
        {/* Floating accent shapes */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-2xl animate-float-slower" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-br from-blue-500/10 to-transparent rounded-full blur-2xl animate-float-slow" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl mb-4">
            About ITDInvestech
          </h2>
          <p className="text-lg text-muted-foreground">
            We're a team of passionate technologists specializing in <span className="font-semibold text-foreground">Custom Management Software Development</span>. 
            Helping businesses across education, healthcare, retail, and real estate thrive with tailored digital solutions.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-16">
          <Card className="hover-lift group border-2 hover:border-primary/50 transition-all duration-300">
            <CardHeader>
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full group-hover:bg-primary/30 transition-all duration-300" />
                <Target className="h-10 w-10 text-primary mb-2 relative z-10 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <CardTitle className="group-hover:text-primary transition-colors">Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                To empower businesses with innovative technology solutions that drive 
                measurable results and sustainable growth.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="hover-lift group border-2 hover:border-primary/50 transition-all duration-300">
            <CardHeader>
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full group-hover:bg-primary/30 transition-all duration-300" />
                <Users className="h-10 w-10 text-primary mb-2 relative z-10 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <CardTitle className="group-hover:text-primary transition-colors">Our Team</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                A diverse group of experts in software development, design, and 
                business strategy working together.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="hover-lift group border-2 hover:border-primary/50 transition-all duration-300">
            <CardHeader>
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full group-hover:bg-primary/30 transition-all duration-300" />
                <Lightbulb className="h-10 w-10 text-primary mb-2 relative z-10 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <CardTitle className="group-hover:text-primary transition-colors">Innovation</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                We stay ahead of the curve by embracing emerging technologies and 
                creative problem-solving approaches.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="hover-lift group border-2 hover:border-primary/50 transition-all duration-300">
            <CardHeader>
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full group-hover:bg-primary/30 transition-all duration-300" />
                <Award className="h-10 w-10 text-primary mb-2 relative z-10 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <CardTitle className="group-hover:text-primary transition-colors">Excellence</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Committed to delivering the highest quality solutions that exceed 
                expectations and industry standards.
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        <div className="mx-auto max-w-3xl">
          <Card className="border-2 hover:border-primary/50 transition-all duration-500 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <CardContent className="pt-6 relative z-10">
              <p className="text-center text-lg leading-relaxed">
                Founded in 2019, our journey has been marked by a relentless 
                pursuit of excellence and an unwavering commitment to our clients' success. 
                With <strong>international reach extending to the Netherlands</strong>, we serve businesses across various industries, 
                helping them navigate the complexities of digital transformation with confidence.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

