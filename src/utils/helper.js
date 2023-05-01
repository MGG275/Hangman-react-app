export const getSecretWord = async () => {
  const url = "https://random-word-api.herokuapp.com/word";
  const resp = await fetch(url);
  const data = await resp.json();
  const secretWord = data[0];

  return secretWord;
};

export const calulateResult = (
  secretWord,
  secretWordArrayHide,
  errorCouter,
  multiplayer
) => {
  if (errorCouter < 6 && !secretWordArrayHide.includes("") && !multiplayer) {
    return (
      <>
        <span>CONGRATULATIONS!!! YOU WON</span>
        <br></br>
        <span>The secret word was: {secretWord}</span>{" "}
      </>
    );
  }
  if (errorCouter < 6 && !secretWordArrayHide.includes("") && multiplayer) {
    return (
      <>
        <span>CONGRATULATIONS!!! PLAYER 2 WON</span>
        <br></br>
        <span>The secret word was: {secretWord}</span>{" "}
      </>
    );
  }

  if (errorCouter >= 6 && secretWordArrayHide.includes("") && !multiplayer) {
    return (
      <>
        <span>Sorry you could not guess the word. The secret word was: </span>
        <span>{secretWord}</span>{" "}
      </>
    );
  }
  if (errorCouter >= 6 && secretWordArrayHide.includes("") && multiplayer) {
    return (
      <>
        <span>CONGRATULATIONS PLAYER 1 WON.</span>
        <br></br>
        <span>Sorry PLAYER 2 could not guess the word.</span>
        <br></br>
        <span>The secret word was: {secretWord}</span>{" "}
      </>
    );
  }
  return null;
};

export function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export const bugInputDetector = (secretWord, secretWordArray) => {
  if (
    !secretWord.match(/^[a-zA-Z]+$/) &&
    secretWordArray.length < 3 &&
    secretWord !== ""
  ) {
    return (
      <p>The secret word can not contain numbers, symbols or blank spaces.</p>
    );
  }
  return null;
};
export const handleClickAlphabet = (
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
) => {
  const copyAlphabet = [...alphabet];
  const copySecretWordArrayHide = [...secretWordArrayHide];

  if (alphabet[i].selected === false && result === null) {
    for (let i = 0; i < secretWordArray.length; i++) {
      if (secretWordArray[i].includes(value)) {
        copySecretWordArrayHide[i] = value;
        setSecretWordArrayHide(copySecretWordArrayHide);
      }
      if (!secretWordArray.includes(value)) {
        setErrorCouter(errorCouter + 1);
      }
    }
  }
  copyAlphabet[i].selected = true;
  setAlphabet(copyAlphabet);
};
