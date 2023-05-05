import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export interface ChatCardInterface {
    chat:{
        id: number;
        name: string;
        follower: string;
        image: string;
    }
}
const ChatCard = ({chat}:ChatCardInterface) => {
    const router = useRouter()
    const {id} = router.query
    const [chatId, setChatId] = useState('');
    useEffect(()=>{
        if(id && typeof id == 'string'){
            setChatId(id);
        }
    }, [id]);
    return(
        <Link href={`/chat/${chat.id}`}>
            <button className={`flex items-center w-full px-5 py-2 transition-colors duration-200 dark:hover:bg-gray-800 gap-x-2 hover:bg-indigo-100 focus:outline-none ${ chatId == chat.id.toString() ? 'bg-indigo-100' : ''}`}>
                <img className="object-cover w-8 h-8 rounded-full" src={chat.image} alt="" />
                <div className="text-left rtl:text-right">
                    <h1 className="text-sm font-medium text-gray-700 capitalize dark:text-white">{chat.name}</h1>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{chat.follower} Followers</p>
                </div>
            </button>
        </Link>
    )
}

export default ChatCard;