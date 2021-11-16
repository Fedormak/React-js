import React from "react"
import { sendMessageCreate, updateNewMessageBodyCreate, } from './../../redux/dialogs-reducer'
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
    let state = props.store.getState()

    let onSendMessagesClick = () => {
        props.store.dispatch(sendMessageCreate())
    }

    let onNewMessageCheng = (event) => {
        let body = updateNewMessageBodyCreate(event)
        props.store.dispatch(body)
    }

    return (<Dialogs store={props.store}
             onNewMessageCheng={onNewMessageCheng} onSendMessagesClick={onSendMessagesClick}
             messages={state.dialogsPage.messages} dialogs={state.dialogsPage.dialogs}
             newMessageBody={state.dialogsPage.newMessageBody}/>)
    
}

export default DialogsContainer