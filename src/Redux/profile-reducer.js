import { UserAPI } from "../Api/api";

const SET_USER_PROFILE = 'SET_USER_PROFILE';
let initialState = {
    posts: [
        { id: 1, message: "Hi, how are you", likesCount: 12 },
        { id: 2, message: "It's My first project", likesCount: 25 }
    ],
    newPostText: "bakdaulet",
    profile: null
}
const profileReduces = (state = initialState, action)=>{
    let copy = JSON.parse(JSON.stringify(state));
    switch(action.type){
        case 'ADD-POST':
            let newPost = {
                id: 3,
                message: state.newPostText,
                likesCount:0 
            };          
            copy.posts.push(newPost);
           // copy.newPostText = '';
            return copy
        case 'UPDATE-NEW-POST-TEXT':         
            copy.newPostText = action.newText;
            return copy;
        case SET_USER_PROFILE:
            return {...state , profile: action.profile}
        default:
            return copy;
    }  
   
}
export const addPostActionCreateor=()=>{
    return{
        type: 'ADD-POST'
    }
}
export const udateNewPostTextActionCreator=(text)=>{
    return{
        type:'UPDATE-NEW-POST-TEXT', newText: text
    }
}
  const setUserProfile=(profile)=>{
    return{
        type:SET_USER_PROFILE, profile
    }
}
export const getUserProfile=(userId)=>(dispatch)=>{
    debugger;//thunk
    UserAPI.getProfile(userId).then(responce => {
        dispatch(setUserProfile(responce.data));  
    }); 
}

export default profileReduces;