import { ReactNode } from "react";
import ChatList from "./ChatList";

type ChatLayoutProps = {
  children: ReactNode;
};

function ChatLayout({ children }: ChatLayoutProps) {
  return (
    <div className="flex">
        <div>
            <ChatList />
        </div>
        <div className="flex-grow">
            {children}
        </div>
    </div>
  );
}

export default ChatLayout;
