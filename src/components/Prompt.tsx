import { useState } from "react";
import { useCallback } from "react";
import { useRef } from "react";
import { AttachIcon } from "../icons/AttachIcon";
import { SendIcon } from "../icons/SendIcon";
import { SpeechToText } from "./SpeechToText";
import { useSetTextWithScrolling } from "../hooks/useSetTextWithScrolling";
import { Test } from "./Test";

export function Prompt() {
  const [text, setText] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  const submit = useCallback(async (value: string) => {
    setIsSubmitting(true);
    try {
      // send `value` to your chat backend
      // await api.sendMessage(value);
      console.log("submit:", value);
    } finally {
      setIsSubmitting(false);
    }
  }, []);

  const onFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;
    await submit(text.trim());
    setText("");
  };

  // Only used by SpeechToText to auto-scroll the textarea to the bottom
  const setTextFromSTT = useSetTextWithScrolling(textareaRef, setText);

  return (
    <div className="w-full">
      <form
        onSubmit={onFormSubmit}
        className="mx-auto flex w-full flex-row gap-3 transition-[max-width] duration-300 sm:px-2 md:max-w-3xl xl:max-w-4xl sm:mb-10"
      >
        <div className="relative flex h-full flex-1 items-stretch md:flex-col">
          <div className="flex w-full items-center">
            <div className="relative flex w-full flex-grow flex-col overflow-hidden rounded-t-3xl border pb-4 text-text-primary transition-all duration-200 sm:rounded-3xl sm:pb-0 shadow-md border-border-light bg-surface-chat">
              <textarea
                ref={textareaRef}
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="md:py-3.5 m-0 w-full resize-none py-[13px] placeholder-black/50 bg-transparent dark:placeholder-white/50 [&:has(textarea:focus)]:shadow-[0_2px_6px_rgba(0,0,0,.05)] max-h-[45vh] md:max-h-[55vh] px-5 focus:outline-none focus:ring-0 focus:ring-opacity-0 focus:ring-offset-0 transition-[max-height] duration-200 disabled:cursor-not-allowed"
                name=""
                id=""
              ></textarea>
              <div className="items-between justify-center flex gap-2 pb-2 px-4 flex-row">
                <button>
                  <AttachIcon />
                </button>
                <div className="mx-auto flex" />
                <Test />
                <SpeechToText
                  language="en-US"
                  setText={setTextFromSTT}
                  text={text}
                  disabled={isSubmitting}
                  continuous={true}
                />

                <button type="submit" disabled={isSubmitting}>
                  <SendIcon />
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
