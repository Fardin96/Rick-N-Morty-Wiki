/* eslint-disable react/jsx-filename-extension */
/* eslint-disable quotes */
import React from "react";

import Size, { Margin } from "../assets/constants/Size";

import HEADER_IMAGE from "../assets/images/Logo.png";

function HeaderImage() {
  return (
    <div>
      <img
        src={HEADER_IMAGE}
        alt="HEADER_IMAGE"
        style={{
          height: Size.header_height,
          width: Size.header_width,
          border: "1px solid red",
          margin: Margin.header_image_top,
        }}
      />
    </div>
  );
}

export default HeaderImage;
