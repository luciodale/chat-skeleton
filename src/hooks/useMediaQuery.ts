import { useEffect, useState } from "react";

const MEDIA_QUERY_SM = { small: "(max-width: 640px)" } as const;

type MediaQuery = keyof typeof MEDIA_QUERY_SM;

export function useMediaQuery(queryKey: MediaQuery) {
  const query = MEDIA_QUERY_SM[queryKey];
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [matches, query]);

  return matches;
}
