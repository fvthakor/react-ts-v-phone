import { useSelector } from "react-redux";
import ChatContainer from "./ChatContainer";
import ChatHeader from "./ChatHeader";
import MessageInput from "./MessageInput";
import { RootStateModel } from "@/models";
import { useEffect, useRef } from "react";

const ChatBody = () => {

    const { messages } = useSelector((state:RootStateModel) => state.message)
    const messageEl:any = useRef(null);

    useEffect(() => {
        if (messageEl) 
          messageEl.current.addEventListener('DOMNodeInserted', (event:any) => {
            const { currentTarget: target } = event;
            target.scroll({ top: target.scrollHeight, behavior: 'smooth' });
          });
        
      }, [messages])
      
    return(
        <div className="flex flex-col w-full h-[calc(100vh+6rem)] sm:h-screen bg-slate-100  mt-24 sm:mt-0 ">
            <ChatHeader />
            <div className="sm:flex-grow p-3 overflow-y-auto pb-72 sm:pb-0"  ref={messageEl}>
                {messages.map(chat => (
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