import { setVisilityFilter } from "../../actions/visibilityFilter";
import { TodoActionType } from "../../constants/actionTypes";

test("should create an action for a set visibility", () => {
  const expectedAction = {
    type: TodoActionType.SET_VISIBILITY_FILTER,
    filter: "demo",
  };

  expect(setVisilityFilter("demo")).toEqual(expectedAction);
});
