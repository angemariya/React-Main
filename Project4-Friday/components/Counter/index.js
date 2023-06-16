import React from "react";
import { useState } from "react";
import { Button } from "../Button";

export const Counter = function() {
    const [ counter, setCounter ] = useState(0);
    const onClick = () => {
        setCounter(counter + 1);
    }

    return <>
        <div>
            {counter}
        </div>
        <Button 
            onClick={onClick}
        >
            My&nbsp;<b>first</b>&nbsp;button
        </Button>
    </>
}