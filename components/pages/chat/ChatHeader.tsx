import { RootStateModel } from "@/models";
import { useSelector } from "react-redux";

const ChatHeader = () => {

    const { activeNumber } = useSelector((state:RootStateModel) => state.message)

    return(
        <div className="shadow-md border-b-1 p-2 bg-white">
            <div className="text-sm font-medium text-gray-700 capitalize dark:text-white">
                {activeNumber?._id}
            </div>
            <div className="text-sm font-medium text-gray-400 capitalize dark:text-white">{activeNumber?.twilioNumber}</div>
        </div>
    )
}

export default ChatHeader;