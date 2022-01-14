import { connect } from "react-redux";
import { sendMessageCreate, updateNewMessageBodyCreate, } from './../../redux/dialogs-reducer'
import Dialogs from "./Dialogs";

let mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessageBody: state.dialogsPage.newMessageBody
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        onNewMessageCheng: (event) => {
            let action = updateNewMessageBodyCreate(event)
            dispatch(action)
        },
        onSendMessagesClick: () => {
            dispatch(sendMessageCreate())
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer