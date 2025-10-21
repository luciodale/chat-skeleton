import { useMediaQuery } from "../hooks/useMediaQuery";

export function RightSidebar() {
  const isSmallScreen = useMediaQuery("small");

  return (
    <nav className="sidenav hide-scrollbar border-l border-border-light bg-background py-1 transition-opacity min-w-[340px] sm:min-w-[352px] opacity-100">
      right sidebar
    </nav>
  );
}
