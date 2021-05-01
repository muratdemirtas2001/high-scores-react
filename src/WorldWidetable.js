import React from "react";
import PlayerScore from "./PlayerScore";
function WorldWideTable({ scores }) {
  let count = 0;
  let playerArray = [];
  scores.forEach((country) => {
    country.scores.forEach((player) => {
      playerArray[count] = {
        n: player.n,
        s: player.s,
      };
      count++;
    });
  });
  playerArray.sort((player1, player2) => {
    return player2.s - player1.s;
  });
  return (
    <>
      <div className="high-scores-wrapper">
        <h2 className="wrapper-title">Worldwide High Scores</h2>
        <div className="high-scores-card">
          {playerArray.map((player) => {
            return <PlayerScore score={player} />;
          })}
        </div>
      </div>
    </>
  );
}

export default WorldWideTable;
