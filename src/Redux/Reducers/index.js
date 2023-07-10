import { combineReducers } from "redux";
import { state } from "./State";
import { userData } from "./UserData";

export const rootReducer = combineReducers({
  state: state,
  userData: userData,
});
