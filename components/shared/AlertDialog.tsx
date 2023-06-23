import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import RTButton from "./RTButton";
export interface AlertDialogInterface{
    isOpen: boolean;
    processing: boolean;
    title: string;
    text: string;
}
const AlertDialog = ({isOpen, processing, title, text}:AlertDialogInterface) => {
    // const processing = false
    // const isOpen = true;
    const closeModal = (status:boolean) =>{
        console.log(status);
    }
    return(
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={() =>closeModal(false)}>
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
                        className="text-lg font-medium leading-6 text-gray-900 text-center"
                    >
                        {title}
                    </Dialog.Title>
                    <div className="mt-2 text-center">
                        {text}
                    </div>

                    <div className="mt-4 text-center">
                        <RTButton name="Yes, Delete it" type={"button"} processing={processing} onClick={() => closeModal(true)} />

                        <RTButton className="bg-red-500 hover:bg-red-600 ml-2" name="No" type={"button"} processing={processing} onClick={() => closeModal(true)} />
                    </div>
                    </Dialog.Panel>
                </Transition.Child>
                </div>
            </div>
            </Dialog>
        </Transition>
    )
}

export default AlertDialog;