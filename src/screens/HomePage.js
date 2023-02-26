/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/order */
/* eslint-disable react/button-has-type */
/* eslint-disable quotes */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-filename-extension */
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "../App.css";
import Size from "../assets/constants/Size";
import HeaderText from "../components/HeaderText";

function HomePage() {
  const navigate = useNavigate();
  const [apiData, setApiData] = useState([]);

  const api = `https://rickandmortyapi.com/api/character/1,2,3,4,5,6,7,8`;

  useEffect(() => {
    (async () => {
      const res = await fetch(api).then((data) => data.json());
      await setApiData(res);
    })();
  }, [api]);

  const scrollLeft = () => {
    const left = document.querySelector(".scroll");
    left.scrollBy(300, 0);
  };

  const scrollRight = () => {
    const right = document.querySelector(".scroll");
    right.scrollBy(-300, 0);
  };

  // console.log("ki ki pawa gelo?", apiData);

  return (
    <div className="home-bg-image min-height">
      <div className="nav-padding">
        <HeaderText />
        <HeaderText />
        <HeaderText />
        <HeaderText />
        <HeaderText />
      </div>
      <div className="">
        <button className="scroll-button" onClick={scrollRight}></button>
        <button className="scroll-button" onClick={scrollLeft}></button>
      </div>
      <div className="scroll scroll-view snaps-inline">
        {apiData.map((i, idx) => (
          <div key={idx} className="scroll-view-card text-white">
            <img
              src={`${i.image}`}
              alt="character-image"
              // className="scroll-img"
            />
            {i.name}
          </div>
        ))}
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
