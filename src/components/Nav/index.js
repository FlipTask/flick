import React, {Component} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {withRouter} from "react-router-dom";
import {searchMovieByName,logoutUser} from "./../../actions/api";
class Nav extends Component {
    state = {
        keyword: "",
        searchlist: []
    }
    handleSearch = (e) => {
        this.setState({
            keyword: e.target.value
        }, async() => {
            if (this.state.keyword.length > 4) {
                const res = await this.props.searchMovieByName(this.state.keyword);
                this.setState({searchlist: res.results});
            }
        });
    }
    render() {
        return (
            <div className="nav">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/trending">Trending</Link>
                    </li>
                    <li>
                        <Link to="/top_rated">Top Rated</Link>
                    </li>
                    <li>
                        <Link to="/watchlist">My watch list</Link>
                    </li>
                </ul>
                <div className="searchbox">
                    <input
                        placeholder="Search Movie"
                        type="text"
                        className="innov--input"
                        value={this.state.keyword}
                        onChange={this.handleSearch}/>
                    <div className="search-list">
                        {
                            this.state.searchlist.map((movie, i) => {
                                return (
                                    <div className="search-item" key={i}>
                                        <a href={`/movie/${movie.id}`}>{movie.title}</a>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <button type="button" className="logout-btn" onClick={() => this.props.logoutUser()}>Logout</button>
                </div>
            </div>
        );
    }
}

export default withRouter(connect(null, {searchMovieByName,logoutUser})(Nav));