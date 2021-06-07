import c from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";
import {sendMessageActionCreateor, udateNewMessageTextActionCreator} from '../../Redux/dialogs-reducer';
import React from "react";
import DialogsContainer from './DialogsContainer'
const DialogItem =(props)=>{
    return(
        <div>
        <div className={`${c.item} ${c.active_item}`}> 
            <NavLink to={ "/dialogs/" + props.page }> {props.name}
            </NavLink> 
        </div>
      </div>
    )
}
const Message=(props)=>{
    return(
        <div >
            <div className={c.message}>{props.message}</div>          
        </div>
    )
}

const Dialogs = (props) =>{
    let state = props.dialogsPage

    let DialogsElement =  (state.dialogsData).map(item=>{  
       return (<DialogItem page={item.id} name={item.name}  />)
    })
    let messageElement = (state.messagesData).map(item=>{
        return (<Message id={item.id} message={item.message} />)
    })
  //  let newMessageElement = React.createRef();
    
let onSendMessageClick=()=>{
    props.sendMessage()    
}

let onNewMessageChange =(e)=>{
     let body =  e.target.value;

    //let text = newMessageElement.current.value;
    
    props.updateNewMessageBody(body);
}   

    return(
        <div className={c.dialogs}>
             <div className={c.dialogs_items}>
                {
                    DialogsElement
                }      
             </div>
                <div className={c.message_items}>
                {
                messageElement
                }  
                <div className={c.message__send}>
                  
                    <textarea onChange={onNewMessageChange}  name="" id="" cols="30" rows="10"></textarea>
                    
                    <button onClick={onSendMessageClick} > SEND </button>
               
            </div>
            </div>         
        </div>
    );
};
export default Dialogs;