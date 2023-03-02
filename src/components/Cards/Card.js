/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-console */
/* eslint-disable react/prop-types */
/* eslint-disable quotes */
import React from "react";

import Size from "../../assets/constants/Size";

function Card({ apiData }) {
  const { results } = apiData;

  // const res = results?.map((item) => (
  //   <div
  //     className="col-2 my-3 mx-3 border-gradient border-gradient-color"
  //     key={item.id}
  //     // style={{ border: "1px solid white" }}
  //   >
  //     <img className="img-fluid" src={item.image} alt="characters" />
  //     <div
  //       className="content my-4 travels-light text-white"
  //       style={{ fontSize: Size.small }}
  //     >
  //       {item.name}
  //     </div>
  //   </div>
  // ));

  return (
    // <div className="row" style={{ border: "" }}>
    //   {res}
    // </div>
    <div className="cast-card-root">
      {results.map((i, idx) => (
        <div key={idx} className="scroll-view-card text-white border-gradient">
          <img src={`${i.image}`} alt="character-image" />
          <p className="cast-name poppins-medium">{i.name}</p>
        </div>
      ))}
    </div>
  );
}

export default Card;
