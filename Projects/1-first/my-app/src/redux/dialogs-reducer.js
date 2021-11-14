const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGES = 'SEND-MESSAGES';

const dialogsReducer = (state, action) => {
    switch(action.type) {
        case SEND_MESSAGES :
            let body = state.newMessageBody
            state.newMessageBody = ''
            state.messages.push({            
                id: 5,
                message: body})
            return state
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body    
            return state
        default: 
            return state
    }
}


export const sendMessageCreate = () => ({type: SEND_MESSAGES})
export const updateNewMessageBodyCreate = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body})

export default dialogsReducer