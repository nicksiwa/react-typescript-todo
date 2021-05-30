import { getVisibleTodo } from "../../selectors/todo";
import { VisibilityFilter } from "../../constants/todoFilter";

test("should filter all todos", () => {
  const mockData: Todo[] = [
    { id: "1", title: "demo", isCompleted: true },
    { id: "2", title: "demo2", isCompleted: false },
  ];
  const mockTodoState: TodoState = {
    todos: mockData,
    isLoading: false,
    isError: false,
  };
  const mockRootState: RootState = {
    todo: mockTodoState,
    visibilityFilter: VisibilityFilter.SHOW_ALL,
  };

  expect(getVisibleTodo(mockRootState)).toEqual(mockTodoState);
});

test("should filter active todos", () => {
  const mockData: Todo[] = [
    { id: "1", title: "demo", isCompleted: true },
    { id: "2", title: "demo2", isCompleted: false },
  ];
  const mockTodoState: TodoState = {
    todos: mockData,
    isLoading: false,
    isError: false,
  };
  const mockRootState: RootState = {
    todo: mockTodoState,
    visibilityFilter: VisibilityFilter.SHOW_ACTIVE,
  };

  expect(getVisibleTodo(mockRootState)).toEqual({
    todos: [{ id: "2", title: "demo2", isCompleted: false }],
    isLoading: false,
    isError: false,
  } as TodoState);
});

test("should filter completed todos", () => {
  const mockData: Todo[] = [
    { id: "1", title: "demo", isCompleted: true },
    { id: "2", title: "demo2", isCompleted: false },
  ];
  const mockTodoState: TodoState = {
    todos: mockData,
    isLoading: false,
    isError: false,
  };
  const mockRootState: RootState = {
    todo: mockTodoState,
    visibilityFilter: VisibilityFilter.SHOW_COMPLETED,
  };

  expect(getVisibleTodo(mockRootState)).toEqual({
    todos: [{ id: "1", title: "demo", isCompleted: true }],
    isLoading: false,
    isError: false,
  } as TodoState);
});

test("should return initial state when pass invalid filter string", () => {
  const mockData: Todo[] = [
    { id: "1", title: "demo", isCompleted: true },
    { id: "2", title: "demo2", isCompleted: false },
  ];
  const mockTodoState: TodoState = {
    todos: mockData,
    isLoading: false,
    isError: false,
  };
  const mockRootState: RootState = {
    todo: mockTodoState,
    visibilityFilter: "SOME_STRING",
  };

  expect(getVisibleTodo(mockRootState)).toEqual(mockTodoState);
});
