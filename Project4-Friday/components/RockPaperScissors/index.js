import { useState } from "react";
import "./index.css";
import { Player } from "./Player";

export const RockPaperScissors = () => {
    const [ game, setGame ] = useState({
        player1: "",
        player2: ""
    });

    const onPlayerOneSelect = (selectedValue) => {
        setGame({
            ...game,
            player1: selectedValue
        });
    }
    const onPlayerTwoSelect = (selectedValue) => {
        setGame({
            ...game,
            player2: selectedValue
        })
    }

    let matchResult = "Не определено";
    if (game.player1 === "rock") {
        if (game.player2 === "rock") {
            matchResult = "Ничья";
        }
        if (game.player2 === "scissors") {
            matchResult = "Игрок 1 победил!";
        }
        if (game.player2 === "paper") {
            matchResult = "Игрок 2 победил!"
        }
    }
    if (game.player1 === "scissors") {
        if (game.player2 === "scissors") {
            matchResult = "Ничья";
        }
        if (game.player2 === "paper") {
            matchResult = "Игрок 1 победил!";
        }
        if (game.player2 === "rock") {
            matchResult = "Игрок 2 победил!"
        }
    }
    if (game.player1 === "paper") {
        if (game.player2 === "paper") {
            matchResult = "Ничья";
        }
        if (game.player2 === "rock") {
            matchResult = "Игрок 1 победил!";
        }
        if (game.player2 === "scissors") {
            matchResult = "Игрок 2 победил!"
        }
    }

    return <>
        <div className="RockPaperScissors">
            <Player
                playerName="Игрок 1"
                onSelect={onPlayerOneSelect}
            ></Player>
            <Player
                playerName="Игрок 2"
                onSelect={onPlayerTwoSelect}
            ></Player>
        </div>
        {matchResult}
    </>;
}