import React from "react";
import "./index.css";

export const Button = (props) => {
    return <button
        className="Button" 
        onClick={props.onClick}
    >
        {props.children || "Click me!"}
    </button>;
} 