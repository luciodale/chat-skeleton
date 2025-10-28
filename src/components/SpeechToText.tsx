import { Dispatch, SetStateAction } from "react";
import { useBrowserSTT } from "../hooks/useBrowserSTT";
import { RecordIcon } from "../icons/RecordIcon";
import { RecordMutedIcon } from "../icons/RecordMutedIcon";
import cn from "../utils/cn";

type SpeechToTextProps = {
  language?: string;
  continuous?: boolean;
  setText: Dispatch<SetStateAction<string>>;
  disabled: boolean;
};

export function SpeechToText({
  language,
  continuous,
  setText,
  disabled,
}: SpeechToTextProps) {
  const { isListening, start, stop, browserSupportsSpeechRecognition } =
    useBrowserSTT({
      setText,
      options: {
        language,
        continuous,
      },
    });

  const handleClick = () => (isListening ? stop() : start());

  return (
    <div>
      {browserSupportsSpeechRecognition ? (
        <button
          type="button"
          className={cn(isListening && "animate-pulse")}
          onClick={handleClick}
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
