
import { HashtagIcon, UserIcon, UsersIcon } from "@heroicons/react/20/solid";
import MenuIcon from "../../icons/MenuIcon";
import MessageIcon from "../../icons/MessageIcon";
import NotificationIcon from "../../icons/NotificationIcon";
import Logo from "./Logo";
import MenuButton from "./Menubutton";
import Profile from "./Profile";
import Company from "@/components/pages/company/Company";
import { useSelector } from "react-redux";
import { RootStateModel, UserModel } from "@/models";
import { useEffect } from "react";
import { useRouter } from "next/router";
import PhoneIcon from "@/components/icons/NumberIcon";
import SocketConnection from "./SocketConnection";
export interface SidebarInterFace{
  onClick?: any
}
function Sidebar(props:SidebarInterFace){
  const { isLogin, authUser } = useSelector((state:RootStateModel) => state.auth)
  const router = useRouter();
  useEffect(()=>{
    console.log('isLogin', isLogin);
    if(!isLogin){
      router.push('/login');
    }
  }, [isLogin])
  useEffect(() => {
    
  }, [authUser])
  useEffect(() => {
    console.log('isLogin', isLogin);
  },[])
    //const menus = 
    return(
        <>
        <SocketConnection />
            <nav
              aria-label="Options"
              className="place-content-between sm:flex-col items-center sm:flex-shrink-0 sm:w-16 w-full sm:h-screen py-4 bg-white border-r-2 border-indigo-100 shadow-md sm:flex flex gap-4 fixed sm:sticky z-[51]">
                <Logo />
                <div className="flex flex-row sm:flex-col items-center flex-1 p-2 gap-5">
                    
                    {getSuperAdminMenu(authUser?.role ? authUser.role : '').map(menu => (
                        <MenuButton menu={menu} />
                    ))}
                </div>
                <Profile />
            </nav>
           {/* <Company /> */}
        </>
    );
}

export default Sidebar;

function getSuperAdminMenu(role:string): Array<any>{
  if(role === 'superadmin'){
    return [
      {route: '/dashboard', title: 'Toggle sidebar', tabName: 'linkTab', content: <MenuIcon className="w-6 h-6" />},
      {route: '/dashboard', title: 'Phone Number', tabName: 'linkTab', content: <PhoneIcon className="w-6 h-6" />},
      {route: '/user', title: 'Toggle notifications panel', tabName: 'userTab', content: <UsersIcon className="w-6 h-6" />},
      {route: '/chat', title: 'Toggle message panel', tabName: 'messageTab', content: <MessageIcon className="w-6 h-6" />},
      {route: '/notification', title: 'Toggle notifications panel', tabName: 'notificationTab', content: <NotificationIcon className="w-6 h-6" />},
    ]
  }else if(role === 'admin'){
    return [
      {route: '/dashboard', title: 'Toggle sidebar', tabName: 'linkTab', content: <MenuIcon className="w-6 h-6" />},
      {route: '/number', title: 'Phone Number', tabName: 'linkTab', content: <HashtagIcon className="w-6 h-6" />},
      {route: '/chat', title: 'Toggle message panel', tabName: 'messageTab', content: <MessageIcon className="w-6 h-6" />},
      {route: '/notification', title: 'Toggle notifications panel', tabName: 'notificationTab', content: <NotificationIcon className="w-6 h-6" />},
    ]
  }else if(role === 'user'){
    return [];
  }else{
    return [];
  }
 
}