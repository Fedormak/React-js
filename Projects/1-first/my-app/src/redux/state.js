const Add_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let store = {
    _state: {
    dialogsPage: {
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
        newMessageText: 'WriteText'

    },
    profilePage: {
        posts: [
            { id: 1, message: 'Hi, how are you?', likeCount: 12, dislikeCount: 4 },
            { id: 2, message: 'I\'s my first post', likeCount: 11, dislikeCount: 1 },
            { id: 3, message: 'Blabla', likeCount: 6, dislikeCount: 3 },
            { id: 4, message: 'Dada', likeCount: 1, dislikeCount: 11 }
        ],
        newPostText: 'WriteText'
    },
    Navbar: {
        frends: [
            { name: 'Dimych', ava: 'https://cs16planet.ru/steam-avatars/images/avatar3219.jpg' },
            { name: 'Andrew', ava: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnSi-Gltn2w68Fn37i4rPk5IAW5xv9Xehwww&usqp=CAU' },
            { name: 'Sveta', ava: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnSi-Gltn2w68Fn37i4rPk5IAW5xv9Xehwww&usqp=CAU' },
            { name: 'Alex', ava: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnSi-Gltn2w68Fn37i4rPk5IAW5xv9Xehwww&usqp=CAU' }
        ]
    }
    },
    _callsubscribe() {
        console.log('state change')
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callsubscribe = observer
    },

    dispatch(action) {
        if (action.type === 'ADD-POST'){
            let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likeCount: 0,
            dislikeCount: 0
        }
    
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText = ''
        this._callsubscribe(this._state);
        }
        else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText
            this._callsubscribe(this._state)
        }
        else if (action.type === 'ADD-MESSAGE') {
            let newMessage = {
                message: this._state.dialogsPage.newMessageText
        }

        this._state.dialogsPage.messages.push(newMessage)
        this._state.dialogsPage.newMessageText = ''
        this._callsubscribe(this._state)
        }
        else if (action.type === 'UPDATE-NEW-MESSAGE-TEXT'){
            this._state.dialogsPage.newMessageText = action.newMessage
            this._callsubscribe(this._state)
        }
    }
}


export const addPostActionCreate = () => ({type: Add_POST})

export const updateNewPostTextActionCreate = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})

export const updateNewMessageTextActionCreate= (text) => ({type: 'APPDATE-NEW-MESSAGE-TEXT', newMessage: text})

export const addMessageActionCreate = () => ({ type: 'ADD-MESSAGE' })

export default store
window.store = store;