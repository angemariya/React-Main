import { Button } from "../Button"
import { ControlledInput } from "../ControlledInput"
import { useState } from "react";

export const Form = () => {
    const [ name, setName ] = useState("");
    const onNameChange = (evt) => {
        setName(evt.target.value);
    }

    const submit = () => {
        console.log({
            name: name,
        });
    }

    const reset = () => {
        setName("");
    }

    return <div>
        <ControlledInput 
            value={name}
            onChange={onNameChange}
            placeholder="Введите имя" 
        />
        <Button onClick={submit}>
            Submit
        </Button>
        <Button onClick={reset}>
            Reset
        </Button>
    </div>;
}