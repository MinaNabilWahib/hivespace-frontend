import auth from '../config/auth.config';
import { useDispatch, useSelector } from 'react-redux';
import { errorHandling, loaded, loading } from './../Store/actions/loading';
import { getToken } from '../Services/tokenHandling';
import { deleteToken } from './../Services/tokenHandling';
import { getError } from './../Services/tokenHandling';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { checkAuth } from '../Store/actions/user';


const useSocial = () => {


    //deal with redux store
    const dispatch = useDispatch();
    const load = useSelector((state) => state.loading.loading)
    const data = useSelector((state) => state.loading.data?.token)
    const error = useSelector((state) => state.loading.error)
    const loggedIn = useSelector((state) => state.authorization.loggedIn)

    //navigate page after get token
    const navigate = useNavigate()

    // if the user closes the popup without authenticating.
    const checkPopup = useCallback((popup) => {
        let count = 0;
        const check = setInterval(() => {
            count++;
            if (!popup || popup.closed === undefined || count === 10) {

                dispatch(loaded({ token: getToken() }))
                clearInterval(check)
            }
        }, 1000)
    }, [])

    // Launches the popup by making a request to the server
    const openPopupCenter = (provider) => {
        const authProvider = provider === 'google' ? auth.GOOGLE : auth.FACEBOOK;

        const width = 600, height = 600;
        //center popup
        const left = (window.screen.width / 2) - (width / 2);
        const top = (window.screen.height / 2) - (height / 2);
        const url = auth.BASE_URL + authProvider;

        return window.open(url, '',
            `status=no, menubar=no, 
            scrollbars=no, resizable=no,
            width=${width}, 
            height=${height}, top=${top}, left=${left}`
        )
    }

    window.addEventListener('storage', function listen(e) {
        if (e.key === 'token' && e.newValue) {
            dispatch(loaded({ token: e.newValue }))
            dispatch(checkAuth(e.newValue))
            if (loggedIn) {
                navigate('/')
            }

        }
        else if (e.key === 'error' && e.newValue) {
            dispatch(errorHandling({ error: getError() }))
        }
        this.removeEventListener('storage', listen);
    })


    const startAuth = useCallback((e, provider) => {
        //first delete token from localStorage before login with social media
        deleteToken();
        if (!load) {
            e.preventDefault();
            const popup = openPopupCenter(provider);
            popup.focus()
            checkPopup(popup)
            dispatch(loading())
        }
    }, [checkPopup, dispatch, load]);




    return [load, startAuth, error, data];

}

export default useSocial;