import { RTInputModel } from "@/models/components";

const RTInput = (props:RTInputModel) => {
    return (
        <>
            { props.label ? <label className="block mt-3 font-semibold"> {props.label} </label> : <></>}
            <input type={props.type ? props.type : 'text'} placeholder={props.placeholder ? props.placeholder : ''} className={`border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md ${props.className}`} />
        </>
    )
}

export default RTInput;