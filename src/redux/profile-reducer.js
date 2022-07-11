import {profilePage} from '../api/api'

const ADD_POST = 'ADD-POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';


let initialState = {
    posts: [
        { id: 1, message: 'Hi, how are you?', likeCount: 12, dislikeCount: 4 },
        { id: 2, message: 'I\'s my first post', likeCount: 11, dislikeCount: 1 },
        { id: 3, message: 'Blabla', likeCount: 6, dislikeCount: 3 },
        { id: 4, message: 'Dada', likeCount: 1, dislikeCount: 11 }
    ],
    profile: null,
    status: ""
}

const profileReducer = (state = initialState, action) => {

    switch(action.type){
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: action.newPost,
                likeCount: 0,
                dislikeCount: 0
            }
            let stateCopy = {...state}
            stateCopy.posts = [...state.posts]
            stateCopy.posts.push(newPost)
            stateCopy.newPostText = ''
            return stateCopy
        }
        case SET_STATUS:{
            return {
                ...state,
                status:action.status
            }
        }
        case SET_USER_PROFILE:{
            return {...state, profile: action.profile}
        }
        default:{
            return state
        }
    }
}


export const addPost = (newPost) => ({type: ADD_POST, newPost})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setStatus = (status) => ({type: SET_STATUS, status})

export const UserProfile = (userId) => {
    return (dispatch) => {
        profilePage.getProfileAPI(userId)
            .then(response => {
                dispatch(setUserProfile(response.data))
            })
    }
}
export const getUserStatus = (userId) => (dispatch) => {
        profilePage.getStatusAPI(userId)
            .then(response => {
                dispatch(setStatus(response.data))
            })
}

export const updateUserStatus = (status) => (dispatch) => {
        profilePage.updateStatusAPI(status)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setStatus(status))
            }
            })
}

export default profileReducer