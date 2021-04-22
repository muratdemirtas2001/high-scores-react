import React from "react";
 function PlayerScore({score}){
     return (
       <div className="card-row">
         <h2 className="score-name">{score.n}</h2>
         <h2 className="score-point">{score.s}</h2>
       </div>
     );
 }

 export default PlayerScore