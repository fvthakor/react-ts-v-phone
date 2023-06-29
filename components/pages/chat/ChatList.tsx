import { useDispatch, useSelector } from "react-redux";
import ChatCard from "./ChatCard";
import { NumberList, RootStateModel } from "@/models";
import { Dispatch } from "redux";
import { useEffect } from "react";
import { getNumberList } from "@/store/message/message.action";

const ChatList = () => {
    const dispatch:Dispatch<any> = useDispatch();
    const { numberList } = useSelector((state:RootStateModel) => state.message)

    useEffect(()=>{
        dispatch(getNumberList());
    }, [dispatch])
    
    return(
        <div className="bg-white rounded-md border pt-2">
                <div className="bg-white border-l border-r sm:w-64 dark:bg-gray-900 dark:border-gray-700 h-screen">
                    <div className="h-full flex flex-col mt-28 sm:mt-0 overflow-y-auto pb-32 sm:pb-0">
                        {numberList.map(number => (
                            <ChatCard key={number.id} number={number} />
                        ))}
                    </div>
                </div>
            </div>
    )
}

export default ChatList;