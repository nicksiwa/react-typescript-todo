import { AnyAction } from "redux";
import { VisibilityFilter } from "../constants/todoFilter";
import { TodoActionType } from "../constants/actionTypes";

export default function visibilityFilterReducer(
  state = VisibilityFilter.SHOW_ALL,
  action: AnyAction
) {
  switch (action.type) {
    case TodoActionType.SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
}
