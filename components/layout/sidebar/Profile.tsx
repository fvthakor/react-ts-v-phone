import { Fragment } from "react"
import { Dispatch } from "redux";
import { useDispatch } from "react-redux";
import { logout } from "@/store/auth/auth.action";
import { useRouter } from "next/router";
import { Menu, Transition } from "@headlessui/react";
import {PowerIcon, UserIcon } from "@heroicons/react/20/solid";
import SettingIcon from "@/components/icons/SettingIcon";
import Link from "next/link";

const Profile = () => {
    const router = useRouter();
    
    const dispatch:Dispatch<any> = useDispatch();

    const userLogout = () => {
        router.push('/login');
        dispatch(logout())
    }

    return(
        <>
            <Menu as="div" className="relative flex items-center flex-shrink-0 p-2">
                <div>
                    <Menu.Button className="transition-opacity rounded-lg opacity-80 hover:opacity-100 focus:outline-none focus:ring focus:ring-indigo-800 ring ring-indigo-600 focus:ring-offset-white focus:ring-offset-2">
                    <UserIcon className="w-8 h-8" />
                    <span className="sr-only">User menu</span>
                    
                    </Menu.Button>
                </div>
                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                    >
                        <Menu.Items className="absolute right-0 sm:right-auto top-16 sm:-top-10 left-auto sm:left-8  mt-2 w-auto origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none whitespace-nowrap z-[100]">
                            <div className="px-1 py-1 ">
                                <Menu.Item>
                                    {({ active }) => (
                                        <Link
                                            href={'/setting'}
                                            className={`${
                                            active ? 'bg-indigo-600 text-white' : 'text-gray-900'
                                            } group flex place-content-center w-full items-center rounded-md px-2 py-2 text-sm z-[100]`}
                                             >
                                            <SettingIcon  className="w-4 h-4 mr-2" />
                                            Setting
                                        </Link>
                                    )}
                                </Menu.Item>
                            </div>

                            <div className="px-1 py-1 ">
                                <Menu.Item>
                                    {({ active }) => (
                                        <button
                                            className={`${
                                            active ? 'bg-indigo-600 text-white' : 'text-gray-900'
                                            } group flex place-content-center w-full items-center rounded-md px-2 py-2 text-sm z-[100]`}
                                            onClick={() => userLogout()} >
                                            <PowerIcon  className="w-4 h-4 mr-2" />
                                            Sign out
                                        </button>
                                    )}
                                </Menu.Item>
                            </div>
                        </Menu.Items>
                </Transition>
            </Menu>
        </>
    )
}

export default Profile;
  