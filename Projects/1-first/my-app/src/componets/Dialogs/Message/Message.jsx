import React from "react"
import stayle from './../Dialogs.module.css'

const Message = (props) => {
    return (
        <div className={stayle.message}>{props.message}</div>
    )
}

export default Message