import React from "react"
import DialogItem from "./DialogItem/DialogsItem";
import stayle from './Dialogs.module.css'
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />)
    let messageElements = props.state.messages.map(message => <Message message={message.message} />)

    let newPostElement = React.createRef();
    
    let addPost = () => {
        let text = newPostElement.current.value;
        alert(text)
    }

    return (
        <div className={stayle.dialogs}>
            <div className={stayle.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={stayle.messages}>
                { messageElements }
                
                    <textarea ref={newPostElement}></textarea>
                    <div><button onClick={addPost}>add text</button>
                    <button>Remove</button></div>
                
            </div>
        </div>
    )
}

export default Dialogs