import { useParams } from "react-router-dom";
import { useEffect } from 'react';
import LoaderSpinner from "../../Components/Shared/LoaderSpinner/LoaderSpinner";
import { setToken } from './../../Services/tokenHandling';
import { useDispatch } from 'react-redux';
import useSign from './../../Hooks/useSign';
import { userVerify_get } from "../../Network/auth";

const AuthVerify = () => {
    const token = useParams().token;
    const id = useParams().id
    const [startVerify] = useSign(userVerify_get)
    useEffect(() => {
        const onstart = async () => {
            await startVerify({ id, token });
        }
        onstart();
    }, [startVerify, id, token])
    return (
        <div className="w-full h-screen flex justify-center items-center">
            <h2 className="mb-32 text-primary ">Email is verifying , please wait...</h2>
            <LoaderSpinner />
        </div>
    )
}
export default AuthVerify;