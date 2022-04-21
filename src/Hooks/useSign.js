import { useCallback, useEffect } from "react"
import { useSelector, useDispatch } from 'react-redux';
import { alertConfig } from "../Services/sweetAlert";
import { useNavigate } from 'react-router-dom';


const useSign = (axiosRequest, formik) => {
    const response = useSelector((state) => state.loading?.data);
    const load = useSelector((state) => state.loading.loading);
    const error = useSelector((state) => state.loading.error);
    const navigate = useNavigate()

    useEffect(() => {
        const listener = event => {
            if (event.code === "Enter" || event.code === "NumpadEnter") {
                event.preventDefault();
                formik.handleSubmit();
            }
        };
        document.addEventListener("keydown", listener);
        return () => {
            document.removeEventListener("keydown", listener);
        };
    }, [formik]);

    const startHandleSign = useCallback(async (body) => {
        if (!load) {
            const response = await axiosRequest(body);
            if (response?.data?.message) {
                if (formik)
                    formik.handleReset()
                if (response.config?.redirect)
                    navigate(response.config?.redirect)
            }
        }

        // if (response?.message) {
        //     await alertConfig(true, () => {
        //         if (redirect)
        //             navigate(redirect);
        //     }).fire({
        //         icon: 'success',
        //         title: response.message,
        //         position: 'top-start',
        //     })
        //     if (formik)
        //         formik.handleReset()
        // } else {
        //     await alertConfig('').fire({
        //         icon: 'warning',
        //         title: response.Error,
        //         position: 'center',
        //     })
        //     console.log(redirect);

        // }
    }, [axiosRequest, formik, navigate])
    return [startHandleSign, error, load, response]
}
export default useSign;