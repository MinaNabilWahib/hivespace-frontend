import { mdiAccount, mdiLockOpen, mdiLockOff, mdiEmail, mdiAccountArrowRight } from '@mdi/js'
import MuiCustomInput from '../MuiCustomInput/MuiCustomInput';
import { useFormik, } from 'formik';
import { validationRegister } from '../../../Validations/registerValidation';
import useSign from '../../../Hooks/useSign';
import { register_post } from '../../../Network/auth';
import { Link } from 'react-router-dom';

const RegisterForm = () => {
    const formik = useFormik({
        initialValues: {
            First_Name: '',
            Last_Name: '',
            Email: '',
            Phone_Number: '',
            Country: '',
            Password: '',
            Confirm_Password: ''
        },
        validationSchema: validationRegister,
        onSubmit: (values) => {
            startRegister(values, '/login')
        },
    });
    const [startRegister, error, load] = useSign(register_post, formik);


    return (
        <div className="w-full 2xl:w-3/4 max-w-3xl py-10 px-5 md:px-10">
            <div className="text-center mb-10">
                <h1 className="font-bold text-3xl text-primary">REGISTER</h1>
                <p>Enter your information to register</p>
            </div>
            {/* <form onSubmit={formik.handleSubmit} > */}
            <div className="flex -mx-3">
                <MuiCustomInput
                    styleCustom='w-1/2'
                    name='First_Name'
                    type='input'
                    icon={mdiAccountArrowRight}
                    value={formik.values.First_Name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.First_Name && Boolean(formik.errors.First_Name)}
                    errorText={formik.touched.First_Name && formik.errors.First_Name}
                />
                <MuiCustomInput
                    styleCustom='w-1/2'
                    name='Last_Name'
                    type='input'
                    icon={mdiAccountArrowRight}
                    value={formik.values.Last_Name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.Last_Name && Boolean(formik.errors.Last_Name)}
                    errorText={formik.touched.Last_Name && formik.errors.Last_Name}
                />

            </div>
            <div className="flex -mx-3 ">
                <MuiCustomInput
                    styleCustom='w-full'
                    name='Email'
                    type='input'
                    icon={mdiEmail}
                    value={formik.values.Email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.Email && Boolean(formik.errors.Email)}
                    errorText={formik.touched.Email && formik.errors.Email}
                />
            </div>
            <div className="flex -mx-3">
                <MuiCustomInput
                    styleCustom='w-full'
                    name='Phone_Number'
                    type=''
                    isPhoneInput={true}
                    value={formik.values.Phone_Number}
                    onChange={(v, c) => {
                        formik.setFieldValue('Country', c?.name);
                        formik.setFieldValue('Phone_Number', v);
                        formik.touched.Phone_Number = true;
                    }}
                    onBlur={(e) => {
                        formik.touched.Phone_Number = true;
                        formik.handleBlur(e)
                    }}
                    // onBlur={formik.handleBlur}
                    error={formik.touched.Phone_Number && Boolean(formik.errors.Phone_Number)}
                    errorText={formik.touched.Phone_Number && formik.errors.Phone_Number}
                />
            </div>
            <div className="flex -mx-3 ">
                <MuiCustomInput
                    styleCustom='w-full'
                    name='Password'
                    type='Password'
                    icon={
                        !Boolean(formik.errors.Password) ?
                            mdiLockOpen :
                            mdiLockOff
                    }
                    value={formik.values.Password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={
                        (formik.touched.Confirm_Password && Boolean(formik.errors.Confirm_Password))
                        ||
                        (formik.touched.Password && Boolean(formik.errors.Password))}
                    errorText={formik.touched.Password && formik.errors.Password}
                />
            </div>
            <div className="flex -mx-3 ">
                <MuiCustomInput
                    styleCustom='w-full'
                    name='Confirm_Password'
                    type='Password'
                    icon={
                        !Boolean(formik.errors.Confirm_Password) ?
                            mdiLockOpen :
                            mdiLockOff
                    }
                    value={formik.values.Confirm_Password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.Confirm_Password && Boolean(formik.errors.Confirm_Password)}
                    errorText={formik.touched.Confirm_Password && formik.errors.Confirm_Password}
                />
            </div>

            <div className="flex  mb-5">
                <button
                    disabled={load}
                    type='button'
                    onClick={() => {
                        formik.handleSubmit()
                    }}
                    className="block w-full  mx-auto bg-primary transition-all duration-300 hover:bg-primary-light active:bg-primary-dark active:scale-105 text-white rounded-full px-3 py-3 font-semibold">REGISTER NOW</button>
            </div>
            <div className='flex flex-wrap justify-center'>
                <div className=''>
                    Have An Account?
                    <Link className='text-primary-light font-semibold' to="/auth/login"> Login</Link>
                </div>
            </div>
        </div>
    )
};

export default RegisterForm;