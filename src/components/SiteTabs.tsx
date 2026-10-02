/* eslint-disable react-refresh/only-export-components */
import { About } from '@/components/About'
import { AiWorkflows } from '@/components/AiWorkflows'
import { Contact } from '@/components/Contact'
import { ManagementSoftware } from '@/components/ManagementSoftware'
import { ProcessDiagrams } from '@/components/ProcessDiagrams'
import { cn, scrollToSection } from '@/lib/utils'
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react'

export const TABS = [
  { id: 'how', label: 'How we work' },
  { id: 'platforms', label: 'Platforms' },
  { id: 'ai', label: 'AI' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
] as const

export type TabId = (typeof TABS)[number]['id']

const HASH_TO_TAB: Record<string, TabId> = {
  how: 'how',
  platforms: 'platforms',
  solutions: 'platforms',
  ai: 'ai',
  about: 'about',
  contact: 'contact',
}

type SiteTabsValue = {
  tab: TabId
  intent: string | null
  intentKey: number
  openTab: (tab: TabId, intent?: string) => void
}

const SiteTabsContext = createContext<SiteTabsValue | null>(null)

export function tabFromHash(hash: string): TabId | null {
  const id = hash.replace(/^#/, '').split('?')[0]
  return HASH_TO_TAB[id] ?? null
}

function scrollWorkIntoView() {
  window.setTimeout(() => scrollToSection('work', { headerOffset: 56 }), 0)
}

export function SiteTabsProvider({ children }: { children: ReactNode }) {
  const [tab, setTab] = useState<TabId>(() => tabFromHash(window.location.hash) ?? 'how')
  const [intent, setIntent] = useState<string | null>(null)
  const [intentKey, setIntentKey] = useState(0)

  const openTab = useCallback((next: TabId, nextIntent?: string) => {
    setTab(next)
    if (nextIntent !== undefined) {
      setIntent(nextIntent)
      setIntentKey((key) => key + 1)
    }
    const hash = `#${next}`
    if (window.location.hash !== hash) {
      window.history.pushState({ tab: next }, '', hash)
    }
    scrollWorkIntoView()
  }, [])

  useEffect(() => {
    if (tabFromHash(window.location.hash)) scrollWorkIntoView()
  }, [])

  useEffect(() => {
    const sync = () => {
      const next = tabFromHash(window.location.hash)
      if (!next) return
      setTab(next)
      scrollWorkIntoView()
    }
    window.addEventListener('hashchange', sync)
    window.addEventListener('popstate', sync)
    return () => {
      window.removeEventListener('hashchange', sync)
      window.removeEventListener('popstate', sync)
    }
  }, [])

  return (
    <SiteTabsContext.Provider value={{ tab, intent, intentKey, openTab }}>
      {children}
    </SiteTabsContext.Provider>
  )
}

export function useSiteTabs() {
  const value = useContext(SiteTabsContext)
  if (!value) throw new Error('useSiteTabs must be used within SiteTabsProvider')
  return value
}

export function WorkTabs() {
  const { tab, openTab } = useSiteTabs()

  return (
    <div id="work">
      <div className="material-bar sticky top-14 z-40 border-b border-border/70">
        <div
          role="tablist"
          aria-label="Site sections"
          className="hide-scrollbar container mx-auto flex touch-pan-x gap-1 overflow-x-auto px-4 py-2"
        >
          {TABS.map((item) => {
            const selected = tab === item.id
            return (
              <button
                key={item.id}
                type="button"
                role="tab"
                id={`tab-${item.id}`}
                aria-selected={selected}
                aria-controls={`panel-${item.id}`}
                tabIndex={selected ? 0 : -1}
                onClick={() => openTab(item.id)}
                className={cn(
                  'shrink-0 rounded-full px-3.5 py-2 text-[13px] font-medium transition-[transform,color,background-color] duration-150 ease-out active:scale-[0.97] motion-reduce:active:scale-100',
                  selected
                    ? 'bg-foreground text-background'
                    : 'text-muted-foreground hover:bg-foreground/5 hover:text-foreground',
                )}
              >
                {item.label}
              </button>
            )
          })}
        </div>
      </div>

      <div
        key={tab}
        role="tabpanel"
        id={`panel-${tab}`}
        aria-labelledby={`tab-${tab}`}
        className="tab-panel"
      >
        {tab === 'how' && <ProcessDiagrams />}
        {tab === 'platforms' && <ManagementSoftware />}
        {tab === 'ai' && <AiWorkflows />}
        {tab === 'about' && <About />}
        {tab === 'contact' && <Contact />}
      </div>
    </div>
  )
}
