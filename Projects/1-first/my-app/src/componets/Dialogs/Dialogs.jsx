import React from "react"
import { NavLink } from "react-router-dom"
import s from './Dialogs.module.css'

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active}>
                    <NavLink to='/dialogs/Dimych'>Dimych </NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/Sveta'>Sveta </NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/Andrey'>Andrey </NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/Roma'>Roman</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/Sasha'>Sasha</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/Lisa'></NavLink>
                </div>
                


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