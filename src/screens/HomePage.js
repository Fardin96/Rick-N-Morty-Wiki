/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable no-useless-return */
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
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

import "../App.css";
import Size from "../assets/constants/Size";
import HeaderText from "../components/HeaderText";

import { BsPlayCircle } from "react-icons/bs";
import { scrollRight, scrollLeft } from "../funtions/Scroll";

const description =
  "Brilliant but boozy scientist Rick hijacks his fretful \n teenage grandson, Morty, for wild escapades \n in other worlds and alternate dimensions.";

function HomePage() {
  const navigate = useNavigate();
  const [characterData, setCharacterData] = useState([]);
  const [episodeData, setEpisodeData] = useState([]);
  const [locationData, setLocationData] = useState([]);

  const [leftVisible, setLeftVisible] = useState(false);
  const [leftEpiVisible, setLeftEpiVisible] = useState(false);
  const [leftLocVisible, setLeftLocVisible] = useState(false);

  const [rightVisible, setRightVisible] = useState(true);
  const [rightEpiVisible, setRightEpiVisible] = useState(true);
  const [righLocVisible, setRighLocVisible] = useState(true);

  const castApi = `https://rickandmortyapi.com/api/character/1,2,3,4,5,6,7,8`;
  const episodeApi = `https://rickandmortyapi.com/api/episode/1,2,3,4,5,6,7,8`;
  const locationApi = `https://rickandmortyapi.com/api/location/1,2,3,4,5,6,7,8`;

  useEffect(() => {
    (async () => {
      const characterRes = await fetch(castApi).then((data) => data.json());
      await setCharacterData(characterRes);

      const episodeRes = await fetch(episodeApi).then((data) => data.json());
      await setEpisodeData(episodeRes);

      const locationRes = await fetch(locationApi).then((data) => data.json());
      await setLocationData(locationRes);
    })();
  }, []);

  const clickNdrag = () => {
    const slider = document.querySelector(".scroll-view");
    let isDown = false;
    let startX;
    let scrollL;

    slider.addEventListener("mousedown", (e) => {
      isDown = true;
      e.preventDefault();
      startX = e.pageX - slider.offsetLeft;
      scrollL = slider.scrollLeft;
      // console.log(scrollL);
      // whereisTheScroll(scrollL);
    });
    slider.addEventListener("mouseup", () => {
      isDown = false;
    });
    slider.addEventListener("mouseleave", () => {
      isDown = false;
    });
    slider.addEventListener("mousemove", (e) => {
      if (!isDown) return;
      e.preventDefault();
      const X = e.pageX - slider.offsetLeft;
      const walk = X - startX;
      slider.scrollLeft = scrollL - walk;
      if (scrollL === 0) {
        setLeftVisible((prev) => !prev);
      }
      if (scrollL >= 1105) {
        setRightVisible((prev) => !prev);
      }
      if (scrollL > 0) {
        setLeftVisible(true);
      }
      if (scrollL < 1105) {
        setRightVisible(true);
      }
    });
  };

  return (
    <div className="home-root home-bg-image">
      <div className="nav-padding">
        <HeaderText />
      </div>

      <div className="description-container">
        <div className="watch-now text-white travels-bold">
          <BsPlayCircle size={25} />
          Watch Now
        </div>
        <div className="description text-blue travels-demi-bold">
          {description.split("\n").map((i, idx) => (
            <p key={idx}>{i}</p>
          ))}
        </div>
      </div>

      <div className="travels-medium cast-btn-container">
        <div
          style={{
            fontSize: Size.large,
          }}
          className="text-white"
        >
          Meet The Cast
        </div>
        <button
          className="button"
          onClick={() => {
            navigate("/characters");
          }}
        >
          View all
        </button>
      </div>

      {/* FIRST */}
      <div className="home-characters">
        {leftVisible === true ? (
          <div
            className="scroll-button-right"
            onClick={scrollLeft.bind(
              this,
              ".scroll-view",
              setLeftVisible,
              setRightVisible,
              leftVisible,
              rightVisible
            )}
          >
            <FaAngleLeft className="scroll-icon" size={25} color="#9dfe00" />
          </div>
        ) : null}
        <div className="scroll-view snaps-inline" onClick={clickNdrag}>
          {characterData.map((i, idx) => (
            <div
              key={idx}
              className="scroll-view-card text-white border-gradient"
            >
              <img src={`${i.image}`} alt="character-image" />
              <p className="cast-name poppins-medium">{i.name}</p>
            </div>
          ))}
        </div>
        {rightVisible === true ? (
          <div
            className="scroll-button-left"
            onClick={scrollRight.bind(
              this,
              ".scroll-view",
              setRightVisible,
              setLeftVisible,
              rightVisible,
              leftVisible
            )}
          >
            <FaAngleRight className="scroll-icon" size={25} color="#9dfe00" />
          </div>
        ) : null}
      </div>
      {/* FIRST */}

      {/* SECOND */}
      <>
        <div className="travels-medium cast-btn-container">
          <div
            style={{
              fontSize: Size.large,
            }}
            className="text-white"
          >
            Episodes
          </div>
        </div>
        <div className="home-episodes">
          {leftEpiVisible === true ? (
            <div
              className="scroll-button-right"
              onClick={scrollLeft.bind(
                this,
                ".scroll-view-episodes",
                setLeftEpiVisible,
                setRightEpiVisible,
                leftEpiVisible,
                rightEpiVisible
              )}
            >
              <FaAngleLeft className="scroll-icon" size={25} color="#9dfe00" />
            </div>
          ) : null}
          <div
            className="scroll-view-episodes snaps-inline"
            onClick={clickNdrag}
          >
            {episodeData.map((i, idx) => (
              <div key={idx} className="svc-small text-white border-gradient">
                <p className="svc-text-one travels-medium">{i.episode}</p>
                <p className="svc-text-two travels-medium">{i.name}</p>
              </div>
            ))}
          </div>
          {rightEpiVisible === true ? (
            <div
              className="scroll-button-left"
              onClick={scrollRight.bind(
                this,
                ".scroll-view-episodes",
                setRightEpiVisible,
                setLeftEpiVisible,
                rightEpiVisible,
                leftEpiVisible
              )}
            >
              <FaAngleRight className="scroll-icon" size={25} color="#9dfe00" />
            </div>
          ) : null}
        </div>
      </>
      {/* SECOND */}

      {/* THIRD */}
      <>
        <div className="travels-medium cast-btn-container">
          <div
            style={{
              fontSize: Size.large,
            }}
            className="text-white"
          >
            Locations
          </div>
        </div>

        <div className="home-episodes">
          {leftLocVisible === true ? (
            <div
              className="scroll-button-right"
              onClick={scrollLeft.bind(
                this,
                ".scroll-view-locations",
                setLeftLocVisible,
                setRighLocVisible,
                leftLocVisible,
                righLocVisible
              )}
            >
              <FaAngleLeft className="scroll-icon" size={25} color="#9dfe00" />
            </div>
          ) : null}
          <div
            className="scroll-view-locations snaps-inline"
            onClick={clickNdrag}
          >
            {locationData.map((i, idx) => (
              <div key={idx} className="svc-small text-white border-gradient">
                <p className="svc-text-one travels-medium">{`#${i.id}`}</p>
                <p className="svc-text-two travels-medium">{i.name}</p>
              </div>
            ))}
          </div>
          {righLocVisible === true ? (
            <div
              className="scroll-button-left"
              onClick={scrollRight.bind(
                this,
                ".scroll-view-locations",
                setRighLocVisible,
                setLeftLocVisible,
                righLocVisible,
                leftLocVisible
              )}
            >
              <FaAngleRight className="scroll-icon" size={25} color="#9dfe00" />
            </div>
          ) : null}
        </div>
      </>
      {/* THIRD */}
    </div>
  );
}

export default HomePage;
