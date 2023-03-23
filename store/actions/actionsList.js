/* eslint-disable no-unused-vars */
/* eslint-disable arrow-body-style */
/* eslint-disable quotes */
export const CHARACTER_LIST_REQUEST = "CHARACTER_LIST_REQUEST";
export const CHARACTER_LIST_SUCCESS = "CHARACTER_LIST_SUCCESS";
export const CHARACTER_LIST_ERR = "CHARACTER_LIST_ERR";

export const fetchCharacterList = () => {
  // const res = await fetch(api).then((data) => data.json);
  return {
    type: CHARACTER_LIST_REQUEST,
    payload: "",
  };
};
