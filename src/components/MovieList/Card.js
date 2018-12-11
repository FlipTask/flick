import React, {Component} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {toggleWatchList} from "./../../actions/movieActions";

class Card extends Component {
    checkIfInWatchLIst = (movie) => {
        const watchlist = this.props.watchlist;
        if(watchlist.indexOf(movie.id) > -1){
            return (
                <button className="success" type="submit" onClick={() => this.props.toggleWatchList(movie)}>Remove From watch list</button>
            )
        }else{
            return (
                <button type="submit" onClick={() => this.props.toggleWatchList(movie)}>Add to watch list</button>
            ); 
        }
    }
    render() {
        const {src, title, rating, date, id,movie} = this.props;
        return (
            <div className="movie-card">
                <Link to={`/movie/${id}`} className="card-top">
                    <img
                        src={`https://image.tmdb.org/t/p/original${src}`}
                        className="movie-backdrop"/>
                    <span className="mv-name">{title}</span>
                    <span className="rating">
                        <i>★&nbsp;</i>{rating}/10</span>
                    <span className="release_date">Released Date: {date}</span>
                </Link>
                <div className="card-btm">
                    {this.checkIfInWatchLIst(movie)}
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => ({
    app : state.app,
    watchlist : state.app.watchlist
});

export default connect(mapStateToProps,{
    toggleWatchList
})(Card);