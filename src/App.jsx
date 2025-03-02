import React, { useState } from "react";
import Header from "./Components/Header";
import Status from "./Components/Status";
import Language from "./Components/Language";
import Word from "./Components/Word";
import Keyboard from "./Components/Keyboard";
import { languages } from "./languages";
import { getNewWord } from "./words";
import Confetti from "react-confetti";

const App = () => {
  const [currentWord, setCurrentWord] = useState(getNewWord);
  const [gussedLetter, setGussedLetter] = useState([]);

  const wrongGuessCount = gussedLetter.filter(
    (letter) => !currentWord.includes(letter)
  ).length;
  const isGameWon = currentWord
    .split("")
    .every((letter) => gussedLetter.includes(letter));
  const isGameLost = wrongGuessCount >= languages.length - 1;
  const isGameOver = isGameWon || isGameLost;
  const lastGussedLetter = gussedLetter[gussedLetter.length - 1];
  const isLastGuessIncorrect =
    lastGussedLetter && !currentWord.includes(lastGussedLetter);

  function startNewGame() {
    setCurrentWord(getNewWord);
    setGussedLetter([]);
  }

  console.log(currentWord);

  return (
    <main>
      {isGameWon && <Confetti recycle={false} numberOfPieces={800} />}
      <Header />
      <Status
        isGameOver={isGameOver}
        isGameWon={isGameWon}
        isGameLost={isGameLost}
        wrongGuessCount={wrongGuessCount}
        isLastGuessIncorrect={isLastGuessIncorrect}
        languages={languages}
        gussedLetter={gussedLetter}
      />
      <Language wrongGuessCount={wrongGuessCount} />
      <Word
        currentWord={currentWord}
        gussedLetter={gussedLetter}
        setCurrentWord={setCurrentWord}
        isGameLost={isGameLost}
      />
      <Keyboard
        currentWord={currentWord}
        gussedLetter={gussedLetter}
        setGussedLetter={setGussedLetter}
        isGameOver={isGameOver}
      />

      {isGameOver && (
        <button className="new-game" onClick={startNewGame}>
          New Game
        </button>
      )}
    </main>
  );
};

export default App;
