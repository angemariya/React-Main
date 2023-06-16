import { useState } from "react";
import "./input.css";

export const Input = ({ placeholder, type, validate }) => {
    const [ valid, setValid ] = useState(true);

    return <input
        placeholder={placeholder} 
        type={type} 
        className={valid ? "Input" : "Input Input-error"}
        onChange={(evt) => {
            const isValid = validate(evt.target.value);
            setValid(isValid);
        }}
    />;
}