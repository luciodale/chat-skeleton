// hooks/useBrowserSTT.ts
import {
  Dispatch,
  SetStateAction,
  useCallback,
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
  options: UseBrowserSTTOptions;
};

export function useBrowserSTT({ setText, options }: UseBrowserSTTProps) {
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

  useEffect(() => {
    if (interimTranscript == null || interimTranscript === "") {
      return;
    }

    if (lastInterimRef.current === interimTranscript) {
      return;
    }

    setText(interimTranscript);
    lastInterimRef.current = interimTranscript;
  }, [interimTranscript, setText]);

  useEffect(() => {
    if (finalTranscript == null || finalTranscript === "") {
      return;
    }

    if (lastFinalRef.current === finalTranscript) {
      return;
    }

    setText(finalTranscript);
    lastFinalRef.current = finalTranscript;
  }, [finalTranscript, setText, resetTranscript]);

  const start = useCallback(() => {
    if (!browserSupportsSpeechRecognition || !isMicrophoneAvailable) return;
    if (isListening) return;
    SpeechRecognition.startListening({
      language,
      continuous,
    });
  }, [
    browserSupportsSpeechRecognition,
    isMicrophoneAvailable,
    isListening,
    language,
    continuous,
  ]);

  const stop = useCallback(() => {
    if (!isListening) return;
    SpeechRecognition.stopListening();
  }, [isListening]);

  return {
    isListening,
    isLoading,
    start,
    stop,
    browserSupportsSpeechRecognition,
  };
}
