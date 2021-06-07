import "./Content.css";

import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostContainer from "./MyPost/MyPostContainer"

const Content=(props)=>{
    return(        
        <div >
               <ProfileInfo profile={props.profile} />        
                <MyPostContainer />      
        </div>        
    )
};

export default Content;