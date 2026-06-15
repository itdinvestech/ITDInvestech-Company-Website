export function RocketLaunch() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* Section-filling smoke layers */}
      <div className="rocket-section-smoke absolute inset-0" />
      <div className="rocket-section-smoke-alt absolute inset-0" />
      <div className="rocket-section-smoke-floor absolute inset-x-0 bottom-0 h-2/3" />

      {/* Launch heat glow */}
      <div className="rocket-launch-glow absolute bottom-0 left-1/2 h-64 w-64 -translate-x-1/2" />

      {/* Launch pad — centered */}
      <div className="absolute bottom-[5%] left-1/2 z-0 w-40 -translate-x-1/2 sm:w-48">
        <div className="h-4 rounded-full bg-gradient-to-r from-slate-400 via-slate-300 to-slate-400 shadow-md" />
        <div className="mx-auto mt-1.5 h-3 w-[130%] -translate-x-[11%] rounded-full bg-slate-400/40 blur-md rocket-pad-glow" />
        <div className="mx-auto mt-3 flex justify-center gap-3">
          <span className="h-10 w-2.5 rounded-full bg-slate-500/80" />
          <span className="h-14 w-2.5 rounded-full bg-slate-500/80" />
          <span className="h-10 w-2.5 rounded-full bg-slate-500/80" />
        </div>
      </div>

      {/* Rocket + flames — centered, larger */}
      <div className="rocket-launch-unit absolute bottom-[9%] left-1/2 z-[1]">
        <div className="relative">
          <div className="rocket-flame-glow absolute left-1/2 top-[calc(100%-8px)] h-40 w-32 -translate-x-1/2" />

          <svg
            width="120"
            height="195"
            viewBox="0 0 72 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="relative z-10 drop-shadow-xl"
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

          <div className="absolute left-1/2 top-[calc(100%-8px)] -translate-x-1/2">
            <div className="rocket-flames relative h-36 w-20">
              <div className="flame flame-outer" />
              <div className="flame flame-mid" />
              <div className="flame flame-inner" />
              <div className="flame flame-core" />
            </div>
          </div>

          <div className="rocket-smoke-trail absolute left-1/2 top-full w-24 -translate-x-1/2" />
        </div>
      </div>

      <div className="rocket-ignition-burst absolute bottom-[6%] left-1/2 -translate-x-1/2" />

      {[0, 1, 2, 3, 4].map((i) => (
        <div
          key={i}
          className="rocket-smoke-puff absolute bottom-[7%] left-1/2"
          style={{
            marginLeft: `${(i - 2) * 48}px`,
          }}
        />
      ))}
    </div>
  )
}
