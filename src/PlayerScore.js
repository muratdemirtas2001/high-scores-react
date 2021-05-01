import React from "react";
function PlayerScore({ score }) {
  return (
    <div className="card-row">
      <p className="score-name">{score.n.toUpperCase()}</p>
      <p className="score-point">{score.s}</p>
    </div>
  );
}

export default PlayerScore;
