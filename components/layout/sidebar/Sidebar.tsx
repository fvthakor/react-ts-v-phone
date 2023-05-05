import MenuIcon from "../../icons/MenuIcon";
import MessageIcon from "../../icons/MessageIcon";
import NotificationIcon from "../../icons/NotificationIcon";
import Logo from "./Logo";
import MenuButton from "./Menubutton";
import Profile from "./Profile";
import Company from "@/components/pages/company/Company";
export interface SidebarInterFace{
  onClick?: any
}
function Sidebar(props:SidebarInterFace){
    const menus = [
      {route: '/dashboard', title: 'Toggle sidebar', tabName: 'linkTab', content: <MenuIcon className="w-6 h-6" />},
      {route: '/chat', title: 'Toggle message panel', tabName: 'messageTab', content: <MessageIcon className="w-6 h-6" />},
      {route: '/notification', title: 'Toggle notifications panel', tabName: 'notificationTab', content: <NotificationIcon className="w-6 h-6" />}
    ]
    return(
        <>
            <nav
              aria-label="Options"
              className="z-20 place-content-between sm:flex-col items-center sm:flex-shrink-0 sm:w-16 w-full sm:h-screen py-4 bg-white border-r-2 border-indigo-100 shadow-md sm:flex flex gap-4 fixed sm:sticky">
                <Logo />
                <div className="flex flex-row sm:flex-col items-center flex-1 p-2 gap-5">
                  {menus.map(menu => (
                      <MenuButton menu={menu} />
                  ))}
                </div>
                <Profile />
            </nav>
           <Company />
        </>
    );
}

export default Sidebar;