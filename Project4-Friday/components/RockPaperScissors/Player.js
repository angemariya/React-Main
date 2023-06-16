import { useState } from "react";
import { Button } from "./Button";
import "./Player.css";

const playerOptions = [
    { id: "rock", label: "Камень" },
    { id: "scissors", label: "Ножницы" },
    { id: "paper", label: "Бумага" }
];

export const Player = ({ playerName, onSelect }) => {
    const [ selectedOption, setSelectedOption] = useState("");

    return <div className="Player">
        {playerName}
        {playerOptions.map((option) => {
            return <Button
                key={option.id} 
                onClick={() => {
                    setSelectedOption(option.id);
                    onSelect(option.id);
                }}
            >
                {option.label}
            </Button>;
        })}
        Игрок выбрал&nbsp;{selectedOption}.
    </div>;
}