import { SearchNumber } from "@/models/SearchNumberModel";
type NumberItem = {
    number: SearchNumber,
    onClick: Function,
    selectedNumber: string[]
}
const NumberItem = (data:NumberItem) =>{
    return (
        <>
        //['red', 'green'].includes('red')
             <div className="flex items-center justify-between max-w-2xl px-2 py-1 mx-auto border cursor-pointer rounded-xl dark:border-gray-700"  onClick={() => data.onClick(data.number)}>
                <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-400 sm:h-9 sm:w-9" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>

                    <div className="flex flex-col items-center mx-5 space-y-1">
                        <h2 className="text-sm font-medium text-gray-700 sm:text-medium dark:text-gray-200">{data.number.phoneNumber}</h2>
                    </div>
                </div>
                
                <h2 className="text-gray-500 text-xs">{data.number.region} <span className="text-xs">-{data.number.isoCountry}</span></h2>
            </div>
        </>
    )
}

export default NumberItem;