import React from "react"
import { Field } from "redux-form"
import { requiredField } from "../../utils/validators/validators"
import { Input } from "../common/FormsControls/FormsControls"

const LoginForm = (props) => {
    return (
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field name={"email"} placeholder={"email"} component ={Input} validate={[requiredField]}/>
                </div>
                <div>
                    <Field name={"password"} placeholder={"password"} component ={Input} validate={[requiredField]} type={"password"}/>
                </div>
                <div>
                    <Field name={"rememberMe"} component ={Input} type={"checkbox"}/> remember me
                </div>
                <div>
                    <button>Login</button>
                </div>
            </form>
    )
}

export default LoginForm