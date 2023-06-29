import { ReactNode, useState } from "react";
import AlertDialog from "./AlertDialog";

type ConfirmButtonProps = {
    children: ReactNode;
    title: string;
    text:string;
    isOpen:boolean,
    closeModel: Function,
    id?: string,
    processing: boolean
  };

const ConfirmButton = ({ children, title, text , isOpen,closeModel, id, processing}: ConfirmButtonProps) => {
    //const [isOpen, setIsOpen] = useState(false)
    //const [processing, setProcessing] = useState(false)

    const alertClose = (status:boolean) => {
        closeModel(status, id);
    }
    return(
        <div className="flex items-center bg-transparent">
            {children}
            <AlertDialog title={title} text={text} isOpen={isOpen} processing={processing} closeModel={alertClose}  />
        </div>
    )
}
export default ConfirmButton;