import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import { Outlet } from 'react-router-dom';

const LandingPage = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
}

export default LandingPage;