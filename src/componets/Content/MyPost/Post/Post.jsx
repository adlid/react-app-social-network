import c from "./Post.module.css"

const Post = (props)=>{

    return(

        <div className={c.content__post}>
            <img src="https://cdn1.iconfinder.com/data/icons/avatars-55/100/avatar_profile_user_music_headphones_shirt_cool-512.png" alt=""/>
            <p> {props.message }</p>
            <span> Likes {props.likesCount}</span>
        </div>

    );


};
export default Post;