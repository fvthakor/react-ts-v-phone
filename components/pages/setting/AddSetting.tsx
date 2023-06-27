import { RTButton, RTInput } from "@/components/shared";
import ValidateError from "@/components/shared/ValidateError";
import { RootStateModel, SettingModel } from "@/models";
import { addUpdateSetting, getSetting } from "@/store/setting/setting.action";
import { ChevronRightIcon, ExclamationCircleIcon } from "@heroicons/react/20/solid";
import { Form, Formik } from "formik";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import * as Yup from 'yup';

const AddSetting = () => {
    const dispatch:Dispatch<any> = useDispatch()
    const { setting , processing } = useSelector((state:RootStateModel) => state.setting)

    // const [initialValues, setInitialValues] = useState({sid: '', token: ''})
    const initialValues = {
        sid: '',
        token: ''
    }
    const [showForm, setShowForm] = useState(true)

    const onSubmit = (values:SettingModel) => {
        dispatch(addUpdateSetting(values));
    }

    const SettingSchema = Yup.object().shape({
        sid: Yup.string()
                .required('The sid is Required'),
        token: Yup.string()
          .required('The token is required'),
    });

    useEffect(() => {
        if(setting){
            //setShowForm(false);
            //setInitialValues({sid: setting.sid, token: setting.token});
            // setTimeout(() => {
            //     setShowForm(true);
            // }, 100);
        }else{
            dispatch(getSetting());
        }

    }, [setting])
    return(
        <>  
           
             <div className="relative flex text-gray-800 antialiased flex-col justify-center overflow-hidden">
                <div className="relative py-3 text-center">
                    {/* <span className="text-2xl font-light ">Login to your account</span> */}
                    <div className="mt-4 bg-white shadow-md rounded-lg text-left">
                        
                        { showForm ? 
                            <div className="px-8 py-6 w-96">
                                {setting ? <>

                                    <div className="flex bg-green-100 rounded-lg p-4 mb-4 text-sm text-green-700" role="alert">
                                        
                                        <ExclamationCircleIcon className="w-4 h-4 mt-1" />
                                        <div>
                                            <span className="font-medium"> &nbsp; Setting exits!</span>.
                                        </div>
                                    </div>
                                </> : <></>}
                                <Formik initialValues={initialValues} validationSchema={SettingSchema} onSubmit={onSubmit} >
                                    {({ errors, touched }) => (
                                        <Form>
                                            <RTInput formik={true} inputName="sid" label="Sid" type={'password'}  placeholder="Sid"/>
                                            {errors.sid && touched.sid ? (
                                                    <ValidateError error={errors.sid} />
                                            ) : null}

                                            <RTInput formik={true} inputName="token" label="Token" type={'password'}  placeholder="Token"/>
                                            {errors.token && touched.token ? (
                                                    <ValidateError error={errors.token} />
                                            ) : null}

                                            <div className="flex justify-between items-baseline">
                                                <RTButton name="Save" type={'submit'} className="mt-4 bg-indigo-700 hover:bg-indigo-900" processing={processing} />
                                                {/* <a href="#" className="text-sm hover:underline">Forgot password?</a> */}
                                            </div>
                                        </Form>
                                    )}
                                </Formik>
                            </div>
                         : <></>}
                        
                        {/* <div className="px-8 pb-4">
                            Don't have an account yet? <Link className="text-indigo-600 font-bold" href="/register">Register Now</Link>
                        </div> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddSetting;