import React, {Component} from "react";
import {Route, Redirect} from "react-router-dom";
import {connect} from "react-redux";
import Nav from "./../components/Nav";
class AuthorizedRoute extends Component {

    render() {
        const {
            component: Component,
            isAuthenticated,
            user,
            ...rest
        } = this.props;
        return (
            <Route
                {...rest}
                render={props => {
                    return isAuthenticated ? 
                    <React.Fragment>
                        <Nav/>
                        <Component {...props}/> 
                    </React.Fragment>
                    : <Redirect to="/login"/>
                }
            }/>
        );
    }
}

const stateToProps = ({app}) => ({
    isAuthenticated: app.isAuthorised,
});

export default connect(stateToProps,{})(AuthorizedRoute);
