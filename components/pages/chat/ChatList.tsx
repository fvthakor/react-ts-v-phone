import ChatCard from "./ChatCard";

const ChatList = () => {
    const chats = [
        {
            id: 1, 
            name: 'Mia John',
            follower: "11.2",
            image: "https://i.pravatar.cc/300"
        },
        {
            id: 2, 
            name: 'Mia John 2',
            follower: "11.2",
            image: "https://i.pravatar.cc/300"
        },
        {
            id: 3, 
            name: 'Mia John 3',
            follower: "11.2",
            image: "https://i.pravatar.cc/300"
        },
        {
            id: 4, 
            name: 'Mia John 4',
            follower: "11.2",
            image: "https://i.pravatar.cc/300"
        },
        {
            id: 5, 
            name: 'Mia John 5',
            follower: "11.2",
            image: "https://i.pravatar.cc/300"
        },
        {
            id: 6, 
            name: 'Mia John 6',
            follower: "11.2",
            image: "https://i.pravatar.cc/300"
        }
    ]
    
    return(
        <div className="bg-white rounded-md border">
                <div className="bg-white border-l border-r sm:w-64 dark:bg-gray-900 dark:border-gray-700 h-screen">
                    <div className="h-full flex flex-col gap-2 mt-28 sm:mt-0 overflow-y-auto pb-32 sm:pb-0">
                        {chats.map(chat => (
                            <ChatCard key={chat.id} chat={chat} />
                        ))}
                        {chats.map(chat => (
                            <ChatCard key={chat.id} chat={chat} />
                        ))}

                        <button className="flex items-center w-full px-5 py-2 transition-colors duration-200 bg-indigo-100 dark:bg-gray-800 gap-x-2 focus:outline-none">
                            <div className="relative">
                                <img className="object-cover w-8 h-8 rounded-full" src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&h=764&q=100" alt="" />
                                <span className="h-2 w-2 rounded-full bg-emerald-500 absolute right-0.5 ring-1 ring-white bottom-0"></span>
                            </div>

                            <div className="text-left rtl:text-right">
                                <h1 className="text-sm font-medium text-gray-700 capitalize dark:text-white">Jane Doe</h1>
                
                                <p className="text-xs text-gray-500 dark:text-gray-400">15.6 Followers</p>
                            </div>
                        </button>

                    </div>
                </div>
            </div>
    )
}

export default ChatList;