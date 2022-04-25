
import LeftSign from './../LeftSign/LeftSign';
import { Outlet } from 'react-router-dom';
import { css } from '@emotion/css'
import Theme from '../../Shared/Theme/Theme';
const LayoutSign = () => {
    const hexa = css`
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='49' viewBox='0 0 28 49'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='hexagons' fill='rgb(246, 76, 114)' fill-opacity='0.4' fill-rule='nonzero'%3E%3Cpath d='M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v12.7l10.99 6.34 11-6.35V17.9l-11-6.34L3 17.9zM0 15l12.98-7.5V0h-2v6.35L0 12.69v2.3zm0 18.5L12.98 41v8h-2v-6.85L0 35.81v-2.3zM15 0v7.5L27.99 15H28v-2.31h-.01L17 6.35V0h-2zm0 49v-8l12.99-7.5H28v2.31h-.01L17 42.15V49h-2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    `
    console.log(<Outlet />);
    return (
        <>
            <Theme top={'top-8'} />
            <div className={`w-full h-screen bg-main-x relative  overflow-hidden flex items-center justify-center ${hexa}`} >
                <div className='absolute w-full h-screen scale-[1.6] bg-main  -top-1/4 -left-1/4 rounded-full z-0'></div>
                <LeftSign />
                <div className="w-full lg:w-1/2 py-10 px-5 md:px-1 flex items-center justify-center z-10">
                    <Outlet />
                </div>
            </div>
        </>

    )
}
export default LayoutSign;