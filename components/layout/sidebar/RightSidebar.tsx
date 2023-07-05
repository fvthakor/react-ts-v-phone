import SettingIcon from "@/components/icons/SettingIcon";
import Contact from "@/components/pages/contact/Contact";
import { RootStateModel } from "@/models";
import { setRightSideSidebar } from "@/store/config/config.action";
import { QueueListIcon, UserPlusIcon, XMarkIcon } from "@heroicons/react/20/solid";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";

const RightSidebar = () =>{
    const {rightSidebar} = useSelector((state:RootStateModel) => state.config)
    const dispatch:Dispatch<any> = useDispatch()
    const changeSidebarState = () =>{
        console.log('sidebar status',rightSidebar);
        dispatch(setRightSideSidebar(rightSidebar ? false : true));
    }
    return (
        <>
            <div className={`items-center hidden ml-4 sm:flex absolute  right-0 z-50 ${rightSidebar ? 'top-1'  : 'bottom-12' }`}>
              <button
                className={`p-2 mr-4 text-white ${rightSidebar ? 'bg-red-600'  : 'bg-indigo-600' } rounded-lg shadow-md focus:outline-none focus:ring focus:ring-white focus:ring-offset-gray-100 focus:ring-offset-4`} onClick={() => changeSidebarState()}
              >
                <span className="sr-only">Settings</span>
                    {
                        rightSidebar  ? <>
                            <XMarkIcon className="w-4 h-4" />
                        </> : <>
                            <UserPlusIcon className="w-4 h-4" />
                        </>
                    }
                    
              </button>
            </div>
            {
                rightSidebar ? <> 
                    <Contact />
                </> : <></>
            }
            
        </>
    )
}

export default RightSidebar;