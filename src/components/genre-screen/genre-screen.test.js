import React from 'react';
import GenreScreen from './genre-screen';
import renderer from 'react-test-renderer';

it(`GenreScreen to be rendered correctly`, () => {
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

  const component = renderer.create(
      <GenreScreen
        question={question}
        onAnswer={cb}
      />
  );

  expect(component).toMatchSnapshot();
});
