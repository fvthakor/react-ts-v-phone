import ImageIcon from "@/components/icons/ImageIcon";
import SendIcon from "@/components/icons/SendIcon";
import SmilyIcon from "@/components/icons/SmilyIcon";
import { RootStateModel } from "@/models";
import { sendMessage } from "@/store/message/message.action";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";

const MessageInput = () => {
    const dispatch:Dispatch<any> = useDispatch();
    
    const { activeNumber } = useSelector((state:RootStateModel) => state.message)

    const [messageValue, setMessageValue] = useState('');

    const messageSend = () => {
        const message = messageValue;
        setMessageValue('');

        dispatch(sendMessage({
            message,
            number: activeNumber ? activeNumber._id : '',
            twilioNumber: activeNumber ? activeNumber.twilioNumber : '',
            type: "send"
        }))
              
    }
    const inputRef = useRef(null);
    return(
        <>
            <label htmlFor="chat" className="sr-only">Your message</label>
                <div className="flex items-center py-2 px-3 bg-white shadow-lg border rounded-lg dark:bg-gray-700">
                    {/* <button type="button" className="inline-flex justify-center p-2 text-gray-500 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                        <ImageIcon className="w-6 h-6" />
                    </button> */}
                    {/* <button type="button" className="p-2 text-gray-500 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                        <SmilyIcon className="w-6 h-6" />
                    </button> */}
                    <textarea id="chat" rows={1} className="block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your message..." onChange={(e:any) => setMessageValue(e.target.value)} value={messageValue}></textarea>
                    <button type="submit" className="inline-flex justify-center p-2 text-indigo-600 rounded-full cursor-pointer hover:bg-indigo-100 dark:text-indigo-500 dark:hover:bg-gray-600" onClick={() => messageSend()}>
                        <SendIcon className="w-6 h-6 rotate-90" />
                    </button>
                </div>
        </>
    )
}

export default MessageInput;