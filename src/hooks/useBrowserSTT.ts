// hooks/useBrowserSTT.ts
import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useRef,
} from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { isSafari } from "../utils/isSafari";

type UseBrowserSTTOptions = {
  language?: string;
};

type UseBrowserSTTProps = {
  setText: Dispatch<SetStateAction<string>>;
  text: string;
  options: UseBrowserSTTOptions;
};

const STOP_RECORDING_TIMEOUT = isSafari() ? 0 : 1500;

export function useBrowserSTT({ setText, text, options }: UseBrowserSTTProps) {
  const { language } = options;
  const {
    listening: isListening,
    finalTranscript,
    interimTranscript,
    resetTranscript,
    isMicrophoneAvailable,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  const lastInterimRef = useRef<string | null>(null);
  const lastFinalRef = useRef<string | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
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
  }, [interimTranscript, isListening, setText, resetTranscript]);

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
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(async () => {
      await SpeechRecognition.stopListening();
    }, STOP_RECORDING_TIMEOUT);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [finalTranscript, setText, resetTranscript]);

  // start and stop don't need to be memoized because they're called onClick
  const startRecording = useCallback(async () => {
    if (!browserSupportsSpeechRecognition || !isMicrophoneAvailable) return;
    if (isListening) return;
    sessionBaseRef.current = text;
    lastInterimRef.current = null;
    lastFinalRef.current = null;
    resetTranscript();

    await SpeechRecognition.startListening({
      language,
      continuous: true,
    });
  }, [
    browserSupportsSpeechRecognition,
    isMicrophoneAvailable,
    isListening,
    text,
    resetTranscript,
    language,
  ]);

  const stopRecording = useCallback(async () => {
    if (!isListening) return;
    await SpeechRecognition.stopListening();
  }, [isListening]);

  return {
    isListening,
    startRecording,
    stopRecording,
    browserSupportsSpeechRecognition,
  };
}
