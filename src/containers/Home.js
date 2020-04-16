import React, {Component} from "react";
import {connect} from "react-redux";
import {fetchTopRatedMovies, fetchTrendingMovies,getLatestMovies} from "./../actions/api";
import MovieList from "./../components/MovieList";
import Carousel from "./../components/Carousel";

class Home extends Component {
    componentDidMount = async() => {
        this
            .props
            .fetchTopRatedMovies();
        this
            .props
            .fetchTrendingMovies();
        this.props.getLatestMovies();
    }
    render() {
        const {movies} = this.props;
        return (
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <Carousel
                            title="Latest Movies(Top 10)"
                            list={movies.latest.top}/>
                    </div>
                    <div className="row">
                        <MovieList
                            title="Trending Movies(Top 10)"
                            list={movies.trending.top}
                            linkto={"/trending"}/>
                    </div>
                    <div className="row">
                        <MovieList
                            title="Top Rated Movies(Top 10)"
                            list={movies.top_rated.top}
                            linkto={"/top_rated"}/>
                    </div>
                </div>
            </React.Fragment>

        );
    }
}

const mapStateToProps = (state) => ({movies: state.app.movies});
export default connect(mapStateToProps, {fetchTopRatedMovies, fetchTrendingMovies,getLatestMovies})(Home);