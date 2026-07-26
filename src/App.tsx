import { Header } from "@/components/Header"
import { Hero } from "@/components/Hero"
import { About } from "@/components/About"
import { Services } from "@/components/Services"
import { ManagementSoftware } from "@/components/ManagementSoftware"
import { TransformShowcase } from "@/components/TransformShowcase"
import { Contact } from "@/components/Contact"
import { Footer } from "@/components/Footer"
import { FloatingNav } from "@/components/FloatingNav"

function App() {
  return (
    <div className="min-h-screen relative">
      <div className="fixed inset-0 -z-50 bg-background" />
      
      <Header />
      <main className="relative overflow-x-hidden">
        <Hero />
        <About />
        <Services />
        <ManagementSoftware />
        <TransformShowcase />
        <Contact />
      </main>
      <Footer />
      <div className="hidden lg:block">
        <FloatingNav />
      </div>
    </div>
  )
}

export default App

