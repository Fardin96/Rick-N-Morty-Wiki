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
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";

import "../App.css";
import Size from "../assets/constants/Size";
import HeaderText from "../components/HeaderText";

const description =
  "Brilliant but boozy scientist Rick hijacks his fretful \n teenage grandson, Morty, for wild escapades \n in other worlds and alternate dimensions.";

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

  return (
    <div className="home-root home-bg-image">
      <div className="nav-padding">
        <HeaderText />
        <HeaderText />
        <HeaderText />
        <HeaderText />
        <HeaderText />
      </div>
      <div className="description-container">
        <div className="watch-now text-white travels-bold">Watch Now</div>
        <div className="description text-blue travels-demi-bold">
          {description.split("\n").map((i, idx) => (
            <p key={idx}>{i}</p>
          ))}
        </div>
      </div>
      <div className="travels-medium text-white cast-btn-container">
        <div
          style={{
            fontSize: Size.large,
          }}
        >
          Meet The Cast
        </div>
        <button
          className="btn nav-btn"
          onClick={() => {
            navigate("/characters");
          }}
        >
          View all
        </button>
      </div>
      <div className="home-characters">
        <div className="scroll-button-right" onClick={scrollRight}>
          <FaAngleLeft className="scroll-icon" size={25} color="#9dfe00" />
        </div>
        <div className="scroll scroll-view snaps-inline">
          {apiData.map((i, idx) => (
            <div
              key={idx}
              className="scroll-view-card text-white border-gradient"
            >
              <img src={`${i.image}`} alt="character-image" />
              {i.name}
            </div>
          ))}
        </div>
        <div className="scroll-button-left" onClick={scrollLeft}>
          <FaAngleRight className="scroll-icon" size={25} color="#9dfe00" />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
