/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-undef */
/* eslint-disable quotes */
/* eslint-disable react/jsx-filename-extension */
import React, { useEffect, useState } from "react";
import Card from "../components/Cards/Card";
import Pagination from "../components/Pagination/Pagination";

function Episodes() {
  const [page, setPage] = useState(1);
  const [apiData, setApiData] = useState([]);
  const [results, setResults] = useState([]);
  const [totalPages, setTotalPages] = useState(0);

  const api = `https://rickandmortyapi.com/api/episode/${page}`;
  const pageApi = `https://rickandmortyapi.com/api/episode`;

  useEffect(() => {
    (async () => {
      const res = await fetch(api).then((data) => data.json());
      const pageCount = await fetch(pageApi).then((data) => data.json());
      await setApiData(res);
      // console.log("this is the res:", res);
      await setTotalPages(pageCount);

      const characterInfo = await Promise.all(
        res.characters.map((inidividual) =>
          fetch(inidividual).then((result) => result.json())
        )
      );

      // console.log("char info:", characterInfo);

      setResults(characterInfo);
    })();
  }, [api]);

  // console.log("episode konta?", apiData);

  return (
    <div className="App">
      <h1 className="text-center">this is the episodes page!</h1>
      <div
        className="container"
        // style={{ border: "2px solid orange" }}
      >
        <div className="row">
          <div
            className="d-flex flex-column"
            // style={{ border: "1px solid blue" }}
          >
            <div className="my-1">{apiData?.name}</div>
            <div className="my-1">on</div>
            <div className="my-1">{apiData?.air_date}</div>
          </div>
          <Card apiData={{ results }} />
        </div>
        <Pagination
          setPage={setPage}
          page={page}
          totalPages={totalPages.info?.count}
        />
      </div>
    </div>
  );
}

export default Episodes;
