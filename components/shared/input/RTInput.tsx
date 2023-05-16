import { RTInputModel } from "@/models/components";
import { Field } from 'formik';
const RTInput = (props:RTInputModel) => {
    return (
        <>
            { props.label ? <label htmlFor={ props.id ? props.id : props.label?.replace(/\s/g,'')} className="block mt-3 font-semibold"> {props.label} </label> : <></>}
            {props.formik ? <>
                <Field autoComplete="false" id={ props.id ? props.id : props.label ? props.label?.replace(/\s/g,''): Math.random().toString(36).substring(2,7)} type={props.type ? props.type : 'text'} placeholder={props.placeholder ? props.placeholder : ''} name={props.name} className={`border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md ${props.className}`} />
                
            </> :<>
                <input autoComplete="false" id={ props.id ? props.id : props.label ? props.label?.replace(/\s/g,''): Math.random().toString(36).substring(2,7)} type={props.type ? props.type : 'text'} placeholder={props.placeholder ? props.placeholder : ''} className={`border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md ${props.className}`} name={props.name}  />
            </> }
            
        </>
    )
}

export default RTInput;