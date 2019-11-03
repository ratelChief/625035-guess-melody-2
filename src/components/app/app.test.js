import React from 'react';
import App from './app';
import renderer from 'react-test-renderer';

it(`App to be rendered correctly`, () => {
  const settings = {gameTime: 5, possibleErrors: 2};

  const app = renderer.create(
      <App
        gameSettings={settings}
        questions={[]}
      />
  );

  expect(app).toMatchSnapshot();
});
