/* eslint-disable react/jsx-filename-extension */
/* eslint-disable quotes */
import React from "react";

import BUBBLE from "../assets/images/bubble.png";
import PORTAL from "../assets/images/portal.png";
import GUN from "../assets/images/Gun.png";
import PILL from "../assets/images/pill.png";
import Size from "../assets/constants/Size";

function HeaderText() {
  const styles = {
    bubble: {
      height: Size.bubble,
      width: Size.bubble,
      margin: 0,
      position: "absolute",
      left: -140,
      top: -110,
    },
    pill: {
      height: Size.pill_width,
      width: Size.pill_height,
      position: "absolute",
      // top: 0,
      right: 120,
    },
    portal: {
      height: Size.portal_height,
      width: Size.portal_width,
    },
    gun: {
      height: Size.gun_height,
      width: Size.gun_width,
      position: "absolute",
      top: 50,
      right: -90,
    },
    text: {
      fontSize: Size.h1,
      // color: "white",
    },
  };

  return (
    <div className="hdt-root">
      <div className="text-gradient">
        <div className="header-one">
          <img className="bubble" src={BUBBLE} alt="BUBBLE-LOGO" />
          <img className="pill" src={PILL} alt="PILL-LOGO" />
          <p className="travels-bold-italic text-white">THE</p>
          <img className="portal" src={PORTAL} alt="PORTAL-LOGO" />
          <p className="travels-bold ">RICK &</p>
          <img className="gun" style={styles.gun} src={GUN} alt="GUN-LOGO" />
        </div>

        <div className="header-two">
          <p className="travels-bold ">MORTY</p>
          <p className="travels-bold-italic text-white">WIKI</p>
        </div>
      </div>
    </div>
  );
}

export default HeaderText;
