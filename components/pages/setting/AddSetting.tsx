import { RTButton, RTInput } from "@/components/shared";
import ValidateError from "@/components/shared/ValidateError";
import { SettingModel } from "@/models";
import { Form, Formik } from "formik";
import * as Yup from 'yup';

const AddSetting = () => {
    const initialValues = {
        sid: '',
        token: ''
    }

    const onSubmit = (values:SettingModel) => {
        //dispatch(login(values))
    }
    const processing = false;

    const SettingSchema = Yup.object().shape({
        sid: Yup.string()
                .required('The sid is Required'),
        token: Yup.string()
          .required('The token is required'),
    });
    return(
        <>
             <div className="relative flex text-gray-800 antialiased flex-col justify-center overflow-hidden">
                <div className="relative py-3 text-center">
                    {/* <span className="text-2xl font-light ">Login to your account</span> */}
                    <div className="mt-4 bg-white shadow-md rounded-lg text-left">
                        
                        <div className="px-8 py-6 w-96">
                            <Formik initialValues={initialValues} validationSchema={SettingSchema} onSubmit={onSubmit} >
                                {({ errors, touched }) => (
                                    <Form>
                                        <RTInput formik={true} inputName="sid" label="Sid" type={'text'}  placeholder="Sid"/>
                                        {errors.sid && touched.sid ? (
                                                <ValidateError error={errors.sid} />
                                        ) : null}

                                        <RTInput formik={true} inputName="token" label="Token" type={'text'}  placeholder="Token"/>
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