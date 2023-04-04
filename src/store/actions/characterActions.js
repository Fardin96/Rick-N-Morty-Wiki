/* eslint-disable no-unused-vars */
/* eslint-disable arrow-body-style */
/* eslint-disable quotes */
export const CHARACTER_LIST_REQUEST = "CHARACTER_LIST_REQUEST";
export const CHARACTER_LIST_SUCCESS = "CHARACTER_LIST_SUCCESS";
export const CHARACTER_LIST_ERR = "CHARACTER_LIST_ERR";

export const fetchCharacterList = (api) => {
  return async (dispatch) => {
    // before the request is sent
    dispatch({ type: CHARACTER_LIST_REQUEST });

    const res = await fetch(api).then((data) => data.json());
    // console.log("what i'm actually getting: ", res);

    // when the data is fetched
    dispatch({ type: CHARACTER_LIST_SUCCESS, payload: res });

    // error!
    // dispatch({ type: CHARACTER_LIST_ERR, payload: res });
  };
};
