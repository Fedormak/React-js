import React from "react"
import DialogItem from "./DialogItem/DialogsItem";
import stayle from './Dialogs.module.css'
import { sendMessageCreate, updateNewMessageBodyCreate, } from './../../redux/dialogs-reducer'
import Message from "./Message/Message";

const Dialogs = (props) => {

    let state = props.store.getState().dialogsPage

    let dialogsElements = state.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} ava={dialog.ava} />)
    let messageElements = state.messages.map(message => <Message message={message.message} />)

    let newMessageBody = state.newMessageBody

    let onSendMessagesClick = () => {
        props.store.dispatch(sendMessageCreate())
    }

    let onNewMessageCheng = (event) => {
        let body = event.target.value
        props.store.dispatch(updateNewMessageBodyCreate(body))
    }
    return (
        <div className={stayle.dialogs}>
            <div className={stayle.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={stayle.messages}>
                <div>{messageElements}</div>
                <div>
                    <div>
                        <textarea value={newMessageBody} placeholder='Enter your message' onChange={onNewMessageCheng}/>
                    </div>
                    <div>
                        <button onClick={onSendMessagesClick}>Send</button>
                        <button >Remove</button>
                    </div>
                </div>
            </div>
        </div>
    )
    
}

export default Dialogs