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
    <div className="fixed bottom-8 right-8 z-40 flex flex-col gap-2 animate-fade-in">
      {/* Up Arrow */}
      <Button
        size="icon"
        className={`rounded-full shadow-lg transition-all duration-300 ${
          currentSection === 0 
            ? 'opacity-50 cursor-not-allowed bg-muted' 
            : 'bg-primary hover:bg-primary/90 hover:scale-110'
        }`}
        onClick={navigateUp}
        disabled={currentSection === 0}
      >
        <ChevronUp className="h-5 w-5" />
      </Button>

      {/* Section Indicator */}
      <div className="flex flex-col gap-1 items-center py-2 px-2 bg-background/90 backdrop-blur-sm rounded-full shadow-lg border-2 border-border">
        {sections.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentSection 
                ? 'bg-primary scale-125' 
                : 'bg-muted-foreground/30'
            }`}
          />
        ))}
      </div>

      {/* Down Arrow */}
      <Button
        size="icon"
        className={`rounded-full shadow-lg transition-all duration-300 ${
          currentSection === sections.length - 1 
            ? 'opacity-50 cursor-not-allowed bg-muted' 
            : 'bg-primary hover:bg-primary/90 hover:scale-110'
        }`}
        onClick={navigateDown}
        disabled={currentSection === sections.length - 1}
      >
        <ChevronDown className="h-5 w-5" />
      </Button>
    </div>
  )
}

