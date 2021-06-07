
import './App.css';

import NavBar from './componets/Nav/Nav';

import { BrowserRouter, Route } from 'react-router-dom';
import DialogsContainer from './componets/Dialogs/DialogsContainer'
import UsersConatiner from './componets/Users/UsersContainer';
import ContentContainer from './componets/Content/ContentContainer';
import HeaderContainer from './componets/Header/HeaderContainer';
const App = () => {
        return (
           <BrowserRouter >
            <div className = "app-wrapper" >
                <HeaderContainer />
                <NavBar/>
                <div className = 'app-wrapper-content' >
                    <Route path = '/dialogs' render = {() => <DialogsContainer />} />
                    <Route path = '/content/:userId?'render = {() =><ContentContainer />} />      
                    <Route path = '/users'render = {() =><UsersConatiner />} />       
                </div > 
            </div>
        </BrowserRouter >
            );
        }

        export default App;