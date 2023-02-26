/* eslint-disable react/button-has-type */
/* eslint-disable quotes */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-filename-extension */
import React, { useEffect, useState } from "react";

import Card from "../components/Cards/Card";
import Pagination from "../components/Pagination/Pagination";
import NavigationButtons from "../components/NavigationButtons";
import "../App.css";
import Size from "../assets/constants/Size";

function Characters() {
  const [page, setPage] = useState(1);
  const [apiData, setApiData] = useState([]);

  const api = `https://rickandmortyapi.com/api/character/?page=${page}`;

  useEffect(() => {
    (async () => {
      const res = await fetch(api).then((data) => data.json());
      await setApiData(res);
    })();
  }, [api]);

  return (
    <div className="App nav-padding cast-bg-image">
      <div className="container">
        <div className="row">
          <div
            className="d-flex justify-content-between align-items-center travels-demi-bold text-blue"
            style={{
              fontSize: Size.pill_height,
              // border: "2px solid orange"
            }}
          >
            The Cast
            <NavigationButtons />
          </div>
          <Card apiData={apiData} />
        </div>
        <Pagination
          setPage={setPage}
          page={page}
          totalPages={apiData.info?.pages}
        />
      </div>
    </div>
  );
}

export default Characters;
