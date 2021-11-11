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
    addMessage() {
    let newMessage = {
        message: this._state.dialogsPage.newMessageText
    }
    this._state.dialogsPage.messages.push(newMessage)
    this._state.dialogsPage.newMessageText = ''
    this._callsubscribe(this._state)
    },
    updateNewMessages(newText) {
        this._state.dialogsPage.newMessageText = newText
        this._callsubscribe(this._state)
    },
    addPost() {
        debugger
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likeCount: 0,
            dislikeCount: 0
        }
    
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText = ''
        this._callsubscribe(this._state);
    },
    updateNewPostText(newText) {
        debugger
        this._state.profilePage.newPostText = newText
        this._callsubscribe(this._state);
    },
    subscribe(observer) {
        this._callsubscribe = observer
    }
}

export default store
window.store = store;