import cn from "../utils/cn";

type ButtonProps = {
  children: React.ReactNode;
  onClick: () => void;
  className?: string;
};

export function Button({ children, onClick, className }: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all cursor-pointer rounded-xl p-2",
        "text-text-primary",
        "bg-presentation",
        "border border-border-light",
        "hover:bg-surface-secondary",
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
