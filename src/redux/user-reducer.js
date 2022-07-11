import { findUserPage } from "../api/api";

const FOLLOW = 'FOLLOWED'
const UNFOLLOW = 'UNFOLLOWED'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_FETCHING = 'TOGGLE_IS_FOLLOWING_FETCHING'


let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followInProgress: []
}

const userReducer = (state = initialState, action) => {
    switch(action.type){
        case FOLLOW:
            return {
                ...state, users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed:true}
                    }
                    return u
                })
            }
        case UNFOLLOW: 
            return {
                ...state, users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return { ...u, followed:false}
                    }
                    return u
                })
            }
        case SET_USERS: {
            return {...state, users: action.users}
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        case SET_TOTAL_USERS_COUNT: {
            return {...state, totalUsersCount: action.count}
        }
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        case TOGGLE_IS_FOLLOWING_FETCHING: {
            return {
                ...state,
                 followInProgress: action.isFetching
                ? [...state.followInProgress, action.userId]
                : state.followInProgress.filter(id=>id !== action.userId)
            }
        }
        default:
            return state;
    }
}

export const followSuccess = (userID) => ({type: FOLLOW, userID })
export const unfollowSuccess = (userID) => ({type: UNFOLLOW, userID })
export const setUsers = (users) => ({type: SET_USERS, users})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, count:totalUsersCount})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching })
export const toggleIsFollowingProgress = (isFetching,userId) => ({type: TOGGLE_IS_FOLLOWING_FETCHING, isFetching, userId })

export const getUsers = (currentPage, pageSize) => {
    return (dispatch) => {               
        dispatch(toggleIsFetching(true))
        findUserPage.getUsersAPI(currentPage, pageSize).then(data => {
            dispatch(toggleIsFetching(false))
            dispatch(setUsers(data.items))
            dispatch(setTotalUsersCount(data.totalCount))
        })
    }
}

export const follow = (userId) => {
    return (dispatch) => {
        dispatch(toggleIsFollowingProgress(true, userId))
        findUserPage.followApi(userId).then(response => {
            if  (response.data.resultCode === 0) {
                dispatch(followSuccess(userId)) 
            }
        dispatch(toggleIsFollowingProgress(false, userId))
        })
    }
}

export const unfollow = (userId) => {
    return (dispatch) => {
        dispatch(toggleIsFollowingProgress(true,userId))
        findUserPage.unfollowApi(userId).then(response => {
            if  (response.data.resultCode === 0) {
                dispatch(unfollowSuccess(userId)) 
            }
        dispatch(toggleIsFollowingProgress(false, userId))
        })
    }
}

export default userReducer
