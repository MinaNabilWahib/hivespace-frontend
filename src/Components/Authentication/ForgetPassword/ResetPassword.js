import { mdiLockOpen, mdiLockOff } from '@mdi/js'
import MuiCustomInput from '../MuiCustomInput/MuiCustomInput';
import { useFormik, } from 'formik';
import useSign from '../../../Hooks/useSign';
import { validationPassword } from '../../../Validations/loginValidation';
import { resetNewPasswords_post } from './../../../Network/auth';

import { Link, useParams } from 'react-router-dom';

const ResetPassword = () => {
    const token = useParams().token;
    const id = useParams().id
    const formik = useFormik({
        initialValues: {
            Password: '',
            Confirm_Password: ''
        },
        validationSchema: validationPassword,
        onSubmit: (values) => {
            startResetPassword({ ...values, id, token })
        },
    });
    const [startResetPassword, error, load] = useSign(resetNewPasswords_post, formik);
    return (

        <div className="w-full xl:w-3/4 max-w-3xl py-10 px-5 md:px-10">
            <div className="text-center mb-10">
                <h1 className="font-bold text-xl sm:text-3xl text-primary mb-3">Reset your password.</h1>
                <p className="text-center text-gray-500">
                    Enter your New Password and login again .
                </p>
            </div>

            <div className="flex -mx-3 ">
                <MuiCustomInput
                    styleCustom='w-full'
                    name='Password'
                    type='Password'
                    icon={
                        !Boolean(formik.errors.Password) ?
                            mdiLockOpen :
                            mdiLockOff
                    }
                    value={formik.values.Password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={
                        (formik.touched.Confirm_Password && Boolean(formik.errors.Confirm_Password))
                        ||
                        (formik.touched.Password && Boolean(formik.errors.Password))}
                    errorText={formik.touched.Password && formik.errors.Password}
                />
            </div>
            <div className="flex -mx-3 ">
                <MuiCustomInput
                    styleCustom='w-full'
                    name='Confirm_Password'
                    type='Password'
                    icon={
                        !Boolean(formik.errors.Confirm_Password) ?
                            mdiLockOpen :
                            mdiLockOff
                    }
                    value={formik.values.Confirm_Password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.Confirm_Password && Boolean(formik.errors.Confirm_Password)}
                    errorText={formik.touched.Confirm_Password && formik.errors.Confirm_Password}
                />
            </div>

            <div className="flex  mb-5">
                <button
                    disabled={load}
                    type='button'
                    onClick={() => {
                        formik.handleSubmit()

                    }}
                    className="block w-full  mx-auto bg-primary transition-all duration-300 hover:bg-primary-light active:bg-primary-dark active:scale-105 text-white rounded-full px-3 py-3 font-semibold">
                    Reset Password
                </button>
            </div>
            <div className='flex flex-wrap justify-between'>
                <Link className='text-primary-light font-semibold' to="/auth"> Register</Link>
                <Link className='text-primary-light font-semibold ml-auto' to='/auth/login'>Back to Login</Link>
            </div>
        </div>
    );
}

export default ResetPassword;