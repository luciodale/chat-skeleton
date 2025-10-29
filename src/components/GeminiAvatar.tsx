export function GeminiAvatar() {
  return (
    <div className="flex h-6 w-6 items-center justify-center overflow-hidden rounded-full">
      <div
        title="Gemini"
        className="relative flex h-9 w-9 items-center justify-center rounded-sm p-1 text-white"
        style={{
          background: "transparent",
          width: "28.8px",
          height: "28.8px",
        }}
      >
        <svg
          width="20.16"
          height="20.16"
          className=""
          viewBox="0 0 18 18"
          preserveAspectRatio="xMidYMid meet"
          focusable="false"
        >
          <path
            fill="url(#_4rif_paint0_radial_897_42)"
            d="M9 18c0-1.245-.24-2.415-.72-3.51a8.934 8.934 0 00-1.912-2.857A8.934 8.934 0 003.51 9.72 8.646 8.646 0 000 9a8.886 8.886 0 003.51-.697 9.247 9.247 0 002.857-1.936A8.934 8.934 0 008.28 3.51C8.76 2.415 9 1.245 9 0c0 1.245.232 2.415.697 3.51a9.247 9.247 0 001.936 2.857 9.247 9.247 0 002.857 1.936A8.886 8.886 0 0018 9c-1.245 0-2.415.24-3.51.72a8.934 8.934 0 00-2.857 1.912 9.247 9.247 0 00-1.935 2.858A8.886 8.886 0 009 18z"
          />
          <defs>
            <radialGradient
              id="_4rif_paint0_radial_897_42"
              cx={0}
              cy={0}
              r={1}
              gradientUnits="userSpaceOnUse"
              gradientTransform="rotate(135 9 3.728) scale(25.4558 12.7279)"
            >
              <stop offset=".325" stopColor="#FFDDB7" />
              <stop offset=".706" stopColor="#076EFF" />
            </radialGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}
