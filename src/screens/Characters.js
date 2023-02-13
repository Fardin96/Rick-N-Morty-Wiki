/* eslint-disable react/button-has-type */
/* eslint-disable quotes */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-filename-extension */
import React, { useEffect, useState } from "react";

import Card from "../components/Cards/Card";
import Pagination from "../components/Pagination/Pagination";
import NavigationButtons from "../components/NavigatioButtons";
import "../App.css";

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
    <div className="App">
      <h1 className="text-center">this is the Characters page!</h1>
      <div
        className="container"
        // style={{ border: "2px solid orange" }}
      >
        <div className="row">
          <NavigationButtons />
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
