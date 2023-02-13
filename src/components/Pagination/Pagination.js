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
      className="container d-flex justify-content-center align-items-center my-5 travels-demi-bold"
    >
      Page
      <button onClick={prevHandler} className="btn btn-success mx-3">
        Previous
      </button>
      {page}
      <button onClick={nextHandler} className="btn btn-success mx-3">
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
