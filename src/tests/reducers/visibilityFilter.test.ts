import visibilityFilterReducer from "../../reducers/visibilityFilter";
import { TodoActionType } from "../../constants/actionTypes";
import { VisibilityFilter } from "../../constants/todoFilter";

test("should return initial state", () => {
  expect(visibilityFilterReducer(undefined, { type: null })).toEqual(
    VisibilityFilter.SHOW_ALL
  );
});

test("should handle SET_VISIBILITY_FILTER for show all", () => {
  const mockAction = {
    type: TodoActionType.SET_VISIBILITY_FILTER,
    filter: VisibilityFilter.SHOW_ALL,
  };
  const expectedState = VisibilityFilter.SHOW_ALL;
  expect(visibilityFilterReducer(undefined, mockAction)).toEqual(expectedState);
});

test("should handle SET_VISIBILITY_FILTER for show active", () => {
  const mockAction = {
    type: TodoActionType.SET_VISIBILITY_FILTER,
    filter: VisibilityFilter.SHOW_ACTIVE,
  };
  const expectedState = VisibilityFilter.SHOW_ACTIVE;
  expect(visibilityFilterReducer(undefined, mockAction)).toEqual(expectedState);
});

test("should handle SET_VISIBILITY_FILTER for show complete", () => {
  const mockAction = {
    type: TodoActionType.SET_VISIBILITY_FILTER,
    filter: VisibilityFilter.SHOW_COMPLETED,
  };
  const expectedState = VisibilityFilter.SHOW_COMPLETED;
  expect(visibilityFilterReducer(undefined, mockAction)).toEqual(expectedState);
});
