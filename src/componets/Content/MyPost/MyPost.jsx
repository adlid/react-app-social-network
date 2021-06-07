import c from "./MyPost.module.css";
import Post from "./Post/Post";
import React from "react";

const MyPost = (props)=>{
   
    let state = props.profilePage
    let PostData = (state.posts).map(item=>{
        return (<Post message = {item.message} likesCount = {item.likesCount} />)
    });
  
   
    let onAddPostElem =()=>{
        props.sendPost();
    }
    let onChangePostText = (e) =>{
        let body = e.target.value;                
        props.updateNewPostBody(body);
    }
    return(

        <div className={c.content__posts}>            
                <div className={c.content__posts_mypost}>
                     <p>My Posts</p>
                     <textarea  onChange={onChangePostText} value={props.newPostText}  className={c.content_textarea}   name="" id="" cols="30" rows="10"> </textarea>
                     <button onClick={onAddPostElem}>Add</button>
                </div>
                <div className={c.content__posts_public}>
                    {
                        PostData
                    }
                </div>                
        </div>
    )
   
}
export default MyPost;