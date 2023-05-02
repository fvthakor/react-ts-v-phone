import { useEffect, useRef, useState } from "react"
import OutsideClick from "./OutSideHook";

const Profile = () => {
    const [openProfile , setOpenProfile] = useState(false)
    const boxRef = useRef(null);
    const boxOutsideClick = OutsideClick(boxRef); 
    
    const toggleProfile = () => {
        setOpenProfile(openProfile ? false : true)
    }

    useEffect(() => {
        if(boxOutsideClick){
            setOpenProfile(false)
        }
    }, [boxOutsideClick])

    return(
        <>
            <div className="relative flex items-center flex-shrink-0 p-2">
                <button
                  ref={boxRef}
                  onClick={() => toggleProfile()}
                  className="transition-opacity rounded-lg opacity-80 hover:opacity-100 focus:outline-none focus:ring focus:ring-indigo-600 focus:ring-offset-white focus:ring-offset-2"
                >
                  <img
                    className="w-10 h-10 rounded-lg shadow-md"
                    src="https://avatars.githubusercontent.com/u/57622665?s=460&u=8f581f4c4acd4c18c33a87b3e6476112325e8b38&v=4"
                    alt="Ahmed Kamel"
                  />
                  <span className="sr-only">User menu</span>
                </button>
                { openProfile ? <>
                    <div className="absolute w-48 py-1 mt-2 origin-bottom-left bg-white rounded-md shadow-lg left-10 bottom-14 focus:outline-none"
                    role="menu"
                    aria-orientation="vertical"
                    aria-label="user menu">
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem"
                        >Your Profile</a>

                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Settings</a>

                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Sign out</a>
                    </div>
                </> : <></>}
                    
              </div>
        </>
    )
}

export default Profile;