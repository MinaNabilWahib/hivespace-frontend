import React, { useEffect, Suspense, useLayoutEffect } from "react";
// import RegisterForm from "./Components/Authentication/RegisterForm/RegisterForm";
// import LayoutSign from "./Components/Authentication/layoutSign/LayoutSign";
// import Chat from "./Components/ChatComponent/chatComponent";
// import Workspace from "./Pages/Workspace/workspacePage";
import MuiCustomInput from './Components/Authentication/MuiCustomInput/MuiCustomInput';
import Theme from "./Components/Shared/Theme/Theme";
// import SocialRegister from "./Components/Authentication/SocialRegister/SocialRegister";
import {
  Routes,
  Route,
} from "react-router-dom";
// import AuthCallback from "./Pages/Auth/AuthCallback";
import { useDispatch } from 'react-redux';
import { checkAuth } from './Store/actions/user';
// import NotFound from "./Pages/NotFound/NotFound";
import LoaderSpinner from './Components/Shared/LoaderSpinner/LoaderSpinner';
// import AuthVerify from './Pages/Auth/AuthVerify';
// import LoginForm from "./Components/Authentication/LoginForm/LoginForm";
// import ForgetPassword from "./Components/Authentication/ForgetPassword/ForgetPassword";
// import ResetPassword from "./Components/Authentication/ForgetPassword/ResetPassword";
import { getToken } from "./Services/tokenHandling";
import NotAuthenticated from './Guards/not-auth';
import Authenticated from "./Guards/WithAuth";
import "./scss/main.scss";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import ContactUs from "./Pages/ContactUs/ContactUs";
import LandingPage from "./Pages/LandingPage/LandingPage";
import ResendVerifyEmail from './Components/Authentication/ResendVerifyEmail/ResendVerifyEmail';

const LayoutSign = React.lazy(() => import("./Components/Authentication/layoutSign/LayoutSign"));
const SocialRegister = React.lazy(() => import("./Components/Authentication/SocialRegister/SocialRegister"));
const RegisterForm = React.lazy(() => import("./Components/Authentication/RegisterForm/RegisterForm"));
const Workspace = React.lazy(() => import("./Pages/Workspace/workspacePage"));
const AuthCallback = React.lazy(() => import("./Pages/Auth/AuthCallback"));
const NotFound = React.lazy(() => import("./Pages/NotFound/NotFound"));
const AuthVerify = React.lazy(() => import('./Pages/Auth/AuthVerify'));
const LoginForm = React.lazy(() => import("./Components/Authentication/LoginForm/LoginForm"));
const ForgetPassword = React.lazy(() => import("./Components/Authentication/ForgetPassword/ForgetPassword"));
const ResetPassword = React.lazy(() => import("./Components/Authentication/ForgetPassword/ResetPassword"));


function App() {

  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(checkAuth(getToken()))
  // }, [dispatch])

  return (
    <Suspense fallback={<LoaderSpinner />}>
      <div className="App bg-main h-screen">

        <Routes>
          <Route path="user/verify/:id/:token" element={<NotAuthenticated><AuthVerify /></NotAuthenticated>} />
          <Route path="auth" element={<NotAuthenticated><LayoutSign /></NotAuthenticated>}>
            <Route path="login" element={<NotAuthenticated><LoginForm /></NotAuthenticated>} />
            <Route index element={<NotAuthenticated><SocialRegister /></NotAuthenticated>} />
            <Route path="register" element={<NotAuthenticated><RegisterForm /></NotAuthenticated>} />
            <Route path="password" element={<NotAuthenticated><ForgetPassword /></NotAuthenticated>} />
            <Route path="verifyEmail" element={<NotAuthenticated><ResendVerifyEmail /></NotAuthenticated>} />
            <Route path="password-reset/:id/:token" element={<NotAuthenticated><ResetPassword /></NotAuthenticated>} />
          </Route>
          <Route path="*" element={<NotFound />} />
          <Route path="auth/socialVerify/:token/" element={<AuthCallback />} />
          <Route path="auth/failure" element={<NotAuthenticated><NotFound authFailure={true} /></NotAuthenticated>} />
          <Route path="workspace" element={<Authenticated><Workspace /></Authenticated>} />

          <Route element={<LandingPage />} >
            <Route path="/home" exact element={<Home />} />
            <Route path="/contact" exact element={<ContactUs />} />
            <Route path="/about" exact element={<About />} />
            <Route path="/" exact element={<Home />} />
          </Route>
        </Routes>
      </div >
    </Suspense>

  );
}

export default App;
