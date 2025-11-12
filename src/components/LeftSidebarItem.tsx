import cn from "../utils/cn";

export type LeftSidebarItemProps = {
  children: React.ReactNode;
  isActive: boolean;
  onClick?: () => void;
};

export function LeftSidebarItem({
  children,
  isActive,
  onClick,
}: LeftSidebarItemProps) {
  return (
    <div
      className={cn(
        "group cursor-pointer relative flex h-12 w-full items-center rounded-lg transition-all md:h-9",
        "border border-border-light",
        "hover:bg-accent-foreground/10",
        isActive && "bg-accent-foreground/5 border-border-light"
      )}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
