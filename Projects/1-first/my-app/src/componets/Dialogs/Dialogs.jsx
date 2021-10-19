import React from "react"
import { NavLink } from "react-router-dom"
import s from './Dialogs.module.css'

const DialogItem = () => {

    let path = "/dialogs/" + props.id

    return(
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
}

const Dialogs = () => {
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
                <div className={s.message}>Hello</div>
                <div className={s.message}>How are you?</div>
                <div className={s.message}>Let's go met?</div>
            </div>
        </div>
    )
}

export default Dialogs