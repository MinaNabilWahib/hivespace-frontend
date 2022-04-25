import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import { Outlet } from 'react-router-dom';
import Theme from "../../Components/Shared/Theme/Theme";


const LandingPage = () => {

    return (
        <>
            <Theme top={'top-24'} />
            <Header />
            <Outlet />
            <Footer />
        </>
    );
}

export default LandingPage;