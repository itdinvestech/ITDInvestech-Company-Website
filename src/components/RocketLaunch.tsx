export function RocketLaunch() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-orange-500/10 via-blue-500/5 to-transparent" />

      {/* Launch pad glow */}
      <div className="absolute bottom-0 left-1/2 h-32 w-32 -translate-x-1/2 rounded-full bg-orange-400/20 blur-3xl rocket-pad-glow" />

      {/* Exhaust trail */}
      <div className="absolute bottom-[18%] left-1/2 w-24 -translate-x-1/2 rocket-exhaust">
        <div className="mx-auto h-40 w-8 rounded-full bg-gradient-to-t from-orange-500/70 via-amber-300/40 to-transparent blur-md" />
        <div className="mx-auto -mt-28 h-32 w-4 rounded-full bg-gradient-to-t from-sky-300/50 to-transparent blur-sm" />
      </div>

      {/* Rocket */}
      <div className="absolute bottom-[22%] left-1/2 -translate-x-1/2 rocket-ship">
        <svg width="72" height="120" viewBox="0 0 72 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M36 8c8 14 12 28 12 44v18c0 4-2 8-6 10l-6 4-6-4c-4-2-6-6-6-10V52c0-16 4-30 12-44Z" fill="url(#rocketBody)" />
          <path d="M18 70 8 92c8-2 16-2 24 0l-2-22H18Z" fill="#64748b" />
          <path d="M54 70 64 92c-8-2-16-2-24 0l2-22h22Z" fill="#64748b" />
          <circle cx="36" cy="46" r="8" fill="#dbeafe" stroke="#93c5fd" strokeWidth="2" />
          <path d="M30 98h12l-2 10h-8l-2-10Z" fill="#f97316" />
          <defs>
            <linearGradient id="rocketBody" x1="36" y1="8" x2="36" y2="82" gradientUnits="userSpaceOnUse">
              <stop stopColor="#f8fafc" />
              <stop offset="1" stopColor="#cbd5e1" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Stars / particles */}
      {[
        { left: '12%', delay: '0s' },
        { left: '28%', delay: '1.2s' },
        { left: '68%', delay: '0.6s' },
        { left: '84%', delay: '1.8s' },
        { left: '50%', delay: '2.4s' },
      ].map((star) => (
        <span
          key={star.left}
          className="absolute bottom-1/4 h-1.5 w-1.5 rounded-full bg-white/70 rocket-star"
          style={{ left: star.left, animationDelay: star.delay }}
        />
      ))}
    </div>
  )
}
