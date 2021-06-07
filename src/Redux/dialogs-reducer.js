const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';
let ininitalState = {
    dialogsData: [
        { id: 1, name: 'Kuttykadam' },
        { id: 2, name: 'Abylai' },
        { id: 3, name: 'Meru' },
        { id: 4, name: 'Ais' },
        { id: 5, name: 'Gulia' },
        { id: 6, name: 'Sanshs' },
        { id: 7, name: 'Bakha' },
        { id: 8, name: 'Bakdaulet' }
    ],
    messagesData: [
        { id: 1, message: "Hi " },
        { id: 2, message: "How are you " },
        { id: 3, message: "I'm Ok" },
        { id: 4, message: 'Ais' },
        { id: 5, message: 'Gulia' },
        { id: 6, message: 'Sanshs' },
        { id: 7, message: 'Bakha' },
        { id: 8, message: 'Bakdaulet' }
    ],
    newMessageText:""
}
const dialogsReducer=(state=ininitalState,action)=>{
    let copy = JSON.parse(JSON.stringify(state))
    if(action.type === UPDATE_NEW_MESSAGE_BODY){
        copy.newMessageText = action.body;
    }
    else if(action.type === SEND_MESSAGE){
        let body = state.newMessageText;
        let newMessage={
            id:9, message: body
        }     
        copy.messagesData.push(newMessage);
        copy.newMessageText='';
    }

    return copy;
}
export const  sendMessageActionCreateor=()=>{
    return{
        type:'SEND_MESSAGE'
    }
}
export const udateNewMessageTextActionCreator=(text)=>{
    return{
        type:'UPDATE-NEW-MESSAGE-BODY', body: text
    }
}
export default dialogsReducer;