import { rerenderEntireTree } from "../render"

let state = {
    dialogsPage: {
        dialogs: [
            { id: 1, name: 'Dimych' },
            { id: 2, name: 'Andrew' },
            { id: 3, name: 'Sveta' },
            { id: 4, name: 'Sasha' },
            { id: 5, name: 'Viktor' },
            { id: 6, name: 'Valera' }
        ],
        messages: [
            { id: 1, message: 'Hi' },
            { id: 2, message: 'How is your it-kamasutra?' },
            { id: 3, message: 'Yo' },
            { id: 4, message: 'Yo' },
            { id: 5, message: 'Yo' }
        ]
    },
    profilePage: {
        posts: [
            { id: 1, message: 'Hi, how are you?', likeCount: 12, dislikeCount: 4 },
            { id: 2, message: 'I\'s my first post', likeCount: 11, dislikeCount: 1 },
            { id: 3, message: 'Blabla', likeCount: 6, dislikeCount: 3 },
            { id: 4, message: 'Dada', likeCount: 1, dislikeCount: 11 }
        ]
    },
    Navbar: {
        frends: [
            { name: 'Dimych' },
            { name: 'Andrew' },
            { name: 'Sveta' },
            { name: 'Alex' }
        ]
    }
}

export let addPost = (postMassage) => {
    let newPost = {
        id: 5,
        message: postMassage,
        likeCount: 0,
        dislikeCount: 0
    }

    state.profilePage.posts.push(newPost)
    rerenderEntireTree(state);
}

export default state