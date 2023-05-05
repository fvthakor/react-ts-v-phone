export interface ChatContainerInterface {
    chat:{
        id: number, 
        number: string,
        twilioNumber: string,
        message: string,
        type: string,
        createdAt: Date
    }
}
const ChatContainer = ({chat}: ChatContainerInterface) => {
    return(
        <div className={`${ chat.type === 'send'? 'flex flex-row-reverse' : 'flex'} mb-2`}>
            <div className={`${chat.type === 'send' ? 'flex flex-row-reverse' : 'flex'} items-start`} >
                <div className={`p-1 bg-white w-8 h-8 rounded-full shadow flex-none ${chat.type === 'send' ? 'ml-1' : 'mr-1'}`}>
                    <img className="object-cover w-6 h-6 rounded-full" src="https://i.pravatar.cc/300" width={50} height={50} alt="" />
                </div>
                <div className={`rounded-xl ${chat.type === 'send' ? 'rounded-tr-none ml-9 right_chat' : 'rounded-tl-none mr-9 left_chat'} bg-white p-2 shadow`} >
                    <div className="text-sm text-gray-700 capitalize dark:text-white">{chat.message}</div>
                    <div className={`text-gray-400 text-xs mt-2 ${chat.type === 'send' ? 'flex flex-row-reverse' : 'flex'} `}>{chat.createdAt.toDateString()}</div>
                </div>
            </div>
        </div>
    )
}

export default ChatContainer;