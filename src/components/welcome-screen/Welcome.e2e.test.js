import React from 'react';
import {shallow} from 'enzyme';
import WelcomeScreen from './Welcome-screen';
import "../../../setupTests";

describe(`WelcomeScreen`, () => {
  it(`Should be clicked once`, () => {
    const clickHandler = jest.fn();

    const welcomeScreen = shallow(
        <WelcomeScreen
          gameTime={0}
          possibleErrors={0}
          onClick={clickHandler}
        />
    );

    const welcomeBtn = welcomeScreen.find(`button`);
    welcomeBtn.simulate(`click`);
    expect(clickHandler).toHaveBeenCalledTimes(1);

  });
});
