import React from "react";

function ButtonToggle({ toggle, ascending, isOnLoad }) {
  return (
    <>
    <button onClick={toggle} className="toggle-button">
      {isOnLoad ? "By Country Name " : ascending ? "Ascending" : "Descending"}
    </button>
    
</>
  );
}

export default ButtonToggle;
