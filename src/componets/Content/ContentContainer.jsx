
import React from "react";
import Content from "./Content";
import { connect } from "react-redux";
import {getUserProfile} from '../../Redux/profile-reducer'
import { Redirect, withRouter } from "react-router";
import { withAuthRedirect } from "../hoc/WithAuthRedirectComponent";

class ContentContainer extends React.Component{
    componentDidMount(){
        let userId = this.props.match.params.userId; // match ишинде парамста кандаи путь керек екендиги туралы жазылып турады 
        if(!userId){
            userId = 2;
        }
        this.props.getUserProfile(userId)
      
    }
     render(){  
        
       
        
        return(
               <Content {...this.props} profile={this.props.profile} />     //propsty bolshektep zhiberemin contentke a=(props.a) desem toka 14-si gana keledi 
        )  
    }
};
/*let AuthRedirectComponent = (props) =>{
    if(!this.props.isAuth) return <Redirect to="/login" />
    return <ContentContainer {...props}/>
}*/
let AuthRedirectComponent = withAuthRedirect(ContentContainer) //Hoc дегенди колдандык Хок деген Хайд Ордер Компонент

let mapStateToProps = (state)=>({
    profile:state.profilePage.profile,
    isAuth: state.auth.isAuth
})
 let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent)
export default connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent);