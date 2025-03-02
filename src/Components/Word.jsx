import React from "react";
import clsx from "clsx";

const Word = ({ currentWord, gussedLetter, isGameLost }) => {
  // const [currentWord, setCurrentWord] = useState("react");

  const letterElements = currentWord.split("").map((letter, index) => {
    const revealLetter = isGameLost || gussedLetter.includes(letter);
    const classWord = clsx(
      isGameLost && !gussedLetter.includes(letter) && "missed-letter"
    );
    return (
      <span key={index} className={classWord}>
        {revealLetter ? letter.toUpperCase() : ""}
      </span>
    );
  });

  return <section className="word">{letterElements}</section>;
};

export default Word;
