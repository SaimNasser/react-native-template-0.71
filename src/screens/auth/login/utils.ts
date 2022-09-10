import * as yup from 'yup'

export const LoginFormValidation = yup.object().shape({
    email: yup.string().required("Email is required.").email("Invalid Email"),
    password: yup.string().required("Password is  required").min(8, "Password too short")
})