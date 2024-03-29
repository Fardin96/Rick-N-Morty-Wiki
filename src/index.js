/* eslint-disable react/jsx-filename-extension */
/* eslint-disable comma-dangle */
/* eslint-disable quotes */
import React from "react";
import ReactDOM from "react-dom/client";

import { applyMiddleware, combineReducers, createStore } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { CharactersReducer } from "./store/reducer/characterReducer";

import "./assets/Fonts/Font/TTTravels-Black.ttf";
import "./assets/Fonts/Font/TTTravels-BlackItalic.ttf";
import "./assets/Fonts/Font/TTTravels-Bold.ttf";
import "./assets/Fonts/Font/TTTravels-BoldItalic.ttf";
import "./assets/Fonts/Font/TTTravels-DemiBold.ttf";
import "./assets/Fonts/Font/TTTravels-DemiBoldItalic.ttf";
import "./assets/Fonts/Font/TTTravels-ExtraBold.ttf";
import "./assets/Fonts/Font/TTTravels-ExtraBoldItalic.ttf";
import "./assets/Fonts/Font/TTTravels-ExtraLight.ttf";
import "./assets/Fonts/Font/TTTravels-ExtraLightItalic.ttf";
import "./assets/Fonts/Font/TTTravels-Italic.ttf";
import "./assets/Fonts/Font/TTTravels-Light.ttf";
import "./assets/Fonts/Font/TTTravels-LightItalic.ttf";
import "./assets/Fonts/Font/TTTravels-Medium.ttf";
import "./assets/Fonts/Font/TTTravels-MediumItalic.ttf";
import "./assets/Fonts/Font/TTTravels-Regular.ttf";
import "./assets/Fonts/Font/TTTravels-Thin.ttf";
import "./assets/Fonts/Font/TTTravels-ThinItalic.ttf";
import "./assets/Fonts/Font/Poppins-Medium.ttf";

// import {CharactersReducer } from './'

const rootReducer = combineReducers({ characters: CharactersReducer });
const store = createStore(rootReducer, applyMiddleware(thunk));

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
