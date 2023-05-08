import UserList from "@/components/pages/user/UserList";

const User = () => {
    return(
        <div className="h-screen p-2">
            <h1 className="">Users</h1>
            <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                    <UserList />
                </div>
            </div>
        </div>
    )
}

export default User;