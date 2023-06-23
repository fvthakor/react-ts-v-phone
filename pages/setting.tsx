import AddSetting from "@/components/pages/setting/AddSetting";
import AuthGuard from "@/helpers/AuthGuard";


const Setting = () => {
    return(
        <AuthGuard>
            <div className="w-full bg-white h-full p-4 rounded-md">Setting</div>
            <div className="w-full p-2">
                <AddSetting />
            </div>
        </AuthGuard>
    )
}
export default Setting;