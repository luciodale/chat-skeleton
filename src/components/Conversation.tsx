import { useEffect, useRef } from "react";
import { useChat } from "../context/ChatContext";
import { useTypewriter } from "../hooks/useTypewriter";
import { GeminiAvatar } from "./GeminiAvatar";
import { MessageActions } from "./MessageActions";
import { UserAvatar } from "./UserAvatar";

export function Conversation() {
  const { currentConversation, isStreaming } = useChat();
  const isEmpty =
    !currentConversation || currentConversation.messages.length === 0;
  const typed = useTypewriter("welcome to the chat", {
    speedMs: 40,
    resetKey: currentConversation?.id,
  });
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when messages change or streaming
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "auto" });
  }, [currentConversation?.messages, isStreaming]);

  return (
    <div className="relative flex-1 overflow-hidden overflow-y-auto">
      <div className="relative h-full">
        <div className="scrollbar-gutter-stable w-full h-full overflow-y-auto">
          <div className="flex flex-col pb-9 bg-transparent">
            {isEmpty ? (
              <div className="m-auto justify-center p-4 py-2 md:gap-6">
                <div className="mx-auto mt-20 text-center md:max-w-188 xl:max-w-220">
                  <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                    {typed}
                  </h1>
                </div>
              </div>
            ) : (
              <div className="justify-center p-4 py-2 md:gap-6">
                <div className="flex flex-col gap-4 md:max-w-188 xl:max-w-220 mx-auto">
                  {currentConversation?.messages.map((message) => (
                    <MessageItem
                      key={message.id}
                      message={message}
                      isStreaming={isStreaming}
                    />
                  ))}
                  <div ref={messagesEndRef} />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

interface MessageItemProps {
  message: {
    id: string;
    role: "user" | "assistant";
    content: string;
  };
  isStreaming: boolean;
}

function MessageItem({ message, isStreaming }: MessageItemProps) {
  const isUser = message.role === "user";

  return (
    <div className="text-token-text-primary w-full border-0 bg-transparent">
      <div className="m-auto justify-center p-4 py-2 md:gap-6">
        <div
          id={message.id}
          aria-label={`message-${message.id}`}
          className="group mx-auto flex flex-1 gap-3 transition-all duration-300 transform-gpu md:max-w-188 xl:max-w-220 focus:outline-none focus:ring-2 focus:ring-border-xheavy message-render"
        >
          <div className="relative flex shrink-0 flex-col items-center">
            {isUser ? <UserAvatar /> : <GeminiAvatar />}
          </div>
          <div
            className={`relative flex w-11/12 flex-col ${
              isUser ? "user-turn" : "agent-turn"
            }`}
          >
            <h2 className="text-text-primary text-left font-bold text-lg">
              {isUser ? "User" : "Gemini"}
            </h2>
            <div className="flex flex-col gap-1">
              <div className="flex max-w-full grow flex-col gap-0">
                <div
                  className="text-message flex min-h-[20px] flex-col items-start gap-3 overflow-visible [.text-message+&]:mt-5"
                  dir="auto"
                >
                  <div className="markdown prose message-content text-text-secondary light w-full wrap-break-word text-left">
                    <p className="mb-2 whitespace-pre-wrap text-left">
                      {message.content}
                    </p>
                  </div>
                </div>
              </div>
              <MessageActions
                messageId={message.id}
                isUser={isUser}
                isStreaming={isStreaming}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
