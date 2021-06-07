import { NavLink } from "react-router-dom";
import  "./Header.css";
const Header=(props)=>{
    
    return(
    <header className="header"> 
        <img src="https://cdn.worldvectorlogo.com/logos/swift-logo-with-text.svg" alt=""/>
        <div >
            {props.isAuth ? props.login
            : <NavLink to={'/login'}>Login</NavLink>
            }
        </div>
    </header>
)
}
export default Header;