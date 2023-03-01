/* eslint-disable react/jsx-filename-extension */
/* eslint-disable quotes */
import React from "react";

import BUBBLE from "../assets/images/bubble.png";
import PORTAL from "../assets/images/portal.png";
import GUN from "../assets/images/Gun.png";
import PILL from "../assets/images/pill.png";
import Size from "../assets/constants/Size";

function HeaderText() {
  return (
    <div className="hdt-root">
      <div className="text-gradient">
        <div className="header-one">
          <img className="bubble" src={BUBBLE} alt="BUBBLE-LOGO" />
          <img className="pill" src={PILL} alt="PILL-LOGO" />
          <h1 className="header travels-bold-italic text-white">THE</h1>
          <img className="portal" src={PORTAL} alt="PORTAL-LOGO" />
          <h1 className="header travels-bold ">RICK &</h1>
          <img className="gun" src={GUN} alt="GUN-LOGO" />
        </div>

        <div className="header-two">
          <h1 className="header travels-bold ">MORTY</h1>
          <h1 className="header travels-bold-italic text-white">WIKI</h1>
        </div>
      </div>
    </div>
  );
}

export default HeaderText;
