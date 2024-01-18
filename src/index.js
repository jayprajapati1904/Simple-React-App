import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Cards from "./Cards";
import Data from "./Data";

function ncard(val) {
  return (
    <Cards
      imgsrc={val.imgsrc}
      tital={val.tital}
      tital2={val.tital2}
      button={val.button}
    />
  );
}

ReactDOM.render(
  <>
    <h1 className="heading_style"> Top 5 Popular Series</h1>
    {Data.map(ncard)}
  </>,
  document.getElementById("root")
);
