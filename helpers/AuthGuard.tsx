import { RootStateModel } from "@/models";
import { useRouter } from "next/router";
import { ReactNode, useEffect, useState } from "react";
import { useSelector } from "react-redux";

type AuthProps = {
    children: ReactNode;
  };

const AuthGuard = ({children}: AuthProps) => {
    const router = useRouter();
    const [authorized, setAuthorized] = useState(false);
    const {isLogin} = useSelector((state:RootStateModel) => state.auth)
    useEffect(() => {
        authCheck(router.asPath);

        const hideContent = () => setAuthorized(false);
        router.events.on('routeChangeStart', hideContent);

        router.events.on('routeChangeComplete', authCheck)

        return () => {
            router.events.off('routeChangeStart', hideContent);
            router.events.off('routeChangeComplete', authCheck);
        }
    }, [router])

    function authCheck(url:string) {
        const publicPaths = ['/login', '/'];
        const path = url.split('?')[0];

            if (!isLogin && !publicPaths.includes(path)) {
                    setAuthorized(false);
                    router.push({
                        pathname: '/login',
                    });
            } else {
                setAuthorized(true);
            }
    }
    return (<>{authorized && children}</>);
    // return (
    //     <>
    //         {isLogin ? <>
    //             {children}
    //         </> : <>
            
    //         </>}
    //     </>
    // );
}

export default AuthGuard;