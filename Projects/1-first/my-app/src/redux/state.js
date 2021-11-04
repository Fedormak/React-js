import { rerenderEntireTree } from "../render"

let state = {
    dialogsPage: {
        dialogs: [
            { id: 1, name: 'Dimych', ava: 'https://cs16planet.ru/steam-avatars/images/avatar3219.jpg'},
            { id: 2, name: 'Andrew', ava: 'https://cs16planet.ru/steam-avatars/images/avatar3219.jpg'},
            { id: 3, name: 'Sveta', ava: 'https://cs16planet.ru/steam-avatars/images/avatar3219.jpg'},
            { id: 4, name: 'Sasha', ava: 'https://cs16planet.ru/steam-avatars/images/avatar3219.jpg'},
            { id: 5, name: 'Viktor', ava: 'https://cs16planet.ru/steam-avatars/images/avatar3219.jpg'},
            { id: 6, name: 'Valera', ava: 'https://cs16planet.ru/steam-avatars/images/avatar3219.jpg'}
        ],
        messages: [
            { id: 1, message: 'Hi' },
            { id: 2, message: 'How is your it-kamasutra?' },
            { id: 3, message: 'Yo' },
            { id: 4, message: 'Yo' },
            { id: 5, message: 'Yo' }
        ],
        newMessageText: ''
    },
    profilePage: {
        posts: [
            { id: 1, message: 'Hi, how are you?', likeCount: 12, dislikeCount: 4 },
            { id: 2, message: 'I\'s my first post', likeCount: 11, dislikeCount: 1 },
            { id: 3, message: 'Blabla', likeCount: 6, dislikeCount: 3 },
            { id: 4, message: 'Dada', likeCount: 1, dislikeCount: 11 }
        ],
        newPostText: ''
    },
    Navbar: {
        frends: [
            { name: 'Dimych', ava: 'https://cs16planet.ru/steam-avatars/images/avatar3219.jpg' },
            { name: 'Andrew', ava: 'https://cs16planet.ru/steam-avatars/images/avatar3219.jpg' },
            { name: 'Sveta', ava: 'https://cs16planet.ru/steam-avatars/images/avatar3219.jpg' },
            { name: 'Alex', ava: 'https://cs16planet.ru/steam-avatars/images/avatar3219.jpg'}
        ]
    }
}

export let addMessage = () => {
    let newMessage = {
        message: state.dialogsPage.newMessageText,
    }

    state.dialogsPage.messages.push(newMessage)
    state.dialogsPage.newMessageText = ''
    rerenderEntireTree(state);
}

export let updateNewMessagesText = (newText) => {
    state.dialogsPage.newMessageText = newText
    rerenderEntireTree(state);
}

export let addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likeCount: 0,
        dislikeCount: 0
    }

    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText = ''
    rerenderEntireTree(state);
}

export let updateNewpostText = (newText) => {
    state.profilePage.newPostText = newText
    rerenderEntireTree(state);
}

export default state