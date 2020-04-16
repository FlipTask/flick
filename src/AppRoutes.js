import React, { Component } from "react";
import {Switch,Route, BrowserRouter as Router} from "react-router-dom";
import createBrowserHistory from "history/createBrowserHistory";
import AuthorizedRoute from "./containers/AuthorizedRoute";
import Login from "./containers/Login";
import Home from "./containers/Home";
import MovieList from "./containers/MovieList";
import Movie from "./containers/Movie";
import WatchList from "./containers/WatchList";

const history = createBrowserHistory();

class AppRoutes extends Component{
    render(){
        return(
            <Router history={history} basename="/flick">
                <Switch>
                    <Route path="/login" component={Login} exact/>
                    <AuthorizedRoute path="/watchlist" component={WatchList}/>
                    <AuthorizedRoute path="/movie/:movie_id" component={Movie}/>
                    <AuthorizedRoute path="/trending" component={MovieList} listName="trending"/>
                    <AuthorizedRoute path="/top_rated" component={MovieList} listName="top_rated"/>
                    <AuthorizedRoute path="/latest" component={MovieList} listName="latest"/>
                    <AuthorizedRoute path="/" component={Home} extact/>
                </Switch>
            </Router>
        );
    }
}

export default AppRoutes;