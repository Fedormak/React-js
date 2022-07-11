import { connect } from "react-redux";
import { onSendMessagesClick } from './../../redux/dialogs-reducer'
import {withAuthRedirect} from "../../Hoc/withAuthRedirect"
import Dialogs from "./Dialogs";
import { compose } from "redux";

let mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessageBody: state.dialogsPage.newMessageBody,
        isAuth: state.auth.isAuth
    }
}

export default compose (
    connect(mapStateToProps, {onSendMessagesClick}),
    withAuthRedirect
)(Dialogs)
