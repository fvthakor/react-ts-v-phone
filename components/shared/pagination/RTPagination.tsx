import { RTPaginationModel } from "@/models/components";
import { useEffect, useState } from "react";
import { number } from "yup";

const RTPagination = ({total, pageSize, curruntPage, getCurrentPage = () => {}}:RTPaginationModel) => {
    //const pageArray = [1,2,3,4];
    const [arrPage, setArrPage] = useState([0])
    const [nextPageStatus, setNextPageStatus] = useState(false);
    const [prevPageStatus, setPrevPageStatus] = useState(false);
    useEffect(() => {

        const page = Math.ceil(total/pageSize);
        console.log('total page',page);
        console.log('pageSize', pageSize);
        const pageArray = []
        let addDot1 = false;
        let addDot2 = false
        for (let i = 0; i < page; i++) {
            const item = i + 1
            if(item === 1 || item === 2){
                pageArray.push(item);
            }else if((item === page || item === page - 1)){
                pageArray.push(item);
            }else if(curruntPage === item - 1 || curruntPage === item + 1){
                pageArray.push(item);
                
            }else if(curruntPage === item){
                pageArray.push(item);
            }else{
                if(!addDot1){
                    pageArray.push(100000000000);
                    addDot1 = true;
                }
                if(addDot1 && curruntPage === item - 2 && curruntPage !== 1 && curruntPage !== 2 && curruntPage !== 3 && curruntPage !== 4){
                    if(!addDot2 && curruntPage === item - 2){
                        pageArray.push(100000000001);
                        addDot2 = true;
                    }
                }
            }

            
        }
        setArrPage(pageArray)
        //console.log('pageArray', pageArray);
        
        setNextPageStatus(curruntPage === page ? true : false); 
        setPrevPageStatus(curruntPage === 1 ? true : false);
    }, [total, pageSize, curruntPage])

    const clickPage = (page:number) =>{
        getCurrentPage(page)
    }
    return(
        <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
            <div className="flex flex-1 justify-between sm:hidden">
                <a href="#" className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">Previous</a>
                <a href="#" className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">Next</a>
            </div>
            <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                <div>
                <p className="text-sm text-gray-700">
                    Showing
                    <span className="font-medium">1</span>
                    to
                    <span className="font-medium">10</span>
                    of
                    <span className="font-medium">{total}</span>
                    results
                </p>
                </div>
                <div>
                <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
                    <button onClick={() => clickPage(curruntPage - 1)} className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0" disabled={prevPageStatus}>
                    <span className="sr-only">Previous</span>
                    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clip-rule="evenodd" />
                    </svg>
                    </button>
                    {arrPage.map(item => (
                        <>
                            <button aria-current="page" onClick={item === 100000000000 || item === 100000000001 ?() =>{} : () => clickPage(item)} className={`relative inline-flex  items-center px-4 py-2 text-sm font-semibold ${item ===curruntPage ? 'z-10 bg-indigo-600 text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                            : 'text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0' } `}>
                                {item === 100000000000 || item === 100000000001 ? '...' : item}
                            </button>
                        </>
                    ))}
                    {/* <a href="#" aria-current="page" className="relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">1</a>

                    <a href="#" className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">2</a>
                    <a href="#" className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex">3</a>
                    <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0">...</span>
                    <a href="#" className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex">8</a>
                    <a href="#" className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">9</a>
                    <a href="#" className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">10</a> */}

                    <button  onClick={() => clickPage(curruntPage + 1)} className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0" disabled={nextPageStatus}>
                    <span className="sr-only">Next</span>
                    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd" />
                    </svg>
                    </button>
                </nav>
                </div>
            </div>
        </div>
    )
}

export default RTPagination;