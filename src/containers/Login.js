import React, {Component} from "react";
import {connect} from "react-redux";
import Input from "../components/Input";
import {submitLogin} from "./../actions/api";
import { Redirect } from "react-router-dom";

class Login extends Component {
    state = {
        username: "",
        password: ""
    };

    handleOnChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        const obj = {};
        obj[name] = value;
        this.setState(obj);
    };
    submitLogin = async() => {
        const {login} = this.props;
        const {username, password} = this.state;
        const res = await login(
            username,
            password,
        );
    };

    render() {
        const {username, password} = this.state;
        const {
            isAuthorised
        } = this.props;
        if(isAuthorised){
            return <Redirect to="/" />
        }else{
            return (
                <div className="login">
                    <div className="login-form-wrapper">
                        <form className="login-form">
                            <Input
                                type="text"
                                placeholder="Enter username"
                                value={username}
                                onChange={this.handleOnChange}
                                name="username"/>
                            <Input
                                type="password"
                                placeholder="Enter password"
                                value={password}
                                onChange={this.handleOnChange}
                                name="password"/>
                            <button className="login-btn" onClick={this.submitLogin} type="button">
                                Login
                            </button>
                        </form>
                    </div>
                </div>
            );
        }
    }
}
const mapStateToProps = (store) => ({
    isAuthorised : store.app.isAuthorised,
});
export default connect(mapStateToProps,{
    login : submitLogin
})(Login);
