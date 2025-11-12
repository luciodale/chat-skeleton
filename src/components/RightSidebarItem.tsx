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
        "cursor-pointer inline-flex items-center gap-2 text-sm font-medium transition-all h-9 rounded-lg px-3 w-full justify-start",
        "border border-border-light",
        "hover:bg-accent-foreground/10",
        "text-text-secondary",
        active && "bg-accent-foreground/5 text-text-primary"
      )}
    >
      {children}
    </div>
  );
}
