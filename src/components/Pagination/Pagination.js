/* eslint-disable react/prop-types */
/* eslint-disable quotes */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-filename-extension */
import React from "react";

function Pagination({ setPage, page, totalPages }) {
  const prevHandler = () => {
    if (page === 1) return;
    setPage((prev) => prev - 1);
  };
  const nextHandler = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <div
      // style={{ border: "1px solid black" }}
      className="container d-flex justify-content-center align-items-center my-5 travels-demi-bold text-white"
    >
      Page
      {/* <button onClick={prevHandler} className="btn nav-btn mx-3">
        Previous
      </button> */}
      <button onClick={prevHandler} className="btn-prev">
        P
      </button>
      {page}
      <button onClick={nextHandler} className="btn nav-btn mx-3">
        Next
      </button>
      <div className="d-flex flex-row">
        of
        <div className="mx-3">{totalPages}</div>
      </div>
    </div>
  );
}

export default Pagination;
