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
};

export function ResponsiveSelect<T extends string>(
  props: ResponsiveSelectProps<T>
) {
  const { id, label, options, value, onChange, leadingIcon } = props;
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

  const selectedLabel = options.find((o) => o.id === value)?.label ?? value;

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
          className="h-9 rounded-md border border-neutral-300 bg-white px-2 text-sm dark:border-neutral-700 dark:bg-neutral-900"
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
          {leadingIcon}
          {selectedLabel}
          <span className="ml-1 inline-flex" aria-hidden>
            <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
              <path d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" />
            </svg>
          </span>
        </Button>
        {isDesktopOpen && (
          <div className="absolute left-0 mt-1 min-w-full w-56 overflow-hidden rounded-md border border-neutral-200 bg-white shadow-xl dark:border-neutral-800 dark:bg-neutral-900">
            <ul className="py-1 text-sm">
              {options.map((opt) => {
                const isActive = opt.id === value;
                return (
                  <li key={opt.id}>
                    <button
                      type="button"
                      className={`flex w-full items-center gap-2 px-3 py-2 text-left hover:bg-neutral-100 dark:hover:bg-neutral-800 ${
                        isActive ? "font-semibold" : "font-normal"
                      }`}
                      onClick={() => {
                        onChange(opt.id);
                        setIsDesktopOpen(false);
                      }}
                    >
                      {leadingIcon && (
                        <span className="inline-flex">{leadingIcon}</span>
                      )}
                      <span>{opt.label}</span>
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
