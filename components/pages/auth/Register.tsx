import ValidateError from "@/components/shared/ValidateError";
import RTButton from "@/components/shared/button/RTButton";
import RTInput from "@/components/shared/input/RTInput";
import { RootStateModel, SignUpModel } from "@/models";
import { register, updateProccesingStatus } from "@/store/auth/auth.action";
import { SET_SIGNUP_STATUS } from "@/store/auth/auth.type";
import { Form, Formik } from "formik";
import Link from "next/link";
import { NextRouter, useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Dispatch } from "redux";
import * as Yup from 'yup';
const Register = () => {
    const dispatch:Dispatch<any> = useDispatch()
    const router = useRouter()
    const { signUpStatus, processing } = useSelector((state:RootStateModel) => state.auth)

    useEffect(() => {
        //console.log(process.env.NEXT_PUBLIC_API_URL);
        dispatch(updateProccesingStatus(false))
        //dispatch({type: SET_SIGNUP_STATUS, payload: false})
      }, [])

    const initialValues = {
        name: '',
        email: '',
        password: '',
        confirm_password: ''
    }

    const onSubmit = (values:SignUpModel) => {
        dispatch(register(values))
    }

    useEffect(() => {
        if(signUpStatus){
            router.push('/')
        }
    }, [signUpStatus])

    const SignupSchema = Yup.object().shape({
        name: Yup.string()
                .required('The name is required')
                .min(3, 'Please enter atleast 3 charecter'),
        email: Yup.string()
                .required('The email address is Required')
                .email('Please enter valid email address'),
        password: Yup.string()
          .min(6, 'Please enter atleast 6 charecter')
          .required('The password is required'),
        confirm_password: Yup.string()
            .required('The Confirm password is required')
            .oneOf([Yup.ref('password')], 'Passwords must match')
        
      });

    // const userRegister = () => {
        
    // }
    return(
        <div className="relative flex text-gray-800 antialiased flex-col justify-center overflow-hidden py-6 sm:py-12">
            <div className="relative py-3 sm:w-96 mx-auto text-center">
                <span className="text-2xl font-light ">Sign Up</span>
                <div className="mt-4 bg-white shadow-md rounded-lg text-left">
                    <div className="h-2 bg-indigo-700 rounded-t-md"></div>
                    <div className="px-8 py-6 ">
                        <Formik initialValues={initialValues} validationSchema={SignupSchema} onSubmit={onSubmit} >
                            {({ errors, touched }) => (
                                <Form>
                                    <RTInput formik={true} name="name" label="Name" type={'text'}  placeholder="Name"/>
                                    {errors.name && touched.name ? (
                                            <ValidateError error={errors.name} />
                                    ) : null}


                                    <RTInput formik={true} name="email" label="Email" type={'text'}  placeholder="Email"/>
                                    {errors.email && touched.email ? (
                                            <ValidateError error={errors.email} />
                                    ) : null}


                                    <RTInput formik={true} name="password" label="Password" type={'password'}  placeholder="Password"/>
                                    {errors.password && touched.password ? (
                                            <ValidateError error={errors.password} />
                                    ) : null}
                                    

                                    <RTInput formik={true} name="confirm_password" label="Confirm Password" type={'password'}  placeholder="Confirm Password"/>
                                    {errors.confirm_password && touched.confirm_password ? (
                                            <ValidateError error={errors.confirm_password} />
                                    ) : null}

                                    <div className="flex justify-between items-baseline">
                                        <RTButton name="Sign Up" type={'submit'} className="mt-4 bg-indigo-700 hover:bg-indigo-900" processing={processing} />
                                        {/* <a href="#" className="text-sm hover:underline">Forgot password?</a> */}
                                    </div>
                                </Form>
                            )}
                        </Formik>
                    </div>
                    <div className="px-8 pb-3">
                        Already have an account?  <Link className="font-bold text-indigo-600" href="/login">Login</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register;