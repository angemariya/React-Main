import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


// function render(counter = 0) {
//   const root = document.getElementById('root');
//   root.innerHTML = "";

//   function setCounter(newCounter) {
//     render(newCounter);
//   }
  
//   const text = document.createElement("div");
//   const button = document.createElement("button");

//   button.addEventListener("click", () => {
//     setCounter(counter + 1);
//     console.log(counter);
//   });

//   button.innerHTML = "Click me!";
//   text.innerHTML = counter;

//   root.append(text, button);
// }

// render();