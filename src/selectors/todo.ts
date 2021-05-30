import { createSelector } from "reselect";
import { VisibilityFilter } from "../constants/todoFilter";

const getVisibilityFilter = (state: VisibilityFilterState) =>
  state.visibilityFilter;
const getTodo = (state: RootState) => state.todo;

export const getVisibleTodo = createSelector(
  [getVisibilityFilter, getTodo],
  (visibilityFilter, todo) => {
    switch (visibilityFilter) {
      case VisibilityFilter.SHOW_ALL:
        return { ...todo };
      case VisibilityFilter.SHOW_COMPLETED:
        return {
          ...todo,
          todos: todo.todos.filter((todo) => todo.isCompleted),
        };
      case VisibilityFilter.SHOW_ACTIVE:
        return {
          ...todo,
          todos: todo.todos.filter((todo) => !todo.isCompleted),
        };
      default:
        return { ...todo };
    }
  }
);
