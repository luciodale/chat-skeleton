export function LeftSidebarItem({ children }: { children: React.ReactNode }) {
  return (
    <div className="group relative flex h-12 w-full items-center rounded-lg transition-colors duration-200 md:h-9 bg-surface-active-alt">
      {children}
    </div>
  );
}
