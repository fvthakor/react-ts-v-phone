import { RTButton } from "@/components/shared";
import { PlusIcon } from "@heroicons/react/20/solid";
import React from "react";

const Contact = () =>{
    return(
        <>
            <div  className="fixed inset-0 bg-black bg-opacity-50 z-10" aria-hidden="true" ></div>
            <section className="fixed inset-y-0 right-0 w-64 bg-white border-l border-indigo-100 z-20" >
                <div className="px-4 py-2">
                    <div className="flex items-center">
                        <div className="p-1">
                            <h2 className="text-lg font-semibold">Contacts</h2>
                        </div>
                        <div className="p-1">
                            <button type='button' className={`text-white rounded-md bg-indigo-700 hover:bg-indigo-900 text-sm py-1 px-2`} > <PlusIcon className="w-4 h-4" /> </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact;