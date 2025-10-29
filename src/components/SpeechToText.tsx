import { Dispatch, SetStateAction } from "react";
import { useBrowserSTT } from "../hooks/useBrowserSTT";
import { RecordIcon } from "../icons/RecordIcon";
import { RecordMutedIcon } from "../icons/RecordMutedIcon";
import cn from "../utils/cn";

type SpeechToTextProps = {
  language?: string;
  setText: Dispatch<SetStateAction<string>>;
  text: string;
  disabled: boolean;
};

export function SpeechToText({
  language,
  setText,
  text,
  disabled,
}: SpeechToTextProps) {
  const {
    isListening,
    startRecording,
    stopRecording,
    browserSupportsSpeechRecognition,
  } = useBrowserSTT({
    setText,
    text,
    options: {
      language,
    },
  });

  return (
    <div>
      {browserSupportsSpeechRecognition ? (
        <button
          type="button"
          className={cn(
            isListening && "animate-pulse",
            "cursor-pointer hover:bg-surface-secondary rounded-full p-2"
          )}
          onClick={isListening ? stopRecording : startRecording}
          disabled={disabled}
          aria-label="Use microphone"
          aria-pressed={isListening}
          title="Use microphone"
        >
          <RecordIcon className={cn(isListening && "stroke-red-400")} />
        </button>
      ) : (
        <button
          disabled
          aria-label="Speech recognition unsupported"
          title="Speech recognition unsupported"
        >
          <RecordMutedIcon />
        </button>
      )}
    </div>
  );
}
