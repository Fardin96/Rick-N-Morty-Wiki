/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-console */
/* eslint-disable react/prop-types */
/* eslint-disable quotes */
import React from "react";

function Card({ apiData }) {
  const { results } = apiData;
  //   console.log(results);

  const res = results?.map((item) => (
    <div
      className="col-2 my-3 mx-3"
      key={item.id}
      style={{ border: "1px solid red" }}
    >
      <img className="img-fluid" src={item.image} alt="characters" />
      <div className="content my-4">{item.name}</div>
    </div>
  ));

  return (
    <div className="row" style={{ border: "" }}>
      {res}
    </div>
  );
}

export default Card;
