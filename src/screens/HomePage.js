/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/order */
/* eslint-disable react/button-has-type */
/* eslint-disable quotes */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-filename-extension */
import React from "react";
import { useNavigate } from "react-router-dom";

import HeaderText from "../components/HeaderText";
import "../App.css";

function HomePage() {
  const navigate = useNavigate();

  return (
    <div
      className="App"
      style={{
        border: "1px solid black",
      }}
    >
      <HeaderText />
      <div className="d-flex flex-row justify-content-between mx-5 my-3">
        Meet The Cast
        <button
          className="btn btn-primary"
          onClick={() => {
            navigate("/characters");
          }}
        >
          View all
        </button>
      </div>
    </div>
  );
}

export default HomePage;
