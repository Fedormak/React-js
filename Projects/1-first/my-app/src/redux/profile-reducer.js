const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        { id: 1, message: 'Hi, how are you?', likeCount: 12, dislikeCount: 4 },
        { id: 2, message: 'I\'s my first post', likeCount: 11, dislikeCount: 1 },
        { id: 3, message: 'Blabla', likeCount: 6, dislikeCount: 3 },
        { id: 4, message: 'Dada', likeCount: 1, dislikeCount: 11 }
    ],
    newPostText: ''
}

const profileReducer = (state = initialState, action) => {

    switch(action.type){
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likeCount: 0,
                dislikeCount: 0
            }
            state.posts.push(newPost)
            state.newPostText = ''
            return state
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText
            return state
        default:
            return state
    }
}


export const addPostActionCreate = () => ({type: ADD_POST})
export const updateNewPostTextActionCreate = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})

export default profileReducer