import { mdiLockOpen, mdiLockOff, mdiEmail, mdiAccountArrowRight } from '@mdi/js'
import MuiCustomInput from '../MuiCustomInput/MuiCustomInput';
import { useFormik, } from 'formik';
import useSign from '../../../Hooks/useSign';
import { validationEmail } from '../../../Validations/loginValidation';
import { resetPassword_post, VerifyEmail_post } from './../../../Network/auth';
import SocialButton from '../SocialRegister/SocialButton';
import google from '../../../Assets/Icons/Google.svg'
import facebook from '../../../Assets/Icons/Facebook.svg'
import or from '../../../Assets/images/or.svg'
import useSocial from '../../../Hooks/socialAuth';
import SignButton from '../SocialRegister/SignButton';
import { css } from '@emotion/css';
import { Link } from 'react-router-dom';

const ResendVerifyEmail = () => {
    const formik = useFormik({
        initialValues: {
            Email: '',
        },
        validationSchema: validationEmail,
        onSubmit: (values) => {
            startResendVerification(values)
        },
    });
    const [startResendVerification, error, load] = useSign(VerifyEmail_post, formik);
    const handleSubmit = (e) => {
        const target = e.currentTarget;
        if (target.innerHTML === 'Send To Email')
            formik.handleSubmit()
        let count = 60;
        console.log(formik.errors.Email);
        console.log(error);
        if (!formik.errors.Email && !error) {
            target.innerHTML = 'active again after ' + count;
            const interval = setInterval(() => {
                target.disabled = true;
                count--;
                target.innerHTML = 'active again after ' + count;
                if (count === 0) {
                    target.disabled = false;
                    target.innerHTML = 'Send To Email'
                    clearInterval(interval)
                }
            }, 1000);
        }

    }
    return (

        <div className="w-full xl:w-3/4 max-w-3xl py-10 px-5 md:px-10">
            <div className="text-center mb-10">
                <h1 className="font-bold text-xl sm:text-3xl text-primary mb-3">Verify your Email.</h1>
                <p className="text-center text-gray-500">Enter your user account's email address and we will send you a verification
                    email link.</p>
            </div>

            <div className="flex -mx-3 ">
                <MuiCustomInput
                    styleCustom='w-full'
                    name='Email'
                    type='input'
                    icon={mdiEmail}
                    value={formik.values.Email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.Email && Boolean(formik.errors.Email)}
                    errorText={formik.touched.Email && formik.errors.Email}
                />
            </div>

            <div className="flex  mb-5">
                <button
                    disabled={load}
                    type='button'
                    onClick={handleSubmit}
                    className="block w-full  mx-auto bg-primary transition-all duration-300 hover:bg-primary-light active:bg-primary-dark active:scale-105 text-white rounded-full px-3 py-3 font-semibold">
                    Send To Email
                </button>
            </div>
            <div className='flex flex-wrap justify-between'>
                <Link className='text-primary-light font-semibold' to="/auth"> Register</Link>
                <Link className='text-primary-light font-semibold ml-auto' to='/auth/login'>Back to Login</Link>
            </div>
        </div >
    );
}

export default ResendVerifyEmail;