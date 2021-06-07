import { HeaderAPI } from "../Api/api";

const SET_USER_DATA = 'SET_USER_DATA'
let initalState ={
    userId:null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state = initalState, action)=>{
    switch (action.type) {
        case SET_USER_DATA:
            return{
                ...state,
                ...action.data,
                isAuth: true
            }
        default:
            return state;
    }
}

export const setAuthUserData = (userId, email, login)=>({type:SET_USER_DATA, data:{userId,email,login}})

export const autorization=()=>{
    return (dispatch)=>{
        HeaderAPI.getUser().then(responce => {
                if (responce.data.resultCode === 0) {
                    let { id, login, email } = responce.data.data; //destructorizacia 
                    dispatch(setAuthUserData(id, email, login))
                }
            });
    }
}

export default authReducer;