//set token and last login time
export const setToken = (token) => {
    const tokn = 'Bearer ' + token;
    localStorage.setItem("token", tokn);
    localStorage.setItem("lastLoginTime", new Date(Date.now()).getTime());
};

//if last time that user login < 3 days return token
export const getToken = () => {
    const now = new Date(Date.now()).getTime();
    const timeAllowed = 1000 * 60 * 60 * 24 * 3;
    const timeSinceLastLogin = now - localStorage.getItem("lastLoginTime");
    if (timeSinceLastLogin < timeAllowed) {
        return localStorage.getItem("token");
    } else {
        deleteToken()
        return null;
    }
};

//delete token from localStorage
export const deleteToken = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("lastLoginTime");
    localStorage.removeItem("error");
};

//set error if call back form social media login cause error
export const setError = (error = null) => {
    if (error)
        localStorage.setItem("error", error);
};

//get the error
export const getError = () => {
    return localStorage.getItem("error");
};
