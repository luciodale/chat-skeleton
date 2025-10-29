import { createContext, useCallback, useContext, useMemo, useRef, useState } from "react";

export type Message = {
  id: string;
  role: "user" | "assistant";
  content: string;
};

export type Conversation = {
  id: string;
  title: string;
  messages: Message[];
  createdAt: number;
  updatedAt: number;
};

type ChatContextValue = {
  conversations: Conversation[];
  currentConversation: Conversation | null;
  isStreaming: boolean;
  createNewConversation: () => void;
  selectConversation: (id: string) => void;
  sendMessage: (text: string) => Promise<void>;
};

const ChatContext = createContext<ChatContextValue | null>(null);

const STREAM_CHUNK_SIZE = 150;
const STREAM_CHUNK_DELAY = 350;

function generateId(prefix: string) {
  return `${prefix}-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

function makeEmptyConversation(): Conversation {
  const id = generateId("conv");
  const now = Date.now();
  return { id, title: "New Chat", messages: [], createdAt: now, updatedAt: now };
}

export function ChatProvider({ children }: { children: React.ReactNode }) {
  const [conversations, setConversations] = useState<Conversation[]>([makeEmptyConversation()]);
  const [currentConversationId, setCurrentConversationId] = useState<string>(conversations[0].id);
  const [isStreaming, setIsStreaming] = useState<boolean>(false);

  const streamTimerRef = useRef<number | null>(null);

  const currentConversation = useMemo(
    () => conversations.find((c) => c.id === currentConversationId) ?? null,
    [conversations, currentConversationId]
  );

  const createNewConversation = useCallback(() => {
    const convo = makeEmptyConversation();
    setConversations((prev) => [convo, ...prev]);
    setCurrentConversationId(convo.id);
  }, []);

  const selectConversation = useCallback((id: string) => {
    setCurrentConversationId(id);
  }, []);

  const updateConversation = useCallback((id: string, updater: (c: Conversation) => Conversation) => {
    setConversations((prev) => prev.map((c) => (c.id === id ? updater(c) : c)));
  }, []);

  const sendMessage = useCallback(async (text: string) => {
    const convoId = currentConversationId;
    if (!convoId) return;

    // append user message
    const userMsg: Message = { id: generateId("msg"), role: "user", content: text };
    updateConversation(convoId, (c) => ({
      ...c,
      title: c.messages.length === 0 ? (text.trim().split("\n")[0] || "New Chat") : c.title,
      messages: [...c.messages, userMsg, { id: generateId("msg"), role: "assistant", content: "" }],
      updatedAt: Date.now(),
    }));

    // Single mock response that's long enough for scrolling
    const MOCK_RESPONSE = `Hello! I'm Gemini, your AI assistant. I'm here to help you with a wide variety of tasks and questions.

I can assist you with:
• Answering questions on virtually any topic
• Helping with creative writing and brainstorming
• Providing technical support and coding assistance
• Analyzing data and creating reports
• Explaining complex concepts in simple terms
• Helping with research and fact-checking
• Offering advice on personal and professional matters
• Assisting with language learning and translation
• Helping with problem-solving and decision making
• Providing explanations of scientific, historical, and cultural topics

I'm designed to be helpful, harmless, and honest. I'll do my best to provide accurate, up-to-date information and helpful responses to your questions. If I'm unsure about something, I'll let you know rather than guess.

What would you like to work on today? Feel free to ask me anything - whether it's a simple question, a complex problem, or if you need help with a creative project. I'm here to help!`;
    
    let idx = 0;
    setIsStreaming(true);

    await new Promise<void>((resolve) => {
      const streamChunk = () => {
        setConversations((prev) =>
          prev.map((c) => {
            if (c.id !== convoId) return c;
            const lastIndex = c.messages.length - 1;
            const last = c.messages[lastIndex];
            if (!last || last.role !== "assistant") return c;
            

            const chunkSize = STREAM_CHUNK_SIZE;
            const nextChunk = MOCK_RESPONSE.slice(idx, idx + chunkSize);
            const updated = { ...last, content: last.content + nextChunk };
            const updatedMessages = [...c.messages.slice(0, lastIndex), updated];
            return { ...c, messages: updatedMessages, updatedAt: Date.now() };
          })
        );

        idx += STREAM_CHUNK_SIZE; 
        if (idx >= MOCK_RESPONSE.length) {
          if (streamTimerRef.current) window.clearInterval(streamTimerRef.current);
          streamTimerRef.current = null;
          setIsStreaming(false);
          resolve();
        }
      };

      // Stream in chunks with random timing
      streamTimerRef.current = window.setInterval(streamChunk, STREAM_CHUNK_DELAY);
    });
  }, [currentConversationId, updateConversation]);

  const value: ChatContextValue = useMemo(
    () => ({
      conversations,
      currentConversation,
      isStreaming,
      createNewConversation,
      selectConversation,
      sendMessage,
    }),
    [conversations, currentConversation, isStreaming, createNewConversation, selectConversation, sendMessage]
  );

  return <ChatContext.Provider value={value}>{children}</ChatContext.Provider>;
}

export function useChat() {
  const ctx = useContext(ChatContext);
  if (!ctx) throw new Error("useChat must be used within a ChatProvider");
  return ctx;
}


