import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
import { SwipeBarRight, useSwipeBarContext } from "@luciodale/swipe-bar";
import { useTheme } from "../context/ThemeContext";
import { WaveBackground } from "../components/WaveBackground";

// Import Swiper styles
import "swiper/css";

const PRESETS = [
  {
    id: "writer",
    caption: "AI Text Writer",
    title: "Creative Writing",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
        />
      </svg>
    ),
  },
  {
    id: "email",
    caption: "Email Generator",
    title: "Professional Email",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    id: "code",
    caption: "Code Assistant",
    title: "Debug & Optimize",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
        />
      </svg>
    ),
  },
  {
    id: "summary",
    caption: "Summarizer",
    title: "Key Points",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
    ),
  },
];

const HISTORY = [
  {
    id: 1,
    title: "Project Brainstorming",
    subtitle: "Ideas for the new marketing campaign",
    date: "2h ago",
  },
  {
    id: 2,
    title: "React Component Help",
    subtitle: "Debugging the useEffect hook dependency",
    date: "Yesterday",
  },
  {
    id: 3,
    title: "Email to Client",
    subtitle: "Drafting a proposal for the redesign",
    date: "2 days ago",
  },
];

export function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const { isRightOpen, openSidebar, closeSidebar } = useSwipeBarContext();
  const { resolvedTheme } = useTheme();

  const filteredPresets = PRESETS.filter(
    (preset) =>
      preset.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      preset.caption.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="h-screen bg-black text-white flex flex-col relative overflow-hidden safe-area-inset-top safe-area-inset-bottom font-sans">
      {/* Background with Blurred Wave */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <WaveBackground />
        <div className="absolute -top-[30%] -left-[10%] w-[120%] h-[80%] bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-transparent rounded-[100%] blur-3xl transform rotate-12 opacity-60" />
        <div className="absolute top-[10%] right-0 w-[80%] h-[60%] bg-gradient-to-bl from-indigo-900/10 via-transparent to-transparent rounded-full blur-3xl opacity-40" />
      </div>

      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-6 py-6 backdrop-blur-xs bg-black/0 safe-area-inset-top">
        <div className="flex items-center gap-3">
          <img
            src="/favicon/favicon.svg"
            alt="Stylus Logo"
            className="w-10 h-10"
          />
          <span className="text-xl font-bold tracking-wide">Stylus</span>
        </div>
        <button
          onClick={() =>
            isRightOpen ? closeSidebar("right") : openSidebar("right")
          }
          className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center active:scale-95 transition-transform"
        >
          <svg
            className="w-5 h-5 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </header>

      {/* Main Content */}
      <main className="flex-1 relative z-10 px-4 space-y-6 overflow-y-auto overflow-x-hidden pb-20 pt-24 scrollbar-hide">
        {/* Title */}
        <div className="space-y-2 pt-4">
          <h1 className="text-5xl font-bold leading-tight tracking-tight">
            Create,
            <br />
            explore,
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              be inspired.
            </span>
          </h1>
        </div>

        {/* Search Input */}
        <div className="relative group">
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
            <svg
              className="w-5 h-5 text-gray-400 group-focus-within:text-white transition-colors"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <input
            type="text"
            placeholder="Search presets..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-transparent border border-white/70 rounded-2xl py-2 pl-12 pr-4 text-lg placeholder-gray-500 text-white focus:outline-none focus:border-white/90 transition-colors"
          />
        </div>

        {/* Carousel Section */}
        <div className="space-y-4">
          {/* Swiper for Presets */}
          <div className="-mx-4">
            {filteredPresets.length > 0 ? (
              <Swiper
                slidesPerView={2.3}
                spaceBetween={16}
                slidesOffsetBefore={16}
                slidesOffsetAfter={16}
                grabCursor={true}
                className="w-full !pb-4"
              >
                {filteredPresets.map((preset) => (
                  <SwiperSlide key={preset.id} className="!h-auto">
                    <Link
                      to="/chat"
                      className="bg-white/5 border border-white/10 rounded-3xl p-5 relative hover:bg-white/10 transition-colors group flex flex-col justify-between backdrop-blur-sm h-40"
                    >
                      <div>
                        <span className="text-lg font-medium text-gray-200 leading-tight capitalize tracking-wider block mb-1">
                          {preset.caption}
                        </span>
                        <div className="text-white/80 group-hover:text-white transition-colors mb-2">
                          {preset.icon}
                        </div>
                      </div>
                      <div className="flex justify-between items-end">
                        <div className="absolute bottom-5 right-5">
                          <svg
                            className="w-5 h-5 text-white/50 group-hover:text-white transition-colors transform -rotate-45"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={1.5}
                              d="M14 5l7 7m0 0l-7 7m7-7H3"
                            />
                          </svg>
                        </div>
                      </div>
                    </Link>
                  </SwiperSlide>
                ))}
              </Swiper>
            ) : (
              <div className="px-6">
                <div className="bg-white/5 border border-white/10 rounded-3xl p-5 flex items-center justify-center backdrop-blur-sm h-40">
                  <p className="text-gray-400 text-center">
                    No templates match your search.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* History Section */}
        <div className="space-y-4 pt-4">
          <h2 className="text-xl font-semibold tracking-wide">History</h2>
          <div className="space-y-4">
            {HISTORY.map((item) => (
              <Link
                key={item.id}
                to="/chat"
                className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group backdrop-blur-sm"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 group-hover:text-white transition-colors">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-base capitalize font-medium text-white group-hover:text-blue-300 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-500">{item.subtitle}</p>
                  </div>
                </div>
                <svg
                  className="w-5 h-5 text-gray-500 group-hover:text-white transition-colors"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            ))}
          </div>
        </div>
      </main>

      {/* Right Sidebar */}
      <SwipeBarRight
        className={
          "backdrop-blur-2xl bg-black/40 border-l border-white/10 shadow-2xl relative overflow-hidden z-50"
        }
        showOverlay={false}
        toggleIconColor={resolvedTheme === "light" ? "black" : "white"}
      >
        <div>
          {/* Background Bubbles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-20 -right-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
            <div className="absolute top-1/3 -left-16 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-10 right-1/4 w-56 h-56 bg-cyan-500/10 rounded-full blur-3xl" />
          </div>

          {/* Sidebar Content */}
          <div className="safe-area-inset-top relative z-10 h-full flex flex-col p-6 text-white">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-xl font-bold">Profile</h2>
              <button
                onClick={() => closeSidebar("right")}
                className="p-2 hover:bg-white/10 rounded-full transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="flex flex-col items-center mb-8">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-2xl font-bold mb-4 shadow-lg">
                JD
              </div>
              <h3 className="text-lg font-semibold">John Doe</h3>
              <p className="text-gray-400 text-sm">Pro Plan</p>
            </div>

            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-300">
                    Usage This Month
                  </span>
                  <span className="text-sm font-bold text-white">85%</span>
                </div>
                <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-blue-500 to-purple-500 w-[85%]" />
                </div>
              </div>

              <button className="w-full p-4 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3 hover:bg-white/10 transition-colors group">
                <svg
                  className="w-5 h-5 text-gray-400 group-hover:text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span className="font-medium">Settings</span>
              </button>

              <button className="w-full p-4 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3 hover:bg-white/10 transition-colors group">
                <svg
                  className="w-5 h-5 text-gray-400 group-hover:text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                  />
                </svg>
                <span className="font-medium text-red-400 group-hover:text-red-300">
                  Log Out
                </span>
              </button>
            </div>
          </div>
        </div>
      </SwipeBarRight>
    </div>
  );
}
