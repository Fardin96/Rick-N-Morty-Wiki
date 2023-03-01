/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable quotes */
/* eslint-disable react/jsx-filename-extension */
import React from "react";
import { Link } from "react-router-dom";

import HeaderImage from "./HeaderImage";

function Navbar() {
  return (
    // <nav>
    <div className="nav-bar">
      <Link to="/">
        <HeaderImage />
      </Link>
    </div>
    // </nav>
  );
}

export default Navbar;
