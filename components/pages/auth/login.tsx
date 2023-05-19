import ValidateError from "@/components/shared/ValidateError";
import { LoginModel, RootStateModel } from "@/models";
import { login } from "@/store/auth/auth.action";
import { Form, Formik } from "formik";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RTButton, RTInput } from "react-tailwindcss-ts";
import { Dispatch } from "redux";
import * as Yup from 'yup';

const Login = () => {
    const { isLogin, processing } = useSelector((state:RootStateModel) => state.auth)
    const router = useRouter()
    const dispatch:Dispatch<any> = useDispatch()

    const initialValues = {
        email: '',
        password: ''
    }

    const onSubmit = (values:LoginModel) => {
        dispatch(login(values))
    }

    const SignupSchema = Yup.object().shape({
        email: Yup.string()
                .required('The email address is Required'),
        password: Yup.string()
          .required('The password is required'),
    });

    useEffect(() => {
        console.log('isLogin',isLogin);
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
                            <Formik initialValues={initialValues} validationSchema={SignupSchema} onSubmit={onSubmit} >
                                {({ errors, touched }) => (
                                    <Form>
                                        <RTInput formik={true} name="email" label="Email" type={'text'}  placeholder="Email"/>
                                        {errors.email && touched.email ? (
                                                <ValidateError error={errors.email} />
                                        ) : null}

                                        <RTInput formik={true} name="password" label="Password" type={'password'}  placeholder="Password"/>
                                        {errors.password && touched.password ? (
                                                <ValidateError error={errors.password} />
                                        ) : null}

                                        <div className="flex justify-between items-baseline">
                                            <RTButton name="Login" type={'submit'} className="mt-4 bg-indigo-700 hover:bg-indigo-900" processing={processing} />
                                            <a href="#" className="text-sm hover:underline">Forgot password?</a>
                                        </div>
                                    </Form>
                                )}
                            </Formik>
                        </div>
                        <div className="px-8 pb-4">
                            Don't have an account yet? <Link className="text-indigo-600 font-bold" href="/register">Register Now</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;