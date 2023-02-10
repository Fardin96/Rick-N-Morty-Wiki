/* eslint-disable quotes */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-filename-extension */
import React from "react";
import "./App.css";
import HeaderImage from "./components/HeaderImage";
import HeaderText from "./components/HeaderText";

function App() {
  return (
    <div
      className="App"
      style={{
        border: "1px solid black",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        // justifyContent: "center",
      }}
    >
      <HeaderImage />
      <HeaderText />
    </div>
  );
}

export default App;
