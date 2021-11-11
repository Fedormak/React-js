import React from "react"
import DialogItem from "./DialogItem/DialogsItem";
import stayle from './Dialogs.module.css'
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogsElements = props.dialogsPage.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} ava={dialog.ava} />)
    let messageElements = props.dialogsPage.messages.map(message => <Message message={message.message} />)

    let newMessageElement = React.createRef()

    let addMessege = () => {
        props.addMessage()
    }

    let onMessegeChenge = () => {
        let text = newMessageElement.current.value
        props.updateNewMessages(text)
    }
    return (
        <div className={stayle.dialogs}>
            <div className={stayle.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={stayle.messages}>
                {messageElements}

                <div className={stayle.textarea}>
                    <textarea onChenge={onMessegeChenge} ref={newMessageElement} value={props.dialogsPage.newMessageText}/>
                </div>
                <div>
                    <button onClick={addMessege}>add text</button>
                    <button>Remove</button>
                </div>
            </div>
        </div>
    )
    
}

export default Dialogs