'use client'

export default function AnimatedOutlineText() {
  return (
    <div className="relative w-full flex justify-center overflow-hidden">
      <svg
        viewBox="0 0 1200 200"
        className="w-full max-w-6xl"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Gradient */}
          <linearGradient id="strokeGradient" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="50%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#3b82f6" />

            <animate
              attributeName="x1"
              from="0"
              to="1200"
              dur="6s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="x2"
              from="1200"
              to="0"
              dur="6s"
              repeatCount="indefinite"
            />
          </linearGradient>

          {/* Glow */}
          <filter id="softGlow">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Outline animation layer */}
        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          className="font-bold tracking-tighter"
          fontSize="96"
          fill="transparent"
          stroke="url(#strokeGradient)"
          strokeWidth="2"
          strokeDasharray="6 12"
          filter="url(#softGlow)"
        >
          Build Beautiful UI Faster
          <animate
            attributeName="stroke-dashoffset"
            from="0"
            to="100"
            dur="4s"
            repeatCount="indefinite"
          />
        </text>

        {/* Static crisp outline */}
        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          className="font-bold tracking-tighter"
          fontSize="96"
          fill="transparent"
          stroke="url(#strokeGradient)"
          strokeWidth="1"
          opacity="0.6"
        >
          Build Beautiful UI Faster
        </text>
      </svg>
    </div>
  )
}
