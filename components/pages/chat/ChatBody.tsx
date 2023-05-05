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
            message: 'Test receive Message Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            type: 'receive',
            createdAt: new Date()
        },
        {
            id: 1, 
            number: '+918490029343',
            twilioNumber: "+1510232323",
            message: 'Test receive Message Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            type: 'send',
            createdAt: new Date()
        },
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
            message: 'Test send Message',
            type: 'send',
            createdAt: new Date()
        },
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
            message: 'Test send Message',
            type: 'send',
            createdAt: new Date()
        },
    ]

    return(
        <div className="flex flex-col w-full h-[calc(100vh+6rem)] sm:h-screen bg-slate-100  mt-24 sm:mt-0 ">
            <ChatHeader />
            <div className="sm:flex-grow p-3 overflow-y-auto pb-72 sm:pb-0">
                {chats.map(chat => (
                    <ChatContainer chat={chat} />
                ))}
            </div>
            <div className="fixed sm:relative bottom-0 right-0 left-0 w-full">
                <MessageInput />
            </div>
        </div>
    )
}

export default ChatBody;