import todoReducer from "../../reducers/todo";
import { TodoActionType } from "../../constants/actionTypes";

test("should return the initial state", () => {
  const expectedState: TodoState = {
    todos: [],
    isLoading: false,
    isError: false,
  };
  expect(todoReducer(undefined, { type: null })).toEqual(expectedState);
});

test("should handle GET_TODOS_PENDING", () => {
  const expectedState: TodoState = {
    todos: [],
    isLoading: true,
    isError: false,
  };
  expect(
    todoReducer(undefined, { type: TodoActionType.GET_TODOS_PENDING })
  ).toEqual(expectedState);
});

test("should handle GET_TODOS_SUCCESS", () => {
  const mockTodos: Todo[] = [{ id: "1", title: "demo", isCompleted: false }];
  const expectedState: TodoState = {
    todos: mockTodos,
    isLoading: false,
    isError: false,
  };
  expect(
    todoReducer(undefined, {
      type: TodoActionType.GET_TODOS_SUCCESS,
      payload: mockTodos,
    })
  ).toEqual(expectedState);
});

test("should handle GET_TODOS_ERROR", () => {
  const expectedState: TodoState = {
    todos: [],
    isLoading: false,
    isError: true,
  };
  expect(
    todoReducer(undefined, { type: TodoActionType.GET_TODOS_FAIL })
  ).toEqual(expectedState);
});

test("should handle ADD_TODO_PENDING", () => {
  const expectedState: TodoState = {
    todos: [],
    isLoading: false,
    isError: false,
  };
  expect(
    todoReducer(undefined, { type: TodoActionType.ADD_TODO_PENDING })
  ).toEqual(expectedState);
});

test("should handle ADD_TODO_SUCCESS", () => {
  const mockTodo: Todo = { id: "2", title: "demo", isCompleted: false };
  const mockTodos: Todo[] = [{ id: "1", title: "demo", isCompleted: true }];
  const initialState: TodoState = {
    todos: mockTodos,
    isLoading: false,
    isError: false,
  };
  const expectedState: TodoState = {
    todos: [...mockTodos, mockTodo],
    isLoading: false,
    isError: false,
  };
  expect(
    todoReducer(initialState, {
      type: TodoActionType.ADD_TODO_SUCCESS,
      payload: mockTodo,
    })
  ).toEqual(expectedState);
});

test("should handle ADD_TODO_FAIL", () => {
  const expectedState: TodoState = {
    todos: [],
    isLoading: false,
    isError: false,
  };
  expect(
    todoReducer(undefined, { type: TodoActionType.ADD_TODO_FAIL })
  ).toEqual(expectedState);
});

test("should handle TOGGLE_TODO_PENDING", () => {
  const expectedState: TodoState = {
    todos: [],
    isLoading: false,
    isError: false,
  };
  expect(
    todoReducer(undefined, { type: TodoActionType.TOGGLE_TODO_PENDING })
  ).toEqual(expectedState);
});

test("should handle TOGGLE_TODO_SUCCESS", () => {
  const initialState: TodoState = {
    todos: [{ id: "1", title: "demo", isCompleted: false }],
    isLoading: false,
    isError: false,
  };
  const expectedState: TodoState = {
    todos: [{ id: "1", title: "demo", isCompleted: true }],
    isLoading: false,
    isError: false,
  };
  expect(
    todoReducer(initialState, {
      type: TodoActionType.TOGGLE_TODO_SUCCESS,
      payload: { id: "1", title: "demo", isCompleted: true },
    })
  ).toEqual(expectedState);
});

test("should handle TOGGLE_TODO_FAIL", () => {
  const expectedState: TodoState = {
    todos: [],
    isLoading: false,
    isError: false,
  };
  expect(
    todoReducer(undefined, { type: TodoActionType.TOGGLE_TODO_FAIL })
  ).toEqual(expectedState);
});

test("should handle DELETE_TODO_PENDING", () => {
  const expectedState: TodoState = {
    todos: [],
    isLoading: false,
    isError: false,
  };
  expect(
    todoReducer(undefined, { type: TodoActionType.DELETE_TODO_PENDING })
  ).toEqual(expectedState);
});

test("should handle DELETE_TODO_SUCCESS", () => {
  const initialState: TodoState = {
    todos: [{ id: "1", title: "demo", isCompleted: false }],
    isLoading: false,
    isError: false,
  };
  const expectedState: TodoState = {
    todos: [],
    isLoading: false,
    isError: false,
  };
  expect(
    todoReducer(initialState, {
      type: TodoActionType.DELETE_TODO_SUCCESS,
      id: "1",
    })
  ).toEqual(expectedState);
});

test("should handle DELETE_TODO_FAIL", () => {
  const expectedState: TodoState = {
    todos: [],
    isLoading: false,
    isError: false,
  };
  expect(
    todoReducer(undefined, { type: TodoActionType.DELETE_TODO_FAIL })
  ).toEqual(expectedState);
});
