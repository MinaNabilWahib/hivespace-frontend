// import { useFormik } from 'formik';
import * as yup from 'yup';
import parseMobile from 'libphonenumber-js/mobile';

export const validationRegister = yup.object({
    First_Name: yup
        .string('Enter Your First Name')
        .trim()
        .required('First Name Required')
        .matches(/^[A-Za-z]+$/, "First Name must be string")
        .min(3, 'Minimum length is 3 characters')
        .max(20, 'Maximum Length is 20 characters'),
    Last_Name: yup
        .string('Enter Your Last Name')
        .trim()
        .required('Last Name Required')
        .matches(/^[A-Za-z]+$/, "Last Name must be string")
        .min(3, 'Minimum length is 3 characters')
        .max(20, 'Maximum Length is 20 characters'),
    Email: yup
        .string()
        .required('Your E-Mail is Required !!')
        .trim()
        .matches(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, 'Email Syntax is wrong'),
    Phone_Number: yup
        .string()
        .required('Phone is required')
        .test('valid-phone', 'is not valid to this country', function (value) {
            if (value) {
                return parseMobile(value.toString())?.isValid();
            }
            return false;
        })
    ,
    Country: yup
        .string()
        .trim()
        .required('country is required')
    ,
    Password: yup
        .string()
        .trim()
        .required('Password is Required !!')
        .matches(/^(?!.*\s)(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}/,
            'Must contain at least one number ,uppercase ,lowercase and character letter, and at least 8 or more characters not including spaces.'),
    Confirm_Password: yup
        .string()
        .trim()
        .required("Confirm password is required")
        .test('passwords-match', 'Passwords must match', function (value) {
            return this.parent.Password === value
        })
})


