/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-undef */
/* eslint-disable quotes */
/* eslint-disable react/jsx-filename-extension */
import React, { useEffect, useState } from "react";
import Size from "../assets/constants/Size";
import Card from "../components/Cards/Card";
import NavigationButtons from "../components/NavigationButtons";
import Pagination from "../components/Pagination/Pagination";

function Episodes() {
  const [page, setPage] = useState(1);
  const [apiData, setApiData] = useState([]);
  const [results, setResults] = useState([]); // <- this
  const [totalPages, setTotalPages] = useState(0); // <- this

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
      <div
        className="container"
        // style={{ border: "2px solid orange" }}
      >
        <div className="row">
          <div
            className="d-flex flex-column align-items-center justify-content-between text-white"
            // style={{ border: "1px solid blue" }}
          >
            <div
              className="container d-flex align-items-center justify-content-between travels-demi-bold"
              style={{
                fontSize: Size.medium,
                // border: "1px solid green",
              }}
            >
              <div className="my-1 mx-1">{`Episode: ${apiData?.episode}`}</div>
              <div className="my-1 mx-5">{`"${apiData?.name}"`}</div>
              <div className="my-1 mx-2">{`Air Date: ${apiData?.air_date}`}</div>
            </div>
            <div
              className="container d-flex p-2 flex-row align-items-center justify-content-between travels-demi-bold"
              style={{
                fontSize: Size.pill_height,
                // position: "absolute",
                // top: 0,
                //  border: "1px solid red"
              }}
            >
              The Cast
              <NavigationButtons />
            </div>
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
