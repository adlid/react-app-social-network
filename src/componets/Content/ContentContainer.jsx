
import React from "react";
import Content from "./Content";
import { connect } from "react-redux";
import {getUserProfile} from '../../Redux/profile-reducer'
import { withRouter } from "react-router";

class ContentContainer extends React.Component{
    componentDidMount(){
        let userId = this.props.match.params.userId; // match ишинде парамста кандаи путь керек екендиги туралы жазылып турады 
        if(!userId){
            userId = 2;
        }
        this.props.getUserProfile(userId)
        debugger;
    }
     render(){     
        return(
               <Content {...this.props} profile={this.props.profile} />     //propsty bolshektep zhiberemin contentke a=(props.a) desem toka 14-si gana keledi 
        )  
    }
};
let mapStateToProps = (state)=>({
    profile:state.profilePage.profile
})
 let WithUrlDataContainerComponent = withRouter(ContentContainer)
export default connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent);