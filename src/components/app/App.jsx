import React from 'react';
import WelcomeScreen from "../welcome-screen/Welcome-screen.jsx";

export const App = () => {
  const clickHandler = () => {
  };

  return <WelcomeScreen
    gameTime={7}
    possibleErrors={3}
    onClick={clickHandler}
  />;
};

export default App;
