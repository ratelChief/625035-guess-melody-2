import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import WelcomeScreen from './Welcome-screen';

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

    const welcomeBtn = welcomeScreen.find(`welcome__button`);
    welcomeBtn.simulate(`click`);
    clickHandler.toHaveBeenCalledTimes(1);

  });
});
