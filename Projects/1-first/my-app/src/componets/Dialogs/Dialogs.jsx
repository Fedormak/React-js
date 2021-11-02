import React from "react"
import DialogItem from "./DialogItem/DialogsItem";
import stayle from './Dialogs.module.css'
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogs = [
        {id: 1, name: 'Sveta'},
        {id: 2, name: 'Dimych'},
        {id: 3, name: 'Andrey'},
        {id: 4, name: 'Roma'},
        {id: 5, name: 'Sasha'},
        {id: 6, name: 'Lisa'},
    ]

    let messages = [
        {id: 1, message: 'Hello'},
        {id: 2, message: 'yo'},
        {id: 3, message: 'Andrey hey!!'},
        {id: 4, message: 'pin98'},
        {id: 5, message: 'password-ldl'},
        {id: 6, message: 'name-Lisa'},
    ]
  
    let dialogsElements = dialogs.map( dialog => <DialogItem name={dialog.name} id={dialog.id}/> )
    let messageElements = messages.map( message => <Message message={message.message} />)

    return (
        <div className={stayle.dialogs}>
            <div className={stayle.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={stayle.messages}>
                { messageElements }
            </div>
        </div>
    )
}

export default Dialogs