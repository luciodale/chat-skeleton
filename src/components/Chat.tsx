import { Conversation } from "./Conversation";
import { Prompt } from "./Prompt";

export function Chat() {
  return (
    <div className="flex flex-col h-full overflow-y-auto">
      <Conversation />
      <Prompt />
    </div>
  );
}
