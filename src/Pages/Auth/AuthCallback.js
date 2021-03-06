import { useParams } from "react-router-dom";
import { useEffect } from 'react';
import LoaderSpinner from "../../Components/Shared/LoaderSpinner/LoaderSpinner";
import { setToken } from './../../Services/tokenHandling';


const AuthCallback = () => {
    const token = useParams().token;
    useEffect(() => {
        setToken(token)
        setTimeout(() => {
            window.close()
        }, 2000);
    }, [token])
    return (
        <div className="w-full h-screen flex justify-center items-center">
            <LoaderSpinner />
        </div>
    )
}
export default AuthCallback;