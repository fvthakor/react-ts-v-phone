import { ReactNode, useState } from "react";
import AlertDialog from "./AlertDialog";

type ConfirmButtonProps = {
    children: ReactNode;
    title: string;
    text:string;
  };

const ConfirmButton = ({ children, title, text }: ConfirmButtonProps) => {
    const [isOpen, setIsOpen] = useState(false)
    const [processing, setProcessing] = useState(false)
    return(
        <div className="flex items-center place-content-center">
            {children}
            <AlertDialog title={title} text={text} isOpen={isOpen} processing={false}  />
        </div>
    )
}
export default ConfirmButton;