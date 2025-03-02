import React from "react";
import { languages } from "../languages";
import clsx from "clsx";

const Language = ({ wrongGuessCount }) => {
  const languageElements = languages.map((lang, index) => {
    const isLanguageLost = index < wrongGuessCount;

    const styles = {
      backgroundColor: lang.backgroundColor,
      color: lang.color,
    };
    const className = clsx("chip", isLanguageLost && "lost");
    return (
      <span
        key={lang.name}
        className={/*`chip ${isLanguageLost ? "lost" : undefined}`*/ className}
        style={styles}
      >
        {lang.name}
      </span>
    );
  });

  return <section className="language-chips">{languageElements}</section>;
};

export default Language;
