/* eslint-disable react/button-has-type */
/* eslint-disable quotes */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-filename-extension */
import React, { useEffect, useState } from "react";
import "../App.css";
import { useDispatch, useSelector } from "react-redux";

import Card from "../components/Cards/Card";
import Pagination from "../components/Pagination/Pagination";
import NavigationButtons from "../components/NavigationButtons";
import { fetchCharacterList } from "../store/actions/characterActions";

function Characters() {
  const [page, setPage] = useState(1);
  const [apiData, setApiData] = useState([]);
  const dispatch = useDispatch();
  const res = useSelector((state) => state.characters);

  // console.log("data er state ta ki? ", res);

  const api = `https://rickandmortyapi.com/api/character/?page=${page}`;

  useEffect(() => {
    (async () => {
      // const res = await fetch(api).then((data) => data.json());
      // const res =
      await dispatch(fetchCharacterList(api));

      // this useEffect is rendered twice
    })();
  }, [api]);

  // start here
  // setApiData(res.data.length > 0 ? res.data : []);
  // console.log("old response: ", res);

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
          {res.loading ? (
            <p className="cast-nav-btn travels-demi-bold text-blue">
              Loading...
            </p>
          ) : (
            <Card apiData={apiData} />
          )}
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
