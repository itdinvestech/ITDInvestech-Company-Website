import { Header } from "@/components/Header"
import { Hero } from "@/components/Hero"
import { About } from "@/components/About"
import { Services } from "@/components/Services"
import { ManagementSoftware } from "@/components/ManagementSoftware"
import { Contact } from "@/components/Contact"
import { Footer } from "@/components/Footer"
import { FloatingNav } from "@/components/FloatingNav"

function App() {
  return (
    <div className="min-h-screen relative">
      {/* Global background gradient */}
      <div className="fixed inset-0 -z-50 bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-950 dark:via-slate-900 dark:to-blue-950" />
      
      <Header />
      <main className="relative overflow-hidden">
        <Hero />
        <About />
        <Services />
        <ManagementSoftware />
        <Contact />
      </main>
      <Footer />
      <div className="hidden md:block">
        <FloatingNav />
      </div>
    </div>
  )
}

export default App

