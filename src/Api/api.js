import * as axios from 'axios';


const instance = axios.create({
    withCredentials:true,
    baseURL:'https://social-network.samuraijs.com/api/1.0/',
    headers:{
        "API-KEY":"asdsafada212adasd3"
    }
})

export const UserAPI ={
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`,{
            withCredentials:true
        }).then(responce=>{
                return responce.data
        })
    },
    follow(userId){
        return instance.post(`follow/${userId}`)
    },
    unFollow(userId){
        return instance.delete(`follow/${userId}`)
    },
    getProfile(userId){
       return instance.get(`profile/` + userId)
    }
}
export const profileAPI = {
    getProfile(userId){
        return instance.get(`profile/` + userId);
     },
     getStatus(userId){
        return instance.get(`status/` + userId);
     },
     updateStatus(status){
         return instance.put('status', {status: status});
     }
}
export const authAPI ={
me(){

}
}
export const HeaderAPI = {
    getUser(){
        return instance.get(`auth/me`)
    }
}


