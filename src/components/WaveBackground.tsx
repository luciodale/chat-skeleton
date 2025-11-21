export function WaveBackground() {
  return (
    <div className="absolute top-0 left-0 right-0 h-[350px]">
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1200 350"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient
            id="waveGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop
              offset="0%"
              style={{ stopColor: "#3b82f6", stopOpacity: 0.9 }}
            />
            <stop
              offset="50%"
              style={{ stopColor: "#8b5cf6", stopOpacity: 0.85 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: "#ec4899", stopOpacity: 0.9 }}
            />
          </linearGradient>
          <filter id="waveBlur">
            <feGaussianBlur in="SourceGraphic" stdDeviation="12" />
          </filter>
        </defs>
        <path
          d="M0,25 Q300,35 600,120 Q900,200 1200,150 L1200,0 L0,0 Z"
          fill="url(#waveGradient)"
          filter="url(#waveBlur)"
        />
      </svg>
    </div>
  );
}

