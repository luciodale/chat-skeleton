import { useEffect, useMemo, useState } from "react";

type Options = {
  speedMs?: number;
  cursor?: boolean;
  resetKey?: unknown;
};

export function useTypewriter(text: string, options?: Options) {
  const speed = options?.speedMs ?? 40;
  const showCursor = options?.cursor ?? true;
  const resetKey = options?.resetKey;
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    setIdx(0);
  }, [text, resetKey]);

  useEffect(() => {
    if (idx >= text.length) return;
    const t = window.setTimeout(() => setIdx((i) => i + 1), speed);
    return () => window.clearTimeout(t);
  }, [idx, text, speed]);

  const rendered = useMemo(() => text.slice(0, idx), [text, idx]);
  const cursor = showCursor ? (idx < text.length ? "▍" : "") : "";
  return rendered + cursor;
}
