import { combineReducers } from "redux";
import employeeReducer from "./employeeReducer";

const rootReduer = combineReducers({
  employeeReducer
});

export default rootReduer;
