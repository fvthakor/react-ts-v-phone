import { LoadderIcon } from "@/components/icons/LoadderIcon";
import { RTButtonModel } from "@/models/components";

const RTButton = (props:RTButtonModel) => {
    return (
        <>
            <button type={props.type} className={`text-white rounded-md ${props.className ? props.className : 'bg-indigo-700 hover:bg-indigo-900'} 
            ${  props.buttonType === 'sm' 
            ? 'text-sm py-1 px-2'
            : props.buttonType === 'lg'
            ? 'py-3 px-8 text-3xl' 
            : 'py-2 px-6' } 
            `} onClick={ props.onClick ? props.onClick : () => {} } disabled={props.processing}>
                {props.processing ? <div className="flex items-center">
                    <LoadderIcon />
                    Processing...
                </div> :<>{props.name}</> }
                
            </button>
        </>
    )
}

export default RTButton;