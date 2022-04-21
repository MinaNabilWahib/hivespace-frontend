import { useNavigate } from "react-router-dom";
import { setError } from "../../Services/tokenHandling";

const NotFound = ({ authFailure }) => {
    let navigate = useNavigate();
    const errorText =
        authFailure
            ? 'Auth failed ,please try again or signup with email and password'
            :
            'No signal here! we cannot find the page you are looking for ';
    if (authFailure) {
        setError(errorText);
    }
    const home = () => {
        navigate(`/`);
    }
    return (
        <div className="bg-main h-screen">
            <div className="flex h-full items-center justify-center py-12">
                <div className="bg-main-x border rounded-md flex items-center justify-center mx-4 md:w-2/3 ">
                    <div className="flex flex-col items-center py-16 ">
                        <img className="px-4 hidden md:block" src="https://i.ibb.co/9Vs73RF/undraw-page-not-found-su7k-1-3.png" alt="" />
                        <img className="md:hidden" src="https://i.ibb.co/RgYQvV7/undraw-page-not-found-su7k-1.png" alt="" />
                        <h1 className="px-4 pt-8 pb-4 text-center text-5xl font-bold leading-10 text-primary">OOPS! </h1>
                        <p className="px-4 pb-10 text-base leading-none text-center text-gry">{errorText}</p>
                        {!authFailure && <button onClick={home} className="mx-4 h-10 w-44 border rounded-md text-main-x text-base bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-opacity-50 focus:ring-primary-light">Go Back</button>
                        }                    </div>
                </div>
            </div>
        </div>
    );
}
export default NotFound;