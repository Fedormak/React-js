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

    let dialogsData = [
        {id: 1, name: 'Sveta'},
        {id: 2, name: 'Dimych'},
        {id: 3, name: 'Andrey'},
        {id: 4, name: 'Roma'},
        {id: 5, name: 'Sasha'},
        {id: 6, name: 'Lisa'},
    ]

    let messageData = [
        {id: 1, message: 'Hello'},
        {id: 2, message: 'yo'},
        {id: 3, message: 'Andrey hey!!'},
        {id: 4, message: 'pin98'},
        {id: 5, message: 'password-ldl'},
        {id: 6, message: 'name-Lisa'},
    ]
  

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name={dialogsData [0].name} id={dialogsData [0].id}/>
                <DialogItem name={dialogsData [1].name} id={dialogsData [1].id}/>
            </div>

            <div className={s.messages}>
                <Message message={messageData [0] .message}/>
                <Message message={messageData [1] .message}/>
            </div>
        </div>
    )
}

export default Dialogs