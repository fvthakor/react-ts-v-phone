import ChatBody from "@/components/pages/chat/ChatBody";
import ChatLayout from "@/components/pages/chat/ChatLayout";

const Chatbody = () => {
    return(
        <ChatLayout>
            <div className="w-full h-full p-1">
                <ChatBody />
            </div>
        </ChatLayout>
    )
}
export default Chatbody;