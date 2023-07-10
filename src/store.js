import { createStore } from "redux";
import { rootReducer } from "./Redux/Reducers";

export const store = createStore(rootReducer);
