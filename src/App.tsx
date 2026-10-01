import { Header } from "@/components/Header"
import { Hero } from "@/components/Hero"
import { ProcessDiagrams } from "@/components/ProcessDiagrams"
import { ManagementSoftware } from "@/components/ManagementSoftware"
import { AppsCatalogue } from "@/components/AppsCatalogue"
import { AiWorkflows } from "@/components/AiWorkflows"
import { About } from "@/components/About"
import { Contact } from "@/components/Contact"
import { Footer } from "@/components/Footer"

function App() {
  return (
    <div className="min-h-screen relative">
      <div className="fixed inset-0 -z-50 bg-background" />

      <Header />
      <main className="relative overflow-x-hidden">
        <Hero />
        <ProcessDiagrams />
        <ManagementSoftware />
        <AppsCatalogue />
        <AiWorkflows />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App

