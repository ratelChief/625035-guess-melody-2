
import React from "react";
import ReactDOM from 'react-dom';
import App from "./components/app/app.jsx";
import {gameSettings} from "../src/mocks/game-settings";
import {questions} from "../src/mocks/questions";

const init = () => {
  ReactDOM.render(
      <App
        gameSettings={gameSettings}
        questions={questions}
      />,
      document.querySelector(`#root`)
  );
};

init();
