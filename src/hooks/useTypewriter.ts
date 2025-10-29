import { useEffect, useMemo, useState } from "react";

type Options = {
  speedMs?: number;
  cursor?: boolean;
};

export function useTypewriter(text: string, options?: Options) {
  const speed = options?.speedMs ?? 40;
  const showCursor = options?.cursor ?? true;
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    setIdx(0);
  }, [text]);

  useEffect(() => {
    if (idx >= text.length) return;
    const t = window.setTimeout(() => setIdx((i) => i + 1), speed);
    return () => window.clearTimeout(t);
  }, [idx, text, speed]);

  const rendered = useMemo(() => text.slice(0, idx), [text, idx]);
  const cursor = showCursor ? (idx < text.length ? "▍" : "") : "";
  return rendered + cursor;
}


