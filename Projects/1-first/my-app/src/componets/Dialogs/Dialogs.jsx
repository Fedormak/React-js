import React from "react"
import { NavLink } from "react-router-dom"
import s from './Dialogs.module.css'

const DialogItem = (props) => {

    let path = "/dialogs/" + props.id

    return(
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
}

const Message = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    );
}

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
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={s.messages}>
                { messageElements }
            </div>
        </div>
    )
}

export default Dialogs