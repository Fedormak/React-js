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
        {id:1, name: 'Sveta'},
        {id:2, name: 'Dimych'},
        {id:3, name: 'Andrey'},
        {id:4, name: 'Roma'},
        {id:5, name: 'Sasha'},
        {id:6, name: 'Lisa'},
    ]
  

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>

                <DialogItem name="Sveta" id="1"/>
                <DialogItem name="Dimych" id="2"/>
                <DialogItem name="Andrey" id="3"/>
                <DialogItem name="Roma" id="4"/>
                <DialogItem name="Sasha" id="5"/>
                <DialogItem name="Lisa" id="6"/>
            </div>

            <div className={s.messages}>
                <Message message="Hi"/>
                <Message message="How are you?"/>
                <Message message="Let's go met?"/>
            </div>
        </div>
    )
}

export default Dialogs