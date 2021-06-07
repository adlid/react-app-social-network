import { act } from "react-dom/test-utils";
import profileReduces from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
posts = [
    { id: 1, message: "Hi,", likesCount: 120 },
    { id: 2, message: "hello", likesCount: 130 }
]
let store={
    _state:{
        profilePage: {
            posts: [
                { id: 1, message: "Hi,", likesCount: 120 },
                { id: 2, message: "hello", likesCount: 130 }
            ],
            newPostText: "bakdaulet"
    
        },
        sidebar: {
            friends: [
                { friendsImg: "https://cdn1.iconfinder.com/data/icons/avatars-55/100/avatar_profile_user_music_headphones_shirt_cool-512.png", friendsName: 'Bob' },
                { friendsImg: "https://cdn1.iconfinder.com/data/icons/avatars-55/100/avatar_profile_user_music_headphones_shirt_cool-512.png", friendsName: 'Mike' },
                { friendsImg: "https://cdn1.iconfinder.com/data/icons/avatars-55/100/avatar_profile_user_music_headphones_shirt_cool-512.png", friendsName: 'Alice' }
            ]
    
    
        },
        dialogsPage: {
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
        },
    },
    getState(){
        return this._state
    },
    _rerenderEntireTree(){
    console.log('State was changed')
    },  
   
    subscribe(observer){
    this._rerenderEntireTree= observer;
    },
    
    dispatch(action){
        //тен деп кою себеби ререндрит ету ушин ягни новый значениени сактау ушин
        this._state.profilePage = profileReduces(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        //this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._rerenderEntireTree(this._state);
    }
}


/*
let rerenderEntireTree=()=>{
    console.log('State was changed')
}

let state = {
    profilePage: {
        posts: [
            { id: 1, message: "Hi, how are you", likesCount: 12 },
            { id: 2, message: "It's My first project", likesCount: 25 }
        ],
        newPostText: "bakdaulet"

    },
    sidebar: {
        friends: [
            { friendsImg: "https://cdn1.iconfinder.com/data/icons/avatars-55/100/avatar_profile_user_music_headphones_shirt_cool-512.png", friendsName: 'Bob' },
            { friendsImg: "https://cdn1.iconfinder.com/data/icons/avatars-55/100/avatar_profile_user_music_headphones_shirt_cool-512.png", friendsName: 'Mike' },
            { friendsImg: "https://cdn1.iconfinder.com/data/icons/avatars-55/100/avatar_profile_user_music_headphones_shirt_cool-512.png", friendsName: 'Alice' }
        ]


    },
    dialogsPage: {
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
        newMessageText:"send message"
    },

};
export let addMessage=()=>{
    let newMessage = {
        id:9,
        message: state.dialogsPage.newMessageText
    }
    state.dialogsPage.messagesData.push(newMessage);
    rerenderEntireTree(state)
}
export const updateNewPostMessage = (newText) =>{
    state.dialogsPage.newMessageText = newText;
    rerenderEntireTree(state);
}
export const subscribe=(observer)=>{
    rerenderEntireTree= observer;
}
export let addPost = () => {
    let newPost = {
        id: 3,
        message: state.profilePage.newPostText,
        likesCount: 17
    };
    state.profilePage.posts.push(newPost);
    rerenderEntireTree(state)
}

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state)
}*/
export default store;