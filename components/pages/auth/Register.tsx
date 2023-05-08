import RTButton from "@/components/shared/button/RTButton";
import RTInput from "@/components/shared/input/RTInput";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const Register = () => {
    const [processing, setProcessing] = useState(false)
    const router = useRouter()
    const userRegister = () => {
        setProcessing(true);
        setTimeout(()=> {
            setProcessing(false);
            router.push('/login')
        }, 4000)
    }
    return(
        <div className="relative flex text-gray-800 antialiased flex-col justify-center overflow-hidden py-6 sm:py-12">
                <div className="relative py-3 sm:w-96 mx-auto text-center">
                    <span className="text-2xl font-light ">Login to your account</span>
                    <div className="mt-4 bg-white shadow-md rounded-lg text-left">
                        <div className="h-2 bg-indigo-700 rounded-t-md"></div>
                        <div className="px-8 py-6 ">

                            <RTInput label="Email" type={'text'}  placeholder="Email"/>

                            <RTInput label="Password" type={'password'}  placeholder="Password"/>

                            <div className="flex justify-between items-baseline">
                                <RTButton name="Login" type={'submit'} className="mt-4 bg-indigo-700 hover:bg-indigo-900" onClick={() => userRegister()} processing={processing} />
                                <a href="#" className="text-sm hover:underline">Forgot password?</a>
                            </div>
                        </div>
                        <div>
                            Don't have an account yet? <Link href="/register">Register Now</Link>.
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Register;