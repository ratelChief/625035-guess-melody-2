import React from "react";
import PropTypes from "prop-types";

export const ArtistScreen = (props) => {
  const {
    question: {answers},
    onAnswer
  } = props;

  return (
    <section className="game game--artist">
      <header className="game__header">
        <a className="game__back" href="#">
          <span className="visually-hidden">Сыграть ещё раз</span>
          <img
            className="game__logo"
            src="img/melody-logo-ginger.png"
            alt="Угадай мелодию"
          />
        </a>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="timer"
          viewBox="0 0 780 780"
        >
          <circle
            className="timer__line"
            cx="390"
            cy="390"
            r="370"
            style={{
              filter: `url(#blur)`,
              transform: `rotate(-90deg) scaleY(-1)`,
              transformOrigin: `center`
            }}
          />
        </svg>

        <div className="timer__value" xmlns="http://www.w3.org/1999/xhtml">
          <span className="timer__mins">05</span>
          <span className="timer__dots">:</span>
          <span className="timer__secs">00</span>
        </div>

        <div className="game__mistakes">
          <div className="wrong"></div>
          <div className="wrong"></div>
          <div className="wrong"></div>
        </div>
      </header>

      <section className="game__screen">
        <h2 className="game__title">Кто исполняет эту песню?</h2>
        <div className="game__track">
          <div className="track">
            <button
              className="track__button track__button--play"
              type="button"
            ></button>
            <div className="track__status">
              <audio></audio>
            </div>
          </div>
        </div>

        <form className="game__artist" onChange={onAnswer}>
          {answers.map(({id, artist, picture}) => (
            <div className="artist" key={id}>
              <input
                className="artist__input visually-hidden"
                type="radio"
                name="answer"
                value={`${id}`}
                id={`${id}`}
              />
              <label className="artist__name" htmlFor={`${id}`}>
                <img
                  className="artist__picture"
                  src={`${picture}`}
                  alt={`${artist}`}
                />
                {artist}
              </label>
            </div>
          ))}
        </form>
      </section>
    </section>
  );
};

export default ArtistScreen;

ArtistScreen.propTypes = {
  question: PropTypes.shape({
    type: PropTypes.string.isRequired,
    song: PropTypes.shape({
      artist: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired
    }),
    answers: PropTypes.arrayOf(
        PropTypes.shape({
          artist: PropTypes.string.isRequired,
          picture: PropTypes.string.isRequired,
          id: PropTypes.string.isRequired
        })
    )
  }),
  onAnswer: PropTypes.func.isRequired
};
