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
    firstContainer: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      border: "1px solid green",
    },
    bubble: {
      height: Size.bubble,
      width: Size.bubble,
      border: "1px solid red",
      // margin: Margin.header_image_top,
    },
    portal: {
      height: Size.portal_height,
      width: Size.portal_width,
      border: "1px solid red",
      //   margin: Margin.header_image_top,
    },
    text: {
      fontSize: Size.h1,
      //   border: "1px solid red",
      //   margin: Margin.header_image_top,
    },
    secondContainer: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      border: "1px solid green",
      paddingRight: "120px",
      paddingLeft: "120px",
    },
  };

  return (
    <div>
      <div style={styles.firstContainer}>
        <img src={BUBBLE} alt="BUBBLE-LOGO" style={styles.bubble} />
        <h1 style={styles.text}>THE</h1>
        <img src={PORTAL} alt="PORTAL-LOGO" style={styles.portal} />
        <h1 style={styles.text}>RICK &</h1>
      </div>
      <div style={styles.secondContainer}>
        <h1 style={styles.text}>MORTY</h1>
        <h1 style={styles.text}>WIKI</h1>
      </div>
    </div>
  );
}

export default HeaderText;
