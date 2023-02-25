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
    },
  };

  return (
    <div className="container" style={{ position: "relative" }}>
      <div
        className="row d-flex flex-row"
        // style={{ border: "1px solid blue" }}
      >
        <div className="d-flex flex-row ">
          <img style={styles.bubble} src={BUBBLE} alt="BUBBLE-LOGO" />
          <img style={styles.pill} src={PILL} alt="PILL-LOGO" />
          <h1 style={styles.text} className="travels-bold-italic text-white">
            THE
          </h1>
          <img style={styles.portal} src={PORTAL} alt="PORTAL-LOGO" />
          <h1 style={styles.text} className="travels-bold text-gradient">
            RICK &
          </h1>
        </div>
        <div className="d-flex flex-row ">
          <h1 style={styles.text} className="travels-bold mx-3 text-gradient">
            MORTY
          </h1>
          <h1
            style={styles.text}
            className="travels-bold-italic mx-3 text-white"
          >
            WIKI
          </h1>
        </div>
      </div>
      <img style={styles.gun} src={GUN} alt="GUN-LOGO" />
    </div>
  );
}

export default HeaderText;
