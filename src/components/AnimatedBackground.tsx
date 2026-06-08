// Reusable animated background particles component
export function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating particles */}
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-gradient-to-br from-primary/20 to-blue-500/20 blur-xl"
          style={{
            width: Math.random() * 100 + 50 + 'px',
            height: Math.random() * 100 + 50 + 'px',
            left: Math.random() * 100 + '%',
            top: Math.random() * 100 + '%',
            animation: `float-slow ${Math.random() * 10 + 15}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 5}s`,
            opacity: Math.random() * 0.3 + 0.1,
          }}
        />
      ))}
    </div>
  )
}




