import React from "react"
import DialogItem from "./DialogItem/DialogsItem";
import stayle from './Dialogs.module.css'
import Message from "./Message/Message";

const Dialogs = (props) => {
    let state = props.dialogsPage

    let dialogsElements = state.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} ava={dialog.ava} />)
    let messageElements = state.messages.map(message => <Message message={message.message} />)

    let newMessageBody = props.newMessageBody

    let onSendMessagesClick = () => {
        props.onSendMessagesClick()
    }

    let onNewMessageCheng = (event) => {
        let body = event.target.value
        props.onNewMessageCheng(body)
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