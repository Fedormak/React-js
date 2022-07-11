import {loginPage} from "../api/api"

const SET_USER_DATA = 'SET_USER_DATA'

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {

    switch(action.type){
        case SET_USER_DATA: {
            return {
            ...state,
            ...action.payload
            }
        }
        default:{
            return state
        }
    }
}


export const setAuthUserData = (email,userId, login, isAuth) => ({type: SET_USER_DATA, payload: {userId, email, login, isAuth}})

export const Auth = () => {
    return (dispatch) => {
        loginPage.getAuthApi()
            .then(response => {
                if (response.data.resultCode === 0 ) {
                    let {id, login, email} = response.data.data
                    dispatch(setAuthUserData(email,id,login, true))
                }
            })
    }
}

export const login = (email, password, rememberMe) => {
    return (dispatch) => {
        loginPage.login(email, password, rememberMe)
            .then(response => {
                if (response.data.resultCode === 0 ) {
                    dispatch(Auth())
                }
            })
    }
}

export const Logout = () => {
    return (dispatch) => {
        loginPage.logout()
            .then(response => {
                if (response.data.resultCode === 0 ) {
                    dispatch(Auth(null, null, null, false))
                }
            })
    }
}

export default authReducer