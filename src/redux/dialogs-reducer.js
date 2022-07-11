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
    ]
}

const dialogsReducer = (state = initialState, action) => {
    switch(action.type) {
        case SEND_MESSAGES :{
            let body = action.newMessageBody   
            return {
                ...state,
                messages:[...state.messages, {id:5, message:body}]
            }
        }
        default:{ 
            return state
        }
    }
}


export const onSendMessagesClick = (newMessageBody) => ({type: SEND_MESSAGES, newMessageBody})

export default dialogsReducer