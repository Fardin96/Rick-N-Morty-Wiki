/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/order */
/* eslint-disable react/button-has-type */
/* eslint-disable quotes */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-filename-extension */
import React from "react";
import { useNavigate } from "react-router-dom";

import "../App.css";
import Size from "../assets/constants/Size";
import HeaderText from "../components/HeaderText";

function HomePage() {
  const navigate = useNavigate();

  return (
    <div
      className="home-bg-image min-height"
      // style={{
      //   border: "1px solid black",
      // }}
    >
      <div className="nav-padding">
        <HeaderText />
        <HeaderText />
        <HeaderText />
        <HeaderText />
        <HeaderText />
      </div>
      <div
        className="travels-medium text-white d-flex my-5 justify-content-center"
        // style={{ border: "3px solid red" }}
      >
        <div
          className="mx-5"
          style={{
            fontSize: Size.large,
            // position: "absolute",
            // bottom: 40,
            // right: 200,
          }}
        >
          Meet The Cast
        </div>
        <button
          // className="mx-5"
          className="btn nav-btn"
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
