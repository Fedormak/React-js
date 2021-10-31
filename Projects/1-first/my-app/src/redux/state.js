let state = {
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Dimych'},
            {id: 2, name: 'Andrew'},
            {id: 3, name: 'Sveta'},
            {id: 4, name: 'Sasha'},
            {id: 5, name: 'Viktor'},
            {id: 6, name: 'Valera'}
        ],
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How is your it-kamasutra?'},
            {id: 3, message: 'Yo'},
            {id: 4, message: 'Yo'},
            {id: 5, message: 'Yo'}
        ]
    },
    profilePage: {
        posts: [
            {message: 'Hi, how are you?', likeCount: 12, dislikeCount: 4},
            {message: 'I\'s my first post', likeCount: 11, dislikeCount: 1},
            {message: 'Blabla', likeCount: 6, dislikeCount: 3},
            {message: 'Dada', likeCount: 1, dislikeCount: 11}
        ]
    },
    Navbar: {
        frends: [
            {name: 'Dimych'},
            {name: 'Andrew'},
            {name: 'Sveta'}
        ]
    }
}

export default state