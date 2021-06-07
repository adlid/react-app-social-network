
import React from "react";
import { connect } from "react-redux";
import {addPostActionCreateor, udateNewPostTextActionCreator} from 
"../../../Redux/profile-reducer";

import MyPost from './MyPost'

let mapStateToProps =(state)=>{
    return{
        profilePage: state.profilePage
    }
}
let mapDispatchToProps =(dispatch)=>{
    return{
        sendPost:()=>{
           dispatch(addPostActionCreateor());
        },
        updateNewPostBody:(body)=>{
            dispatch(udateNewPostTextActionCreator(body));
        }
    }
}
const  MyPostContainer = connect(mapStateToProps,mapDispatchToProps)(MyPost);
export default MyPostContainer;