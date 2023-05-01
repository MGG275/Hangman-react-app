import React from "react";
import { classNames } from "../../utils/helper";
import "./game-style.css";

export const HangmanWordAndAlphabet = ({
  secretWordArrayHide,
  alphabet,
  handleClickAlphabet,
  errorCouter,
}) => {
  return (
    <>
      <div className="hangman">
        <div className="stick-bottom-left"></div>
        <div className="stick-bottom-right"></div>
        <div className="stick-central-left"></div>
        <div className="stick-central-right"></div>
        <div className="stick-top"></div>
        <div className="stick-hang"></div>
        <div className="stick-hold-left"></div>
        <div className="stick-hold-right"></div>
        <div className={classNames(errorCouter >= 1 ? "hangman-head" : "display-none")}>
        <div className={classNames(errorCouter >= 6 ? "hangman-face" : "display-none")}>
          <span className="hangman-eyes">X X</span>
          <span className="hangman-mouth">____</span>
        </div>
      </div>
      <div className={classNames(errorCouter >= 2 ? "hangman-body" : "display-none")}></div>
      <div className={classNames(errorCouter >= 3 ? "hangman-right-arm" : "display-none")}></div>
      <div className={classNames(errorCouter >= 4 ? "hangman-left-arm" : "display-none")}></div>
      <div className={classNames(errorCouter >= 5 ? "hangman-right-leg" : "display-none")}></div>
      <div className={classNames(errorCouter >= 6 ? "hangman-left-leg" : "display-none")}></div>
      </div>

      <div className="word-alphabet-container">
        <div className="secret-word">
          {secretWordArrayHide.map((value, index) => (
            <div key={index}>
              <span>{value}</span>
            </div>
          ))}
        </div>

        <div className="alphabet">
          {alphabet.map((value, index) => (
            <button
              key={index}
              id={classNames(value.selected === true && "button")}
              onClick={() => handleClickAlphabet(value.letter, index)}
            >
              {value.letter}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export const Result = ({ result, navigate }) => {
  return (
    <div className="result">
      <h2>{result}</h2>
      <hr></hr>
      <div className="result-buttons">
        <button onClick={() => window.location.reload()}>Play Again</button>
        <button onClick={() => navigate("/")}>Menu Principal</button>
      </div>
    </div>
  );
};

export const Formu = ({ handleImputChange, handleSubmit, errorDetector }) => {
  return (
    <div className="game-screen">
      <form>
        <h2>Player 1:</h2>
        <h1>Enter the word to guess</h1>
        <input
          type="letters"
          placeholder="Secret Word"
          title="The secret word cannot contain symbols, numbers, or white spaces."
          onChange={handleImputChange}
        ></input>
        {errorDetector && <div className="error-alert">{errorDetector}</div>}
        <input onClick={handleSubmit} className="submit" type="submit"></input>
      </form>
    </div>
  );
};
