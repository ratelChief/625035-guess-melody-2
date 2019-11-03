import React from "react";
import PropTypes from "prop-types";
import WelcomeScreen from "../welcome-screen/welcome-screen.jsx";
import GenreScreen from "../genre-screen/genre-screen.jsx";
import ArtistScreen from "../artist-screen/artist-screen.jsx";

export class App extends React.PureComponent {
  static getScreen(question, props, onUserAnswer) {
    const {
      gameSettings: {gameTime, possibleErrors},
      questions
    } = props;
    const currentQuestion = questions[question];

    if (question === -1) {
      return (
        <WelcomeScreen
          time={gameTime}
          possibleErrors={possibleErrors}
          onStartButtonClick={onUserAnswer}
        />
      );
    }

    switch (currentQuestion.type) {
      case `genre`:
        return (
          <GenreScreen question={currentQuestion} onAnswer={onUserAnswer} />
        );

      case `artist`:
        return (
          <ArtistScreen question={currentQuestion} onAnswer={onUserAnswer} />
        );
    }

    return null;
  }

  constructor(props) {
    super(props);
    this.state = {question: -1};
  }

  render() {
    const {questions} = this.props;

    return App.getScreen(this.state.question, this.props, () => {
      this.setState((prevState) => {
        const nextIndex = prevState.question + 1;
        const isEnd = nextIndex >= questions.length;

        return {
          question: !isEnd ? nextIndex : -1
        };
      });
    });
  }
}

export default App;

App.propTypes = {
  gameSettings: PropTypes.shape({
    gameTime: PropTypes.number.isRequired,
    possibleErrors: PropTypes.number.isRequired
  }),
  questions: PropTypes.arrayOf(
      PropTypes.oneOfType([
        PropTypes.shape({
          type: PropTypes.string.isRequired,
          genre: PropTypes.string.isRequired,
          answers: PropTypes.arrayOf(
              PropTypes.shape({
                genre: PropTypes.string.isRequired,
                id: PropTypes.string.isRequired,
                src: PropTypes.string.isRequired
              })
          )
        }),
        PropTypes.shape({
          type: PropTypes.string.isRequired,
          song: PropTypes.shape({
            artist: PropTypes.string.isRequired,
            src: PropTypes.string.isRequired
          }),
          answers: PropTypes.arrayOf(
              PropTypes.shape({
                artist: PropTypes.string.isRequired,
                picture: PropTypes.string.isRequired
              })
          )
        })
      ])
  )
};
