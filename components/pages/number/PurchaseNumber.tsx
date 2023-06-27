
import { RTButton, RTInput } from "@/components/shared"
import { Number, RootStateModel } from "@/models"
import { setNotification } from "@/store/config/config.action"
import { getAvilableNumbers } from "@/store/number/number.action"
import { Dialog, Transition } from "@headlessui/react"
import { Fragment, useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Dispatch } from "redux"
import NumberItem from "./NumberItem"
import { SearchNumber } from "@/models/SearchNumberModel"
export interface PurchaseNumberInterface{
    isOpen:boolean,
    closeModal:Function
}
const PurchaseNumber = ({isOpen, closeModal}:PurchaseNumberInterface) => {
    const { processing, avilablenumbers } = useSelector((state:RootStateModel) => state.number)
    const dispatch:Dispatch<any> = useDispatch();

    const[areaCode, setAreaCode] = useState('')
    const blankArr:string[] = []
    const[selectedNumber, setSelectedNumber] = useState(blankArr);

    const [purchaseNumberState, setPurchaseNumberState] = useState(false);

    const searchNumbers = () =>{
        dispatch(getAvilableNumbers(areaCode));
    }

    const fnChecked = (number:SearchNumber) => {
        console.log('number', number);
        //const arrNumber = selectedNumber;
        const newArrayNumber = selectedNumber.indexOf(number.phoneNumber);
        console.log(newArrayNumber);
        if(newArrayNumber >= 0){
            selectedNumber.splice(newArrayNumber, 1);
            setSelectedNumber(selectedNumber);
        }else{
            setSelectedNumber([...selectedNumber,number.phoneNumber]);
        }

        //console.log('selectedNumber', selectedNumber);
    }

    const getNumbers= (e:React.ChangeEvent<HTMLInputElement>) => {
        console.log('e.target.value',e.target.value);
        setAreaCode(e.target.value);
    }
    useEffect(() => {
        setPurchaseNumberState(avilablenumbers && avilablenumbers.length > 0 ? true : false);
    }, [avilablenumbers]);
    return(
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={() =>closeModal()}>
            <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
                <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    <Dialog.Panel className="w-full max-w-3xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                        as="h3"
                        className="text-lg font-medium leading-6 text-gray-900"
                    >
                        Purchase Number
                    </Dialog.Title>
                    {purchaseNumberState 
                        ? <>
                            
                            <div className="mt-6 xl:mt-12 grid gap-2 grid-cols-3">
                                {
                                    avilablenumbers.map((number, i) => {
                                        return (
                                            <>
                                                <button >
                                                    <NumberItem selectedNumber={selectedNumber} onClick={() => fnChecked(number)} number={number} />
                                                </button>
                                            </>
                                        )
                                    })
                                }
                                {/* <div className="flex items-center justify-between max-w-2xl px-8 py-4 mx-auto border border-blue-500 cursor-pointer rounded-xl">
                                    <div className="flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-blue-600 sm:h-9 sm:w-9" viewBox="0 0 20 20" fill="currentColor">
                                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                        </svg>

                                        <div className="flex flex-col items-center mx-5 space-y-1">
                                            <h2 className="text-lg font-medium text-gray-700 sm:text-2xl dark:text-gray-200">Popular</h2>
                                            <div className="px-2 text-xs text-blue-500 bg-gray-100 rounded-full sm:px-4 sm:py-1 dark:bg-gray-700 ">
                                                Save 20%
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <h2 className="text-2xl font-semibold text-blue-600 sm:text-4xl">$99 <span className="text-base font-medium">/Month</span></h2>
                                </div>

                                <div className="flex items-center justify-between max-w-2xl px-8 py-4 mx-auto border cursor-pointer rounded-xl dark:border-gray-700">
                                    <div className="flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-400 sm:h-9 sm:w-9" viewBox="0 0 20 20" fill="currentColor">
                                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                        </svg>

                                        <div className="flex flex-col items-center mx-5 space-y-1">
                                            <h2 className="text-lg font-medium text-gray-700 sm:text-2xl dark:text-gray-200">Enterprise</h2>
                                            <div className="px-2 text-xs text-blue-500 bg-gray-100 rounded-full sm:px-4 sm:py-1 dark:bg-gray-700 ">
                                                Save 20%
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <h2 className="text-2xl font-semibold text-gray-500 sm:text-4xl dark:text-gray-300">$149 <span className="text-base font-medium">/Month</span></h2>
                                </div> */}

                                
                                <RTButton name={"Purchase Number"} buttonType="sm" />
                            </div>
                        </> 
                        : <>
                            <div className="mt-2">
                                <RTInput label="Area Code" placeholder="Area Code" inputName={"areacode"} type="number" onChange={(e) => getNumbers(e)} />
                            </div>

                            <div className="mt-4">
                                <RTButton name="Search Number" type={"button"} processing={processing} onClick={() => searchNumbers()} />
                            </div>
                        </>
                    }

                    
                    </Dialog.Panel>
                </Transition.Child>
                </div>
            </div>
            </Dialog>
        </Transition>
    )
}

export default PurchaseNumber;