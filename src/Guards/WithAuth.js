import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkAuth } from '../Store/actions/user';
import LoaderSpinner from '../Components/Shared/LoaderSpinner/LoaderSpinner';
import LayoutSign from '../Components/Authentication/layoutSign/LayoutSign';
import LoginForm from '../Components/Authentication/LoginForm/LoginForm';
import { getToken } from '../Services/tokenHandling';
import { useNavigate } from 'react-router-dom';

const Authenticated = (props) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const authChecked = useSelector((state) => state.authorization.authChecked);
    const loggedIn = useSelector((state) => state.authorization.loggedIn);
    useEffect(() => {
        dispatch(checkAuth(getToken()))
    }, [])
    if(!authChecked){
    return (<LoaderSpinner />)
    } else if (!loggedIn){
    navigate('/auth/login')
    return <></>
    }else{
    return(
    <>
        props.children
    </>) 
};
}
export default Authenticated;