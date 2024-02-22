import { applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";

import { otpReducer } from "../reducers/userReducer";

const reducers = combineReducers({
  user: otpReducer,
});
const middleWare = [thunk];

const store = configureStore(
  { reducer: reducers },
  composeWithDevTools(applyMiddleware(...middleWare))
);

export default store;
