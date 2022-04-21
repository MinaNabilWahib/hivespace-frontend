import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkAuth } from '../Store/actions/user';
import LoaderSpinner from '../Components/Shared/LoaderSpinner/LoaderSpinner';
import LayoutSign from '../Components/Authentication/layoutSign/LayoutSign';
import LoginForm from '../Components/Authentication/LoginForm/LoginForm';


const Authenticated = (props) => {
    const dispatch = useDispatch()
    const authChecked = useSelector((state) => state.authorization.authChecked);
    const loggedIn = useSelector((state) => state.authorization.loggedIn);
    useEffect(() => {
        dispatch(checkAuth)
    }, [dispatch])

    return (
        <>

            {(!authChecked) ? <LoaderSpinner /> : !loggedIn ? <LayoutSign><LoginForm /></LayoutSign> : props.children}
        </>
    );
}
export default Authenticated;