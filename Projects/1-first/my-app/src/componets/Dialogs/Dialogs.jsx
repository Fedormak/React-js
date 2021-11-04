import React from "react"
import DialogItem from "./DialogItem/DialogsItem";
import stayle from './Dialogs.module.css'
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} ava={dialog.ava}/>)
    let messageElements = props.state.messages.map(message => <Message message={message.message} />)

    let newMessageElement = React.createRef();

    let addMessage = () => {
        props.addMessage()
    }

    let onMessageChenge = () => {
        let text = newMessageElement.current.value;
        props.updateNewMessagesText (text);
    }

    return (
        <div className={stayle.dialogs}>
            <div className={stayle.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={stayle.messages}>
                {messageElements}

                <div>
                    <textarea onChange={onMessageChenge} ref={newMessageElement} value={props.onMessageChenge} />
                </div>
                <div><button onClick={addMessage}>add text</button>
                    <button>Remove</button></div>

            </div>
        </div>
    )
}

export default Dialogs