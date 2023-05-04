import ChatContainer from "./ChatContainer";
import ChatHeader from "./ChatHeader";
import MessageInput from "./MessageInput";

const ChatBody = () => {

    const chats = [
        {
            id: 1, 
            number: '+918490029343',
            twilioNumber: "+1510232323",
            message: 'Test send Message',
            type: 'send',
            createdAt: new Date()
        },
        {
            id: 1, 
            number: '+918490029343',
            twilioNumber: "+1510232323",
            message: 'Test receive Message',
            type: 'receive',
            createdAt: new Date()
        },
        {
            id: 1, 
            number: '+918490029343',
            twilioNumber: "+1510232323",
            message: 'Test send Message 2',
            type: 'send',
            createdAt: new Date()
        },
    ]

    return(
        <div className="flex flex-col w-full h-full bg-slate-100">
            <ChatHeader />
            <div className="flex-grow p-3">
                {chats.map(chat => (
                    <ChatContainer chat={chat} />
                ))}
            </div>
            <div>
                <MessageInput />
            </div>
        </div>
    )
}

export default ChatBody;