const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGES = 'SEND-MESSAGES';

let initialState ={
    dialogs: [
        { id: 1, name: 'Dimych', ava: 'https://cs16planet.ru/steam-avatars/images/avatar3219.jpg' },
        { id: 2, name: 'Andrew', ava: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnSi-Gltn2w68Fn37i4rPk5IAW5xv9Xehwww&usqp=CAU' },
        { id: 3, name: 'Sveta', ava: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnSi-Gltn2w68Fn37i4rPk5IAW5xv9Xehwww&usqp=CAU' },
        { id: 4, name: 'Alex', ava: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnSi-Gltn2w68Fn37i4rPk5IAW5xv9Xehwww&usqp=CAU' },
        { id: 5, name: 'Viktor', ava: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnSi-Gltn2w68Fn37i4rPk5IAW5xv9Xehwww&usqp=CAU' },
        { id: 6, name: 'Valera', ava: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnSi-Gltn2w68Fn37i4rPk5IAW5xv9Xehwww&usqp=CAU' }
    ],
    messages: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'How is your it-kamasutra?' },
        { id: 3, message: 'Yo' },
        { id: 4, message: 'Yo' },
        { id: 5, message: 'Yo' }
    ],
    newMessageBody: ''
}

const dialogsReducer = (state = initialState, action) => {
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