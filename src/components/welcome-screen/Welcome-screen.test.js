import React from 'react';
import renderer from "react-test-renderer";
import WelcomeScreen from "./Welcome-screen";

it(`Welcome-screen to be rendered correctly`, () => {
  const onStartButtonClick = jest.fn();

  const welcomeScreen = renderer.create(
      <WelcomeScreen
        time={0}
        possibleErrors={0}
        onStartButtonClick={onStartButtonClick}
      />
  ).toJSON();

  expect(welcomeScreen).toMatchSnapshot();
});
