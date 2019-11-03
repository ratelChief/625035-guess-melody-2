import React from 'react';
import {shallow} from 'enzyme';
import ArtistScreen from './artist-screen';
import "../../../setupTests";

describe(`ArtistScreen`, () => {
  it(`Should be clicked once`, () => {
    const question = {
      type: `type`,
      song: {
        artist: ``,
        src: ``,
      },
      answers: [{
        artist: `artist`,
        id: `id`,
        picture: `picture`
      }]
    };

    const cb = jest.fn();

    const component = shallow(
        <ArtistScreen
          question={question}
          onAnswer={cb}
        />
    );

    const form = component.find(`.game__artist`);
    form.simulate(`change`);
    expect(cb).toHaveBeenCalledTimes(1);
  });
});
