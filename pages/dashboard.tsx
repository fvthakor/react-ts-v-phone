import AuthGuard from "@/helpers/AuthGuard";


const Dashboard = () => {
    return(
        <AuthGuard>
            <div className="w-full bg-white h-full p-4 rounded-md">Dashboard</div>
        </AuthGuard>
    )
}
export default Dashboard;