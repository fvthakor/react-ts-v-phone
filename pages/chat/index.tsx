import ChatBody from "@/components/pages/chat/ChatBody";
import ChatLayout from "@/components/pages/chat/ChatLayout";
import ChatList from "@/components/pages/chat/ChatList";

const ChatPage = () => {
    return(
        <ChatLayout>
            <div className="w-full h-full p-1">
                <ChatBody />
            </div>
        </ChatLayout>
    )
}

export default ChatPage;


