import SettingIcon from "@/components/icons/SettingIcon";
import Contact from "@/components/pages/contact/Contact";
import Dailer from "@/components/pages/dailer/Dailer";
import { RootStateModel } from "@/models";
import { setDailerStatus, setRightSideSidebar } from "@/store/config/config.action";
import { QueueListIcon, UserPlusIcon, XMarkIcon, Square2StackIcon, Square3Stack3DIcon, Squares2X2Icon } from "@heroicons/react/20/solid";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";

const RightSidebar = () =>{
    const {rightSidebar, dailerStatus} = useSelector((state:RootStateModel) => state.config)
    const dispatch:Dispatch<any> = useDispatch()
    const changeSidebarState = () =>{
        dispatch(setRightSideSidebar(rightSidebar ? false : true));
    }

    const changeDailerState = () =>{
        dispatch(setDailerStatus(dailerStatus ? false : true));
    }

    useEffect(() => {
        console.log('dailerStatus',dailerStatus);
    }, [dailerStatus])
    return (
        <>
            <div className={`items-center hidden ml-4 sm:flex absolute  right-0 z-50 ${(rightSidebar || dailerStatus) ? 'top-1'  : 'bottom-12' }`}>
                {dailerStatus ? <>  </> : 
                    <>
                        <button 
                            className={`p-2 mr-4 text-white ${rightSidebar ? 'bg-red-600'  : 'bg-indigo-600' } rounded-lg shadow-md focus:outline-none focus:ring focus:ring-white focus:ring-offset-gray-100 focus:ring-offset-4`} onClick={() => changeSidebarState()}
                        >
                            <span className="sr-only">Settings</span>      
                            <UserPlusIcon className="w-4 h-4" /> 
                        </button>
                    </>
                }
               {rightSidebar ? <> 
                <Contact />
               </> : 
                <>
                    <button
                        className={`p-2 mr-4 text-white ${dailerStatus ? 'bg-red-600'  : 'bg-indigo-600' } rounded-lg shadow-md focus:outline-none focus:ring focus:ring-white focus:ring-offset-gray-100 focus:ring-offset-4`} onClick={() => changeDailerState()}
                    >
                        <span className="sr-only">Settings</span>
                        <Squares2X2Icon className="w-4 h-4" />
                    </button>
                </>
               }     

                <Dailer />
            </div>
        </>
    )
}

export default RightSidebar;