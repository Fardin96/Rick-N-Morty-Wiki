/* eslint-disable quotes */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import { useNavigate } from "react-router-dom";

function NavigationButtons() {
  const navigate = useNavigate();
  return (
    <div className="d-flex flex-row ">
      <button
        className="mx-1 my-2 btn btn-primary"
        onClick={() => {
          navigate("/characters");
        }}
      >
        Characters
      </button>
      <button
        className="mx-1 my-2 btn btn-primary"
        onClick={() => {
          navigate("/locations");
        }}
      >
        Locations
      </button>
      <button
        className="mx-1 my-2 btn btn-primary"
        onClick={() => {
          navigate("/episodes");
        }}
      >
        Episodes
      </button>
    </div>
  );
}

export default NavigationButtons;
