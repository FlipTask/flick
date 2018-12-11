import React, {Component} from "react";
import {connect} from "react-redux";
import {fetchMovieById} from "./../actions/api";
import Nav from "./../components/Nav";

class Movie extends Component{
    componentDidMount = () => {
        const {match} = this.props;
        this.props.fetchMovieById(match.params.movie_id);
    }
    render(){
        const {movie} = this.props;
        if(Object.keys(movie.data) == 0 && !movie.error){
            return <div>Loading</div>;
        }
        return (
            <div className="movie-wrapper">
                <Nav />
                <div className="backdrop">
                    <span className="certy">{movie.data.adult ? "A" : "U/A"}</span>
                    <img src={`https://image.tmdb.org/t/p/original/${movie.data.backdrop_path}`} className="mv-img-bg"/>
                </div>
                <div className="info">
                    <span className="info-wrap">
                        <span className="tag success">{movie.data.status}</span> 
                        <span className="date">Release Date : {movie.data.release_date}</span>
                    </span>
                    <span className="info-wrap"><i>★&nbsp;</i>{movie.data.vote_average}/10</span>
                </div>
                <div className="card">
                    <h4>{movie.data.original_title}</h4>
                    <p className="tagline">{movie.data.tagline}</p>
                    <div className="desc">
                        <p>
                            {movie.data.overview}
                        </p>
                        <p>
                            Production Companies : {
                                movie.data.production_companies.map((m) => {
                                    return (<span>{m.name}, </span>) ;
                                })
                            }
                        </p>
                        <p>
                            Production Countries : {
                                movie.data.production_countries.map((m) => {
                                    return (<span>{m.name},</span>) ;
                                })
                            }
                        </p>
                        <p>
                            Generes : {
                                movie.data.genres.map((m) => {
                                    return (<span>{m.name},</span>) ;
                                })
                            }
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => ({
    movie : state.app.movie,
});
export default connect(mapStateToProps,{
    fetchMovieById
})(Movie);