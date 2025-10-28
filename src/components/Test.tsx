import { useCallback } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

export function Test() {
  const {
    listening,
    finalTranscript,
    interimTranscript,
    resetTranscript,
    isMicrophoneAvailable,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  console.log("listening", listening);
  console.log("finalTranscript", finalTranscript);
  console.log("interimTranscript", interimTranscript);
  console.log("resetTranscript", resetTranscript);
  console.log("isMicrophoneAvailable", isMicrophoneAvailable);
  console.log(
    "browserSupportsSpeechRecognition",
    browserSupportsSpeechRecognition
  );

  const startListening = useCallback(async () => {
    console.log("startListening");
    await SpeechRecognition.startListening({
      // language,
      continuous: true,
    });
    console.log("after startListening");
  }, []);
  return <div onClick={startListening}> START NOWWWW</div>;
}
