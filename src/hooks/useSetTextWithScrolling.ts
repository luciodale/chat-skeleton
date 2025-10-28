import { useCallback } from "react";
import type { Dispatch, SetStateAction } from "react";

export function useSetTextWithScrolling(
  textareaRef: React.RefObject<HTMLTextAreaElement | null>,
  setText: Dispatch<SetStateAction<string>>
) {
  return useCallback((value: string | ((prev: string) => string)) => {
    setText((prev) => {
      const updateFn = typeof value === "function" && value;

      if (updateFn) {
        return updateFn(prev);
      } else {
        return value;
      }
    });

    requestAnimationFrame(() => {
      const el = textareaRef?.current;
      if (el) {
        el.scrollTop = el.scrollHeight;
      }
    });
  }, []);
}
