
import React from "react";
import ReactDOM from 'react-dom';
import App from "./components/app/App.jsx";

const init = () => {
  ReactDOM.render(
      <App />,
      document.querySelector(`#root`)
  );
};

init();
