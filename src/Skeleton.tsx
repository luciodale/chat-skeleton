import { Chat } from "./components/Chat";
import { Header } from "./components/Header";
import { LeftSidebar } from "./components/LeftSidebar";
import { RightSidebar } from "./components/RightSidebar";
import { ChatProvider } from "./context/ChatContext";

export function Skeleton() {
  return (
    <ChatProvider>
      <div className="flex h-full safe-area-inset-top">
        <div className="relative z-0 flex h-full w-full overflow-hidden">
          <LeftSidebar />
          <div className="relative flex h-full max-w-full flex-1 flex-col overflow-hidden">
            <div className="h-full relative flex w-full grow overflow-hidden bg-presentation">
              {/* split between main and left component */}
              <div className="flex flex-col transition-width relative h-full w-full flex-1 overflow-auto bg-presentation">
                {/* main chat */}
                <main className="flex h-full flex-col overflow-y-auto overscroll-contain">
                  <div className="flex h-full w-full flex-col">
                    <Header />
                    <Chat />
                  </div>
                </main>
                {/*  right sidebar */}
              </div>
              <RightSidebar />
            </div>
          </div>
        </div>
      </div>
    </ChatProvider>
  );
}
