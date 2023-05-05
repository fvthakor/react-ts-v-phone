import { RootStateModel } from "@/models";
import { setActiveMenu } from "@/store/config/config.action";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";

export interface MenuButtonInterface {
    menu: {
        title: string;
        content: any;
        tabName: string;
        route: string;
    }
}
const MenuButton = ({menu}:MenuButtonInterface) => {
    const { activeTab, subMenuOpen} = useSelector((state:RootStateModel) => state.config)
    const [activeRoute, setActiveRoute] = useState('')
    const router = useRouter();

    const dispatch:Dispatch<any> = useDispatch()
    const openTab = (tab:string) => {
        dispatch(setActiveMenu(tab));
    }

    useEffect(() => {
        let urlElelement = window.location.pathname.split('/')
        setActiveRoute(`/${urlElelement[1]}`);
    }, [router]);

    useEffect(()=> {
        console.log('activeTab', activeTab);
    }, [activeTab])

    useEffect(()=> {
        console.log('subMenuOpen', subMenuOpen);
    }, [subMenuOpen])
    return(
        <Link href={menu.route} className={`p-2 transition-colors rounded-lg shadow-md hover:bg-indigo-800 hover:text-white focus:outline-none focus:ring focus:ring-indigo-600 focus:ring-offset-white focus:ring-offset-2 ${ activeRoute == menu.route ? 'text-white bg-indigo-600' : 'text-gray-500 bg-white' }`}  onClick={() => openTab(menu.tabName)}>
            <span className="sr-only">{menu.title}</span>
            {menu.content}
        </Link>
    )
}

export default MenuButton;