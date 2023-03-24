/* eslint-disable no-unused-vars */
/* eslint-disable default-param-last */
/* eslint-disable import/prefer-default-export */
/* eslint-disable quotes */
import {
  CHARACTER_LIST_REQUEST,
  CHARACTER_LIST_SUCCESS,
  CHARACTER_LIST_ERR,
} from "../actions/characterActions";

const initialState = {
  loading: false,
  data: [],
  error: "",
};

export const CharactersReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHARACTER_LIST_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case CHARACTER_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    // console.log("and in here: ", state);

    // case CHARACTER_LIST_ERR:
    //   return {
    //     ...state,
    //     error: action.payload,
    //   };

    default:
      return state;
  }
};
