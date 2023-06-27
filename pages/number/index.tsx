import NumberList from "@/components/pages/number/NumberList";
import { RTButton } from "@/components/shared";
import { useState } from "react";

const Number = () => {
    const [openModelStatus, setOpenModelStatus] = useState(false)
    const openModel = () => {
        setOpenModelStatus(true);
        setTimeout(() => {
            setOpenModelStatus(false);
        }, 1000)
    }
    return(
        <div className="h-screen p-2">
            <div className="flex justify-between">
                <div>
                <h1 className="">Number</h1>
                </div>
                <div>
                    <RTButton name={"Add Number"} buttonType="sm" onClick={openModel} />
                </div>
            </div>
            
            <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                    <NumberList openModelStatus={openModelStatus}  />
                </div>
            </div>
        </div>
    )
}

export default Number;