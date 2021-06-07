 import { NavLink } from "react-router-dom";
import classes from "./Nav.module.css";
 const NavBar=(props)=>{
   /*let friends = (props.appState.friends).map(item=>{

       return (
          
        <div className={classes.menu__list_friend}> 
            <img src={`${item.friendsImg}`} alt=""/>
             <p>{item.friendsName}</p>
       </div>
       )
   })*/
     return(
         
        <nav className={classes.nav}>
            
            <div className={classes.menu__list}>
                <NavLink  activeClassName={classes.activelink} to="/content"> Profile </NavLink>  
            </div>
            <div className={classes.menu__list}>
                <NavLink activeClassName={classes.activelink} to="/music"> Music    </NavLink> 
            </div>
            <div className={classes.menu__list}>
                <NavLink  activeClassName={classes.activelink} to="/dialogs">Message   </NavLink>
            </div>
            <div className={classes.menu__list}>
                <NavLink  activeClassName={classes.activelink} to="/news">News  </NavLink>
            </div>
            <div className={classes.menu__list}>
                <NavLink  activeClassName={classes.activelink} to="/users">Users  </NavLink>
            </div>
            <div className={classes.menu__list} >
                <NavLink  activeClassName={classes.activelink} to="/settings">Settings   </NavLink>
            </div>
            <div className={classes.menu__list}>
                <NavLink activeClassName={classes.activelink} to="/friends"> Friends </NavLink>
               {/*  <div className={classes.menu__list_friends}>
                  {
                      friends
                  }
                </div>*/}
            </div>
        
         </nav>
     )
 };
 export default NavBar;