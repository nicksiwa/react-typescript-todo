import { TodoActionType } from "../constants/actionTypes";

export function setVisilityFilter(filter: string) {
  return {
    type: TodoActionType.SET_VISIBILITY_FILTER,
    filter,
  };
}
