import "./App.css";
import { useState } from "react";
import scores from "./scores";
import HighScoreCard from "./HighScoreCard";
import ButtonToggle from "./ButtonToggle";
import WorldWideTable from "./WorldWidetable";
import ButtonWorldWide from "./ButtonWorldWide";

function App() {
  const [ascending, setAscending] = useState(true);
  const [isOnLoad, setIsOnload] = useState(true);
  function toggle() {
    setIsOnload(false);
    scores.sort((country1, country2) => {
      return country1.name.localeCompare(country2.name);
    });
    if (ascending) {
      scores.map((score) => {
        return score.scores.sort((firstScore, secondScore) => {
          return secondScore.s - firstScore.s;
        });
      });
      setAscending(false);
    } else {
      scores.map((score) => {
        return score.scores.sort((firstScore, secondScore) => {
          return firstScore.s - secondScore.s;
        });
      });
      setAscending(true);
    }
  }

  function renderWorldWide() {
    setIsOnload(true);
  }

  return (
    <div className="info-wrapper">
      <div className="button-wrapper">
      <ButtonToggle toggle={toggle} ascending={ascending} isOnLoad={isOnLoad} />
      {!isOnLoad && (
        <ButtonWorldWide
          isOnLoad={isOnLoad}
          renderWorldWide={renderWorldWide}
        />
      )}
      </div>
      {isOnLoad ? (
        <WorldWideTable scores={scores} />
      ) : (
        <HighScoreCard scores={scores} toggle={toggle} ascending={ascending} />
      )}
    </div>
  );
}

export default App;
