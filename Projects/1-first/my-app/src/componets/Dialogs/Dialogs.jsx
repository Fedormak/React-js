import React from "react"
import DialogItem from "./DialogItem/DialogsItem";
import stayle from './Dialogs.module.css'
import { updateNewMessageTextActionCreate, addMessageActionCreate } from './../../redux/state'
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogsElements = props.dialogsPage.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} ava={dialog.ava} />)
    let messageElements = props.dialogsPage.messages.map(message => <Message message={message.message} />)

    let newMessageElement = React.createRef()

    let addMessege = () => {
        // props.addMessege()
        props.dispatch(addMessageActionCreate())
    }

    let onMessegeChenge = () => {
        let text = newMessageElement.current.value;
        // props.appdateNewMessageText()
        debugger
        let action = updateNewMessageTextActionCreate(text);
        props.dispatch(action)
    }
    debugger
    return (
        <div className={stayle.dialogs}>
            <div className={stayle.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={stayle.messages}>
                {messageElements}

                <div className={stayle.textarea}>
                    <textarea onChange={onMessegeChenge} ref={newMessageElement}
                        value={props.dialogsPage.newMessageText}/>
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