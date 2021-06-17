import React from "react";
import Preloader from "../../common/preloader/Preloader";
import c from "./ProfileInfo.module.css";

class  ProfileStatus extends React.Component{
    state ={
        editMode : false,
        haha: "haha"
    }
    toggleTrue=()=>{
        this.setState(({...state})=>{
            state.editMode = true;
            const newsrr = {...state }
            console.log(newsrr)
            return newsrr
        })
    }
    toggleFalse=()=>{
        this.setState(({...state})=>{
            state.editMode = false;
            const newsrr = {...state }
            console.log(newsrr)
            return newsrr
        })
    }
   
   render(){
    return(
        <div>
            {!this.state.editMode &&
                <div onDoubleClick={this.toggleTrue}>
                    <span>{this.props.status}</span>
                </div>
            }
            {this.state.editMode  &&
                <div autoFocus={true} onBlur={this.toggleFalse}>
                    <input value={this.props.status} />
                </div>
            }
        </div>
    )
   }
}
export default ProfileStatus;