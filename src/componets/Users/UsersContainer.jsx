import { connect } from "react-redux";
import { followAC, setCurrentPageAC, toggleIsFetchingAC, setTotalUsersCountAC, setUserAC, unFollowAC,toggleFollowingProgress, getUsersThuncCreator } from "../../Redux/users-reducer"; 
import React from "react";
import Users from "./Users";
import * as axios from 'axios' 

import Preloader from "../common/preloader/Preloader";
import {  UserAPI } from "../../Api/api";

class UsersAPIContainer extends React.Component {
    componentDidMount() {
        this.props.getUsersThuncCreator(this.props.currentPage,this.props.pageSize);
    }
    onPageChanged =(pageNumber)=>{
        this.props.getUsersThuncCreator(pageNumber,this.props.pageSize);
    }
     render(){
         return <> 
         {  this.props.isFetching ? <Preloader /> : null }
         <Users 
         totalUsersCount = {this.props.totalUsersCount} 
         pageSize={this.props.pageSize} 
         currentPage = {this.props.currentPage} 
         onPageChanged={this.onPageChanged} 
         users={this.props.users}
         follow={this.props.follow}
         unfollow ={this.props.unfollow}
         toggleFollowingProgress ={this.props.toggleFollowingProgress}
         followingInProgress={this.props.followingInProgress }
         /> 
         </>
     }
 }
let mapStateToProps=(state)=>{
    return{
            users: state.usersPage.users,
            pageSize: state.usersPage.pageSize,
            totalUsersCount:state.usersPage.totalUsersCount,
            currentPage:state.usersPage.currentPage,
            isFetching: state.usersPage.isFetching,
            followingInProgress: state.usersPage.followingInProgress
    }
}
let mapDispatchToProps=(dispatch)=>{
    return{
        follow:(userId)=>{
            dispatch(followAC(userId))
        },
        unfollow:(userId)=>{
            dispatch(unFollowAC(userId))
        },
        setUsers:(users)=>{
            dispatch(setUserAC(users))
        },
        setCurrentPage:(pageNumber)=>{
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount:(totalCount)=>{
            dispatch(setTotalUsersCountAC(totalCount))
        },
        toggleIsFetching:(isFetching)=>{
            dispatch(toggleIsFetchingAC(isFetching))
        },
        toggleFollowingProgress:(isFetching)=>{
            dispatch(toggleIsFetchingAC(isFetching))
        }
        
    }
}

const UsersConatiner = connect(mapStateToProps,{
    follow:followAC,
    unfollow:unFollowAC,
    setCurrentPage:setCurrentPageAC,
    toggleFollowingProgress:toggleFollowingProgress,
    getUsersThuncCreator
   
})(UsersAPIContainer)

export default UsersConatiner;