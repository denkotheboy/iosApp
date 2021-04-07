import { createStore } from "redux";
import reducers from "./store/combineReducers";

const store = createStore(reducers);

export default store;
