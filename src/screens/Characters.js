/* eslint-disable react/button-has-type */
/* eslint-disable quotes */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-filename-extension */
import React, { useEffect, useState } from "react";

import "../App.css";
import Card from "../components/Cards/Card";
import Pagination from "../components/Pagination/Pagination";
import NavigationButtons from "../components/NavigationButtons";

function Characters() {
  const [page, setPage] = useState(1);
  const [apiData, setApiData] = useState([]);

  const api = `https://rickandmortyapi.com/api/character/?page=${page}`;

  useEffect(() => {
    (async () => {
      const res = await fetch(api).then((data) => data.json());
      await setApiData(res);
      // console.log("this is begotten form api: ", res);
      // this useEffect is rendered twice
    })();
  }, [api]);

  return (
    <div className="App nav-padding cast-bg-image">
      {/* {console.log("first")} */}
      {/* this is rendered twice */}
      <div className="cast-root">
        <div>
          <div className="cast-nav-btn travels-demi-bold text-blue">
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
