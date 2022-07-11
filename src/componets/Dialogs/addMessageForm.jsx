import React from "react"
import { Field } from "redux-form";
import { maxLengthCreator, requiredField } from "../../utils/validators/validators";
import { Textarea } from "../common/FormsControls/FormsControls";

const maxLength65 = maxLengthCreator(65)

const AddMessageForm = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} validate={[requiredField, maxLength65]} name={"newMessageBody"} placeholder="Enter your message"/>
            </div>
            <div>
                <button> Send</button>
                <button> Remove</button>
            </div>
        </form>
    )
}

export default AddMessageForm