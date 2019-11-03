import React from 'react';
import {shallow} from 'enzyme';
import GenreScreen from './genre-screen';
import "../../../setupTests";

describe(`GenreScreen`, () => {
  it(`Should be clicked once`, () => {
    const question = {
      type: `type`,
      genre: `genre`,
      answers: [{
        genre: `genre`,
        id: `id`,
        src: `src`
      }]
    };

    const cb = jest.fn();

    const genreScreen = shallow(
        <GenreScreen
          question={question}
          onAnswer={cb}
        />
    );

    const genreScreenForm = genreScreen.find(`.game__tracks`);
    genreScreenForm.simulate(`submit`, {preventDefault() {}});
    expect(cb).toHaveBeenCalledTimes(1);

  });
});
