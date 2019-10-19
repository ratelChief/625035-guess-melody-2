import React from 'react';
import WelcomeScreen from "../welcome-screen/Welcome-screen.jsx";

export const App = () => {
  return <WelcomeScreen
    gameTime={7}
    possibleErrors={3}
  />;
};

export default App;
