import React from "react"
import DialogItem from "./DialogItem/DialogsItem";
import stayle from './Dialogs.module.css'
import AddMessageForm from "./addMessageForm";
import Message from "./Message/Message";
import { reduxForm } from "redux-form";

const Dialogs = (props) => {

    let dialogsElements = props.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} ava={dialog.ava} />)
    let messageElements = props.messages.map(message => <Message message={message.message} />)

    let addNewMessage = (value) => {
        props.onSendMessagesClick(value.newMessageBody)
    } 

    return (
        <div className={stayle.dialogs}>
            <div className={stayle.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={stayle.messages}>
                <div>{messageElements}</div>
                <AddMessageFormRedux onSubmit={addNewMessage} />
            </div>
        </div>
    )
    
}

const AddMessageFormRedux = reduxForm({
    form: "dialogAddMessageForm"
}) (AddMessageForm)


export default Dialogs