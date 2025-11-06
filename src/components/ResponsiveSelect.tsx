import { ReactNode, useEffect, useRef, useState } from "react";
import { Button } from "./Button";

type Option<T extends string> = {
  id: T;
  label: string;
};

type ResponsiveSelectProps<T extends string> = {
  id: string;
  label: string;
  options: ReadonlyArray<Option<T>>;
  value: T;
  onChange: (value: T) => void;
  leadingIcon?: ReactNode;
  renderTrigger?: (selected: Option<T> | null) => ReactNode;
  renderOption?: (option: Option<T>, isActive: boolean) => ReactNode;
};

export function ResponsiveSelect<T extends string>(
  props: ResponsiveSelectProps<T>
) {
  const {
    id,
    label,
    options,
    value,
    onChange,
    leadingIcon,
    renderTrigger,
    renderOption,
  } = props;
  const [isDesktopOpen, setIsDesktopOpen] = useState<boolean>(false);
  const desktopDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (!isDesktopOpen) return;
      const target = e.target as Node | null;
      if (
        desktopDropdownRef.current &&
        target &&
        !desktopDropdownRef.current.contains(target)
      ) {
        setIsDesktopOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isDesktopOpen]);

  const selectedOption = options.find((o) => o.id === value) ?? null;
  const selectedLabel = selectedOption?.label ?? value;

  return (
    <>
      {/* Mobile: native select for best UX */}
      <div className="md:hidden flex items-center">
        {leadingIcon && <span className="mr-2 inline-flex">{leadingIcon}</span>}
        <label className="sr-only" htmlFor={id}>
          {label}
        </label>
        <select
          id={id}
          className="h-9 rounded-md border border-border-light bg-surface-secondary px-2 text-sm text-text-primary"
          value={value}
          onChange={(e) => onChange(e.target.value as T)}
        >
          {options.map((opt) => (
            <option key={opt.id} value={opt.id}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>

      {/* Desktop: custom dropdown */}
      <div className="relative hidden md:block" ref={desktopDropdownRef}>
        <Button onClick={() => setIsDesktopOpen((v) => !v)}>
          {renderTrigger ? (
            renderTrigger(selectedOption)
          ) : (
            <>
              {leadingIcon}
              {selectedLabel}
            </>
          )}
          <span className="ml-1 inline-flex" aria-hidden>
            <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
              <path d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" />
            </svg>
          </span>
        </Button>
        {isDesktopOpen && (
          <div className="absolute left-0 mt-1 w-auto min-w-full overflow-hidden rounded-md border border-border-light bg-surface-primary shadow-xl">
            <ul className="py-1 text-sm">
              {options.map((opt) => {
                const isActive = opt.id === value;
                return (
                  <li key={opt.id}>
                    <button
                      type="button"
                      className={`flex w-full items-center gap-2 px-3 py-2 text-left hover:bg-surface-hover ${
                        isActive ? "font-semibold" : "font-normal"
                      }`}
                      onClick={() => {
                        onChange(opt.id);
                        setIsDesktopOpen(false);
                      }}
                    >
                      {renderOption ? (
                        renderOption(opt, isActive)
                      ) : (
                        <>
                          {leadingIcon && (
                            <span className="inline-flex">{leadingIcon}</span>
                          )}
                          <span>{opt.label}</span>
                        </>
                      )}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}
