import React, { useState } from "react";
import clsx from "clsx";

const Keyboard = ({
  currentWord,
  gussedLetter,
  setGussedLetter,
  isGameOver,
}) => {
  // const [gussedLetter, setGussedLetter] = useState([]);

  function addGussedLetter(letter) {
    // const textContent = event.target.textContent;
    setGussedLetter((prevLetters) =>
      // prevLetters.includes(letter) ? prevLetters : [...prevLetters, letter]
      {
        const letterSet = new Set(prevLetters);
        letterSet.add(letter);
        return Array.from(letterSet);
      }
    );
  }

  const alphabets = "qwertyuiopasdfghjklzxcvbnm";
  const KeyboardElements = alphabets.split("").map((letter, index) => {
    const isGussed = gussedLetter.includes(letter);
    const isCorrect = isGussed && currentWord.includes(letter);
    const isWrong = isGussed && !currentWord.includes(letter);
    const className = clsx({
      correct: isCorrect,
      wrong: isWrong,
    });

    return (
      <button
        className={className}
        key={index}
        onClick={() => addGussedLetter(letter)}
        disabled={isGameOver}
      >
        {letter.toUpperCase()}
      </button>
    );
  });

  return <section className="keyboard">{KeyboardElements}</section>;
};

export default Keyboard;
