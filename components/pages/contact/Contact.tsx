import { RTButton } from "@/components/shared";
import { setRightSideSidebar } from "@/store/config/config.action";
import { PlusIcon, XMarkIcon } from "@heroicons/react/20/solid";
import React from "react";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";

const Contact = () =>{
    const dispatch:Dispatch<any> = useDispatch()
    const changeSidebarState = () =>{
        dispatch(setRightSideSidebar(false));
    }
    return(
        <>
            <div  className="fixed inset-0 bg-black bg-opacity-50 z-10" aria-hidden="true" ></div>
            <section className="fixed inset-y-0 right-0 w-80 bg-white border-l border-indigo-100 z-20" >
                <div className="px-4 py-2">
                    <div className="flex justify-between">
                        <div className="flex items-center">
                            <div className="p-1">
                                <h2 className="text-lg font-semibold">Contacts</h2>
                            </div>
                            <div className="p-1">
                                <button type='button' className={`text-white rounded-md bg-indigo-700 hover:bg-indigo-900 text-sm py-1 px-2`} > <PlusIcon className="w-4 h-4" /> </button>
                            </div>
                        </div>

                        <div>
                            <button
                                    className={`p-2 mr-4 text-white bg-red-600 rounded-lg shadow-md focus:outline-none focus:ring focus:ring-white focus:ring-offset-gray-100 focus:ring-offset-4`} onClick={() => changeSidebarState()}
                                >
                                    <span className="sr-only">Settings</span>
                                    <XMarkIcon className="w-4 h-4" />
                                </button>
                        </div>
                    </div>
                    
                </div>
            </section>
        </>
    )
}

export default Contact;