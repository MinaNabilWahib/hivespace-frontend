import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkAuth } from '../Store/actions/user';
import LoaderSpinner from '../Components/Shared/LoaderSpinner/LoaderSpinner';
import { getToken } from '../Services/tokenHandling';


const NotAuthenticated = (props) => {
    const dispatch = useDispatch()
    const authChecked = useSelector((state) => state.authorization.authChecked);
    const loggedIn = useSelector((state) => state.authorization.loggedIn);
    useEffect(() => {
        dispatch(checkAuth(getToken()))
    }, [dispatch])

    return (
        <>
            {(!authChecked) ? <LoaderSpinner /> : !loggedIn ? props.children : <div>Home</div>}
        </>
    );
}
export default NotAuthenticated;