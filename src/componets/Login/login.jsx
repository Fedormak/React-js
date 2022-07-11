import React from "react"
import { Redirect } from "react-router-dom"
import { reduxForm } from "redux-form"
import LoginForm from "./loginForm"

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }
    
    if (props.isAuth) {
        return <Redirect to={"/profile"} />
    }

    return (
        <div>
            <h3>Login</h3>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
}

const LoginReduxForm = reduxForm({
    form:"Login"
}) (LoginForm)

export default Login