import React, {Component} from "react";
import {connect} from "react-redux";
import {fetchTopRatedMovies,fetchTrendingMovies} from "./../actions/api";
import MovieList from "./../components/MovieList";
import Nav from "./../components/Nav";

class Home extends Component {
    componentDidMount = async() =>  {
        this.props.fetchTopRatedMovies();
        this.props.fetchTrendingMovies();
    }
    render() {
        const {movies} = this.props;
        return (
            <div className="container">
                <Nav />
                <div className="row">
                    <MovieList title="Trending Movies(Top 10)" list={movies.trending.top} linkto={"/trending"}/>
                </div>
                <div className="row">
                    <MovieList title="Top Rated Movies(Top 10)" list={movies.top_rated.top} linkto={"/top_rated"}/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    movies : state.app.movies
});
export default connect(mapStateToProps, {
    fetchTopRatedMovies,
    fetchTrendingMovies,
})(Home);