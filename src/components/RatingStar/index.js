import React,{Component} from "react";

const RatingStar = ({rating}) => {
    return (
        <div className="__rating--star">
            <i className="fa fa-star" aria-hidden="true"></i>
            <span>{rating}</span>
        </div>
    )
}
export default RatingStar;