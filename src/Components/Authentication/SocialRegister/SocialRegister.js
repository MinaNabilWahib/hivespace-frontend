
import SocialButton from './SocialButton';
import google from '../../../Assets/Icons/Google.svg'
import facebook from '../../../Assets/Icons/Facebook.svg'
import useSocial from '../../../Hooks/socialAuth';
import { useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SignButton from './SignButton';

const SocialRegister = () => {
    const navigate = useNavigate();
    const [disabled, startAuth] = useSocial();
    const goToForm = useCallback(() => {
        navigate('/auth/register')
    }, [navigate])

    return (
        <div className=" w-full xl:w-3/4 max-w-2xl py-10 px-5 md:px-10 text-xs sm:text-base">
            <SignButton title={"Sign up with Email & Password"} click={goToForm} />
            <SocialButton title={"Sign up with Google"} icon={google} click={startAuth} disabled={disabled} provider={'google'} />
            <SocialButton title={"Sign up with Facebook"} icon={facebook} click={startAuth} disabled={disabled} provider={'facebook'} />
            <div className='flex flex-wrap justify-center'>
                <div className=''>
                    Have An Account?
                    <Link className='text-primary-light font-semibold' to="/auth/login"> Login</Link>
                </div>
            </div>
        </div>
    );
}
export default SocialRegister;