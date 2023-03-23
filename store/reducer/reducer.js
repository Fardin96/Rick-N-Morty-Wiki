/* eslint-disable no-unused-vars */
/* eslint-disable default-param-last */
/* eslint-disable import/prefer-default-export */
/* eslint-disable quotes */
import {
  CHARACTER_LIST_SUCCESS,
  CHARACTER_LIST_REQUEST,
  CHARACTER_LIST_ERR,
} from "../actions/actionsList";

const initialState = {
  loading: true,
  data: [],
  error: "",
};

export const CharactersReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHARACTER_LIST_REQUEST:
      return 0;

    default:
      return state;
  }
};
