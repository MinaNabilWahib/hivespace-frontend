import { mdiLockOpen, mdiLockOff, mdiEmail, mdiAccountArrowRight } from '@mdi/js'
import MuiCustomInput from '../MuiCustomInput/MuiCustomInput';
import { useFormik, } from 'formik';
import useSign from '../../../Hooks/useSign';
import { validationLogin } from '../../../Validations/loginValidation';
import { login_post } from './../../../Network/auth';
import SocialButton from '../SocialRegister/SocialButton';
import google from '../../../Assets/Icons/Google.svg'
import facebook from '../../../Assets/Icons/Facebook.svg'
import or from '../../../Assets/images/or.svg'
import useSocial from '../../../Hooks/socialAuth';
import SignButton from '../SocialRegister/SignButton';
import { css } from '@emotion/css';
import { Link } from 'react-router-dom';
import LogoSvg from '../../Shared/LogoSvg/LogoSvg';
const LoginForm = () => {
    const [disabled, startAuth] = useSocial();

    const formik = useFormik({
        initialValues: {
            Email: '',
            Password: '',
        },
        validationSchema: validationLogin,
        onSubmit: (values) => {
            startLogin(values)
        },
    });
    const [startLogin, error, load] = useSign(login_post, formik);


    return (
        <div className="w-full xl:w-3/4 max-w-3xl py-10 px-5 md:px-10">
            <LogoSvg />
            <div className="text-center mb-10">
                <h1 className="font-bold text-3xl text-primary">LOG IN</h1>
                <p>Enter your Email & Password to LogIN</p>
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


            <div className="mb-5">
                <SignButton
                    disabled={load}
                    title={'LOG IN'}
                    click={formik.handleSubmit}
                />
                <div className='flex flex-wrap justify-between'>
                    <div className=''>
                        New To HiveSpace?
                        <Link className='text-primary-light font-semibold' to="/auth"> Register</Link>
                    </div>
                    <Link className='text-primary-light font-semibold ml-auto' to='/auth/password'>Forget Password ?</Link>
                </div>
                <div className={'w-full h-6 ' + css`
                    background-image : url(${or});
                    background-position : 50% 100%;
                `}
                >
                </div>
            </div>
            <SocialButton title={"LOG IN with Google"} icon={google} click={startAuth} disabled={load} provider={'google'} />
            <SocialButton title={"LOG IN with Facebook"} icon={facebook} click={startAuth} disabled={load} provider={'facebook'} />
            {error === 'Error: Your account not verified , please verify it' &&
                <div className=''>
                    Verification Email Not Sent ?
                    <Link className='text-primary-light font-semibold' to="/auth/verifyEmail"> Resend It Again</Link>
                </div>}
        </div>
    )
};

export default LoginForm;