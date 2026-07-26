import { Button } from "@/components/ui/button"
import { ChevronUp, ChevronDown } from "lucide-react"
import { useState, useEffect } from "react"
import { scrollToSection } from "@/lib/utils"

export function FloatingNav() {
  const [currentSection, setCurrentSection] = useState(0)
  const sections = ['home', 'about', 'services', 'solutions', 'contact']

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2
      
      sections.forEach((sectionId, index) => {
        const element = document.getElementById(sectionId)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setCurrentSection(index)
          }
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigateUp = () => {
    if (currentSection > 0) {
      scrollToSection(sections[currentSection - 1])
    }
  }

  const navigateDown = () => {
    if (currentSection < sections.length - 1) {
      scrollToSection(sections[currentSection + 1])
    }
  }

  return (
    <div className="fixed bottom-6 right-4 z-40 flex flex-col gap-2 animate-fade-in lg:bottom-8 lg:right-8">
      <Button
        size="icon"
        variant={currentSection === 0 ? 'secondary' : 'default'}
        className="rounded-full shadow-lg transition-all duration-300 disabled:opacity-40"
        onClick={navigateUp}
        disabled={currentSection === 0}
        aria-label="Previous section"
      >
        <ChevronUp className="h-5 w-5" />
      </Button>

      <div className="flex flex-col items-center gap-1 rounded-full border border-border bg-card/95 px-2 py-2 shadow-lg backdrop-blur-sm">
        {sections.map((section, index) => (
          <div
            key={section}
            className={`h-2 w-2 rounded-full transition-all duration-300 ${
              index === currentSection
                ? 'scale-125 bg-primary'
                : 'bg-muted-foreground/30'
            }`}
          />
        ))}
      </div>

      <Button
        size="icon"
        variant={currentSection === sections.length - 1 ? 'secondary' : 'default'}
        className="rounded-full shadow-lg transition-all duration-300 disabled:opacity-40"
        onClick={navigateDown}
        disabled={currentSection === sections.length - 1}
        aria-label="Next section"
      >
        <ChevronDown className="h-5 w-5" />
      </Button>
    </div>
  )
}
