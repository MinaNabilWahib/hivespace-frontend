import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkAuth } from '../Store/actions/user';
import LoaderSpinner from '../Components/Shared/LoaderSpinner/LoaderSpinner';
import { getToken } from '../Services/tokenHandling';
import { useNavigate } from 'react-router-dom';


const NotAuthenticated = (props) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const authChecked = useSelector((state) => state.authorization.authChecked);
    const loggedIn = useSelector((state) => state.authorization.loggedIn);
    useEffect(() => {
        dispatch(checkAuth(getToken()))
        if (loggedIn && authChecked)
            navigate('/')
    }, [dispatch, navigate, authChecked, loggedIn])


    if (!authChecked) {
        return (<LoaderSpinner />)
    }
    else if (!loggedIn) {
        return props.children
    }

}
export default NotAuthenticated;