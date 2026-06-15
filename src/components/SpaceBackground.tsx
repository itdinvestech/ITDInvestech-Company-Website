const STARS = [
  { top: '8%', left: '12%', size: 2, delay: 0 },
  { top: '15%', left: '78%', size: 1, delay: 1.2 },
  { top: '22%', left: '45%', size: 2, delay: 0.6 },
  { top: '31%', left: '88%', size: 1, delay: 2.1 },
  { top: '38%', left: '23%', size: 1, delay: 1.8 },
  { top: '44%', left: '62%', size: 2, delay: 0.3 },
  { top: '52%', left: '8%', size: 1, delay: 2.5 },
  { top: '57%', left: '91%', size: 2, delay: 1.1 },
  { top: '63%', left: '37%', size: 1, delay: 0.9 },
  { top: '68%', left: '55%', size: 1, delay: 2.8 },
  { top: '74%', left: '18%', size: 2, delay: 1.5 },
  { top: '79%', left: '72%', size: 1, delay: 0.4 },
  { top: '85%', left: '42%', size: 1, delay: 2.2 },
  { top: '91%', left: '83%', size: 2, delay: 1.7 },
  { top: '12%', left: '33%', size: 1, delay: 2.0 },
  { top: '48%', left: '76%', size: 1, delay: 0.7 },
  { top: '26%', left: '95%', size: 1, delay: 1.3 },
  { top: '71%', left: '5%', size: 1, delay: 2.4 },
  { top: '6%', left: '58%', size: 2, delay: 0.2 },
  { top: '95%', left: '28%', size: 1, delay: 1.9 },
  { top: '18%', left: '67%', size: 1, delay: 2.6 },
  { top: '82%', left: '61%', size: 1, delay: 0.8 },
  { top: '35%', left: '3%', size: 1, delay: 1.4 },
  { top: '60%', left: '48%', size: 2, delay: 2.3 },
] as const

export function SpaceBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-gradient-to-b from-[#030014] via-[#0a0520] to-[#12082e]" />

      <div className="absolute -left-20 top-1/4 h-[28rem] w-[28rem] rounded-full bg-purple-700/20 blur-[100px]" />
      <div className="absolute -right-16 top-1/3 h-80 w-80 rounded-full bg-blue-600/15 blur-[90px]" />
      <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-indigo-500/10 blur-[80px]" />

      <div className="space-stars-layer absolute inset-0 opacity-60" />

      {STARS.map((star, index) => (
        <span
          key={index}
          className="space-star absolute rounded-full bg-white"
          style={{
            top: star.top,
            left: star.left,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationDelay: `${star.delay}s`,
          }}
        />
      ))}
    </div>
  )
}
