import './App.css';
import { useState } from 'react';
import { Weather } from './components/Weather';
import { RockPaperScissors } from './components/RockPaperScissors';
import { Greeting } from './components/Greeting';
import { UserNameInput } from './components/UserNameInput';
import { Days } from './components/Days';
import { LoginForm } from './components/LoginForm';

export function App() {
  const [ userName, setUserName ] = useState("");
  const [ selectedDay, setSelectedDay ] = useState("");

  const canBahnut = selectedDay === "пт" || 
    selectedDay === "сб" || 
    selectedDay === "вс";

  return (
    <div className="App">
      {/* <UserNameInput
        onChange={(evt) => 
          setUserName(evt.target.value)
        } 
      />
      <Greeting userName={userName} /> */}
      {/* А не бахнуть ли нам сегодня? <br />
      Выберите день недели:

      <Days onDaySelected={setSelectedDay} />

      Выбранный день недели: {selectedDay}. <br />
      {
        canBahnut ? "Конечно же бахнуть!" : "Нельзя, завтра на работу :("
      } */}
      {/* <RockPaperScissors /> */}
      {/* <LoginForm /> */}
      <Weather />
    </div>
  );
}