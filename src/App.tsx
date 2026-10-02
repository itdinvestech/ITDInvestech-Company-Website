import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { SiteTabsProvider, WorkTabs } from '@/components/SiteTabs'

function App() {
  return (
    <SiteTabsProvider>
      <div className="min-h-screen relative">
        <div className="fixed inset-0 -z-50 bg-background" />

        <Header />
        <main className="relative overflow-x-hidden">
          <Hero />
          <WorkTabs />
        </main>
        <Footer />
      </div>
    </SiteTabsProvider>
  )
}

export default App
