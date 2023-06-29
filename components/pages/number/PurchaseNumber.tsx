
import { RTButton, RTInput } from "@/components/shared"
import { Number, RootStateModel } from "@/models"
import { setNotification } from "@/store/config/config.action"
import { getAvilableNumbers, purchaseNumbers } from "@/store/number/number.action"
import { Dialog, Transition } from "@headlessui/react"
import { Fragment, useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Dispatch } from "redux"
import NumberItem from "./NumberItem"
import { SearchNumber } from "@/models/SearchNumberModel"
import { number } from "yup"
export interface PurchaseNumberInterface{
    isOpen:boolean,
    closeModal:Function
}
const PurchaseNumber = ({isOpen, closeModal}:PurchaseNumberInterface) => {
    const { processing, avilablenumbers } = useSelector((state:RootStateModel) => state.number)
    const dispatch:Dispatch<any> = useDispatch();

    const[areaCode, setAreaCode] = useState('')
    const [formSubmit, setFormSubmit] = useState(false);
    const blankArr:string[] = []
    const[selectedNumber, setSelectedNumber] = useState(blankArr);

    const [purchaseNumberState, setPurchaseNumberState] = useState(false);

    const searchNumbers = () =>{
        dispatch(getAvilableNumbers(areaCode));
    }

    const fnChecked = (number:SearchNumber) => {
        const arrNumber = [...selectedNumber];
        const newArrayNumber = selectedNumber.indexOf(number.phoneNumber);
        if(newArrayNumber >= 0){
            arrNumber.splice(newArrayNumber, 1);
            setSelectedNumber(arrNumber);
        }else{
            setSelectedNumber([...selectedNumber,number.phoneNumber]);
        }
    }

    const getNumbers= (e:React.ChangeEvent<HTMLInputElement>) => {
        setAreaCode(e.target.value);
    }

    const purchaseNumber = () => {
        setFormSubmit(true);
        dispatch(purchaseNumbers(selectedNumber));
    }
    useEffect(() => {
        setPurchaseNumberState(avilablenumbers && avilablenumbers.length > 0 ? true : false);
        if(avilablenumbers.length === 0 && formSubmit){
            setFormSubmit(false);
            closeModal();
        }
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
                    <Dialog.Panel className="w-full max-w-lg lg:max-w-3xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                        as="h3"
                        className="text-lg font-medium leading-6 text-gray-900"
                    >
                        Purchase Number
                    </Dialog.Title>
                    {purchaseNumberState 
                        ? <>
                            <div className="mt-6 xl:mt-12 grid gap-2 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                                {
                                    avilablenumbers.map((number, i) => {
                                        return (
                                            <>
                                                <NumberItem selectedNumber={selectedNumber} onClick={() => fnChecked(number)} number={number} />
                                            </>
                                        )
                                    })
                                }                                
                                <RTButton name={"Purchase Number"} buttonType="sm" onClick={() => purchaseNumber()} processing={processing} />
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