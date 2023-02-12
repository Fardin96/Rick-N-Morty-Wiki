/* eslint-disable react/jsx-filename-extension */
/* eslint-disable quotes */
import React from "react";

import BUBBLE from "../assets/images/bubble.png";
import PORTAL from "../assets/images/portal.png";
import GUN from "../assets/images/Gun.png";
import PILL from "../assets/images/pill.png";
import Size from "../assets/constants/Size";
import CustomFonts from "../assets/Fonts/Font/CustomFonts";

import TravelsBlackItalic from "../assets/Fonts/Font/TTTravels-BlackItalic.ttf";

// trying out custom fonts
// const fontFace = {
//   fontFamily: "TravelsBlackItalic",
//   src: `url(${TravelsBlackItalic}) format('truetype')`,
//   fontWeight: "normal",
//   fontStyle: "normal",
//   //   fontSize: Size.h1,
//   //   margin: 0,
//   //   padding: 0,
//   //   border: "1px solid red",
//   //   margin: Margin.header_image_top,
// };

function HeaderText() {
  const styles = {
    root: { display: "flex", flexDirection: "row" },
    firstContainer: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      // border: "1px solid green",
    },
    bubble: {
      height: Size.bubble,
      width: Size.bubble,
      margin: 0,
      position: "absolute",
      left: 100,
      top: 100,
      // border: "1px solid red",
      // margin: Margin.header_image_top,
    },
    portal: {
      height: Size.portal_height,
      width: Size.portal_width,
      // border: "1px solid red",
      //   margin: Margin.header_image_top,
    },
    gun: {
      height: Size.gun_height,
      width: Size.gun_width,
      position: "absolute",
      top: 200,
      left: 1050,
      // border: "1px solid red",
      //   margin: Margin.header_image_top,
    },
    text: {
      fontFamily: "TravelsBlackItalic",
      src: `url(${TravelsBlackItalic}) format('truetype')`,
      fontSize: Size.h1,
      fontWeight: "normal",
      fontStyle: "normal",
      margin: 0,
      //   padding: 0,
      //   border: "1px solid red",
      //   margin: Margin.header_image_top,
    },
    secondContainer: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      // border: "1px solid green",
      paddingRight: "40px",
      paddingLeft: "40px",
    },
  };

  return (
    <div style={styles.root}>
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
      <img src={GUN} alt="GUN-LOGO" style={styles.gun} />
    </div>
  );
}

export default HeaderText;
