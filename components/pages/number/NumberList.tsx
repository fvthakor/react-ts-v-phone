import DeleteIcon from "@/components/icons/DeleteIcon";
import EditIcon from "@/components/icons/EditIcon";
import ViewIcon from "@/components/icons/ViewIcon";
import RTPagination from "@/components/shared/pagination/RTPagination";
import { Number, RootStateModel, UserModel } from "@/models";
import { getUsers } from "@/store/user/user.action";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Dispatch } from "redux";
import PurchaseNumber from "./PurchaseNumber";
import { deleteNumber, getNumbers } from "@/store/number/number.action";
import ConfirmButton from "@/components/shared/ConfirmButton";
import { TrashIcon } from "@heroicons/react/20/solid";
type NumberListProps = {
    openModelStatus: boolean
}
const NumberList = (data: NumberListProps) => {
    const { numbers ,processing } = useSelector((state:RootStateModel) => state.number)
    const dispatch:Dispatch<any> = useDispatch()
    const pageSize = 10;
    const [currentPage, setCurruntPage] = useState(1);
    const [showNumbers, setShowNumbers] = useState<Number[]>([])
    const [isOpenDelete, setIsOpenDelete] = useState(false)
    useEffect(()=>{
        dispatch(getNumbers());
    }, [dispatch])

    const fnSetShowUser = () => {
        const showNumbers =  numbers.slice((currentPage - 1) * pageSize, currentPage * pageSize);
        setShowNumbers(showNumbers);
    }
    useEffect(() => {
        fnSetShowUser();
    }, [numbers])

    useEffect(() => {
        fnSetShowUser();
    }, [currentPage])

    useEffect(() => {
        if(data.openModelStatus){
            openModal();
        }
    }, [data.openModelStatus])

    const getCurruntPage = (page:number) =>{
        setCurruntPage(page);
    }
    const testClick = () =>{
        console.log('test')
    }

    let [isOpen, setIsOpen] = useState(false)

    const closeModal = () => {
        setIsOpen(false)
    }

    const openModal = () => {
        setIsOpen(true)
    }

    const deleteData = (number:Number) => {
        //console.log(number);
        setIsOpenDelete(true);
    }

    const closeAlertModel = (status:boolean, id:string) => {
        if(status){
            dispatch(deleteNumber(id));
        }else{
            setIsOpenDelete(false);
        }
    }
    useEffect(() => {
        if(!processing){
            setIsOpenDelete(false);
        }
    }, [processing])
    return(
        <>
            <table className="min-w-full leading-normal h-max overflow-y-auto">
                <thead>
                    <tr>
                        <th
                            className="px-5 py-3 border-b-2 border-gray-300 bg-gray-200 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                            Number
                        </th>
                        <th
                            className="px-5 py-3 border-b-2 border-gray-300 bg-gray-200 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                            SID
                        </th>
                        <th
                            className="px-5 py-3 border-b-2 border-gray-300 bg-gray-200 text-xs font-semibold text-gray-600 uppercase tracking-wider text-center">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {numbers.length > 0 ? <>

                        {showNumbers.map(number => (
                            <tr>
                                <td className="py-3 px-6 border-b border-gray-200 bg-white text-sm text-left">
                                    {number.number}
                                </td>
                                <td className="py-3 px-6 border-b border-gray-200 bg-white text-sm text-center">
                                    {number.sid}
                                </td>
                                {/* <td className="py-3 px-6  border-b border-gray-200 bg-white text-sm text-center">
                                    fsfs
                                </td> */}
                                <td className="py-3 px-6 border-b border-gray-200 bg-white text-sm text-center">
                                    <div className="flex item-center justify-center">
                                        {/* <div className="w-4 mr-2 transform hover:text-indigo-500 hover:scale-110">
                                            <ViewIcon className="w-4 h-4 cursor-pointer" />
                                        </div>
                                        <div className="w-4 mr-2 transform hover:text-indigo-500 hover:scale-110">
                                            <EditIcon className="w-4 h-4 cursor-pointer" />
                                        </div> */}
                                        {/* <div className="w-4 mr-2 transform hover:text-indigo-500 hover:scale-110" onClick={() => deleteData(number)}>
                                            <DeleteIcon className="w-4 h-4 cursor-pointer" />
                                        </div> */}
                                        <ConfirmButton title='Delete Number!' text='Are you sure want to delete?' isOpen={isOpenDelete} closeModel={closeAlertModel} id={number._id} processing={processing}>
                                            <span className="flex items-center pl-2 pr-1 text-red-500 cursor-pointer" onClick={() => deleteData(number)} ><TrashIcon className="h-5 w-5" aria-hidden="true"/></span> 
                                        </ConfirmButton>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </> : <>
                            <tr>
                                <td className="py-3 px-6 border-b border-gray-200 bg-white text-sm text-center" colSpan={4}>No data found!</td>
                            </tr>
                    </>}
                </tbody>
            </table>
            <RTPagination total={numbers.length} pageSize={pageSize} curruntPage={currentPage} getCurrentPage={getCurruntPage} />
            <PurchaseNumber isOpen={isOpen} closeModal={closeModal} />
        </>
    )
}

export default NumberList;