import React from 'react';
import {shallow} from 'enzyme';
import WelcomeScreen from './Welcome-screen';
import "../../../setupTests";

describe(`WelcomeScreen`, () => {
  it(`Should be clicked once`, () => {
    const cb = jest.fn();

    const welcomeScreen = shallow(
        <WelcomeScreen
          time={0}
          possibleErrors={0}
          onStartButtonClick={cb}
        />
    );

    const welcomeBtn = welcomeScreen.find(`button`);
    welcomeBtn.simulate(`click`);
    expect(cb).toHaveBeenCalledTimes(1);

  });
});
