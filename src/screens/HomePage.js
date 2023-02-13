/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/order */
/* eslint-disable react/button-has-type */
/* eslint-disable quotes */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-filename-extension */
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";

import "../App.css";
// import Card from "../components/Cards/Card";
import HeaderText from "../components/HeaderText";

function HomePage() {
  const navigate = useNavigate();
  // const [apiData, setApiData] = useState([]);

  // const api = "https://rickandmortyapi.com/api/character/?page=1";

  // useEffect(() => {
  //   (async () => {
  //     const res = await fetch(api).then((data) => data.json());
  //     await setApiData(res);
  //   })();
  // }, [api]);

  return (
    <div
      className="App"
      // style={{
      //   border: "1px solid black",
      // }}
    >
      <HeaderText />
      <div className="d-flex flex-row justify-content-between mx-5 ">
        <div style={{ position: "absolute", bottom: 40, left: 80 }}>
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
      {/* <div
        className="mh-25 d-inline-block"
        style={{ border: "1px solid blue" }}
      >
        <ScrollMenu LeftArrow RightArrow>
          <Card apiData={apiData} />
        </ScrollMenu>
      </div> */}
    </div>
  );
}

export default HomePage;
