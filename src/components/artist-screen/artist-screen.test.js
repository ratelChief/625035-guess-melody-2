import React from "react";
import ArtistScreen from "./artist-screen";
import renderer from "react-test-renderer";

it(`ArtistScreen to be rendered correctly`, () => {
  const question = {
    type: `type`,
    song: {
      artist: ``,
      src: ``
    },
    answers: [
      {
        artist: `genre`,
        id: `id`,
        picture: `src`
      }
    ]
  };

  const cb = jest.fn();

  const component = renderer.create(
      <ArtistScreen question={question} onAnswer={cb} />
  );

  expect(component).toMatchSnapshot();
});
