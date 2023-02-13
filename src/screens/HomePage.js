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
    // className="home-bg-image""
    // style={{
    //   border: "1px solid black",
    // }}
    >
      <HeaderText />
      <div className="travels-medium">
        <div
          style={{
            fontSize: Size.large,
            position: "absolute",
            bottom: 40,
            right: 200,
          }}
        >
          Meet The Cast
        </div>
        <button
          style={{
            position: "absolute",
            bottom: 40,
            right: 80,
          }}
          className="btn btn-success d-flex align-items-center"
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
