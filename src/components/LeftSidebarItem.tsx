import cn from "../utils/cn";

export type LeftSidebarItemProps = {
  children: React.ReactNode;
  isActive: boolean;
  onClick?: () => void;
};

export function LeftSidebarItem({ children, isActive, onClick }: LeftSidebarItemProps) {
  return (
    <div
      className={cn(
        "group cursor-pointer relative flex h-12 w-full items-center rounded-lg transition-colors duration-200 md:h-9",
        isActive && "bg-surface-active-alt"
      )}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
