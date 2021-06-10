import {sendMessageActionCreateor, udateNewMessageTextActionCreator} from '../../Redux/dialogs-reducer';
import Dialogs from './Dialogs'
import { connect } from "react-redux";
import { Redirect } from 'react-router';
let mapStateToProps=(state)=>{
    return{
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
}
let mapDispatchToProps=(dispatch)=>{
    return{
       sendMessage:()=>{
            dispatch(sendMessageActionCreateor()); 
            },
        updateNewMessageBody:(body)=>{
            dispatch(udateNewMessageTextActionCreator(body));
        }

    }
}
let AuthRedirectComponent = (props) =>{
    if(!this.props.isAuth) return <Redirect to="/login" />
    
    return <Dialogs {...props}/>
}
const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(AuthRedirectComponent )
export default DialogsContainer;