import React from "react"
import { NavLink } from "react-router-dom";
import stayle from './../Dialogs.module.css'

const DialogItem = (props) => {

    let path = "/dialogs/" + props.id

    return(
        <div>
            <div className={stayle.dialog + ' ' + stayle.active}>
                <img src='https://cs16planet.ru/steam-avatars/images/avatar3219.jpg' alt=''/>
                <NavLink to={path}>{props.name}</NavLink>
            </div>
        </div>
    );
}

export default DialogItem