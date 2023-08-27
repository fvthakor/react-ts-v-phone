import { RTButton, RTInput } from "@/components/shared";
import { RootStateModel } from "@/models";
import { setDailerStatus } from "@/store/config/config.action";
import { PlusIcon, XMarkIcon } from "@heroicons/react/20/solid";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";

const Dailer = () =>{
    const {rightSidebar, dailerStatus} = useSelector((state:RootStateModel) => state.config)
    const dispatch:Dispatch<any> = useDispatch()

    const [number, setNumber] = useState('')

    const changeDailerState = () =>{
        dispatch(setDailerStatus(false));
    }

    const setNumbers= (e:React.ChangeEvent<HTMLInputElement>) => {
        setNumber(e.target.value);
    }

    const numberArray = [
        ['1','2','3'],
        ['4','5','6'],
        ['7','8','9'],
        ['*','0','#']
    ]

    const dailNumber = (item:string) => {
        console.log('test', item);
        setNumber(number+item);
    }
    useEffect(() => {
        console.log(number);
    }, [number])
    return(
        <>
            <div  className={`fixed inset-0 bg-black bg-opacity-50 z-20 ${dailerStatus  ? 'visible' : 'invisible'}`} aria-hidden="true" ></div>
            <section className={`fixed inset-y-0 right-0 w-80 bg-white border-l border-indigo-100 z-30 ${dailerStatus  ? 'visible' : 'invisible'}`} >
                <div className="px-4 py-2">
                    <button className={`p-2 mr-4 text-white bg-red-600 rounded-lg shadow-md focus:outline-none focus:ring focus:ring-white focus:ring-offset-gray-100 focus:ring-offset-4 absolute -left-8 -top-[2px]`} onClick={() => changeDailerState()} >
                        <span className="sr-only">Settings</span>
                        <XMarkIcon className="w-4 h-4" />
                    </button>

                    <div className="flex flex-col">
                        <div className="flex justify-between">
                            <RTInput value={number} inputName={"number"} placeholder="Enter number" type="number" onChange={(e) => setNumbers(e)} />
                        </div>
                        <div>
                            { numberArray.map(item => 
                                <>
                                    <div className="flex justify-between mt-4 -mr-4">
                                        {item.map(number => 
                                            <>
                                                <button className="py-4 px-9 mr-4 text-white bg-indigo-600 rounded-lg shadow-md focus:outline-none focus:ring focus:ring-white focus:ring-offset-gray-100 focus:ring-offset-4" onClick={() => dailNumber(number)}>{number}</button>
                                            </>
                                        )}
                                    </div>
                                </>
                            )}
                        </div>
                        
                    </div>

                    
                    
                </div>
            </section>
        </>
    )
}

export default Dailer;