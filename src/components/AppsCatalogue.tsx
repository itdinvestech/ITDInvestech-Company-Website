import { Bike, Clapperboard, MapPin, ShoppingBag, Star, Ticket, UtensilsCrossed } from 'lucide-react'
import type { ReactNode } from 'react'
import { Button } from '@/components/ui/button'
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

function MoviesHome() {
  const films = [
    { title: 'Night Shift', tag: 'Now · 19:40', tone: 'from-[#9f1239] to-[#1c2230]' },
    { title: 'Highveld', tag: 'Now · 20:15', tone: 'from-[#1e3a5f] to-[#141820]' },
    { title: 'Last Reel', tag: 'Tonight · 21:00', tone: 'from-[#7c2d12] to-[#141820]' },
  ]

  return (
    <div className="px-3 pb-4 pt-3" style={{ background: '#0b0d12', color: '#f4f6fb' }}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#9aa3b2]">Welcome</p>
          <p className="text-xs font-semibold">What’s on now</p>
        </div>
        <div
          className="flex h-8 w-8 items-center justify-center rounded-full text-[11px] font-bold"
          style={{ background: '#e11d48', color: '#fff' }}
        >
          MA
        </div>
      </div>
      <div className="mt-3 rounded-lg border px-2.5 py-2 text-[11px] text-[#9aa3b2]" style={{ borderColor: '#252b36', background: '#141820' }}>
        Search films, cinemas…
      </div>
      <div className="relative mt-3 overflow-hidden rounded-xl p-3" style={{ background: '#141820' }}>
        <p className="text-[10px] font-semibold uppercase tracking-[0.16em]" style={{ color: '#fda4af' }}>
          Tonight at the movies
        </p>
        <p className="mt-1 text-sm font-bold">Stories worth the big screen.</p>
        <p className="mt-1 text-[10px] text-[#9aa3b2]">3 films now showing · Sandton City</p>
        <div className="mt-2 flex gap-1.5">
          <span className="rounded-md px-2 py-1 text-[10px] font-semibold text-white" style={{ background: '#e11d48' }}>
            Quick Book
          </span>
          <span className="rounded-md border px-2 py-1 text-[10px] text-[#9aa3b2]" style={{ borderColor: '#252b36' }}>
            Browse
          </span>
        </div>
      </div>
      <p className="mt-3 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#9aa3b2]">Now showing</p>
      <div className="mt-2 flex gap-2">
        {films.map((film) => (
          <div key={film.title} className="min-w-0 flex-1">
            <div className={`h-16 rounded-lg bg-gradient-to-b ${film.tone}`} />
            <p className="mt-1 truncate text-[10px] font-semibold">{film.title}</p>
            <p className="text-[9px] text-[#9aa3b2]">{film.tag}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

function MoviesTicket() {
  const seats = [
    [0, 1, 1, 1, 1, 0],
    [1, 1, 2, 2, 1, 1],
    [1, 1, 1, 1, 1, 1],
    [1, 3, 3, 1, 1, 1],
  ]

  return (
    <div className="px-3 pb-4 pt-3" style={{ background: '#0b0d12', color: '#f4f6fb' }}>
      <p className="text-[10px] font-semibold uppercase tracking-[0.16em]" style={{ color: '#fda4af' }}>
        Pick seats
      </p>
      <h4 className="mt-1 text-sm font-bold">Night Shift</h4>
      <p className="text-[10px] text-[#9aa3b2]">Sandton City · Screen 3 · 19:40</p>
      <div className="mt-3 rounded-xl border p-3" style={{ borderColor: '#252b36', background: '#141820' }}>
        <p className="mb-2 text-center text-[9px] uppercase tracking-[0.2em] text-[#9aa3b2]">Screen</p>
        <div className="mx-auto mb-3 h-1 w-3/4 rounded-full" style={{ background: '#252b36' }} />
        <div className="space-y-1">
          {seats.map((row, r) => (
            <div key={r} className="flex justify-center gap-1">
              {row.map((cell, c) => (
                <span
                  key={c}
                  className="h-3.5 w-3.5 rounded-[3px]"
                  style={{
                    background: cell === 0 ? 'transparent' : cell === 2 ? '#e11d48' : cell === 3 ? '#252b36' : '#1c2230',
                    outline: cell === 2 ? '1px solid #fda4af' : undefined,
                  }}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="mt-3 rounded-xl border p-3" style={{ borderColor: '#252b36', background: '#141820' }}>
        <div className="flex items-start justify-between gap-2">
          <div>
            <p className="text-xs font-semibold">Confirmed · MV-1842</p>
            <p className="text-[10px] text-[#9aa3b2]">Seats F7 · F8 · Adult</p>
          </div>
          <div className="grid h-10 w-10 grid-cols-4 gap-px bg-[#f4f6fb] p-0.5">
            {Array.from({ length: 16 }, (_, i) => (
              <span key={i} className={i % 3 === 0 ? 'bg-[#0b0d12]' : 'bg-[#f4f6fb]'} />
            ))}
          </div>
        </div>
        <div className="mt-2 flex justify-between text-[11px]">
          <span className="text-[#9aa3b2]">Tonight · 19:40</span>
          <span className="font-semibold">R180</span>
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
              Cinema app
            </p>
            <h3 className="mt-2 text-2xl font-extrabold tracking-tight sm:text-3xl">MoviesApp</h3>
            <p className="mt-2 text-sm font-medium text-muted-foreground">
              Movie tickets · Hosted app
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-[15px]">
              Book tickets, pick seats, and get into the show. A cinema app we built and host —
              now showing, showtimes, snacks, and a ticket with a QR at the door.
            </p>
            <ul className="mt-6 space-y-2.5 text-sm">
              {[
                'Browse what’s on and quick-book a screen',
                'Seat maps, tickets, and snacks in one stack',
                'Private demo — the live site is invite-only',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <Ticket className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Button onClick={() => scrollToSection('contact')} className="mt-8">
              Ask about this app
            </Button>
          </div>

          <div className="flex flex-col items-center justify-center gap-8 bg-muted/25 px-4 py-10 sm:flex-row sm:items-end sm:gap-6 sm:px-8 dark:bg-muted/10">
            <Phone caption="What’s on now">
              <MoviesHome />
            </Phone>
            <Phone caption="Seats & ticket">
              <MoviesTicket />
            </Phone>
          </div>
        </div>
        </div>
      </div>
    </section>
  )
}
