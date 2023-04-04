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

  const dispatch = useDispatch();
  const response = useSelector((state) => state.characters);

  // console.log("data er state ta ki? ", res);

  const api = `https://rickandmortyapi.com/api/character/?page=${page}`;

  useEffect(() => {
    (async () => {
      // await dispatch(fetchCharacterList(api));

      // rendered x2
      console.log("old response: ", response);
    })();
  }, [api]);

  // rendered x4
  // console.log("loading: ", response);

  return (
    <div className="App nav-padding cast-bg-image">
      {/* {console.log("first")} */}
      {/* rendered x3 */}
      <div className="cast-root">
        <div>
          <div className="cast-nav-btn travels-demi-bold text-blue">
            The Cast
            <NavigationButtons />
          </div>
          {response.loading ? (
            <p className="cast-nav-btn travels-demi-bold text-blue">
              Loading...
            </p>
          ) : (
            <Card apiData={response.data} />
          )}
        </div>

        <Pagination
          setPage={setPage}
          page={page}
          totalPages={response.data.info?.pages}
        />
      </div>
    </div>
  );
}

export default Characters;
