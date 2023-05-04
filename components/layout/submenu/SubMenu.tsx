import { useEffect, useRef } from "react";
import OutsideClick from "../sidebar/OutSideHook";
import LinkTab from "./menu-item/LinkTab";
export interface SubMenuInterface{
    status: boolean,
    changeStatus: Function,
}
const SubMenu = (props:SubMenuInterface) => {
    const boxRef = useRef(null);
    const boxOutsideClick = OutsideClick(boxRef);
    
    useEffect(() => {
        if(boxOutsideClick){
            props.changeStatus()
        }
    }, [boxOutsideClick])
    return(
        <>
            { props.status ? <>
                <div ref={boxRef} className="fixed inset-y-0 left-0 z-10 flex-shrink-0 w-64 bg-white border-r-2 border-indigo-100 shadow-lg sm:left-16 rounded-tr-3xl rounded-br-3xl sm:w-72 lg:static lg:w-64">
                    <LinkTab />
                </div>
            </> : <></>}
            
        </>
    )
}

export default SubMenu;