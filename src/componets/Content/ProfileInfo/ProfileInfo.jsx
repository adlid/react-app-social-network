import Preloader from "../../common/preloader/Preloader";
import c from "./ProfileInfo.module.css";

const ProfileInfo =(props)=>{
    if(!props.profile){
        return <Preloader />
    }
    return(
        <div>
            
            <div className={c.content__header}>
                <img src="https://freellustrustrations.s3.us-east-2.amazonaws.com/free-images/thumbimg_25361957thumbejpg.jpg" alt=""/>
            </div>
            <div>
                <img src={props.profile.photos.large} alt=""/>
                <div> 
                    <p>status</p>
                    {props.profile.fullName}
                </div>
                ava+descr
            </div>
        </div>
    )
}
export default ProfileInfo;