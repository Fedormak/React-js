import React from "react"
import StoreContext from "../../StoreContext";
import { sendMessageCreate, updateNewMessageBodyCreate, } from './../../redux/dialogs-reducer'
import Dialogs from "./Dialogs";

const DialogsContainer = () => {


    return (<StoreContext.Consumer>
        {
        (store) => {
            let state = store.getState().dialogsPage

            let onSendMessagesClick = () => {
                store.dispatch(sendMessageCreate())
            }

            let onNewMessageCheng = (event) => {
                let body = updateNewMessageBodyCreate(event)
                store.dispatch(body)
            }
            return (
                <Dialogs onNewMessageCheng={onNewMessageCheng} onSendMessagesClick={onSendMessagesClick}
                    dialogsPage={state} />)
        }
    }
    </StoreContext.Consumer>
    )

}

export default DialogsContainer