import DeleteIcon from "@/components/icons/DeleteIcon";
import EditIcon from "@/components/icons/EditIcon";
import ViewIcon from "@/components/icons/ViewIcon";

const UserList = () => {
    return(
        <table className="min-w-full leading-normal">
            <thead>
                <tr>
                    <th
                        className="px-5 py-3 border-b-2 border-gray-300 bg-gray-200 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Name
                    </th>
                    <th
                        className="px-5 py-3 border-b-2 border-gray-300 bg-gray-200 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Email
                    </th>
                    <th
                        className="px-5 py-3 border-b-2 border-gray-300 bg-gray-200 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Status
                    </th>
                    <th
                        className="px-5 py-3 border-b-2 border-gray-300 bg-gray-200 text-xs font-semibold text-gray-600 uppercase tracking-wider text-center">
                        Action
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="py-3 px-6 border-b border-gray-200 bg-white text-sm text-left">
                        fsddsf
                    </td>
                    <td className="py-3 px-6 border-b border-gray-200 bg-white text-sm text-center">
                        fsdfsd
                    </td>
                    <td className="py-3 px-6  border-b border-gray-200 bg-white text-sm text-center">
                        fsfs
                    </td>
                    <td className="py-3 px-6 border-b border-gray-200 bg-white text-sm text-center">
                        <div className="flex item-center justify-center">
                            <div className="w-4 mr-2 transform hover:text-indigo-500 hover:scale-110">
                                <ViewIcon className="w-4 h-4 cursor-pointer" />
                            </div>
                            <div className="w-4 mr-2 transform hover:text-indigo-500 hover:scale-110">
                                <EditIcon className="w-4 h-4 cursor-pointer" />
                            </div>
                            <div className="w-4 mr-2 transform hover:text-indigo-500 hover:scale-110">
                                <DeleteIcon className="w-4 h-4 cursor-pointer" />
                            </div>
                        </div>
                    </td>
                </tr>
                
            </tbody>
        </table>
    )
}

export default UserList;