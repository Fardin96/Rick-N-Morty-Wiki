/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-console */
/* eslint-disable react/prop-types */
/* eslint-disable quotes */
import React from "react";
import Size from "../../assets/constants/Size";

function Card({ apiData }) {
  const { results } = apiData;
  console.log("these are showing up in card", apiData.results);

  const res = results?.map((item) => (
    <div
      className="col-2 my-3 mx-3 border-gradient border-gradient-color"
      key={item.id}
      style={{ border: "1px solid white" }}
    >
      <img className="img-fluid" src={item.image} alt="characters" />
      <div
        className="content my-4 travels-light text-white"
        style={{ fontSize: Size.small }}
      >
        {item.name}
      </div>
    </div>
  ));

  return (
    <div className="row" style={{ border: "" }}>
      {res}
    </div>
  );
}

export default Card;
