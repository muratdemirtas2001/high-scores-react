import React from "react";

function ButtonWorldWide({ renderWorldWide }) {
  return (
    <button onClick={renderWorldWide} className="toggle-button">
      World wide Scores
    </button>
  );
}

export default ButtonWorldWide;
