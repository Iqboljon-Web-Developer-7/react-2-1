import { combineReducers, legacy_createStore } from "redux";
import cart from "./cart";
import userData from "./form";

const reducers = combineReducers({
  cart,
  userData,
});

export const store = legacy_createStore(reducers);
