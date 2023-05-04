import RTButton from "@/components/shared/button/RTButton";
import RTInput from "@/components/shared/input/RTInput";
import { RootStateModel } from "@/models";
import { login } from "@/store/auth/auth.action";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Dispatch } from "redux";

const Login = () => {
    const { isLogin, processing } = useSelector((state:RootStateModel) => state.auth)
    const router = useRouter()
    const dispatch:Dispatch<any> = useDispatch()
    //functions 
    //login function 
    const userLogin = () => {
        // console.log('login');

        // console.log('isLogin', isLogin);
        // console.log('processing', processing);
        dispatch(login({email: 'fvthakor' , password: '123456'}))
    }


    useEffect(() => {
        if(isLogin){
            router.push('/dashboard');
        }
    }, [isLogin])
    useEffect(() => {
        // console.log('proccessing',processing);
        // console.log('isLogin', isLogin)
    })
    return (
        <>
            <div className="relative flex text-gray-800 antialiased flex-col justify-center overflow-hidden py-6 sm:py-12">
                <div className="relative py-3 sm:w-96 mx-auto text-center">
                    <span className="text-2xl font-light ">Login to your account</span>
                    <div className="mt-4 bg-white shadow-md rounded-lg text-left">
                        <div className="h-2 bg-indigo-700 rounded-t-md"></div>
                        <div className="px-8 py-6 ">

                            <RTInput label="Email" type={'text'}  placeholder="Email"/>

                            <RTInput label="Password" type={'password'}  placeholder="Password"/>

                            <div className="flex justify-between items-baseline">
                                <RTButton name="Login" type={'submit'} className="mt-4 bg-indigo-700 hover:bg-indigo-900" onClick={() => userLogin()} processing={processing} />
                                <a href="#" className="text-sm hover:underline">Forgot password?</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;