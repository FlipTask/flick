import React, {Component} from "react";
import Carousel, {Dots} from '@brainhubeu/react-carousel';
import Cert from "./../Cert";
import {getYear} from "../../helpers";
import RatingStar from "./../RatingStar";
import "@brainhubeu/react-carousel/lib/style.css";
import {Link} from "react-router-dom";

class LargeCarousel extends Component {
    render() {
        const {list} = this.props;
        return (
            <Carousel
                slidesPerPage={1}
                slidesPerScroll={1}
                arrows={false}
                centered
                infinite
                dots={true}>
                {list.map((mov, i) => {
                    return (
                        <div className="__carousel--banner">
                            <div className="__carousel-banner-movie-info">
                                <Link to={`/movie/${mov.id}`} className="mov-name">{mov.title} </Link>
                                <p className="movie-info-extras">
                                    <span className="r-yr">{getYear(mov.release_date)}</span>
                                    <Cert adult={mov.adult}/>
                                    <RatingStar rating={mov.vote_average}/>
                                </p>
                                <span className="mov-desc">{mov.overview}</span>
                            </div>
                            <div className="__carousel-poster">
                                <img alt={mov.original_title} src={`https://image.tmdb.org/t/p/original${mov.poster_path}`}/>
                            </div>
                            <div className="carousel-image-wrapper">
                            <img
                                key={i}
                                src={`https://image.tmdb.org/t/p/original${mov.backdrop_path}`}
                                alt={mov.original_title}/>
                            </div>

                        </div>
                    )
                })
}
            </Carousel>
        )
    }
}

export default LargeCarousel;