import { SearchNumber } from "@/models/SearchNumberModel";
import { useEffect } from "react";
type NumberItem = {
    number: SearchNumber,
    onClick: Function,
    selectedNumber: string[]
}
const NumberItem = (data:NumberItem) =>{
    return (
        <>
             <div className={`flex items-center justify-between lg:max-w-2xl max-w-lg px-2 py-1 mx-auto cursor-pointer border rounded-xl ${data.selectedNumber.includes(data.number.phoneNumber) ? "border-indigo-400" : ""} `}  onClick={() => data.onClick(data.number)}>
                <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className={`w-5 h-5  sm:h-9 sm:w-9 ${data.selectedNumber.includes(data.number.phoneNumber) ? "text-indigo-700" : "text-gray-400"}`} viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>

                    <div className="flex flex-col items-center mx-5 space-y-1">
                        <h2 className={`text-sm font-medium sm:text-medium ${data.selectedNumber.includes(data.number.phoneNumber) ? 'text-indigo-700' : 'text-gray-400'}`}>{data.number.phoneNumber}</h2>
                    </div>
                </div>
                
                <h2 className={`text-xs ${data.selectedNumber.includes(data.number.phoneNumber) ? 'text-indigo-700' : 'text-gray-400'}`}>{data.number.region} <span className="text-xs">-{data.number.isoCountry}</span></h2>
            </div>
        </>
    )
}

export default NumberItem;