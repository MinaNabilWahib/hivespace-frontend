import { css, keyframes } from '@emotion/css'
import Theme from '../Theme/Theme';
const loader = keyframes`
0% {
    transform: rotate(0deg);
}

25% {
    transform: rotate(180deg);
}

50% {
    transform: rotate(180deg);
}

75% {
    transform: rotate(360deg);
}

100% {
    transform: rotate(360deg);
}
`;
const loaderInner = keyframes`
0% {
    height: 0%;
}

25% {
    height: 0%;
}

50% {
    height: 100%;
}

75% {
    height: 100%;
}

100% {
    height: 0%;
}
`;
const baseStyle = css`
    -webkit-clip-path: polygon(50% 0, 95% 25%, 95% 75%, 50% 100%, 5% 75%, 5% 25%);
	clip-path: polygon(50% 0, 95% 25%, 95% 75%, 50% 100%, 5% 75%, 5% 25%),
`;
const loaderSpan = css` animation: ${loader} 2s infinite ease ;`;
const loaderInnerSpan = css`animation: ${loaderInner} 2s infinite ease-in ;`;

const LoaderSpinner = () => {
    return (
        <div className='bg-main h-screen w-full'>
            <Theme top={'top-8'} />

            <div
                className="absolute w-max top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50" >

                <span
                    className={`${baseStyle} inline-block w-16 h-16 border-1 border-primary shadow-xl relative ${loaderSpan} z-50`}>
                    <span
                        className={` inline-block w-full bg-gradient-to-r from-primary-light to-secondary align-top  ${loaderInnerSpan} `}>
                    </span>
                </span>
            </div >
        </div>
    );
}

export default LoaderSpinner;