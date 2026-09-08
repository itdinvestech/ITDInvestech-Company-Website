import { Bike, Clapperboard, ExternalLink, MapPin, ShoppingBag, Star, Ticket, UtensilsCrossed } from 'lucide-react'
import type { ReactNode } from 'react'
import { Button } from '@/components/ui/button'
import { SitePreview } from '@/components/SitePreview'
import { scrollToSection } from '@/lib/utils'

function Phone({ children, caption }: { children: ReactNode; caption: string }) {
  return (
    <div className="mx-auto w-[220px]">
      <div className="rounded-[2rem] border border-border bg-background p-2 shadow-lg">
        <div className="overflow-hidden rounded-[1.55rem] bg-card">
          <div className="flex items-center justify-center bg-background pt-2">
            <span className="h-1.5 w-16 rounded-full bg-border" />
          </div>
          {children}
        </div>
      </div>
      <p className="mt-3 text-center text-xs text-muted-foreground">{caption}</p>
    </div>
  )
}

function BitesHome() {
  const spots = [
    { name: 'Soweto Grill', tag: 'Shisa nyama · 22 min', rating: '4.8' },
    { name: 'Kota Corner', tag: 'Street food · 14 min', rating: '4.6' },
    { name: 'Durban Spice', tag: 'Bunny chow · 18 min', rating: '4.9' },
  ]

  return (
    <div className="bg-background px-3 pb-4 pt-3">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-[10px] uppercase tracking-[0.16em] text-muted-foreground">Deliver to</p>
          <p className="flex items-center gap-1 text-xs font-semibold">
            <MapPin className="h-3 w-3 text-primary" />
            Braamfontein
          </p>
        </div>
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-[11px] font-bold text-primary-foreground">
          MB
        </div>
      </div>
      <div className="mt-3 rounded-lg border border-border bg-muted/40 px-2.5 py-2 text-[11px] text-muted-foreground">
        Search kota, braai, groceries…
      </div>
      <div className="mt-3 flex gap-1.5">
        {['Nearby', 'Braai', 'Kota'].map((chip) => (
          <span
            key={chip}
            className="rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-medium text-primary"
          >
            {chip}
          </span>
        ))}
      </div>
      <div className="mt-3 space-y-2">
        {spots.map((spot) => (
          <div key={spot.name} className="flex gap-2 rounded-xl border border-border p-2">
            <div className="h-10 w-10 shrink-0 rounded-lg bg-primary/15" />
            <div className="min-w-0">
              <p className="text-xs font-semibold">{spot.name}</p>
              <p className="text-[10px] text-muted-foreground">{spot.tag}</p>
            </div>
            <span className="ml-auto flex items-center gap-0.5 text-[10px] font-semibold">
              <Star className="h-3 w-3 fill-primary text-primary" />
              {spot.rating}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

function BitesTrack() {
  return (
    <div className="bg-background px-3 pb-4 pt-3">
      <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-primary">On the way</p>
      <h4 className="mt-1 text-sm font-bold">Kota Corner · #MB-1842</h4>
      <div className="mt-3 rounded-xl border border-border p-3">
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary">
            <Bike className="h-4 w-4" />
          </div>
          <div>
            <p className="text-xs font-semibold">Sipho is 8 min away</p>
            <p className="text-[10px] text-muted-foreground">Toyota · GP 482</p>
          </div>
        </div>
        <div className="mt-3 h-16 overflow-hidden rounded-lg bg-muted">
          <div className="h-full w-full bg-[radial-gradient(circle_at_30%_40%,hsl(var(--primary)/0.25),transparent_55%),linear-gradient(135deg,hsl(var(--muted))_0%,hsl(var(--background))_100%)]" />
        </div>
      </div>
      <div className="mt-3 space-y-1.5 text-[11px]">
        <div className="flex justify-between">
          <span className="text-muted-foreground">Steak kota × 1</span>
          <span className="font-medium">R68</span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted-foreground">Ginger beer × 1</span>
          <span className="font-medium">R22</span>
        </div>
        <div className="flex justify-between border-t border-border pt-1.5 font-semibold">
          <span>Total</span>
          <span>R90</span>
        </div>
      </div>
    </div>
  )
}

export function AppsCatalogue() {
  return (
    <section id="apps" className="section-pad relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute inset-0 -z-10 bg-muted/30 dark:bg-muted/10" />

      <div className="container mx-auto px-4">
        <div className="section-intro">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-primary">
            Apps we ship
          </p>
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-5xl">
            A catalogue of the apps.
            <span className="mt-2 block text-muted-foreground">Not only the websites.</span>
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
            We also build consumer and operator apps — hosted and delivered with the rest of the
            stack. Food delivery, movie tickets, hiring, learning, clinics: the work in someone’s
            pocket.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-6xl space-y-6 sm:space-y-8">
          <div className="overflow-hidden rounded-2xl border border-border bg-card lg:grid lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
          <div className="border-b border-border p-6 sm:p-8 lg:border-b-0 lg:border-r">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-primary-foreground">
              <UtensilsCrossed className="h-5 w-5" />
            </div>
            <p className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              Featured app
            </p>
            <h3 className="mt-2 text-2xl font-extrabold tracking-tight sm:text-3xl">Mzanzi Bites</h3>
            <p className="mt-2 text-sm font-medium text-muted-foreground">
              Food delivery · South Africa
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-[15px]">
              An Uber Eats-style app we built and host: restaurants, carts, riders, and live order
              tracking. Local food — kota, shisa nyama, bunny chow — from search to the door.
            </p>
            <ul className="mt-6 space-y-2.5 text-sm">
              {[
                'Restaurant discovery, menus, and checkout',
                'Rider matching and live tracking',
                'Customer, merchant, and courier apps on one stack',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <ShoppingBag className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Button onClick={() => scrollToSection('contact')} className="mt-8">
              Ask about this app
            </Button>
          </div>

          <div className="flex flex-col items-center justify-center gap-8 bg-muted/25 px-4 py-10 sm:flex-row sm:items-end sm:gap-6 sm:px-8 dark:bg-muted/10">
            <Phone caption="Browse & order">
              <BitesHome />
            </Phone>
            <Phone caption="Track the rider">
              <BitesTrack />
            </Phone>
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl border border-border bg-card lg:grid lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
          <div className="border-b border-border p-6 sm:p-8 lg:border-b-0 lg:border-r">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-primary-foreground">
              <Clapperboard className="h-5 w-5" />
            </div>
            <p className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              Live app
            </p>
            <h3 className="mt-2 text-2xl font-extrabold tracking-tight sm:text-3xl">MoviesApp</h3>
            <p className="mt-2 text-sm font-medium text-muted-foreground">
              Movie tickets · Live demo
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-[15px]">
              Book tickets, manage an account, and get into the show. A cinema booking app we built
              and host — showtimes, seats, and checkout in one place.
            </p>
            <ul className="mt-6 space-y-2.5 text-sm">
              {[
                'Browse films and book seats',
                'Accounts, tickets, and the night of the show',
                'Live at moviesapp.itdinvestech.co.za',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <Ticket className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild>
                <a
                  href="https://moviesapp.itdinvestech.co.za/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open live app
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" onClick={() => scrollToSection('contact')}>
                Ask about this app
              </Button>
            </div>
          </div>

          <div className="flex items-center bg-muted/25 p-6 sm:p-8 dark:bg-muted/10">
            <SitePreview
              className="w-full"
              title="MoviesApp"
              url="https://moviesapp.itdinvestech.co.za/"
              image="/previews/movies.png"
            />
          </div>
        </div>
        </div>
      </div>
    </section>
  )
}
