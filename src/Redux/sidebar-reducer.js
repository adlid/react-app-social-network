let initalState ={
    friends: [
        { friendsImg: "https://cdn1.iconfinder.com/data/icons/avatars-55/100/avatar_profile_user_music_headphones_shirt_cool-512.png", friendsName: 'Bob' },
        { friendsImg: "https://cdn1.iconfinder.com/data/icons/avatars-55/100/avatar_profile_user_music_headphones_shirt_cool-512.png", friendsName: 'Mike' },
        { friendsImg: "https://cdn1.iconfinder.com/data/icons/avatars-55/100/avatar_profile_user_music_headphones_shirt_cool-512.png", friendsName: 'Alice' }
    ]
}
const sidebarReducer =(state=initalState,action)=>{
    if(action.type == 'ADD-ELEMENT'){
        
    }
}
export default sidebarReducer;