import React from "react";

const Input = ({value, type, placeholder, onChange, name}) => (<input
    value={value}
    type={type}
    placeholder={placeholder}
    onChange={onChange}
    name={name}
    className="form-input"/>);

export default Input;
