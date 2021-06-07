import { UserAPI } from "../Api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';
let initalState = { 
    users:[],
    pageSize:5,
    totalUsersCount:0,
    currentPage: 1,
    isFetching: false,
    followingInProgress : []
}

const usersReducer=(state = initalState, action)=>{
    
    switch(action.type){
        case FOLLOW:{
            return{
                ...state,
                users: state.users.map(u=>{
                    if(u.id === action.userId){
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        }
        case UNFOLLOW:{
            return{
                ...state,
                users: state.users.map(u=>{
                    if(u.id === action.userId){
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        }
        case SET_USERS:{
            return{
                ...state, 
                users:action.users

            }
        }
        case SET_CURRENT_PAGE:{
            return{
                ...state,
                currentPage: action.currentPage 
                }
        }
        case SET_TOTAL_USERS_COUNT:{
            return{
                ...state,
                totalUsersCount: action.count
                }
        }
        case TOGGLE_IS_FETCHING:{
            return{
                ...state,
                isFetching: action.isFetching
                }
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS:{
            return{
                ...state,
                followingInProgress: action.isFetching
                ? [...state.followingInProgress, action.userId]
                : state.followingInProgress.filter(id=>id !=action.userId)
                }
        }
        default:
            return state
    }
}
export const followAC = (userId)=>{
    return{type:FOLLOW,
            userId
    }
}
export const unFollowAC = (userId)=>{
    return{type:UNFOLLOW,
        userId
    }
}
export const setUserAC =(users)=>{
    return{
        type:SET_USERS, 
        users
    }
}
export const setCurrentPageAC =(currentPage)=>{
    return{
        type:SET_CURRENT_PAGE, 
        currentPage:currentPage
    }
}
export const setTotalUsersCountAC=(totalUsersCount)=>{
    return{
        type:SET_TOTAL_USERS_COUNT, 
       count:totalUsersCount
    }
}
export const toggleIsFetchingAC =(isFetching)=>{
    return {type: TOGGLE_IS_FETCHING,
    isFetching}
}
export const toggleFollowingProgress =(isFetching,userId)=>{
    return {
        type: TOGGLE_IS_FOLLOWING_PROGRESS,
        isFetching,
        userId}
}
export const getUsersThuncCreator =(currentPage,pageSize)=>{
    return (dispatch)=>{      //thunk это функция которые диспачит обычных экшенов
        dispatch(toggleIsFetchingAC(true));
            UserAPI.getUsers(currentPage, pageSize).then(data => {
                dispatch(toggleIsFetchingAC(false));
                dispatch(setUserAC(data.items));
                dispatch(setTotalUsersCountAC(data.totalCount));
             }); 
    }
} 
export const follow = (userId) => {
    return (dispatch) => {      //thunk это функция которые диспачит обычных экшенов
        dispatch(toggleIsFetchingAC(true));
        toggleFollowingProgress(true, userId)
        UserAPI.follow(userId)
        .then(responce => {
            if(responce.data.resultCode == 0){
                dispatch(follow(userId))
            }
           dispatch(toggleFollowingProgress(false, userId))
            }); 
    }
} 
export const unfollow = (userId) => {
    return (dispatch) => {      //thunk это функция которые диспачит обычных экшенов
        dispatch(toggleIsFetchingAC(true));
        toggleFollowingProgress(true, userId)
        UserAPI.unFollow(userId)
        .then(responce => {
            if(responce.data.resultCode == 0){
                dispatch(unfollow(userId))
            }
           dispatch(toggleFollowingProgress(false, userId))
            }); 
    }
} 
export default usersReducer;