import React from "react";
import Header from "./Header";
import * as axios from 'axios'
import "./Header.css";
import { connect } from "react-redux";
import { autorization } from "../../Redux/auth-reducer";
import { HeaderAPI } from "../../Api/api";
class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.autorization()
    }
    render() {
        return <Header {...this.props} /> 
    }
}
const mapStateToProps = (state) => (
    {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
)
export default connect(mapStateToProps, {autorization} )(HeaderContainer);