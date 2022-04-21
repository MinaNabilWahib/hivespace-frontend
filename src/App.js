import React, { useEffect } from "react";
import RegisterForm from "./Components/Authentication/RegisterForm/RegisterForm";
import LayoutSign from "./Components/Authentication/layoutSign/LayoutSign";
// import Chat from "./Components/ChatComponent/chatComponent";
import Workspace from "./Pages/Workspace/workspacePage";
import MuiCustomInput from './Components/Authentication/MuiCustomInput/MuiCustomInput';
import Theme from "./Components/Shared/Theme/Theme";
import SocialRegister from "./Components/Authentication/SocialRegister/SocialRegister";
import {
  Routes,
  Route,
} from "react-router-dom";
import AuthCallback from "./Pages/Auth/AuthCallback";
import { useDispatch } from 'react-redux';
import { checkAuth } from './Store/actions/user';
import NotFound from "./Pages/NotFound/NotFound";
import LoaderSpinner from './Components/Shared/LoaderSpinner/LoaderSpinner';
import AuthVerify from './Pages/Auth/AuthVerify';
import LoginForm from "./Components/Authentication/LoginForm/LoginForm";
import ForgetPassword from "./Components/Authentication/ForgetPassword/ForgetPassword";
import ResetPassword from "./Components/Authentication/ForgetPassword/ResetPassword";
import { getToken } from "./Services/tokenHandling";
import NotAuthenticated from './Guards/not-auth';
import Authenticated from "./Guards/WithAuth";


import "./scss/main.scss";
import Home from "./Pages/Home/Home";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import About from "./Pages/About/About";
import ContactUs from "./Pages/ContactUs/ContactUs";
import LandingPage from "./Pages/LandingPage/LandingPage";
function App() {

  const dispatch = useDispatch();
  useEffect(() => {
    const request = () => {
      dispatch(checkAuth(getToken()))
    }
    request()
  }, [dispatch])

  return (
    <div className="App bg-main h-screen">
      <Theme />

      {/* <Workspace /> */}
      <Routes>
        <Route path="user/verify/:id/:token" element={<NotAuthenticated><AuthVerify /></NotAuthenticated>} />
        <Route path="auth" element={<NotAuthenticated><LayoutSign /></NotAuthenticated>}>
          <Route path="login" element={<NotAuthenticated><LoginForm /></NotAuthenticated>} />
          <Route index element={<NotAuthenticated><SocialRegister /></NotAuthenticated>} />
          <Route path="register" element={<NotAuthenticated><RegisterForm /></NotAuthenticated>} />
          <Route path="password" element={<NotAuthenticated><ForgetPassword /></NotAuthenticated>} />
          <Route path="password-reset/:id/:token" element={<NotAuthenticated><ResetPassword /></NotAuthenticated>} />
        </Route>
        <Route path="socialVerify/:token/" element={<AuthCallback />} />
        <Route path="auth/failure" element={<NotAuthenticated><NotFound authFailure={true} /></NotAuthenticated>} />

        <Route element={<LandingPage />} >
          <Route path="/home" exact element={<Home />} />
          <Route path="/contact" exact element={<ContactUs />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/" exact element={<Home />} />
        </Route>
      </Routes>

    </div >
  );
}

export default App;
