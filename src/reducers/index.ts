import { combineReducers } from "redux";
import todoReducer from "./todo";
import visibilityFilterReducer from "./visibilityFilter";

export default combineReducers({
  todo: todoReducer,
  visibilityFilter: visibilityFilterReducer,
});
