import React, {Component} from "react";
import {connect} from "react-redux";
import MovieCard from "./../components/MovieList/Card";
import {Link} from "react-router-dom";
import Nav from "./../components/Nav";

class WatchList extends Component {
    render() {
        const {list} = this.props;
        return (
            <div className="container">
                <p>Your watch list</p>
                {
                    list.length > 0 
                    ?
                    <div>
                        {list.map((movie, i) => {
                            return (<MovieCard
                                movie={movie}
                                id={movie.id}
                                src={movie.backdrop_path}
                                title={movie.original_title}
                                rating={movie.vote_average}
                                date={movie.release_date}
                                key={i}/>)
                        })
    }
                    </div>
                    :
                    <h4>Nothing to show here ! :( <Link to="/">Go To Home</Link></h4>
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    list : state.app.watchlist_movies
});
export default connect(mapStateToProps,{})(WatchList);