import React, {Component} from "react";
import {connect} from "react-redux";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import Card from "./Card";

class MovieList extends Component {
    render() {
        const {title, list,linkto} = this.props;
        return (
            <div className="movie-list-row">
                <p>{title}</p>
                <div className="movie-list">
                    {
                        list.map((movie, i) => {
                            return (<Card
                                movie={movie}
                                id={movie.id}
                                src={movie.poster_path}
                                title={movie.original_title}
                                rating={movie.vote_average}
                                date={movie.release_date}
                                key={i}/>)
                        })
                    }
                </div>
                <div className="view-more-row">
                    <Link to={linkto}>View More</Link>
                </div>
            </div>
        );
    }
}
export default withRouter(MovieList);