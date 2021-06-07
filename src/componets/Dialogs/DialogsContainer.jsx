import {sendMessageActionCreateor, udateNewMessageTextActionCreator} from '../../Redux/dialogs-reducer';
import Dialogs from './Dialogs'
import { connect } from "react-redux";
let mapStateToProps=(state)=>{
    return{
        dialogsPage: state.dialogsPage
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
const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs)
export default DialogsContainer;