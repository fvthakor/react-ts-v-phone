import { NumberList } from "@/models";
import { UserIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export interface ChatCardInterface {
    number:NumberList
}
const ChatCard = ({number}:ChatCardInterface) => {
    const router = useRouter()
    const {id} = router.query
    const [chatId, setChatId] = useState('');
    useEffect(()=>{
        if(id && typeof id == 'string'){
            setChatId(id);
        }
    }, [id]);

    const getSortMessage = (message:string) => {
        const messageLength = message.length;
        return messageLength > 15 ? `${message.substring(0,15)}...` : message;
    }
    return(
        <Link href={`/chat/${number._id}`}>
            <button className={`flex items-center w-full px-5 py-1 transition-colors duration-200 dark:hover:bg-gray-800 gap-x-2 hover:bg-indigo-100 focus:outline-none ${ chatId === number._id.toString() ? 'bg-indigo-100' : ''}`}>
                <UserIcon className="object-cover w-8 h-8 rounded-full border border-gray-500" />
                <div className="text-left rtl:text-right">
                    <h1 className="text-sm font-medium text-gray-700 capitalize dark:text-white">{number._id}</h1>

                    <h1 className="text-xs font-medium text-gray-400 capitalize dark:text-white">{number.twilioNumber}</h1>

                    <p className="text-[10px] text-gray-500 dark:text-gray-400 overflow-hidden whitespace-nowrap">{getSortMessage(number.message)}</p>
                </div>
                {number.isview > 0 ? <>
                    <div className="text-sm float-right grow">
                        <span className="float-right bg-red-500 text-white font-bold py-[1px] px-[5px] rounded-[50%]">{number.isview}</span>
                    </div>
                </> : <></>}
                
            </button>
        </Link>
    )
}

export default ChatCard;