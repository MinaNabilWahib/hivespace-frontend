import SvgSign from './SvgSign';
import { css } from '@emotion/css'
import mainRegisterImg from '../../../Assets/images/manRegister.png';
import registerImg from '../../../Assets/images/register.png'

const LeftSign = () => {
    const main_register = css`
        background-image: url(${mainRegisterImg});
        background-size: contain;
        background-repeat: no-repeat;
    `
    const container_signLeft = css`
    background-image: url(${registerImg});
    background-size: 100% 100%;
    background-repeat: no-repeat;
    `

    return (
        <section className={`${container_signLeft}  hidden lg:flex w-1/2 h-full justify-center items-center py-10 px-10 relative`}>
            <div className='absolute -right-24 w-52 h-60'>
                <div className={`${main_register} w-full h-full`} ></div>
            </div>
            <SvgSign />
        </section>

    );
}
export default LeftSign;