// hooks/useBrowserSTT.ts
import {
  Dispatch,
  SetStateAction,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

export type UseBrowserSTTOptions = {
  language?: string;
  continuous?: boolean;
};

type UseBrowserSTTProps = {
  setText: Dispatch<SetStateAction<string>>;
  text: string;
  options: UseBrowserSTTOptions;
};

export function useBrowserSTT({ setText, text, options }: UseBrowserSTTProps) {
  const { language, continuous = false } = options;
  const {
    listening,
    finalTranscript,
    interimTranscript,
    resetTranscript,
    isMicrophoneAvailable,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  const isListening = useMemo(() => listening, [listening]);
  const [isLoading] = useState(false);

  const lastInterimRef = useRef<string | null>(null);
  const lastFinalRef = useRef<string | null>(null);
  // Base text at the start of the current recording session
  const sessionBaseRef = useRef<string>("");

  // During recording, show base + interim (overwrite, do not append repeatedly)
  useEffect(() => {
    if (!isListening) return;
    if (interimTranscript == null || interimTranscript === "") return;
    if (lastInterimRef.current === interimTranscript) return;

    // Overwrite textarea with base + interim
    const base = sessionBaseRef.current;
    const prefix = base ? " " : "";
    setText(`${base}${prefix}${interimTranscript}`);
    lastInterimRef.current = interimTranscript;
  }, [interimTranscript, isListening, setText]);

  // Commit stable words; also advance base so next interim builds on it
  useEffect(() => {
    if (finalTranscript == null || finalTranscript === "") return;
    if (lastFinalRef.current === finalTranscript) return;

    const base = sessionBaseRef.current;
    const prefix = base ? " " : "";
    const committed = `${base}${prefix}${finalTranscript}`;
    setText(committed);

    sessionBaseRef.current = committed; // advance base for subsequent interim/final
    lastFinalRef.current = finalTranscript;
  }, [finalTranscript, setText]);

  // start and stop don't need to be memoized because they're called onClick
  const start = () => {
    if (!browserSupportsSpeechRecognition || !isMicrophoneAvailable) return;
    if (isListening) return;
    sessionBaseRef.current = text;
    lastInterimRef.current = null;
    lastFinalRef.current = null;
    resetTranscript();
    SpeechRecognition.startListening({
      language,
      continuous,
    });
  };

  const stop = () => {
    if (!isListening) return;
    SpeechRecognition.stopListening();
  };

  return {
    isListening,
    isLoading,
    start,
    stop,
    browserSupportsSpeechRecognition,
  };
}
