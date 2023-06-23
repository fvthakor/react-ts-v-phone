
import { RTButton, RTInput } from "@/components/shared"
import { setNotification } from "@/store/config/config.action"
import { Dialog, Transition } from "@headlessui/react"
import { Fragment, useState } from "react"
import { useDispatch } from "react-redux"
import { Dispatch } from "redux"
export interface AddCompanyInterface{
    isOpen:boolean,
    closeModal:Function
}
const AddCompany = ({isOpen, closeModal}:AddCompanyInterface) => {
    const [processing, setProcessing] = useState(false);
    const dispatch:Dispatch<any> = useDispatch();
    const saveCompany = () =>{
        setProcessing(true);
        setTimeout(()=>{
            setProcessing(false);
            dispatch(setNotification({type: 'success', message: 'Comany added successfully!'}))
            closeModal();
        }, 5000)
        
    }
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
                    <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                        as="h3"
                        className="text-lg font-medium leading-6 text-gray-900"
                    >
                        Add Company
                    </Dialog.Title>
                    <div className="mt-2">
                        <RTInput label="Company" placeholder="Company" inputName={"company"} />
                    </div>

                    <div className="mt-4">
                        <RTButton name="Save" type={"button"} processing={processing} onClick={() => saveCompany()} />
                    </div>
                    </Dialog.Panel>
                </Transition.Child>
                </div>
            </div>
            </Dialog>
        </Transition>
    )
}

export default AddCompany;