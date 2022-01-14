const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'

let ininitialState = {
    users: [
        { id: 1, followed: false, fullName: "Dmirty", status: "I'm like snowdording", location: { country: "Belarus", city: "Minsk" } },
        { id: 2, followed: true, fullName: "Daria", status: "I'm listening music now", location: { country: "Moscow", city: "Russia" } },
        { id: 3, followed: false, fullName: "Max", status: "I loved, I love, I will love tea!!", location: { country: "Kiev", city: "Ukraine" } },
        { id: 4, followed: true, fullName: "Yan", status: "I am very happy!!", location: { country: "Netherlands", city: "Amsterdam" } }
    ]
}

const usersReducer = (state = ininitialState, action) => {

    switch (action.type) {
        case FOLLOW:
            let stateCopy = { ...state, users: state.users.map( users => users )}
        case UNFOLLOW:

        default:
            break;
    }
}

export const followAC = (userID) => ({ type: FOLLOW, userID })
export const unfollowAC = (userID) => ({ type: UNFOLLOW, userID })


export default usersReducer