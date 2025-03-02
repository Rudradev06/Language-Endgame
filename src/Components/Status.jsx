import clsx from "clsx";
import React from "react";
import { getFarewellText } from "../utils";

const Status = ({
  isGameOver,
  isGameWon,
  isGameLost,
  wrongGuessCount,
  isLastGuessIncorrect,
  languages,
  gussedLetter,
}) => {
  const gameStatusClass = clsx("game-status", {
    won: isGameWon,
    lost: isGameLost,
    farewell: !isGameOver && isLastGuessIncorrect,
  });

  function renderGameStatus() {
    if (!isGameOver && isLastGuessIncorrect) {
      return (
        <p className="farewell-message">
          {getFarewellText(languages[wrongGuessCount - 1].name)}
        </p>
      );
    }

    if (isGameWon) {
      return (
        <>
          <h2>You win!</h2>
          <p>Well done 🎉🎉🎉</p>
        </>
      );
    }
    if (isGameLost) {
      return (
        <>
          <h2>Game over!</h2>
          <p>You lose! Better start learning Assembly 😭</p>
        </>
      );
    }

    if (!isLastGuessIncorrect && gussedLetter.length > 0) {
      return (
        <>
          <h2>Woo Hooo...!</h2>
          <p>Correct One</p>
        </>
      );
    }

    return (
      <>
        <h2>Let's Start! </h2>
      </>
    );
  }

  return <section className={gameStatusClass}>{renderGameStatus()}</section>;
};

export default Status;
