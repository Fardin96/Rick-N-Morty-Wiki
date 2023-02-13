/* eslint-disable quotes */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-filename-extension */
import React, { useEffect, useState } from "react";
import HeaderImage from "../components/HeaderImage";
import HeaderText from "../components/HeaderText";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import "../App.css";
import Card from "../components/Cards/Card";
import Pagination from "../components/Pagination/Pagination";

function HomePage() {
  const [page, setPage] = useState(1);
  const [apiData, setApiData] = useState([]);

  const api = `https://rickandmortyapi.com/api/character/?page=${page}`;

  useEffect(() => {
    (async () => {
      const res = await fetch(api).then((data) => data.json());
      await setApiData(res);
    })();
  }, [api]);

  // console.log("total num of pages:", apiData.info.pages);

  return (
    <div className="App">
      <h1 className="text-center">this is the Characters page!</h1>
      <div
        className="container"
        // style={{ border: "2px solid orange" }}
      >
        <div className="row">
          <div
            className="d-flex flex-row flex-row-reverse"
            // style={{ border: "1px solid blue" }}
          >
            <button className="mx-1 my-2 btn btn-primary">Characters</button>
            <button className="mx-1 my-2 btn btn-primary">Locations</button>
            <button className="mx-1 my-2 btn btn-primary">Episodes</button>
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

export default HomePage;
