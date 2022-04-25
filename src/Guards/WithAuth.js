import { useEffect, useLayoutEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkAuth } from '../Store/actions/user';
import LoaderSpinner from '../Components/Shared/LoaderSpinner/LoaderSpinner';
import { getToken } from '../Services/tokenHandling';
import { useNavigate } from 'react-router-dom';

const Authenticated = (props) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const authChecked = useSelector((state) => state.authorization.authChecked);
    const loggedIn = useSelector((state) => state.authorization.loggedIn);
    useEffect(() => {
        dispatch(checkAuth(getToken()))
        if (!loggedIn) {
            navigate('/auth/login')
        }
    }, [dispatch, loggedIn, navigate])

    if (!authChecked) {
        return (<LoaderSpinner />)
    }
    else if (authChecked && loggedIn) {
        return (
            props.children
        )
    };
}
export default Authenticated;