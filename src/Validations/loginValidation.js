import * as yup from 'yup';

export const validationLogin = yup.object({
    Email: yup
        .string()
        .required('Your E-Mail is Required !!')
        .trim()
        .matches(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, 'Email Syntax is wrong'),
    Password: yup
        .string()
        .trim()
        .required('Password is Required !!')
        .matches(/^(?!.*\s)(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}/,
            'Must contain at least one number ,uppercase ,lowercase and character letter, and at least 8 or more characters not including spaces.'),
})


export const validationEmail = yup.object({
    Email: yup
        .string()
        .required('Your E-Mail is Required !!')
        .trim()
        .matches(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, 'Email Syntax is wrong'),
})

export const validationPassword = yup.object({
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