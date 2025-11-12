export function GlassBubbles({ side }: { side: "left" | "right" }) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {side === "left" ? (
        <>
          <div className="absolute -top-20 -left-20 w-72 h-72 bg-gradient-to-br from-blue-200/12 to-purple-200/12 rounded-full blur-3xl" />
          <div className="absolute top-1/3 -right-16 w-64 h-64 bg-gradient-to-br from-purple-200/10 to-pink-200/10 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-1/4 w-56 h-56 bg-gradient-to-br from-cyan-200/8 to-blue-200/8 rounded-full blur-3xl" />
        </>
      ) : (
        <>
          <div className="absolute -top-20 -right-20 w-72 h-72 bg-gradient-to-br from-blue-200/12 to-purple-200/12 rounded-full blur-3xl" />
          <div className="absolute top-1/3 -left-16 w-64 h-64 bg-gradient-to-br from-purple-200/10 to-pink-200/10 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-1/4 w-56 h-56 bg-gradient-to-br from-cyan-200/8 to-blue-200/8 rounded-full blur-3xl" />
        </>
      )}
    </div>
  );
}

