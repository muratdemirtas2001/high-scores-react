import React from "react";
import PlayerScore from "./PlayerScore";
function HighScoreCard({ scores }) {
  return (
    <>
      <div className="high-scores-wrapper">
        <h1 className="wrapper-title">High Scores per Country</h1>

        {scores
          .sort((country1, country2) => {
            return country1.name.localeCompare(country2.name);
          })
          .map((score, index) => {
            return (
              <div className="high-scores-card">
                <h1 className="card-title">HIGH SCORES: {score.name}</h1>
                {score.scores
                  .sort((firstScore, secondScore) => {
                    return parseFloat(secondScore.s) - parseFloat(firstScore.s);
                  })
                  .map((score) => {
                    return <PlayerScore score={score} />;
                  })}
              </div>
            );
          })}
      </div>
    </>
  );
}

export default HighScoreCard;
