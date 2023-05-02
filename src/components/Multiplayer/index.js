import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { bugInputDetector, calulateResult, handleClickAlphabet } from "../../utils/helper";
import { HangmanWordAndAlphabet, Result, Formu } from "../GameParts/GameParts";
import "../GameParts/game-style.css";
import "./index.css";

function Multyplayer() {
  const navigate = useNavigate();
  const [alphabet, setAlphabet] = useState([
    { letter: "A", selected: false },
    { letter: "B", selected: false },
    { letter: "C", selected: false },
    { letter: "D", selected: false },
    { letter: "E", selected: false },
    { letter: "F", selected: false },
    { letter: "G", selected: false },
    { letter: "H", selected: false },
    { letter: "I", selected: false },
    { letter: "J", selected: false },
    { letter: "K", selected: false },
    { letter: "L", selected: false },
    { letter: "M", selected: false },
    { letter: "N", selected: false },
    { letter: "O", selected: false },
    { letter: "P", selected: false },
    { letter: "Q", selected: false },
    { letter: "R", selected: false },
    { letter: "S", selected: false },
    { letter: "T", selected: false },
    { letter: "U", selected: false },
    { letter: "V", selected: false },
    { letter: "W", selected: false },
    { letter: "X", selected: false },
    { letter: "Y", selected: false },
    { letter: "Z", selected: false },
  ]);
  const [secretWord, setSecretWord] = useState("");
  const [secretWordArray, setSecretWordArray] = useState("");
  const [secretWordArrayHide, setSecretWordArrayHide] = useState("");
  const [errorCouter, setErrorCouter] = useState(0);
  const result = calulateResult(
    secretWord,
    secretWordArrayHide,
    errorCouter,
    true
  );
  const errorInputDetector = bugInputDetector(secretWord, secretWordArray);

  const handleAlphabet = (value, i) => {
    handleClickAlphabet(
      value,
      i,
      setAlphabet,
      setSecretWordArrayHide,
      setErrorCouter,
      alphabet,
      secretWordArrayHide,
      secretWordArray,
      errorCouter,
      result
    );
  };

  const handleImputChange = (e) => {
    setSecretWord(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (secretWord.length > 2 && !errorInputDetector) {
      setSecretWord(secretWord.toUpperCase());
      setSecretWordArray(secretWord.toUpperCase().split(""));
      setSecretWordArrayHide(secretWord.toUpperCase().split("").fill(""));
    }
  };

  const handleReset = () => {
    setSecretWord("");
    setSecretWordArray("");
    setErrorCouter(0);
    for (let i = 0; i < alphabet.length; i++) {
      alphabet[i].selected = false;
      setAlphabet(alphabet);
    }
  };

  return (
    <>
      {!secretWordArray ? (
        <Formu
          handleImputChange={handleImputChange}
          handleSubmit={handleSubmit}
          errorDetector={errorInputDetector}
        />
      ) : (
        <div className="game-screen">
          <HangmanWordAndAlphabet
            handleClickAlphabet={handleAlphabet}
            secretWordArrayHide={secretWordArrayHide}
            alphabet={alphabet}
            errorCouter={errorCouter}
          />
          {result && (
            <Result
              result={result}
              navigate={navigate}
              handleReset={handleReset}
            />
          )}
        </div>
      )}
    </>
  );
}

export default Multyplayer;
