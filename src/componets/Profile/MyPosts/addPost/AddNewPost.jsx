import React from 'react';
import { Field } from "redux-form"
import { maxLengthCreator, requiredField } from '../../../../utils/validators/validators';
import { Textarea } from '../../../common/FormsControls/FormsControls';

const maxLength10 = maxLengthCreator(10)

const AddNewPost = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field name={"newPost"} component={Textarea} placeholder={'Enter your message'} validate={[requiredField, maxLength10]} />
      <div>
        <button>Add post</button>
        <button>Remove</button>
      </div>
    </form>
  )
}

export default AddNewPost