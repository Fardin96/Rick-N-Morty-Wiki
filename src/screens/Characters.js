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

function HomePage() {
  const [page, setPage] = useState(1);
  const [apiData, setApiData] = useState([]);

  const api = `https://rickandmortyapi.com/api/character/?page=${page}`;

  useEffect(() => {
    (async () => {
      const res = await fetch(api).then((data) => data.json());
      setApiData(res);
    })();
  }, [api]);

  return (
    <div
      className="App"
      // className="col-"
      // style={{
      // border: "1px solid red",
      // display: "flex",
      // flexDirection: "column",
      // alignItems: "center",
      // justifyContent: "center",
      // }}
    >
      <h1 className="text-center">this is the Characters page!</h1>
      <div
        className="container"
        // style={{ border: "2px solid orange" }}
      >
        <div className="row">
          <Card apiData={apiData} />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
