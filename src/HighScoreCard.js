import React from "react";
import PlayerScore from "./PlayerScore";
function HighScoreCard({ scores }) {
  return (
    <>
      <div className="high-scores-wrapper">
        <h2 className="wrapper-title">High Scores per Country</h2>

        {scores.map((score, index) => {
          return (
            <div className="high-scores-card">
              <h3 className="card-title">HIGH SCORES: {score.name}</h3>
              {score.scores.map((score, index) => {
                return <PlayerScore key={score.s} score={score} />;
              })}
            </div>
          );
        })}
      </div>
    </>
  );
}

export default HighScoreCard;
