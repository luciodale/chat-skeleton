import cn from "../utils/cn";

export type RightSidebarItemProps = {
  children: React.ReactNode;
  onClick?: () => void;
  active?: boolean;
};

export function RightSidebarItem({
  children,
  onClick,
  active,
}: RightSidebarItemProps) {
  return (
    <div
      onClick={onClick}
      className={cn(
        "cursor-pointer inline-flex items-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-border-light hover:bg-accent hover:text-accent-foreground h-9 rounded-lg px-3 w-full justify-start bg-transparent text-text-secondary",
        active && "bg-accent text-accent-foreground"
      )}
    >
      {children}
    </div>
  );
}
