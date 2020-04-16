import React,{Component} from "react";

const Cert = ({adult=false}) => {
    if(!adult) return "";
    return (
        <span className="cert">18+</span>
    )
}

export default Cert;