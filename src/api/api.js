import axios from "axios"

const instant = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY":"6f088faa-d343-4635-8a57-c8b8d53e19a8"
    }
})

export const findUserPage = {
    getUsersAPI(currentPage = 1, pageSize = 10) {
        return instant.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => {
            return response.data})
    },
    unfollowApi(id) {
        return instant.delete(`follow/${id}`)
    },
    followApi(id) {
        return instant.post(`follow/${id}`)
    }
}

export const loginPage = {
    getAuthApi(){
        return instant.get(`auth/me`)
    },
    login(email, password, rememberMe = false ){
        return instant.post(`auth/login`, {email, password, rememberMe})
    },
    logout(){
        return instant.delete(`auth/login`)
    }
}

export const profilePage = {
    getProfileAPI(userId){
        return instant.get(`profile/` + userId)
    },
    getStatusAPI(userId){
        return instant.get(`profile/status/` + userId)
    },
    updateStatusAPI(status){
        return instant.put(`profile/status`, {status: status})
    }
}
