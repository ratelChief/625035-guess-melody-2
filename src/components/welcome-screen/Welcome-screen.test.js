import React from 'react';
import renderer from "react-test-renderer";
import WelcomeScreen from "./Welcome-screen";

it(`Welcome-screen to be rendered correctly`, () => {
  const settings = {gameTime: 5, possibleErrors: 2};

  const welcomeScreen = renderer.create(
      <WelcomeScreen
        gameTime={settings.gameTime}
        possibleErrors={settings.possibleErrors}
      />
  ).toJSON();

  expect(welcomeScreen).toMatchSnapshot();
});
