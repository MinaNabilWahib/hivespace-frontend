import LayoutSign from "../../Components/Authentication/layoutSign/LayoutSign";
import LoginForm from "../../Components/Authentication/LoginForm/LoginForm";

const LoginPage = () => {
    return (
        <LayoutSign checkChildren={true}>
            <LoginForm />
        </LayoutSign>
    );
}
export default LoginPage;