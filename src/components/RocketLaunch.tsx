export function RocketLaunch() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* Launch pad */}
      <div className="absolute bottom-[6%] left-[18%] z-0 w-28 -translate-x-1/2 sm:left-[20%] sm:w-36">
        <div className="h-3 rounded-full bg-gradient-to-r from-slate-400 via-slate-300 to-slate-400 shadow-md" />
        <div className="mx-auto mt-1 h-2 w-[120%] -translate-x-[8%] rounded-full bg-slate-400/40 blur-sm rocket-pad-glow" />
        <div className="mx-auto mt-2 flex justify-center gap-2">
          <span className="h-8 w-2 rounded-full bg-slate-500/80" />
          <span className="h-10 w-2 rounded-full bg-slate-500/80" />
          <span className="h-8 w-2 rounded-full bg-slate-500/80" />
        </div>
      </div>

      {/* Rocket + flames (single moving unit) */}
      <div className="rocket-launch-unit absolute bottom-[10%] left-[18%] z-[1] -translate-x-1/2 sm:left-[20%]">
        <div className="relative">
          <svg
            width="80"
            height="130"
            viewBox="0 0 72 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="relative z-10 drop-shadow-lg"
          >
            <path
              d="M36 8c8 14 12 28 12 44v18c0 4-2 8-6 10l-6 4-6-4c-4-2-6-6-6-10V52c0-16 4-30 12-44Z"
              fill="url(#rocketBody)"
            />
            <path d="M18 70 8 92c8-2 16-2 24 0l-2-22H18Z" fill="#64748b" />
            <path d="M54 70 64 92c-8-2-16-2-24 0l2-22h22Z" fill="#64748b" />
            <circle cx="36" cy="46" r="8" fill="#dbeafe" stroke="#93c5fd" strokeWidth="2" />
            <path d="M30 98h12l-2 10h-8l-2-10Z" fill="#334155" />
            <defs>
              <linearGradient id="rocketBody" x1="36" y1="8" x2="36" y2="82" gradientUnits="userSpaceOnUse">
                <stop stopColor="#f8fafc" />
                <stop offset="1" stopColor="#cbd5e1" />
              </linearGradient>
            </defs>
          </svg>

          <div className="absolute left-1/2 top-[calc(100%-6px)] -translate-x-1/2">
            <div className="rocket-flames relative h-20 w-12">
              <div className="flame flame-outer" />
              <div className="flame flame-inner" />
              <div className="flame flame-core" />
            </div>
          </div>

          <div className="rocket-smoke absolute left-1/2 top-full h-32 w-16 -translate-x-1/2" />
        </div>
      </div>

      <div className="rocket-ignition-burst absolute bottom-[7%] left-[18%] -translate-x-1/2 sm:left-[20%]" />

      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className="rocket-smoke-puff absolute bottom-[8%] left-[18%] -translate-x-1/2 sm:left-[20%]"
          style={{ animationDelay: `${i * 0.35}s` }}
        />
      ))}
    </div>
  )
}
