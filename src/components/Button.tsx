type ButtonProps = {
  children: React.ReactNode;
  onClick: () => void;
};

export function Button({ children, onClick }: ButtonProps) {
  return (
    <button
      className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-text-primary hover:text-accent-foreground cursor-pointer rounded-xl border border-border-light bg-surface-secondary p-2 hover:bg-surface-hover"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
